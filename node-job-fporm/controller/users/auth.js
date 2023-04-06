//import from user tabel
const userSchema = require("../../model/Schema/user")
// this api for register user 
const Register = async (req, res) => {
    // console.log(req.body)
    try {
        // we want new schema so we define new keyword
        const user = new userSchema(req.body)
        // console.log(user, "user")
        // this is the mongoDb Qurey for data get with Email and Role
        const users = await userSchema.find({ Email: req.body.Email, Role: req.body.Role })


        if (users.length > 0) {
            // console.log("datacome")
            //this email id register then show msg this is alredy asist 
            return res.status(400).send({ result: [], massage: "alredy axist" })

        } else {
            // when we register data and  save in user database in mongodb 
            await user.save()
            return res.status(200).send({ massage: "Register Success" })
        }
        //if any error in above code then show in catch 
    } catch (err) {
        return res.status(400).send({ massage: "went wrong", error: err })

    }
}


//this api for register user can only access login 
const Login = async (req, res) => {
    // console.log(req.body, "body")
    try {
//we use await beacouse it say wait and find all data in obj 
        const loginUse = await userSchema.findOne({ Email: req.body.Email, Role: req.body.Role })
        // console.log(loginUse, "Login")
        if (loginUse) {
            //any regiter user put currect mail and password then only he access
            if (req.body.Password === loginUse.Password) {
                return res.status(400).send({ massage: "Success", result:[] })


            } else {
                return res.status(200).send({ massage: "wrong Password" })


            }
        }
        else {
            return res.status(200).send({ massage: "not Found" })


        }
    } catch (err) {
        return res.status(400).send({ massage: "something wrong", error: err })

    }
}
//export Register API and Login API
module.exports = { Register, Login }