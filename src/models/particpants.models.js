const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const User=require('./users.models')
const Conversations=require('./conversation.models')


const Participants=db.define('participants',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,

    },
    userID:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:User,
            key:'id'
        }
    },
    conversationId:{
        type:DataTypes.UUID,
        allowNull:false,
        references:{
            model:Conversations,
            key:'id'
        }
    },
    isAdmin:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
})

module.exports=Participants