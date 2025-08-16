import React from 'react'
import { useEffect } from 'react'

const Bot = () => {

 let getdata = async ()=>{
 
   let data = await fetch("http://localhost:3000/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ messages: [{ role: "user", content: "Hello ji" }] }),
});
   
 }
useEffect(()=>{
  getdata()
})
  return (
    <div>Bot</div>
  )
}

export default Bot