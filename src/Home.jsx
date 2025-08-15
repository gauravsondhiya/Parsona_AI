import react from "react";
import { NavLink } from "react-router";
const Home = () => {
  return (
    <div className=" border-yellow-500 h-80 mt-2 grid grid-cols-12 gap-5 [&>div]:rounded-2xl m-9 mt-9 ">
      <div className="border border-red-500 col-span-4 p-9 ">
        <div>
          <NavLink to="/chats">
            <h1>Gaurav</h1>
          </NavLink>
        </div>
        <div>
          <p>passoniate about coding and gym </p>
        </div>
        <div></div>
      </div>
      {/* person-2 */}
      <div className="border border-red-500 col-span-4 "></div>
      {/* person-3 */}
      <div className="border border-red-500 col-span-4 "></div>
    </div>
  );
};

export default Home;
