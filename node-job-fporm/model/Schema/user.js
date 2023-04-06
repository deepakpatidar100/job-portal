const mongoose = require("mongoose");
//userSchema Tabel all fild is there 
const userSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Mobile: {
        type: String,
        required: true,
    },
    Role: {
        type: String,
        required: true,
    },
    Emp_Company_Address: {
        type: String,
        required: false,
    },
    Emp_Company_Name: {
        type: String,
        required: false,
    },
    Expected_CTC: {
        type: String,
        required: false,
    },
    Current_CTC: {
        type: String,
        required: false,

    },
    Skill: {
        type: String,
        required: false,
    },
    Resume: {
        type: String,
        required: false,
    },
    Qualification: {
        type: String,
        required: false,
    },
    Work_Exprence: {
        type: Number,
        required: false,

    },
    Organisation: {
        type: String,
        required: false,

    },
    Position: {
        type: String,
        required: false,

    },
    Country_id: {
        type: String,
        required: false,

    },
    State_id: {
        type: String,
        required: false,

    },
    Prefer_Work_location: {
        type: String,
        required: false,

    }

});
//export userSchema 
const User = mongoose.model("User", userSchema);

module.exports = User;


//line number 86 we can export in this type also
//module.exports=mongoose.modal(userSchema)   this type we can aslo export 

