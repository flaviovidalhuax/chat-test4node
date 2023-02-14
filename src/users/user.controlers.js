const uuid= require('uuid')

const User=require('../models/users.models')

const findAllUser= async()=>{ 
    const data=await User.findAll({
        attributes:{
            exclude:['password', 'creatAt', 'updatedAt']
        },
        where:{
            status:true
        }

    })   
    return data
}

const findUserById=async(id)=>{
    const data=await User.findOne({
        attributes:{
            exclude:['password','createAt','updatedAt']
        },
        where:{
            id:id
        }
    })
    return data
}
const findUserByEmail= async(email)=>{
    const data=await User.findOne({
        attributes:{
            exclude:['password', 'createAt','updatedAt']
        },
        where:{
            email:email
        }
    })
    return data
}
const creatUser=async(obj)=>{
    const data=await User.create({ 
        id:uuid.v4(),
        firstName:obj.firstName,
        lastName:obj.lastName,
        email:obj.email,
        password:obj.password,
        profileImg:obj.profileImg,
        IsActive:obj.IsActive, 
        phone:obj.phone,
        status:obj.status   
    })
    return data
}
const updateUser= async(id,obj)=>{
    const data=await User.update(obj,{
        where:{
            id:id
        }
    })
    return data
}
const deleteUser= async(id)=>{
    const data=await User.update({
        status:'inactive',
        where:{
            id:id
        }
    })
    return data[0]
}


module.exports={
    findAllUser,
    findUserById,
    findUserByEmail,
    creatUser,
    updateUser,
    deleteUser

}