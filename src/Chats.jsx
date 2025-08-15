import react from "react";

const Chats = () => {
  return (
    <div>
      {/* header */}
      <div></div>
      {/* chatmodule */}
      <div>
        {/* output screen */}
        <div className="border border-red-500 h-120 w-[60%] m-auto mt-5 rounded-2xl"></div>
        {/* input box */}
        <div className=" border-yellow-200 h-15 w-[60%]  m-auto mt-5 rounded-2xl flex gap-4 ">
            <input className="border border-yellow-200 h-15 w-[90%]  m-auto rounded-2xl p-4"
             type="text" placeholder="chat with right here"/>
            <button className="border border-yellow-200 h-15 w-[10%] rounded-2xl" >SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
