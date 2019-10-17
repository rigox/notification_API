const express = require("express")
const router =   express.Router();
const notification =  require("../../models/notification")
const jwt =  require('jsonwebtoken')
const auth =  require("../../middleware/auth")
const {check , validationResult} =  require("express-validator/check")


router.post('/create_topic',[
    auth,
    check('name',"name is required").not().isEmpty(),
    check('message','topic is  required').not().isEmpty()
], async (req,res)=>{
    
    const errors =  validationResult(req)
    if(!errors.isEmpty()){
         res.status(400).json({errors:errors.array()})
    }
    try {
        const {name,message}  =  req.body || req.query
        
        topic =  new notification({
              name,
              message
        });

        await topic.save();


    } catch (err) {
         console.log(err)
    }
});


router.post('/subscribe',[
    auth,
    check('name','name is required').not().isEmpty()

], async (req,res)=>{
    const errors  =  validationResult(req)
    if(!errors.isEmpty()){
          res.status(400).json({errors:errors.array()})
    }
//get user id and then save it from the user
 const  {name}   = req.body || req.query
 let topic =  await notification.findOne(name)

 console.log(topic)

 //update topic
 topic.subscribers.unshift(req.user.id)





});


module.exports =   router;