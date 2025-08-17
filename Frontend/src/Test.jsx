import react, { useState } from 'react'


const Test =()=>{
    let [input,setinput] = useState();
    let [output,setoutput] = useState()


    let datafetch = async ()=>{
        let response = await fetch("http://localhost:3000/chat",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({'chat':input})
        })
    }

    let submit=()=>{
       
        datafetch()
        
        console.log(input)
    }

  return (
    <div>
        <input type="text" onChange={(e)=>setinput(e.target.value)}/>
        <button onClick={submit}>SUbmit</button>
    </div>
  )
}

export default Test;