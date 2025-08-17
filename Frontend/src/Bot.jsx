import React from 'react'
import { useEffect } from 'react'

const Bot = () => {

 let getdata = async ()=>{
   
  let response  = await fetch("http://localhost:3000/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
   body: JSON.stringify({content: "guddu pandit koun ha" }),
});

      const data = await response.json();
      console.log(data.choices[0].message.content);

 }
useEffect(()=>{
  // getdata()
})

  return (
    <div>Bot</div>
  )
 

}

export default Bot