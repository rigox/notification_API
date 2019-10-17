const  mongoose =  require("mongoose")
const schema =  mongoose.Schema


const userSchema  =  new Schema({
  name:{
       type:String,
       required:true
  },
  email:{
       type:String,
       required:true
  },
  password:{
       type:String,
       required:true
  },
  dateCreated:{
       type:String,
       default:new Date().toUTCString()
  }

})


const  user =  mongoose.model('users',userSchema)

module.exports  = User;