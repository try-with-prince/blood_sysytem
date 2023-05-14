// nodemon index.js(entry point)

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

// CORS is a node.js package for providing a Connect/Express middleware that can be used to
// enable CORS with various options.

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://127.0.0.1:27017/myLoginRegisterDB",
  {
    useNewUrlParser: "true",
    useUnifiedTopology: "true",
  },
  () => {
    console.log("DB connected");
  }
);
// Above are common steps

// user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// model creation
const User = new mongoose.model("User", userSchema);

// Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Suceessfully", user:user });
      }
      else{
        res.send({message : "Password is not matched"})
      }
    } else {
      res.send({message :"User is not registerd"});
    }
  });
});


app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({
        name, //  name : name
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Sucessfully Registered, Please Login now" });
        }
      });
    }
  });
});

app.listen(9802, () => {
  console.log("BE started at port 9802");
});
