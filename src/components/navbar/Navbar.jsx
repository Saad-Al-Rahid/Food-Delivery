import { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/frontend_assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar__menu">
        <li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
      </ul>

      <div className="navbar__right">
        <img src={assets.search_icon} alt="search icon" />
        <div className="navbar__basket_icon">
          <img src={assets.basket_icon} alt="add to card photo" />
          <div className="dot"></div>
        </div>

        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
