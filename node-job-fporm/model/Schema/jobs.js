
const mongoose = require("mongoose")

Schema = mongoose.Schema

const jobsSchema = new mongoose.Schema({

    Employer_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    job_title: {
        type: String,
        required: true,
    },
    Job_Discription: {
        type: String,
        required: true,
    },
    Vacancy: {
        type: String,
        required: true,
    },
    Experience: {
        type: Number,
        required: true,
    },
    Primary_Skill: {
        type: String,
        required: true,
    },
    Secondary_Skill: {
        type: String,
        required: true,
    },
    Mandatory_Skill: {
        type: String,
        required: true,
    },
    High_Qulificatin: {
        type: String,
        required: true,
    },
    Minimum_CTC: {
        type: Number,
        required: true

    },
    Maximum_CTC: {
        type: Number,
        required: false,

    }

})
const jobs = mongoose.model("jobs", jobsSchema)
module.exports = jobs