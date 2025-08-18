import react from "react";
import { NavLink } from "react-router";
function Header() {
  return (
    <div className="flex justify-around p-5 rounded-2xl gap-4 m-auto border border-blue-300">
      <div className="">
        <NavLink to="/">
        <h1 className="text-2xl font-bold">Mirzapur Persona Based AI Chatbot</h1>
        </NavLink>
      </div>
      <div>
        <h1 className="text-3xl">Github</h1>
      </div>
    </div>
  );
}
export default Header;
