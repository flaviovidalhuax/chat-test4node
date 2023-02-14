const router=require('express').Router()

const { get } = require('http')
const UserServices=require('./users.services')

router.route('/users')
    .get(UserServices.getAllUser)
    .get(UserServices.getMyUserByEmail)
    router.route('/users/email')
    .post(UserServices.postUser)
    

router.route('/users/:id')
    .get(UserServices.getUserById)

module.exports=router