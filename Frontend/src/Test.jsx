import react, { useState } from "react";

const Test = () => {
  let [input, setinput] = useState({
    inputchat:""
  });
  let [output, setoutput] = useState();


  let handler =(e)=>{
    let {name, value} = e.target
    setinput((p)=>({
        ...p,
        [name]:value
    }))
  }
  let submit = () => {
    console.log(input.inputchat);
    setinput({inputchat:" "})
  };

  return (
    <div className="flex gap-5">
      <input
        type="text"
        className="border border-amber-300"
        name="inputchat"
        value ={input.inputchat}
        onChange={handler}
      />
      <button className="border border-amber-300" onClick={submit}>
        SUbmit
      </button>
    </div>
  );
};

export default Test;
