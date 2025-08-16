import react, { useState } from "react";
import { NavLink } from "react-router";
import Bot from "./Bot";

const Chats = () => {
  let [getdata, setgetdata] = useState();
  let [getdata_ai, setgetdata_ai] = useState();

  let [output, setoutput] = useState();
  let [output_ai, setoutput_ai] = useState();

  let submit = () => {
   
   console.log("done")
  };
  
  

  return (
    <div>
      {/* header */}
      <div className="border border-yellow-300 p-5 ">
        <NavLink className="border p-3 text-2xl" to="/">
          Back
        </NavLink>
      </div>
      <Bot/>
      {/* chatmodule */}

      <div className=" border border-white h-[550px] m-9 rounded-2xl">
        {/* input box */}
        <div
          className=" border-white h-15 rounded-2xl flex gap-5 
        justify-center mt-[480px]"
        >
          <input
            className=" border border-yellow-200 h-15 w-[60%] rounded-2xl p-4 text-xl"
            type="text"
            placeholder="chat with right here"
            onChange={(e) => setgetdata(e.target.value)}
          />
          <button
            className="border border-yellow-200 h-15 w-[10%] rounded-2xl"
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
