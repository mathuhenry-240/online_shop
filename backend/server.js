const app = require('express')()
const http = require('http').Server(app)
const cors = require('cors')
const bodyparser = require('body-parser')


require('dotenv').config()
require('./db')


app.use(cors({origin:true,credentials:true}))
app.use(bodyparser.json())



app.listen(process.env.PORT,console.log(`server is running ${process.env.PORT}`))