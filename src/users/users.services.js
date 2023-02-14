const userControlers=require('./user.controlers')
const responseHandler=require('../utils/handleResposes')

const getAllUser=(req, res)=>{
    userControlers.findAllUser()
        .then((data)=>{
            responseHandler.success({
                status:200,
                message:'it has gotten all users',
                data:data,
                res,
            })
        })
        .catch((err)=>{
            responseHandler.error({
                message:'something is wrong',
                status:400,
                data:err,
                res
            })
        })
     
}
const getUserById=(req, res)=>{
    const id=req.params.id
    userControlers.findUserById(id)
        .then((data)=>{
            if (data) {
                responseHandler.success({
                    status:200,
                    message:'it´s id found',
                    data:data,
                    res
                })
            }else{
                responseHandler.error({
                    status:404,
                    message:`This ID:${id} dont fount`,
                    res
                    
                })
            }
        })
        .catch((err)=>{
            responseHandler.error({
                status:400,
                data:err,
                message:'somthin wrong whit the user',
                res
            })
        })
}
const getMyUserByEmail=(req, res)=>{
    const email=req.user.email
    userControlers.findUserByEmail(email)
        .then((data)=>{
            if (data) {
                responseHandler.success({
                    status:200,
                    data:data,
                    message:`yours data is found with your email ${email}`,
                    res
                })
            }else{
                responseHandler.error({
                    status:404,
                    data:err,
                    message:`user dont foud by ${email}`
                })
            }
        })
        .catch((err)=>{
            responseHandler.error({
                status:400,
                data:err,
                message:`Something bad wuith user ${email}`
            })
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
        }, err
    })})

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
    getMyUserByEmail,
    postUser,
    patchUser,
    patchMyUser,
    deleteUser
}