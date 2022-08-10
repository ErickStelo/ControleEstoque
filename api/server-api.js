const express = require('express');
const app = express();
const cors = require('cors');
var dbConnection = require('./core/Sequelize')
var middleware = require('./core/middleware')
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

async function start() {

        global.GlobalConstants = require('./core/globalConstants');
        global.Helpers = require('./core/helpers');

        var connection = await dbConnection.startConnection()
        var models = await dbConnection.runModels(connection)
        app.use((req, res, next) =>{
            middleware(req, res, next, models, connection)
        })

        await require('./core/chargeRoutes')(app)
}

start()
export default{
    path: '/api',
    handle: app
}