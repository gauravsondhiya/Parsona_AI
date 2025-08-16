import express from 'express'
const app = express()

app.listen(3000);

app.get("/post",(req,res)=>{
      res.send("done")
})

