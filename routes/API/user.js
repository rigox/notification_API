const express =  require("express")
const router =   express.Router()

const User =  require("../../models/user");
const jwt =  require("jsonwebtoken")
const config =  require("config")
const bcrypt =  require("bcryptjs")
const {check  ,  validationResult}    =  require("express-validator/check")

router.get('/',()=>{

});


module.exports =  router;