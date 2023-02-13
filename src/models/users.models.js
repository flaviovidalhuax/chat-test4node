const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const Users=db.define('users',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,

    },
    firstNmae:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[2,50]
        },
    
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[2,50]
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[2,50]
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    profileImg:{
        type:DataTypes.STRING,
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        defaultValues:'active'
    },
    phone:{
        type:DataTypes.STRING,
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValues:'active'
    }
})

module.exports=Users