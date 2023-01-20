import express, {Request, Response} from "express"
import * as mongoose from "mongoose";
import {registerValidator} from "./validations.js";
import {validationResult} from "express-validator";


const app = express()

app.use(express.json())




mongoose.connect('mongodb+srv://dan:1111@cluster1.mhf4uxh.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("BD connected"))
    .catch((err) => console.log("DB error", err))
mongoose.set('strictQuery', true)


app.get('/', (req, res) => {
    return res.send("Hello world!")
})

app.post('/auth/register', registerValidator, (req:Request, res:Response) => {
    try {
        const {email, password} = req.body
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return  res.status(400).json(errors.array())
        }
        return res.json({message: "Success", email, password})
    } catch (e) {
        console.log(e)
    }
})

app.listen(3003, () => console.log("Server worked"))
