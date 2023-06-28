import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import MainLogo from '../../img/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <header className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="" smooth={true} className="logo d-flex align-items-center"><img src={MainLogo} alt="logo" /></Link>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="" smooth={true} className="nav-link">Trang chủ</Link></li>
            <li><Link to="" smooth={true} className="nav-link">Giới thiệu</Link></li>
            <li><Link to="" smooth={true} className="nav-link">Dịch vụ</Link></li>
            <li><Link to="" smooth={true} className="nav-link">Dự án</Link></li>
            <li><Link to="" smooth={true} className="nav-link">Tính năng</Link></li>
            <li><Link to="" smooth={true} className="nav-link">Liên hệ</Link></li>
            <li><Link to="" smooth={true} className="nav-link"><Toggle /></Link></li>
          </ul>
          <GiHamburgerMenu className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header >
  );
};

export default Navbar;
