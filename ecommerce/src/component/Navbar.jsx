import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogInSharp } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";

export default function NavBar() {
 

  return (
    <>
      <div className="Navbar-div">
        <nav>
          
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contacts">Contact</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/addtocart"> <FaShoppingCart /></NavLink>
          <NavLink to="/login"> <button  className="btn btn-success loginbutton"><IoLogInSharp />Login </button></NavLink>
          <NavLink to="/signup"> <button to="/signup" className="btn btn-danger loginbutton"><SiGnuprivacyguard />SignUp </button></NavLink>
        
        </nav>
      </div>
    </>
  );
}
