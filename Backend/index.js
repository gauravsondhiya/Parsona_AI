// backend/index.js
import express from "express";
import OpenAI from "openai";
import cors from 'cors'
import "dotenv/config"
import { Kaleen } from "./Kaleen.js";
import { munna } from "./Munna.js";
import { Guddu } from "./Guddu.js";
const app = express();
app.use(express.json());
app.use(cors())
const client = new OpenAI({
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

app.post("/kaleen", async (req, res) => {
  let message = req.body.content
 try {
   const response  = await client.chat.completions.create({
     model: "gemini-2.0-flash",
    messages: [{  role: 'system',content: Kaleen },
               { role: 'user', content:message }]
   });
     console.log(response.choices[0].message.content);
   res.json(response);

 } catch (error) {
   console.log(error)
 }
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));
