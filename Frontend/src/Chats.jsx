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
    <div>
      {/* intro */}
      <div className="grid justify-center">
          <h1 className="text-3xl font-bold mt-4">Chatting with {values.aka}</h1>
          <p className="mt-2 text-xl m-auto">{values.tagline}</p>
          <img src={values.image} alt="profile" className="h-[100px] rounded-full mt-3 m-auto hover:border border-red-500" />
      </div>
        
      {/* chatmodule */}

      <div className=" border border-white h-[550px] sm:w-[60%] mx-auto rounded-2xl">
        {/* input box */}
        <div
          className=" border-white h-15 rounded-2xl grid grid-rows-[1fr_auto]"
        >
          <input
            className=" border border-yellow-200 h-15  rounded-2xl p-4 text-x px-4 py-2 rounded-xl"
            type="text"
            placeholder="chat with right here"
            onChange={(e) => setgetdata(e.target.value)}
          />
          <button
            className="border col-span-2 border-yellow-200 h-15 rounded-2xl"
            onClick={submit}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
