const jwt = require('jsonwebtoken');

module.exports = (req, res, next, models, connection) => {
    var reqPath = req.path;
    console.log('Running middleware:', reqPath)

    var allowedRoutes = ['/executaLogin'];

    if(allowedRoutes.includes(reqPath)){
        req.orm = {
            model: models,
            sequelize: connection.sequelize
        }
        next();
    }else if(req.headers.hasOwnProperty('access-token')){

        let access_token = req.headers.hasOwnProperty('access-token');
        if(access_token && access_token.length > 0){
            jwt.verify(access_token, GlobalConstants.jwtSecret, function (err, decoded) {
                if(!err){
                    console.log(decoded);
                }else{
                    res.status(400).json({
                        success: false,
                        message: 'Authorization token invalid'
                    })
                }
            });
        }else{
            res.status(400).json({
                success: false,
                message: 'Authorization token invalid'
            })

        }

    }else if(req.headers.hasOwnProperty('authorization')){
        let authorization = req.headers.authorization.split('Token ');
        if(authorization.length > 1 && authorization[1] === GlobalConstants.apiTokenAccess){
            next();
        }else{
            res.status(400).json({
                success: false,
                message: 'Authorization token invalid'
            })
        }
    }else{
        res.status(400).json({
            success: false,
            message: 'Authorization not informed'
        })
    }
}