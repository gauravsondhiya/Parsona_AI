import React, { useState } from 'react'
import { useEffect } from 'react'

const Bot = () => {
let [output,setoutput] = useState()
 let getdata = async ()=>{
   
  let response  = await fetch("http://localhost:3000/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
   body: JSON.stringify({content: "tum koun ho" }),
});

      const data = await response.json();
      console.log(data.choices[0].message.content);
      setoutput(data.choices[0].message.content);

 }
useEffect(()=>{
  // getdata()
},[])
  
}

export default Bot