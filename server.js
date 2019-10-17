//dependencies
const PORT  = process.env.PORT || 5000;
const db  = require("./config/db")
const express = require("express")
const cors =  require("cors")
const App  =  express()
db();
//import route
const notifications =  require("./routes/API/notificaton")

//configure middleware
App.use(express.json(),  express.urlencoded({extended:true}))
App.use(cors())
//configure routes
App.use('/api/sns/',notifications)

App.get('/',(req,res)=>{
   res.send('<h1>Test</h1>')
});



//launch application
App.listen(PORT  ,()=>{
     console.log(`listening on port ${PORT}`)
})