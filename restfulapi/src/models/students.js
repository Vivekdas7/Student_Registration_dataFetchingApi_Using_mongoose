const mongoose = require("mongoose");
const validator = require("validator");
const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    minlength: 3,
  },

  email: {
    type: String,
    require: true,
    unique: [true, "Email id already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },

  phone:{
    type:Number,
    min:10,
   
    unique:true,
  },
  address:{
    type:String,
    required:true,
  }
});

//create a new collection

const Student =new mongoose.model('Student',studentsSchema);

module.exports= Student;
