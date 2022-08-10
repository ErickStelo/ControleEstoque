const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports = {
    executaLogin: function (req, res, next) {
        var payload = req.body;
        console.log('Payload received:', payload);

        var Usuarios = req.orm.model.Usuarios;

        Usuarios.findOne({
            where: {
                usu_username: payload.username,
            }
        }).then(usuario => {
            if (usuario != null) {
                bcrypt.compare(payload.password, usuario.usu_password, function (err, result) {
                    if (!err) {
                        let userData = JSON.parse(JSON.stringify(usuario))
                        let token = jwt.sign(userData, GlobalConstants.jwtSecret, {expiresIn:'1d'})
                        res.status(200).json({
                            accessToken: token
                        })
                    } else {
                        console.log(err);
                        res.status(200).json({
                            error: 'Usuário ou senha inválidos'
                        })
                    }
                });
            } else {
                res.status(200).json({
                    error: 'Usuário ou senha inválidos'
                })
            }
        }).catch(error => {
            logger.error('#Falha ao executar login: ', error);
            return res.status(500).json({
                notifications: [{
                    type: 'error',
                    message: `Ops, algo deu errado ao realizar login! ${error.message}`
                }]
            });
        })
    }
}