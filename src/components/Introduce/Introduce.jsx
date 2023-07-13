import React, { useContext, useState } from "react";
import "./Introduce.css";
import { Link } from "react-scroll";
import IntroduceImage from '../../img/bg8.png'
import { themeContext } from "../../Context";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
import VideoImage from '../../img/play.png';
import { motion } from "framer-motion";


const Introduce = () => {
  const motionVertical = {
    initial: { rotateX: -90 },
    whileInView: { rotateX: 0 },
    viewport: { margin: "0px" },
    transition: { duration: 1 }
  };
  const motionLeft = {
    initial: { x: "-50%" },
    whileInView: { x: "0%" },
    viewport: { margin: "0px" },
    transition: { duration: 1 }
  }
  const motionRight = {
    initial: { x: "50%" },
    whileInView: { x: "0%" },
    viewport: { margin: "0px" },
    transition: { duration: 1 }
  }
  const [isOpen, setOpen] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section id="introduce" className="introduce d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="center">
              <motion.div {...motionLeft}>
                <h2 style={{ color: darkMode ? "#fff" : "" }}>SỐ HÓA <br />VÀ CHUYỂN ĐỔI SỐ</h2>
              </motion.div>
              <motion.div {...motionRight}>
                <h6 style={{ color: darkMode ? "#fff" : "" }} >Cung cấp các giải pháp công nghệ toàn diện</h6>
              </motion.div>
            </div>
            <motion.div {...motionVertical}>
              <Link className="btn-sm gradient-button" to="about" role="button"><span>XEM THÊM</span></Link>              <React.Fragment>
                <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="UBzmP2ASx3I" onClose={() => setOpen(false)} />
                <img src={VideoImage} className="video-icon" style={{ color: darkMode ? "#fff" : "" }} alt="Video" />
                <span className="video-text" onClick={() => setOpen(true)} style={{ color: darkMode ? "#fff" : "" }}>Xem Video</span>
              </React.Fragment>
            </motion.div>
          </div>
          <div className="col-lg-6 introduce-img"><img src={IntroduceImage} className="img-fluid" alt="Introduce" /></div>
        </div>
      </div>
    </section >
  );
};

export default Introduce;
