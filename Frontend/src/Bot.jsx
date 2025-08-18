import react, { useState } from "react";
import { NavLink } from "react-router";
import { useLocation } from "react-router-dom";

const Bot = () => {
  let [input, setinput] = useState("");
  let [message, setmessages] = useState([]);

   const location = useLocation();
   const { values } = location.state || {};
   
//    datafetching
   
    let datafetch = async ()=>{  
      
    let method ={
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({content: input }),
    }
     let data = await fetch("http://localhost:3000/chat",method)
     let values = await data.json();
      
    let botreply = values.choices[0].message.content
 
   let botname = values.aka
    console.log(botname)
    const botMessage = {
        id: Date.now(),
        text: botreply,
        sender:"bot",
      };
      setmessages((prev) => [...prev, botMessage]);
}


  let submit = () => {
    let userMessage = { id: Date.now(), text: input, sender: "user" };
    setmessages((previous) => [...previous, userMessage]);
    setTimeout(() => {
        datafetch()
    }, 1000);
    setinput("");
  };

  return (
    <>
      {/* Top bar */}
     <div className="grid justify-center">
          <h1 className="text-3xl font-bold mt-4">{values.aka}</h1>
          <p className="mt-2 text-xl m-auto">{values.tagline}</p>
          <img src={values.image} alt="profile" className="h-[130px] rounded-2xl mt-3 m-auto hover:border" />
      </div>

      {/* outputscreen */}
      <div className=" border-amber-300 sm:w-[60%] mx-auto h-auto mb-20 mt-4">
        {message.map((e, i) => (

          <div key={e.id}
            className={`flex mt-4 ${
              e.sender == "user" ? "justify-end" : "justify-start"} `}>
             
            <div className={`px-4 py-2 rounded-2xl max-w-xs text-xl break-words ${
                e.sender == "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-300 text-black rounded-bl-none"
               }`}>
            {e.text}
            </div>
          </div>
        ))}
      </div>
      {/* chat input  */}
      <div className="fixed bottom-2 w-[100%]   border-amber-300 flex gap-5 justify-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && submit()}
          placeholder="Ask Any thing"
          className="border w-[59%] text-xl p-3 h-14 rounded-xl bg-black focus:ring-2 focus:ring-blue-400 "
        />

        <button
          onClick={submit}
          className=" sm:w-[10%] h-14 text-xl bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Bot;
