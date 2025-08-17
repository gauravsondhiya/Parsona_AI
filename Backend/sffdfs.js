import express from 'express'
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cors())
let value;
app.post("/chat",(req,res)=>{
    let data = req.body.chat
    console.log(data)
    value = data
    res.send(data)
})
app.get('/',(req,res)=>{
    res.send("value"+" "+value)
})

app.listen(3000)