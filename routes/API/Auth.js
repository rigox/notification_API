const User  =  require('../../models/user')
const jwt =  require("jsonwebtoken")
const bcrypt =  require("bcryptjs")
const config =  require("config")
const auth   =  require("../../middleware/auth")
const {check  , validationResult}   =  require("express-validator/check")
const express =  require("express")
const router = express.Router()

router.get('/',auth , async (req,res)=>{
     try {
        const user = User.findById(req.user.id).select("-password")
     } catch (err) {
         console.log(err)
     }
});

router.post('/login',[
    check("email","email is required").not().isEmpty(),
    check("password","password is required ").not().isEmpty()
],async (req,res)=>{
    const errors =  validationResult(req)
    if(!errors.isEmpty()){
         return res.status(400).json({errors:errors.array()})

    }

    const {email,password}   =  req.body || req.query
    try {
         let user  =  await User.findOne({email})
         if(!user){
             return res.status(400).json({msg:"invalid credentials"})
         }
         isMatch  =  await   bcrypt.compare(password, user.password)
         if(!isMatch){
                return res.status(400).json({msg:"invalid credentials"})
         }

         const payload  = {
              user:{
                   id:user.id
              }
         }

         jwt.sign(payload,config.get("jwtSecret"),{expiresIn:360000},(err,token)=>{
                if(err){throw err}
                res.json({token})
         });

    } catch (err) {
            console.log(err)
            res.status(500).send("server error")
    }

});


 module.exports =  router;