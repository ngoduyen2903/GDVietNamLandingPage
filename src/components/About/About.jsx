import React, { useContext } from "react";
import "./About.css";
import { Link } from "react-scroll";
import { FcRight } from "react-icons/fc";
import AboutImage3 from '../../img/about-image.png'
import { motion } from "framer-motion";
import { themeContext } from "../../Context";

const About = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <section id="about" className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="image_2">
                            <img src={AboutImage3} alt="" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <motion.div
                            initial={{ rotate: 45 }}
                            whileInView={{ rotate: 0 }}
                            viewport={{ margin: "-20px" }}
                            transition={{ duration: 1 }}>
                            <h1 className="about_taital" style={{ color: darkMode ? "#fff" : "" }}>Hãy để chúng tôi giúp bạn</h1>
                        </motion.div>
                        <p className="about_text">
                            Ngoài phục vụ số hóa và chuyển đổi số trong ngành giáo dục, GD Việt Nam còn cung cấp các dịch vụ, sản phẩm toàn diện trên các lĩnh vực
                        </p>
                        <div className="custom-list-item">
                            <FcRight />&nbsp;
                            <span className="us_text">
                                Tư vấn đưa ra giải pháp số hóa, chuyển đổi số toàn diện
                            </span>
                        </div>
                        <div className="custom-list-item">
                            <FcRight />&nbsp;
                            <span className="us_text">
                                Hỗ trợ các sản phẩm dự án
                            </span>
                        </div>
                        <div className="custom-list-item">
                            <FcRight />&nbsp;
                            <span className="us_text">
                                Sản xuất video, tranh ảnh theo nhu cầu
                            </span>
                        </div>
                        <div className="custom-list-item">
                            <FcRight />&nbsp;
                            <span className="us_text">
                                Cung cấp các dịch vụ công nghệ cho doanh nghiệp và hộ kinh doanh, cá nhân
                            </span>
                        </div>
                        <div className="read_bt_1">
                            <motion.div
                                initial={{ rotate: -45 }}
                                whileInView={{ rotate: 0 }}
                                viewport={{ margin: "-25px" }}
                                transition={{ duration: 1 }}>
                                <Link to="services" smooth={true}>
                                    <button className="btn-hover color-1" style={{ marginTop: 20 }}>Xem thêm</button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
