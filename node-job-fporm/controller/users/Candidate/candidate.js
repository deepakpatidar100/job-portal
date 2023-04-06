const appliedSchema = require("../../../model/Schema/appliedjob")
const jobsSchema = require("../../../model/Schema/jobs")
// this api for see candidte job
const candidateJobs = async (req, res) => {


    // console.log("jobupdate", canjobs)
    try {
        // populate mens join to tabel like user and job to tabel 
        const canjobs = await jobsSchema.find().populate("Employer_ID")

        // all data send canjobs
        return res.send(canjobs)

    }
    catch (err) {
        return res.status(400).send({ err, massage: "went wrnog" })

    }


}



//this api for see applied job 
//whenaver we use async we must use try and catch
const jobApplied = async (req, res) => {

    try {
        // we find only candidate applied job which job candidate applied
        const apply = await appliedSchema.find({ Candidate_ID: req.query.Candidate_ID }).populate("Employer_ID").populate("Candidate_ID").populate("Job_ID")
        console.log(apply.length)
        if (apply.length) {
            return res.status(200).send({ massage: "job found", result: apply })
        } else {
            return res.status(400).send({ result: [], massage: "please enter currect field" })
        }

        // return res.send(apply)
    } catch (err) {

        return res.status(400).send({ massage: " somthing went wrong", error: err })
    }
}
//this api for candidate and emplloyer post any job 
const applyJob = async (req, res) => {

    const job = new appliedSchema(req.body)
    // console.log(req.body, "bdy")
    try {
        const aply = { Employer_ID: req.body.Employer_ID, Job_ID: req.body.Job_ID, Candidate_ID: req.body.Candidate_ID }
        // console.log(aply, "all data")

        // both field like empty field and leeding spaace both are not accept 
        if (!req.body.Employer_ID && req.body.Employer_ID == "" && !req.body.Job_ID && req.body.Job_ID == "" && !req.body.Candidate_ID && req.body.Candidate_ID == "") {
            return res.status(400).send({ massage: "fill All data " })
        }

        if (job) {
            await job.save()
            return res.status(200).send({ massage: "success ", result: job })
        }
        else {
            return res.status(400).send({ massage: "all filled require0d" })

        }


    } catch (err) {
        return res.status(400).send({ massage: "something went wrong", err })

    }
}


module.exports = { candidateJobs, jobApplied, applyJob }