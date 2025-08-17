import react, { useState } from "react";
import { NavLink } from "react-router";
import Bot from "./Bot";
import { useLocation } from "react-router-dom";

const Chats = () => {
 
   const location = useLocation();
  const { values } = location.state || {};
 console.log(values)
  let submit = () => {
   console.log("done")
  };

  return (
    <>
      {/* intro */}
      <div className="grid justify-center">
          <h1 className="text-3xl font-bold mt-4">Chatting with {values.aka}</h1>
          <p className="mt-2 text-xl m-auto">{values.tagline}</p>
          <img src={values.image} alt="profile" className="h-[130px] rounded-2xl mt-3 m-auto hover:border hover:border-8 border-red-500" />
      </div>
        {/* input box  */}
     <div className="fixed bottom-4  border-white flex gap-5 w-[100%] justify-center" >
          <input
            className="bg-white/30  backdrop-blur-md h-15 p-4 w-[50%] rounded-2xl"
            type="text"
            placeholder="chat with right here"
            onChange={(e) => setgetdata(e.target.value)}
          />
          <button
            className="border border-yellow-200 h-15 rounded-full w-19"
            onClick={submit}>
            SEND
          </button>
        </div>

      <div className=" border border-white h-auto mt-3 sm:w-[60%] mx-auto rounded-2xl">
       
       
      </div>
    </>
  );
};

export default Chats;
