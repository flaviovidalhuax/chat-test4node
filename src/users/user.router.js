const router=require('express').Router()

const UserServices=require('./users.services')

router.route('/users')
    .get(UserServices.getAllUser)
    .post(UserServices.postUser)

module.exports=router