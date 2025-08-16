import React from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Chats from "./Chats";
const App = () => {
  return (
    <>
       <Header/>
    <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/chats" element={ <Chats/>}/>
    </Routes>
    </>
  );
};

export default App;
