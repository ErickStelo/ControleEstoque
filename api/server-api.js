const express = require('express');
const app = express();
var dbConnection = require('./core/Sequelize')

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

async function start() {
    var connection = await dbConnection.startConnection()
    var models = await dbConnection.runModels(connection)
    console.log('==============',models);
}

app.get('/pessoa')
start()
export default{
    path: '/api',
    handle: app
}