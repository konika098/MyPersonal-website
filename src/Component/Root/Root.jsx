// import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
     <>
     {/* <Header/> */}
   
   <Navbar/>
   
     <div className="w-[70%]">
     <Outlet/>
     </div>
     
     
 
     
   
     </>
    );
};

export default Root;