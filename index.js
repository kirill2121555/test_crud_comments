const express = require('express')
const router=require('./router/router')

//const { config } = require('dotenv')
require('dotenv').config()

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/',router)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()