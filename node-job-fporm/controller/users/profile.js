//we import user tabel in model 
const userSchema = require("../../model/Schema/user")

// this api for update profile 
const updateProfile = async (req, res) => {



    const userObj = { Email: req.body.Email, Role: req.body.Role }
    try {
        //validation is not use mail id fleid and empty value then throw error 
        if (!req.body.Email || req.body.Email.trim() == "") {
            return res.status(400).send({ massage: "Email Required" })
        }
        if (!req.body.Role || req.body.Role.trim() == "") {
            return res.status(400).send({ massage: "Role Required" })
        }
        //delete email role password  hide 
        delete req.body.Email
        delete req.body.Role
        delete req.body.Password
        // console.log(req.body, "delete")
        const proupdate = await userSchema.findOneAndUpdate(userObj, req.body)
        // console.log(proupdate, "update")
        if (proupdate) {
            return res.status(200).send({ massage: " data updated success" })
        }
        else {
            return res.status(400).send({ massage: "data not update" })

        }

    } catch (err) {
        return res.status(500).send({ massage: "something went wrong", error: err })

    }


}
//export  updatePrfile
module.exports = { updateProfile }