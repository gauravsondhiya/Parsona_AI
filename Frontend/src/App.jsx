import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router";
import Chats from "./Chats";
import Test from "./Test";
import Bot from "./Bot";
import Footer from "./Footer";
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
