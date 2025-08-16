// backend/index.js
import express from "express";
import OpenAI from "openai";
import cors from 'cors'
import "dotenv/config"
import { Kaleen } from "./Kaleen.js";
const app = express();
app.use(express.json());
app.use(cors())
const client = new OpenAI({
 
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

app.post("/chat", async (req, res) => {
 try {
   const completion = await client.chat.completions.create({
     model: "gemini-2.0-flash",
      messages: req.body.messages,
    //  messages: [
    //    {
    //      role: 'system',
    //      content: Kaleen  
    //    }, {messages: req.body.messages},
    //   //  { role:'user',content: req.body.messages,},
    //  ],
   });
   console.log(choices[0].message.content);
   res.json(completion);
 } catch (error) {
   console.log(error)
 }
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
