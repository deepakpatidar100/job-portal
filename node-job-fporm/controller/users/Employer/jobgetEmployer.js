// we import jobs  tabel we send data in job tabel
const jobsSchema = require("../../../model/Schema/jobs")
// employee get all job 
const getemployerJob = async (req, res) => {
    try {
        const getJob = await jobsSchema.find({ Employer_ID: req.body.Employer_ID })
        if (getJob && getJob.length) {
            return res.status(200).send({ getJob, })
        }
        else {
            return res.status(400).send({ massage: "No Job Posted" })
        }

    } catch (err) {
        return res.status(400).send({ massage: "something went wrong", err })

    }
}



module.exports = { getemployerJob }