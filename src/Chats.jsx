import react, { useState } from "react";
import { NavLink } from "react-router";
const Chats = () => {
  let [getdata, setgetdata] = useState();
  let [getdata_ai, setgetdata_ai] = useState();

  let [output, setoutput] = useState();
  let [output_ai, setoutput_ai] = useState();

  let submit = () => {
    console.log(getdata);
    setoutput(getdata);
  };
  let submit_ai = () => {
    console.log(getdata_ai);
    setoutput_ai(getdata_ai);
  };

  return (
    <div>
      {/* header */}
      <div className="border border-yellow-300 p-5 ">
        <NavLink className="border p-3 text-2xl" to="/">
          Back
        </NavLink>
      </div>
      {/* chatmodule */}
      <div>
        {/* output screen */}
        {/* <div className=" border-red-500 h-120 w-[60%] m-auto mt-5 rounded-2xl text-balance
        overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"> */}
        <div className="m-20  mt-3">
          <div className="border border-amber-200 p-5 h-auto w-[60%] ml-[40%] m-auto">
            {output}
          </div>

          {/* chatbot aai  */}
          <div className="border border-amber-200 p-5 h-auto w-[60%] mt-4">
            {output_ai}
          </div>
        </div>

        {/* </div> */}

        {/* input box */}
        <div className="fixed content-center align-middle  border border-red-800 h-15 w-[60%] rounded-2xl flex gap-4 ">
          <input
            className=" border border-yellow-200 h-15 w-[90%] rounded-2xl p-4 text-xl"
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

        {/* ai chat bot */}

        {/* <div className="fixed border-yellow-200 h-15 w-[60%] mt-5 rounded-2xl flex gap-4 ">
          <input
            className="border border-yellow-200 h-15 w-[90%]  m-auto rounded-2xl p-4 text-xl"
            type="text"
            placeholder="chat with right here"
            onChange={(e) => setgetdata_ai(e.target.value)}
          />
          <button
            className="border border-yellow-200 h-15 w-[10%] rounded-2xl"
            onClick={submit_ai}
          >
            SEND
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Chats;
