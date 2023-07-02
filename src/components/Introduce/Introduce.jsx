import React, { useContext } from "react";
import "./Introduce.css";
import { Link } from "react-scroll";
import IntroduceImage from '../../img/bg8.png'
import { MdOutlinePlayCircleOutline } from "react-icons/md";
import { themeContext } from "../../Context";

const Introduce = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section id="introduce" className="introduce d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <div className="center">
              <h2 style={{ color: darkMode ? "#fff" : "" }}>SỐ HÓA <br />VÀ CHUYỂN ĐỔI SỐ</h2>
              <h6 style={{ color: darkMode ? "#fff" : "" }}>Cung cấp các giải pháp công nghệ toàn diện</h6>
            </div>
            <div>
              <div className="text-center text-lg-start">
                <Link to="about" smooth={true} >
                  <button className="btn-hover color-1">Bắt đầu</button>
                </Link>
                <Link to="about" smooth={true}>
                  <MdOutlinePlayCircleOutline className="video-icon" style={{ color: darkMode ? "#fff" : "" }} />
                  <span className="video-text" style={{ color: darkMode ? "#fff" : "" }}>Xem Video</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 introduce-img">
            <img src={IntroduceImage} className="img-fluid" alt="Introduce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
