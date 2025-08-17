import react, { useState } from "react";
import { NavLink } from "react-router";
import Bot from "./Bot";
import { useLocation } from "react-router-dom";

const Chats = () => {
 
   const location = useLocation();
  const { values } = location.state || {};
  let [input, setinput] = useState({
    inputchat:""
  });

  let [chat,setchat] = useState([])
   let [output,setoutput] = useState()

 let handler=(e)=>{
let {name, value} = e.target
    setinput((p)=>({
        ...p,
        [name]:value
    }))
}
  let submit = (e) => {
     e.preventDefault()
    console.log(input.inputchat);
    setchat(input.inputchat);
    

 let getdata = async ()=>{
  let response  = await fetch("http://localhost:3000/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
   body: JSON.stringify({content: input }),
});

      const data = await response.json();
      console.log(data.choices[0].message.content);
      setoutput(data.choices[0].message.content);

 }
    // getdata() 
    setinput({inputchat:""})
  };

  return (
    <>
   
      {/* intro */}
      <div className="grid justify-center">
          <h1 className="text-3xl font-bold mt-4">Chatting with {values.aka}</h1>
          <p className="mt-2 text-xl m-auto">{values.tagline}</p>
          <img src={values.image} alt="profile" className="h-[130px] rounded-2xl mt-3 m-auto hover:border hover:border-8 border-red-500" />
      </div>

          {/* chat screen */}
      <div className="  border-gray-400  h-auto mb-28 sm:w-[60%] mx-auto rounded-2xl">
          {/* userchat */}
         
         <div className=" border-gray-400  text-right p-5 w-[60%] ml-[40%] rounded-xl text-2xl">
         <h1>{chat}</h1> 
         <p className="text-sm font-bold text-red-500 mt-2">User</p>
        </div>
        
        
         {/* ai chat */}
        <div className=" border-gray-400  p-5 w-[70%] mt-5 rounded-xl text-2xl">
          <h1>{output} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop </h1> 
         <p className="text-sm font-bold text-red-500 mt-2">{values.aka}</p> 
        
        </div>
       
      </div>



        {/* input box  */}
     <div className="fixed bottom-4 mt-8 border-white flex gap-5 w-[100%] justify-center" >
          <input
            className="bg-white/30  backdrop-blur-md h-15 p-4 w-[50%] rounded-2xl"
            type="text"
            placeholder="chat with right here"
        name="inputchat"
        value ={input.inputchat}
        onChange={handler}
          />
          <button
            className="border border-yellow-200 h-15 rounded-full w-19 bg-white/30  backdrop-blur-md"
            onClick={submit}>
            SEND
          </button>
        </div>

      
    </>
  );
};

export default Chats;
