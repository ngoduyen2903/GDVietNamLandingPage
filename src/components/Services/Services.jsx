import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Services.css";
import { AiFillAndroid } from "react-icons/ai";
import { MdAddReaction } from "react-icons/md";
import { DiJavascript } from "react-icons/di";
import { SiCakephp } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiReactos } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="container service-title">
            <h3 style={{ color: darkMode ? "#fff" : "" }}>DỊCH VỤ</h3>
            <p style={{ color: darkMode ? "#fff" : "" }}>Các sản phẩm cũng như dịch vụ GD Việt Nam</p>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-item d-flex flex-column justify-content-center text-center">
              <motion.div
                initial={{ rotate: 180 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "45px" }}
                transition={{ duration: 1 }}>
                <div className="service-icon">
                  <AiFillAndroid style={{ fontSize: 45 }} />
                </div>
              </motion.div>
              <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF" : "" }}>Phân tích dữ liệu</h5>
              <p style={{ color: darkMode ? "#1E90FF" : "" }}>130+ sản phẩm</p>
              <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item d-flex flex-column justify-content-center text-center">
              <motion.div
                initial={{ rotate: 180 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "45px" }}
                transition={{ duration: 1 }}>
                <div className="service-icon">
                  <SiReactos style={{ fontSize: 45 }} />
                </div>
              </motion.div>
              <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF" : "" }}>Thiết bị công nghệ</h5>
              <p style={{ color: darkMode ? "#1E90FF" : "" }}>105 sản phẩm</p>
              <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item d-flex flex-column justify-content-center text-center">
              <motion.div
                initial={{ rotate: 180 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "45px" }}
                transition={{ duration: 1 }}>
                <div className="service-icon">
                  <FaBootstrap style={{ fontSize: 45 }} />
                </div>
              </motion.div>
              <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF" : "" }}>Hạ tầng mạng</h5>
              <p style={{ color: darkMode ? "#1E90FF" : "" }}>80+ sản phẩm</p>
              <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item d-flex flex-column justify-content-center text-center">
              <motion.div
                initial={{ rotate: 180 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "45px" }}
                transition={{ duration: 1 }}>
                <div className="service-icon">
                  <SiCakephp style={{ fontSize: 45 }} />
                </div>
              </motion.div>
              <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF" : "" }}>Phần mềm</h5>
              <p style={{ color: darkMode ? "#1E90FF" : "" }}>130+ sản phẩm</p>
              <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item d-flex flex-column justify-content-center text-center">
              <motion.div
                initial={{ rotate: 180 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "45px" }}
                transition={{ duration: 1 }}>
                <div className="service-icon">
                  <DiJavascript style={{ fontSize: 45 }} />
                </div>
              </motion.div>
              <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF" : "" }}>Marketing</h5>
              <p style={{ color: darkMode ? "#1E90FF" : "" }}>130+ sản phẩm</p>
              <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-item d-flex flex-column justify-content-center text-center">
              <motion.div
                initial={{ rotate: 180 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "45px" }}
                transition={{ duration: 1 }}>
                <div className="service-icon">
                  <MdAddReaction style={{ fontSize: 45 }} />
                </div>
              </motion.div>
              <h5 className="mb-3" style={{ color: darkMode ? "#1E90FF" : "" }}>Sản xuất video</h5>
              <p style={{ color: darkMode ? "#1E90FF" : "" }}>130+ sản phẩm</p>
              <Link to="mile" smooth={true} className="btn px-3 mt-auto mx-auto">Xem thêm</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
