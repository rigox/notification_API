const mongoose = require("mongoose");
const Schema  =  mongoose.Schema()

const topicSchema  =  new Schema({
name:{
      type:String,
      required: true
},
topic:{
      type:String,
      required:true
}
,
subscribers:[{
     user:{
           type:Schema.Types.ObjectId,
           ref:'users'
     }
}]

})

const topic  =  mongoose.model('topics',topicSchema)

module.exports =   topic;