const express = require("express");
require("./db/con");
const student = require("./models/students");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("Hello From the other Side By 1st Page");

// })
//create a new students
app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new student(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((e) => {
      console.log(e);
    });
});
app.listen(port, () => {
  console.log(`conection is setup at ${port}`);
});
