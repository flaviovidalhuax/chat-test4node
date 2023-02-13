const {DataTypes}=require('sequelize')
const db=require('../utils/database')

const Participants=require('./particpants.models')

const Messages=db.define('messages',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
    },
    content:{
        type:DataTypes.STRING,
        alowNull:false,
        
    },
    participantId:{
        type:DataTypes.UUID,
        alowNull:false,
        references:{
            model: Participants,
            key:'id'
        }

    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValues:true
    }
})
module.exports=Messages