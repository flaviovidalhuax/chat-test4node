const userControlers=require('./user.controlers')
const responseHandler=require('../utils/handleResposes')

const getAllUser=(req, res)=>{
    userControlers.findAllUser()
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((err)=>{res.status(400).json({message:err.message})})
        // responseHandler.success({
        //     res,
        //     status:200,
        //     message:'All user'

        // })
        // responseHandler.error({
        //     res,
        //     status:400,
        //     message:'user dont found'
        // })
}
const getUserById=(req, res)=>{
    const id=req.params.id
    userControlers.findUserById(id)
        .then((data)=>{
            if (data) {
                res.status(200).json(data)
            }else{
                res.status(404).json({message:'id wrong'})
            }
        })
        .catch((err)=>{
            res.status(400).json({message:'User dont fount'})
        })
}
const getMyUser=(req, res)=>{
    const id=req.user.id
    userControlers.findUserByEmail(id)
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch((err)=>{
            res.status(404).json({})
        })
}
const postUser=(req, res)=>{
    const {firstName, lastName, email, password, profileImg, isActive, phone, status }=req.body
    userControlers.creatUser({firstName, lastName, email, password, profileImg, isActive, phone, status})
        .then((data)=>{res.status(201).json(data)})
        .catch((err)=>{res.status(400).json({message:err.message, fields:{
            firstName:"string",
            lastName:"string",
            email:"ejemplo@gmail.com",
            password:'string',
            profileImg:'string',
            isActive:'boolean',
            phone:'number',
            status:'active'
        }})})
        // responseHandler.success({
        //     res,
        //     status:200,
        //     message:'creat new user'
        // })
        // responseHandler.error({
        //     res,
        //     status:400,
        //     message:'dont creat user'
        // })
}
const patchUser=(req, res)=>{
    const id=req.params.id
    const {firstName, lastName, email, password, profileImg, isActive, phone, status}=req.body
    userControlers.updateUser(id,{firstName, lastName, email, password, profileImg, isActive, phone, status})
        .then((data)=>{
            if (data) {
                res.status(200).json(data)
            }else{
                res.status(404).json({message:'user dont update'})
            }
        })
        .catch((err)=>{
            res.status(400).json({message:message.err})
        })
}
const patchMyUser=(req, res)=>{
    const is=req.user.id
    const {firstName, lastName, email, password, profileImg, phone}=req.body
    userControlers.updateUser(id,{firstName, lastName, email, password, profileImg, phone})
        .then((data)=>{
            if (data) {
                res.status(200).json(data)
            }else{
                res.status(404).json({message:'User dont chage'})
            }
        })
        .catch((err)=>{
            res.status(400).json({message:message.err})
        })
}
const deleteUser=(req, res)=>{
    const id=req.params.id
    userControlers.deleteUser(id)
        .then((data)=>{
            if (data) {
                res.status(204).json(data)
            }else{
                res.status(404).json({message:'User dont fount'})
            }
        })
        .catch((err)=>{
            res.status(400).json({message:message.err})
        })
}


module.exports={
    getAllUser,
    getUserById,
    getMyUser,
    postUser,
    patchUser,
    patchMyUser,
    deleteUser
}