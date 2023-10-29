import { NavLink } from "react-router-dom";
import { AiOutlineGithub,AiOutlineMail,AiOutlineTwitter} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";


const Navbar = () => {
    return (
      <>
      <div className="flex flex-col items-center bg-teal-800 text-white w-[30%]
      min-h-screen text-2xl gap-4 justify-center 
      ">
        <NavLink to="/home">Home</NavLink>
        <NavLink>About </NavLink>
        <NavLink>Resume</NavLink>
        <NavLink>Portfolio</NavLink>
        <NavLink>Service</NavLink>
        <NavLink to='/contact'>Contact</NavLink>

        <hr className="w-3/6 h-1 mt-20 bg-white"/>
        <div className="flex gap-4">
        <a href="https://www.facebook.com/konikakhan.098/"><FaFacebookF/></a>
        <a href="https://github.com/konika098"><AiOutlineGithub/></a>
        <a href=""><AiOutlineMail/></a>
        <a href=""><AiOutlineTwitter/></a>
        </div>

      <div className="mt-20 ">
      <p> © 2023 - Personal website created by konika</p>
      </div>
      </div>

      
      </>
    );
};

export default Navbar;