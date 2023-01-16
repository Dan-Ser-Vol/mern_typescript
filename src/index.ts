import express from "express"
import * as mongoose from "mongoose";
const app = express()


mongoose.connect('mongodb+srv://dan:1111@cluster1.mhf4uxh.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log("BD connected"))
    .catch((err) => console.log("DB error", err))
mongoose.set('strictQuery', true)



app.use('/', (req, res) => {
    res.send("Hello world!")
})

app.use('/auth', (req, res) => {
    res.send("Hello user!")
})

app.listen(3003, () => console.log("Server worked"))
