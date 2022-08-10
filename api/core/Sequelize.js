const { Sequelize } = require('sequelize');
const dbConfig = require('./database')
const sequelize = new Sequelize(dbConfig);
const path = require('path');
const fs = require('fs');
const pathToModules = path.join(__dirname, '../modules')

module.exports = {
    startConnection: function () {
        return new Promise((resolve, reject) => {
            sequelize.authenticate().then(connection => {
                console.log('Successful to connect in DB');
                resolve({
                    sequelize: sequelize,
                    sequelizeInstance: Sequelize
                })
            }).catch(error => {
                console.log(error);
            })
        })
    },

    stopConnection: function (connection) {
        return new Promise((resolve, reject) => {
            connection.close().then(r => {
                console.log('Connection with DB has be closed')
            }).catch(error => {
                console.error('Failed to close connection with DB')
            })
        })
    },

    runModels: function () {
        return new Promise((resolve, reject) => {
            var models = {}
            // Define as models
            fs.readdirSync(pathToModules).forEach(module => {
                let modelsModulePath = path.join(pathToModules, module, 'models')
                if (fs.existsSync(modelsModulePath)) {
                    fs.readdirSync(modelsModulePath).forEach(modelFile => {
                        if (modelFile.endsWith('-model.js')) {
                            let fullModelPath = path.join(modelsModulePath, modelFile);
                            let modelInstance = require(fullModelPath);
                            let modelDefined = modelInstance.define(sequelize, Sequelize.DataTypes);
                            models[modelDefined.name] = modelDefined;
                        }
                    })
                }
            })

            // Define as associacoes
            fs.readdirSync(pathToModules).forEach(module => {
                let modelsModulePath = path.join(pathToModules, module, 'models')
                if (fs.existsSync(modelsModulePath)) {
                    fs.readdirSync(modelsModulePath).forEach(modelFile => {
                        if (modelFile.endsWith('-model.js')) {
                            let fullModelPath = path.join(modelsModulePath, modelFile);
                            let modelInstance = require(fullModelPath);
                            modelInstance.associate(models);
                        }
                    })
                }
            })

            resolve(models)
        })
    }
}