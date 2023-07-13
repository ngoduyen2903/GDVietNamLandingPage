import React, { useContext, useEffect } from "react";
import { themeContext } from "../../Context";
import "./Services.css";
import { BsDatabaseFillUp } from "react-icons/bs";
import { RiVideoFill } from "react-icons/ri";
import { SiGooglemarketingplatform } from "react-icons/si";
import { SiPaloaltosoftware } from "react-icons/si";
import { AiFillSetting } from "react-icons/ai";
import { RiComputerFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Services = () => {
  const motionVertical = {
    initial: { rotateX: -90 },
    whileInView: { rotateX: 0 },
    viewport: { margin: "0px" },
    transition: { duration: 1 }
  };
  const motionCircle180 = {
    initial: { rotate: 180 },
    whileInView: { rotate: 0 },
    viewport: { margin: "45px" },
    transition: { duration: 1 }
  }

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section id="services" className="services" style={{ backgroundColor: darkMode ? "#222529" : "" }} >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="container service-title">
            <motion.h3 style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
              DỊCH VỤ
            </motion.h3>
            <motion.p style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>
              Các sản phẩm cũng như dịch vụ GD Việt Nam
            </motion.p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <motion.div {...motionVertical}>
              <div className="service-item d-flex flex-column justify-content-center text-center">
                <motion.div {...motionCircle180}>
                  <div className="service-icon">
                    <BsDatabaseFillUp style={{ fontSize: 45 }} />
                  </div>
                </motion.div>
                <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF		" : "" }}>Phân tích dữ liệu</h5>
                <p style={{ color: darkMode ? "#1E90FF" : "" }}>130+ sản phẩm</p>
                <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6">
            <motion.div {...motionVertical}>
              <div className="service-item d-flex flex-column justify-content-center text-center">
                <motion.div {...motionCircle180}>
                  <div className="service-icon"><RiComputerFill style={{ fontSize: 45 }} /></div>
                </motion.div>
                <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF" : "" }}>Thiết bị công nghệ</h5>
                <p style={{ color: darkMode ? "#1E90FF" : "" }}>105 sản phẩm</p>
                <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6">
            <motion.div {...motionVertical}>
              <div className="service-item d-flex flex-column justify-content-center text-center">
                <motion.div {...motionCircle180}>
                  <div className="service-icon"><AiFillSetting style={{ fontSize: 45 }} /></div>
                </motion.div>
                <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF" : "" }}>Hạ tầng mạng</h5>
                <p style={{ color: darkMode ? "#1E90FF" : "" }}>80+ sản phẩm</p>
                <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6">
            <motion.div {...motionVertical}>
              <div className="service-item d-flex flex-column justify-content-center text-center">
                <motion.div {...motionCircle180}>
                  <div className="service-icon"><SiPaloaltosoftware style={{ fontSize: 45 }} /></div>
                </motion.div>
                <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF" : "" }}>Phần mềm</h5>
                <p style={{ color: darkMode ? "#1E90FF" : "" }}>130+ sản phẩm</p>
                <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6">
            <motion.div {...motionVertical}>
              <div className="service-item d-flex flex-column justify-content-center text-center">
                <motion.div {...motionCircle180}>
                  <div className="service-icon"><SiGooglemarketingplatform style={{ fontSize: 45 }} /></div>
                </motion.div>
                <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF" : "" }}>Marketing</h5>
                <p style={{ color: darkMode ? "#1E90FF" : "" }}>130+ sản phẩm</p>
                <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6">
            <motion.div {...motionVertical}>
              <div className="service-item d-flex flex-column justify-content-center text-center">
                <motion.div {...motionCircle180}>
                  <div className="service-icon"><RiVideoFill style={{ fontSize: 45 }} /></div>
                </motion.div>
                <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF" : "" }}>Sản xuất video</h5>
                <p style={{ color: darkMode ? "#1E90FF" : "" }}>130+ sản phẩm</p>
                <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
