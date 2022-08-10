const fs = require('fs');
const path = require('path');
module.exports = function(app){
    return new Promise(async resolve => {
        try {
            var modulesFolder = path.join(__dirname, '../modules')
            fs.readdirSync(modulesFolder).forEach(module =>{
                let pathToModule = path.join(modulesFolder, module);
                fs.readdirSync(pathToModule).forEach(moduleFile => {
                    if(moduleFile.endsWith('routes')){
                        let routesFolderModule = path.join(pathToModule, 'routes');
                        fs.readdirSync(routesFolderModule).forEach(routerFile => {
                            if(routerFile.endsWith('-routes.js')){
                                let fullPathToRouterFile = path.join(routesFolderModule, routerFile);
                                let router = require(fullPathToRouterFile)
                                app.use(router)
                            }
                        })
                    }
                })
            })
            resolve()
        } catch (error) {
            throw 'Falha ao carregar rotas:' + error
        }
    })
}