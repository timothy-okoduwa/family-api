// const mongoose = require("mongoose");
// //this defines the rack the uri is connecting to
// const uri = "mongod://localhost/students";
// mongoose.connect(uri, {
//   useNewUrlParser: true,
// });
// mongoose.connection
//   //on is an event litener that listens to changes more like a communication device
//   //req helps us see something to our front end
//   .on("open", (req, res) => {
//     console.log("Database connected");
//   })
//   //.once is an event listener that helps us listen to our data base if we are not connected
//   .once("error", () => {
//     console.log("failed to connect");
//   });

// module.exports = mongoose;



//extanciating mongoose
const mongoose = require('mongoose')
// a variable holding our connection string 
const MONGODB_URI = 'mongodb://localhost:27017'
mongoose.connect( MONGODB_URI)
// takes 2 parameters on and once
mongoose.connection
//let us know if we've connected
.on ('open', (stream) => {
  console.log('Timothy connected!');
})
//checks for error in our database
.once('error',(stream)=>{
  console.log('error connecting to database')
})

module.exports = mongoose;



