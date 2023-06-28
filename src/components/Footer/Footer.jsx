import React, { useContext } from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import MainLogo from '../../img/logo.png';
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { themeContext } from "../../Context";

const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <footer id="footer" className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <div className="logo d-flex align-items-center">
                <img src={MainLogo} alt="" />
              </div>
              <p>Công ty Cổ phần Giải pháp Công nghệ GD Việt Nam đi đầu trong lĩnh vực số hóa, chuyển đổi số. Chúng tôi chuyên cung cấp giải pháp và các phần mềm theo yêu cầu. Với đội ngũ kĩ thuật chuyên môn cao từ khâu thiết kế đến tư vấn, nghiên cứu, phân tích và tạo ra các sản phẩm tối ưu nhất.</p>
              <div className="social-links mt-3">
                <Link to="">
                  <AiFillTwitterCircle />
                </Link>
                <Link to="">
                  <AiOutlineFacebook />
                </Link>
                <Link to="">
                  <AiFillYoutube />
                </Link>
                <Link to="">
                  <AiOutlineInstagram />
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links"></div>
            <div className="col-lg-2 col-6 footer-links"></div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <p style={{ color: darkMode ? "#066AC9" : "" }}>
                <strong>Phone:</strong> 0799 552 667<br />
                <strong>Email:</strong> info@gdvietnam.com<br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <p>&copy; Copyrights ©2023 GD Việt Nam. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
