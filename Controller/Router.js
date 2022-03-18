const express = require('express')
//declear a router
const router = express.Router()
//importing our schema
const familyModel = require('../Model/Model')

router.post ('/', async(req,res)=>{
  try {
    const postData = await familyModel.create({
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      email: req.body.email,
      date: Date.now(),
    })
    res.status(200).json({
      message:'data posted',
      data:postData
    })
  } catch (error) {
    res.status(404).json({
      message:'failed to post data',
      data: error.message,
    })
  }
})



router.get('/', async(req,res)=>{
  try {
    const getAllData = await familyModel.find()
    res.status(200).json({
      message:'all data in the schema',
      data: getAllData
    })
  } catch (error) {
    res.status(404).json({
      message:'failed to get schema',
      data: error.message,
    })
  }
})



module.exports = router;