import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
      <>
      <div>
        <NavLink>Home</NavLink>
        <NavLink>About </NavLink>
        <NavLink>Resume</NavLink>
        <NavLink>Portfolio</NavLink>
        <NavLink>Service</NavLink>
        <NavLink>Contact</NavLink>
      </div>
      
      </>
    );
};

export default Navbar;