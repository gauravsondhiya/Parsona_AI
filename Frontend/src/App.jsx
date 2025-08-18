
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router";
import Bot from "./Bot";
import Footer from "./Footer";
const App = () => {
  return (
    <>
       <Header/>
    <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/Bot" element={<Bot/>}/>
    </Routes> 
  {/* <Footer/> */}
 
   
    </>
  );
};

export default App;
