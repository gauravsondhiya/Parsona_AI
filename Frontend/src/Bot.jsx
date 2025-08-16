import React, { useEffect, useState } from 'react'
import { OpenAI } from "openai";
// import "dotenv/config";
const Bot = () => {
  let [input,setinput] = useState();

  const callingapi = async()=>{
  try {
    const client = new OpenAI({
      apiKey : import.meta.env.VITE_OPENAI_API_KEY,
      baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
    });

    const response = await client.chat.completions.create({
    model: "gemini-2.0-flash",
      messages: [
      {
        role: 'system',
        content: 'You are an AI assistant who is Anirudh.'
        
      },
      { role:'user',content: 'Hey gpt, My name is Piyush Garg' },
    ],
  });
   console.log(response.choices[0].message.content);
  } catch (error) {
    console.log(error)
  }
  }
  useEffect(()=>{
    callingapi()
  })

  return (
    <div>Bot</div>
  )
}

export default Bot