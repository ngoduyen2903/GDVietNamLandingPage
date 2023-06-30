import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Team.css";
import { Link } from 'react-scroll';
import ProfileImage1 from '../../img/man.jpg';
import ProfileImage2 from '../../img/woman4.jpg';
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";

const Team = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="container section-title">
            <h3 style={{ color: '#2125B1' }}>ĐỘI NGŨ CHUYÊN NGHIỆP</h3>
            <p>Trẻ trung, năng động, tâm huyết và có trình độ</p>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-4 col-md-6 member" >
            <div className="member-img-container">
              <motion.div
                initial={{ rotate: -90 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}>
                <div className="member-img">
                  <img src={ProfileImage2} className="img-fluid" alt="" />
                  <div className="social">
                    <Link to="" smooth={true}>
                      <FaTwitter />
                    </Link>
                    <Link to="" smooth={true}>
                      <BsFacebook />
                    </Link>
                    <Link to="" smooth={true}>
                      <AiFillInstagram />
                    </Link>
                    <Link to="" smooth={true}>
                      <MdEmail />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="member-info text-center">
              <h4>Nguyễn Ngọc Thảo Linh</h4>
              <span style={{ color: darkMode ? "#2124B1" : "" }}>Trưởng Phòng Thiết Kế Đồ Họa</span>
              <p><RiDoubleQuotesL />Phụ trách sản xuất video, hình ảnh, mô hình 3D<RiDoubleQuotesR /></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 member">
            <div className="member-img-container">
              <motion.div
                initial={{ rotate: -90 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}>
                <div className="member-img">
                  <img src={ProfileImage1} className="img-fluid" alt="" />
                  <div className="social">
                    <Link to="" smooth={true}>
                      <FaTwitter />
                    </Link>
                    <Link to="" smooth={true}>
                      <BsFacebook />
                    </Link>
                    <Link to="" smooth={true}>
                      <AiFillInstagram />
                    </Link>
                    <Link to="" smooth={true}>
                      <MdEmail />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="member-info text-center">
              <h4>Võ Nhựt Linh</h4>
              <span style={{ color: darkMode ? "#2124B1" : "" }}>Trưởng Phòng Phần Cứng</span>
              <p><RiDoubleQuotesL />Phụ trách giải pháp, phần cứng và thiết bị công nghệ<RiDoubleQuotesR /></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 member">
            <div className="member-img-container">
              <motion.div
                initial={{ rotate: -90 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}>
                <div className="member-img">
                  <img src={ProfileImage2} className="img-fluid" alt="" />
                  <div className="social">
                    <Link to="" smooth={true}>
                      <FaTwitter />
                    </Link>
                    <Link to="" smooth={true}>
                      <BsFacebook />
                    </Link>
                    <Link to="" smooth={true}>
                      <AiFillInstagram />
                    </Link>
                    <Link to="" smooth={true}>
                      <MdEmail />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="member-info text-center">
              <h4>Nguyễn Ngọc Mới</h4>
              <span style={{ color: darkMode ? "#2124B1" : "" }}>Trợ Lý Ban Giám Đốc</span>
              <p><RiDoubleQuotesL />Phụ trách giấy phép, bản quyền sản phẩm GD Việt Nam<RiDoubleQuotesR /></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 member">
            <div className="member-img-container">
              <motion.div
                initial={{ rotate: -90 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}>
                <div className="member-img">
                  <img src={ProfileImage1} className="img-fluid" alt="" />
                  <div className="social">
                    <Link to="" smooth={true}>
                      <FaTwitter />
                    </Link>
                    <Link to="" smooth={true}>
                      <BsFacebook />
                    </Link>
                    <Link to="" smooth={true}>
                      <AiFillInstagram />
                    </Link>
                    <Link to="" smooth={true}>
                      <MdEmail />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="member-info text-center">
              <h4>Huỳnh Tấn Dũng</h4>
              <span style={{ color: darkMode ? "#2124B1" : "" }}>Phó Phòng Kỹ Thuật</span>
              <p><RiDoubleQuotesL />Phụ trách giải pháp, phần mềm và thiết bị công nghệ<RiDoubleQuotesR /></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 member" >
            <div className="member-img-container">
              <motion.div
                initial={{ rotate: -90 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}>
                <div className="member-img">
                  <img src={ProfileImage1} className="img-fluid" alt="" />
                  <div className="social">
                    <Link to="" smooth={true}>
                      <FaTwitter />
                    </Link>
                    <Link to="" smooth={true}>
                      <BsFacebook />
                    </Link>
                    <Link to="" smooth={true}>
                      <AiFillInstagram />
                    </Link>
                    <Link to="" smooth={true}>
                      <MdEmail />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="member-info text-center">
              <h4>Lê Duy Lam</h4>
              <span style={{ color: darkMode ? "#2124B1" : "" }}>Trưởng Phòng Phần Mềm</span>
              <p><RiDoubleQuotesL />Phụ trách giải pháp, phần mềm và thiết bị công nghệ<RiDoubleQuotesR /></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 member">
            <div className="member-img-container">
              <motion.div
                initial={{ rotate: -90 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}>
                <div className="member-img">
                  <img src={ProfileImage2} className="img-fluid" alt="" />
                  <div className="social">
                    <Link to="" smooth={true}>
                      <FaTwitter />
                    </Link>
                    <Link to="" smooth={true}>
                      <BsFacebook />
                    </Link>
                    <Link to="" smooth={true}>
                      <AiFillInstagram />
                    </Link>
                    <Link to="" smooth={true}>
                      <MdEmail />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="member-info text-center">
              <h4>Nguyễn Ngọc Thảo Linh</h4>
              <span style={{ color: darkMode ? "#2124B1" : "" }}>Trưởng Phòng Thiết Kế Đồ Họa</span>
              <p><RiDoubleQuotesL />Phụ trách sản xuất video, hình ảnh, mô hình 3D<RiDoubleQuotesR /></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
