import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import MainLogo from '../../img/logo.png'

const Navbar = () => {
  return (
    <header className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="" smooth={true} className="logo d-flex align-items-center"><img src={MainLogo} alt="logo" /></Link>
        <nav className="navbar">
          <ul>
            <li><Link to="introduce" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Trang chủ</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Giới thiệu</Link></li>
            <li><Link activeClass="active" to="services" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Dịch vụ</Link></li>
            <li><Link activeClass="active" to="mile" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Cột mốc</Link></li>
            <li><Link activeClass="active" to="team" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Đội ngũ</Link></li>
            <li><Link activeClass="active" to="solution" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Giải pháp</Link></li>
            <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">Liên hệ</Link></li>
          </ul>&emsp;
          <Toggle className="nav-link mobile-nav-toggle" />
        </nav>
      </div>
    </header >
  );
};

export default Navbar;
