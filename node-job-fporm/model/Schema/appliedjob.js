const mongoose = require("mongoose")
// all candidate and employer also  jobs posted intol this tabel 
const appliedSchema = new mongoose.Schema({
    //we dayreclty access emplloyerid and candidate id and job id which job we posted
    Employer_ID: {
        //type object is is generate one uniqe id 
        type: mongoose.Schema.Types.ObjectId,
        //ref "User" we define beacouse employeID in user tabel so we ref user define
        ref: "User",
        required: true,
    },
    Candidate_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    },
    Job_ID: {
        type: mongoose.Schema.Types.ObjectId,
        //jobID is into jobs tabel so that's why we define ref jobs here.....
        ref: "jobs",
        required: true,
    }
},

    //this is define only current time and date when emplloyer job post 
    {
        timestamps: { createdAt: 'created_date', updatedAt: 'updated_date' }
    });



//export appliedSchema 
const applied = mongoose.model("applied", appliedSchema)

module.exports = applied



