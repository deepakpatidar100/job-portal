const jobsSchema = require("../../../model/Schema/jobs")
const appliedSchema = require("../../../model/Schema/appliedjob")

// this api for employer post job 
const employerJobs = async (req, res) => {                              
// new key word is new schema
    const jobs = new jobsSchema(req.body)
    try {

        if (!req.body.Employer_ID || req.body.Employer_ID.trim() == "") {
            return res.status(400).send({ massage: "EmplyerID Requred", })

        }
        if (!req.body.Experience || req.body.Experience.trim() == "") {
            return res.status(400).send({ massage: "Experience must required" })
        }

        await jobs.save()
        res.send(jobs)


    } catch (err) {
        return res.status(500).send({ massage: "went wrong", error: err })

    }

}
//employer aaplied see all jobs
const empApplied = async (req, res) => {

    try {
        // only emplloyer see employer post all job 
        const empApply = await appliedSchema.find({ Employer_ID: req.query.Employer_ID }).populate("Employer_ID").populate("Candidate_ID").populate("Job_ID")

        if (empApply.length) {
            return res.status(200).send({ massage: "job found", result: empApply })
        } else {
            return res.status(400).send({ massage: "enter currect ID" })
        }
    } catch (err) {
        return res.status(400).send({ massage: "something went wrong", error: err })

    }
}



module.exports = { employerJobs, empApplied }