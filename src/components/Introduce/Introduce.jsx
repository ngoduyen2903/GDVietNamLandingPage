import React from "react";
import "./Introduce.css";
import { Link } from "react-scroll";
import IntroduceImage from '../../img/bg8.png'
import { MdOutlinePlayCircleOutline } from "react-icons/md";
const Introduce = () => {
  return (
    <section id="introduce" className="introduce d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="center">
              <h1>SỐ HÓA <br />VÀ CHUYỂN ĐỔI SỐ</h1>
              <h6>Cung cấp các giải pháp công nghệ toàn diện</h6>
            </div>
            <div>
              <div className="text-center text-lg-start">
                <Link to="contact" smooth={true} >
                  <button className="btn-hover color-1">Bắt đầu</button>
                </Link>
                <Link to="contact" smooth={true}>
                  <MdOutlinePlayCircleOutline className="video-icon" /><span className="video-text">Xem Video</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 introduce-img">
            <img src={IntroduceImage} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
