import "./NavbarStyles.css";

import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const[color, setColor] = useState(false)
    const changeColor = () => {
      if(window.scrollY >= 100){
        setColor(true);
      }
      else{
        setColor(false)
      }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Blog-post</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Authors</Link>
        </li>
        <li>
          <Link to="/about">Posts</Link>
        </li>
        <li>
          <Link to="/contact">Comments</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <div className="hamburger NavbarStyles" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "#fff"}}/>) : (<FaBars size={20} style={{ color: "#fff"}}/>)}
      </div>
    </div>
  );
};

export default Navbar;
