import react from "react";
import { NavLink } from "react-router";
import Intro from "../src/assets/Introdata.js";
import Chats from "./Chats.jsx";
const Home = () => {
  return (
    <>
          <div className="text-3xl text-center mt-9 font-bold">
              <h1>Select Who You'd like to Chat💀</h1>
          </div>

      {/* bot list */}
    <div className=" border-yellow-500 h-80 mt-2 grid sm:grid-cols-12 gap-5 m-9 mt-9 ">
      {Intro.map((e,i) => (
        <>
        <div className="border border-red-500 col-span-4 p-9  rounded-2xl ">
          <div key={i} className="flex gap-5  border-red-500 h-[60%]">
            <img src={e.image} alt="logo" className="h-[130px]  rounded-2xl" />
            <div>
              <h1 className="text-2xl">{e.aka}</h1>
              <p className="text-xl font-bold mt-2">{e.tagline}</p>
              <p className="mt-2">{e.sample_phrases}</p>
            </div>
          </div>
          <div className="mt-3 text-xl h-[25%]  border-red-500">{e.style}</div>
          <NavLink to='/chats' state={{ values: e }}>
          <div className="mt-2 h-[15%] text-center text-2xl border  rounded-2xl">
            <button className="">START CHAT </button>
          </div>
          </NavLink>
      
        </div>
         </>
      ))}
    </div>
    </>
  );
};

export default Home;
