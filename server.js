//dependencies
const PORT  = process.env.PORT || 5000;
const express = require("express")
const cors =  require("cors")
const App  =  express()
const notifications =  require("./routes/API/notificaton")

//configure middleware
App.use(express.json(),  express.urlencoded({extended:true}))
App.use(cors())
//configure routes
App.use('/api/sns/',notifications)




//launch application
App.listen(PORT  ,()=>{
     console.log(`listening on port ${PORT}`)
})