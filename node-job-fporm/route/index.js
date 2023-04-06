const router = require('express').Router();
const { Register, Login } = require('../controller/users/auth');
const { updateProfile } = require('../controller/users/profile');
const { employerJobs, empApplied } = require('../controller/users/Employer/Employer');
const { candidateJobs,jobApplied,applyJob } = require('../controller/users/Candidate/candidate');
const { getemployerJob } = require('../controller/users/Employer/jobgetEmployer');






router.route("/Register").post(Register)
router.route("/Login").post(Login)
router.route("/updateProfile").post(updateProfile)
router.route("/employerJobs").post(employerJobs)
router.route("/candidateJobs").get(candidateJobs)
router.route("/getemployerjob").get(getemployerJob)
router.route("/jobApplied").get(jobApplied)
router.route("/empApplied").get(empApplied)
router.route("/applyJob").post(applyJob)

module.exports = router