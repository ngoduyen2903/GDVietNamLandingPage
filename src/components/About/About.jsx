import React from "react";
import "./About.css";
import { Link } from "react-scroll";
import { FcRight } from "react-icons/fc";
import AboutImage3 from '../../img/about-image.png'

const About = () => {
    return (
        <div className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="image_2">
                            <img src={AboutImage3} alt="" style={{ width: '100%' }} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="about_taital">Hãy để chúng tôi giúp bạn</h1>
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
                            <Link to="" smooth={true}>
                                <button className="btn-hover color-1" style={{ marginTop: 20 }}>Xem thêm</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
