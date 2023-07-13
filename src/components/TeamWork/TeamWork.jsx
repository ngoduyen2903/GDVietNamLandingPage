import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./TeamWork.css";
import MemberImage1 from '../../img/avatar1.jpg'
import MemberImage2 from '../../img/avatar2.jpg'
import MemberImage3 from '../../img/avatar3.jpg'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


const TeamWork = () => {
    const motionHorizontal = {
        initial: { rotateY: -90 },
        whileInView: { rotateY: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 1 }
    };
    const motionVertical = {
        initial: { rotateX: -90 },
        whileInView: { rotateX: 0 },
        viewport: { margin: "0px" },
        transition: { duration: 1 }
    };
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <section className="team" id="team">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="container team-title">
                        <motion.h3 style={{ color: darkMode ? "#fff" : "" }} {...motionHorizontal}>
                            ĐỘI NGŨ CHUYÊN NGHIỆP
                        </motion.h3>
                        <motion.p style={{ color: darkMode ? "#fff" : "" }} {...motionHorizontal}>
                            Trẻ trung, năng động, tâm huyết và có trình độ
                        </motion.p>
                    </div>
                </div>
                <div className="row">
                    <Carousel responsive={responsive} infinite autoPlay>
                        <div className="col-md-12">
                            <motion.div className="team-member" {...motionVertical}>
                                <div className="main-content">
                                    <img src={MemberImage1} alt="" />
                                    <h4>Nguyễn Ngọc Thảo Linh</h4>
                                    <span className="category"><MdOutlineKeyboardDoubleArrowLeft />Trưởng Phòng Thiết Kế Đồ Họa<MdKeyboardDoubleArrowRight /></span>
                                    <p className="work"><RiDoubleQuotesL />Phụ trách sản xuất video, hình ảnh, mô hình 3D&nbsp;<RiDoubleQuotesR /></p>
                                    <ul className="social-icons">
                                        <li><Link to=""><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-12">
                            <motion.div className="team-member" {...motionVertical}>
                                <div className="main-content">
                                    <img src={MemberImage1} alt="" />
                                    <h4>Nguyễn Ngọc Mới</h4>
                                    <span className="category"><MdOutlineKeyboardDoubleArrowLeft />Trợ Lý Ban Giám Đốc<MdKeyboardDoubleArrowRight /></span>
                                    <p className="work"><RiDoubleQuotesL />Phụ trách chung, giấy phép, bản quyền sản phẩm GD Việt Nam&nbsp;<RiDoubleQuotesR /></p>
                                    <ul className="social-icons">
                                        <li><Link to=""><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-12">
                            <motion.div className="team-member" {...motionVertical}>
                                <div className="main-content">
                                    <img src={MemberImage3} alt="" />
                                    <h4>Lê Duy Lam</h4>
                                    <span className="category"><MdOutlineKeyboardDoubleArrowLeft />Trưởng Phòng Kỹ Thuật Phần Mềm<MdKeyboardDoubleArrowRight /></span>
                                    <p className="work"><RiDoubleQuotesL />Phụ trách giải pháp, sản xuất phần mềm&nbsp;<RiDoubleQuotesR /></p>
                                    <ul className="social-icons">
                                        <li><Link to=""><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-12">
                            <motion.div className="team-member" {...motionVertical}>
                                <div className="main-content">
                                    <img src={MemberImage2} alt="" />
                                    <h4>Võ Nhựt Linh</h4>
                                    <span className="category"><MdOutlineKeyboardDoubleArrowLeft />Trưởng Phòng Kỹ Thuật Phần Cứng<MdKeyboardDoubleArrowRight /></span>
                                    <p className="work"><RiDoubleQuotesL />Phụ trách giải pháp, phần cứng và thiết bị công nghệ&nbsp;<RiDoubleQuotesR /></p>
                                    <ul className="social-icons">
                                        <li><Link to=""><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-12">
                            <motion.div className="team-member" {...motionVertical}>
                                <div className="main-content">
                                    <img src={MemberImage3} alt="" />
                                    <h4>Huỳnh Tấn Dũng</h4>
                                    <span className="category"><MdOutlineKeyboardDoubleArrowLeft />Phó Phòng Kỹ Thuật Phần Mềm<MdKeyboardDoubleArrowRight /></span>
                                    <p className="work"><RiDoubleQuotesL />Phụ trách giải pháp, sản xuất phần mềm&nbsp;<RiDoubleQuotesR /></p>
                                    <ul className="social-icons">
                                        <li><Link to=""><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-12">
                            <motion.div className="team-member" {...motionVertical}>
                                <div className="main-content">
                                    <img src={MemberImage2} alt="" />
                                    <h4>Nguyễn Đông Hồ</h4>
                                    <span className="category"><MdOutlineKeyboardDoubleArrowLeft />Phó Phòng Thiết Kế Đồ Họa<MdKeyboardDoubleArrowRight /></span>
                                    <p className="work"><RiDoubleQuotesL />Phụ trách sản xuất video, hình ảnh, mô hình 3D&nbsp;<RiDoubleQuotesR /></p>
                                    <ul className="social-icons">
                                        <li><Link to=""><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default TeamWork;
