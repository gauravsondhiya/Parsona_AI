import react from "react";
import { NavLink } from "react-router";
import Intro from "../src/assets/Introdata.js";
const Home = () => {
  return (
    <>
          <div className="text-3xl text-center mt-5 font-bold">
              <h1>Select Who You'd like to chat with Today 💀</h1>
          </div>

      {/* bot list */}
    <div className=" border-yellow-500 h-80 mt-2 grid grid-cols-12 gap-5 m-9 mt-9 ">
      {Intro.map((e) => (
        <NavLink to="/chats" className="border border-red-500 col-span-4 p-9  rounded-2xl">
          <div className="flex gap-5  border-red-500">
            <img src={e.image} alt="logo" className="h-[130px]  rounded-full" />
            <div>
              <h1 className="text-2xl">{e.aka}</h1>
              <p className="text-xl font-bold mt-2">{e.tagline}</p>
              <p className="mt-2">{e.sample_phrases}</p>
            </div>
          </div>
          <div className="mt-3 text-xl ">{e.style}</div>
        </NavLink>
      ))}
    </div>
    </>
  );
};

export default Home;
