const express = require('express')
const port = 4000
const app = express()
require('./config/db')
//app.use
const routerPath = require('./Controller/Router')
app.use(express.json())
app.get('/',(req,res)=>{
  res.status(200).send('serveris up')
})

app.use('/api',routerPath)

app.listen(port,()=>{
  console.log(`server is up ${port}`)
})