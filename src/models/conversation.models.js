const {DataTypes}=require('sequelize')
const db=require('../utils/database')



const Conversations=db.define('conversation',{
  id:{
    type:DataTypes.UUID,
    primaryKey:true,
  },  
  profileImagen:{
    type:DataTypes.STRING,
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  creatBy:{
    type:DataTypes.UUID,
    allowNull:false,

  },
  isGroup:{
    type:DataTypes.BOOLEAN,
    allowNull:true

  }
})
module.exports= Conversations