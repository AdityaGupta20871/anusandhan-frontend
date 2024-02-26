import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "./Menu.png";
import userImg from "./Replace Image.png";
import "./navbar.scss";



function Navbar() {
  return (
    <>
      <div className="navbar">
      <div className="nav-head">
        <h1>Anusandhan</h1>
        <p>Product by nuroux</p>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <img src={Logo} alt="menu logo"/>
      </div>
      <div className="user-info">
        
        <img src={userImg} alt="user-img" />
        <h3>Hi , Guest </h3>
        <button className="btn-intermediate">Logout</button>
      </div>
      </div>
    </>
  );
}
export default Navbar;
