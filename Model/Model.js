const mongoose = require('mongoose')
const familySchema = mongoose.Schema({
  name:{
    type:String,
    required: true,
  },
  email:{
    type:String,
    required: true,
  },
  age:{
    type:Number,
    required: true,
  },
  gender:{
    type:String,
    required: true,
  },
  date:{
    type:Date,
    default:Date.now()
  }
});

const familyModel = mongoose.model('testFamily',familySchema)
module.exports = familyModel;