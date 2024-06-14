const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const StudentModel = require('./models/student.model');

const app = express();
//transform user data into json object

app.use(express.json())
app.use(cors())

//connect to Database
mongoose.connect("mongodb+srv://william:admin@cluster0.0phyakj.mongodb.net/student-form?retryWrites=true&w=majority&appName=Cluster0");


///app routes
app.post('/login', (req,res)=>{
   const{email, password} = req.body;
   StudentModel.findOne({email: email})
   .then(user => {
     if(user) {
          if(user.password === password) {
            res.json("Successful")
    } else {
        res.json("Incorrect Password")
    }
   } else {
     res.json("User does not exist")
   }
    })
})
app.post('/signup', (req,res)=>{
  StudentModel.create(req.body)
  .then(Student => res.json(Student))
  .catch(err => res.json(err))
})
//Port 
const port = 3000;
app.listen(port, ()=>{
     console.log(`Server is running on port ${port}`);
});
