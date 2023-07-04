import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Team.css";
import { Link } from 'react-scroll';
import MemberImage1 from '../../img/avatar1.jpg'
import MemberImage2 from '../../img/avatar2.jpg'
import MemberImage3 from '../../img/avatar3.jpg'
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";
import Carousel from 'react-bootstrap/Carousel';
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Team = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="container section-title">
            <h3 style={{ color: darkMode ? "#fff" : "" }}>ĐỘI NGŨ CHUYÊN NGHIỆP</h3>
            <p style={{ color: darkMode ? "#fff" : "" }}>Trẻ trung, năng động, tâm huyết và có trình độ</p>
          </div>
        </div>
        <div className="row gy-5">
          <div className="col-lg-4 col-md-6 member" >
            <Carousel data-bs-theme="dark">
              <Carousel.Item interval={5000}>
                <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 4, type: "spring" }}>
                  <div className="member-img-container">
                    <div className="member-img">
                      <img src={MemberImage1} className="img-fluid" alt="" />
                      <div className="social">
                        <Link to="contact" smooth={true}><FaTwitter /></Link>
                        <Link to="contact" smooth={true}><BsFacebook /></Link>
                        <Link to="contact" smooth={true}><AiFillInstagram /></Link>
                        <Link to="contact" smooth={true}><MdEmail /></Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <div className="member-img-container">
                  <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 2, type: "spring" }}>
                    <div className="member-info text-center">
                      <h4>Nguyễn Ngọc Thảo Linh</h4>
                      <span style={{ color: darkMode ? "#00509d" : "" }}><MdOutlineKeyboardDoubleArrowLeft />Trưởng Phòng Thiết Kế Đồ Họa<MdKeyboardDoubleArrowRight /></span>
                      <p><RiDoubleQuotesL />Phụ trách sản xuất video, hình ảnh, mô hình 3D<RiDoubleQuotesR /></p>
                    </div>
                  </motion.div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-4 col-md-6 member" >
            <Carousel>
              <Carousel.Item interval={5000}>
                <div className="member-img-container">
                  <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 3, type: "spring" }}>
                    <div className="member-img">
                      <img src={MemberImage2} className="img-fluid" alt="" />
                      <div className="social">
                        <Link to="contact" smooth={true}><FaTwitter /></Link>
                        <Link to="contact" smooth={true}><BsFacebook /></Link>
                        <Link to="contact" smooth={true}><AiFillInstagram /></Link>
                        <Link to="contact" smooth={true}><MdEmail /></Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <div className="member-img-container">
                  <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 2, type: "spring" }}>
                    <div className="member-info text-center">
                      <h4>Võ Nhựt Linh</h4>
                      <span style={{ color: darkMode ? "#00509d" : "" }}><MdOutlineKeyboardDoubleArrowLeft />Trưởng Phòng Phần Cứng<MdKeyboardDoubleArrowRight /></span>
                      <p><RiDoubleQuotesL />Phụ trách phần cứng, thiết bị công nghệ<RiDoubleQuotesR /></p>
                    </div>
                  </motion.div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-4 col-md-6 member" >
            <Carousel>
              <Carousel.Item interval={4000}>
                <div className="member-img-container">
                  <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 3, type: "spring" }}>
                    <div className="member-img">
                      <img src={MemberImage3} className="img-fluid" alt="" />
                      <div className="social">
                        <Link to="contact" smooth={true}><FaTwitter /></Link>
                        <Link to="contact" smooth={true}><BsFacebook /></Link>
                        <Link to="contact" smooth={true}><AiFillInstagram /></Link>
                        <Link to="contact" smooth={true}><MdEmail /></Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <div className="member-img-container">
                  <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 2, type: "spring" }}>
                    <div className="member-info text-center">
                      <h4>Lê Duy Lam</h4>
                      <span style={{ color: darkMode ? "#00509d" : "" }}><MdOutlineKeyboardDoubleArrowLeft />Trưởng Phòng Phần Mềm<MdKeyboardDoubleArrowRight /></span>
                      <p><RiDoubleQuotesL />Phụ trách phần mềm, thiết bị công nghệ<RiDoubleQuotesR /></p>
                    </div>
                  </motion.div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-4 col-md-6 member" >
            <Carousel>
              <Carousel.Item interval={4000}>
                <div className="member-img-container">
                  <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 3, type: "spring" }}>
                    <div className="member-img">
                      <img src={MemberImage1} className="img-fluid" alt="" />
                      <div className="social">
                        <Link to="contact" smooth={true}><FaTwitter /></Link>
                        <Link to="contact" smooth={true}><BsFacebook /></Link>
                        <Link to="contact" smooth={true}><AiFillInstagram /></Link>
                        <Link to="contact" smooth={true}><MdEmail /></Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <div className="member-img-container">
                  <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 2, type: "spring" }}>
                    <div className="member-info text-center">
                      <h4>Nguyễn Ngọc Mới</h4>
                      <span style={{ color: darkMode ? "#00509d" : "" }}><MdOutlineKeyboardDoubleArrowLeft />Trợ Lý Ban Giám Đốc<MdKeyboardDoubleArrowRight /></span>
                      <p><RiDoubleQuotesL />Phụ trách giấy phép, bản quyền sản phẩm<RiDoubleQuotesR /></p>
                    </div>
                  </motion.div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-4 col-md-6 member" >
            <Carousel>
              <Carousel.Item interval={5000}>
                <div className="member-img-container">
                  <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 3, type: "spring" }}>
                    <div className="member-img">
                      <img src={MemberImage3} className="img-fluid" alt="" />
                      <div className="social">
                        <Link to="contact" smooth={true}><FaTwitter /></Link>
                        <Link to="contact" smooth={true}><BsFacebook /></Link>
                        <Link to="contact" smooth={true}><AiFillInstagram /></Link>
                        <Link to="contact" smooth={true}><MdEmail /></Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <div className="member-img-container">
                  <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 2, type: "spring" }}>
                    <div className="member-info text-center">
                      <h4>Huỳnh Tấn Dũng</h4>
                      <span style={{ color: darkMode ? "#00509d" : "" }}><MdOutlineKeyboardDoubleArrowLeft />Phó Phòng Kỹ Thuật<MdKeyboardDoubleArrowRight /></span>
                      <p><RiDoubleQuotesL />Phụ trách phần mềm, thiết bị công nghệ<RiDoubleQuotesR /></p>
                    </div>
                  </motion.div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-4 col-md-6 member" >
            <Carousel>
              <Carousel.Item interval={4000}>
                <div className="member-img-container">
                  <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 3, type: "spring" }}>
                    <div className="member-img">
                      <img src={MemberImage2} className="img-fluid" alt="" />
                      <div className="social">
                        <Link to="contact" smooth={true}><FaTwitter /></Link>
                        <Link to="contact" smooth={true}><BsFacebook /></Link>
                        <Link to="contact" smooth={true}><AiFillInstagram /></Link>
                        <Link to="contact" smooth={true}><MdEmail /></Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <div className="member-img-container">
                  <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: "-40px" }} transition={{ duration: 2, type: "spring" }}>
                    <div className="member-info text-center">
                      <h4>Nguyễn Ngọc Thảo Linh</h4>
                      <span style={{ color: darkMode ? "#00509d" : "" }}><MdOutlineKeyboardDoubleArrowLeft />Trưởng Phòng Thiết Kế Đồ Họa<MdKeyboardDoubleArrowRight /></span>
                      <p><RiDoubleQuotesL />Phụ trách sản xuất video, hình ảnh, mô hình 3D<RiDoubleQuotesR /></p>
                    </div>
                  </motion.div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
