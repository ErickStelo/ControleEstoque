module.exports = {
    define: function(sequelize, DataTypes){
        var Usuarios = sequelize.define('Usuarios',{
            usu_codigo:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            usu_nome:{
                type: DataTypes.STRING,
                allowNull: false
            },
            usu_email:{
                type: DataTypes.STRING,
                allowNull: false
            },
            usu_username:{
                type: DataTypes.STRING,
                allowNull: false
            },
            usu_password:{
                type: DataTypes.STRING,
                allowNull: false
            },
            usu_admin:{
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
        },{
            freezeTableName: false,
            tableName: 'usuarios',
            schema: 'public'
        });

        return Usuarios
    },

    associate: function(models) {


    }
}