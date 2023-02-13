const uuid= require('uuid')

const User=require('../models/users.models')

const findAllUser= async()=>{ 
    const data=await User.findAll({
        atributes:{
            exclud:['password', 'creatAt', 'updatedAt']
        },
        where:{
            status:'active'
        }
    })   
    return data
}

const findUserById=async(id)=>{
    const data=await User.findOne({
        atributes:{
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
        atributes:{
            exclude:['password', 'createAt','updatedAt']
        },
        where:{
            email:email
        }
    })
    return data
}
const creatUser=async(obj)=>{
    const data=await User.creat({
        id:uuid.v4(),
        firstName:obj.firstName,
        lastNmae:obj.lastName,
        email:obj.email,
        password:obj.password,
        profileImage:obj.profileImage,
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