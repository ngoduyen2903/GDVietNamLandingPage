import React, { useContext } from "react";
import "./Solution.css";
import SolutionImage1 from "../../img/so1.png";
import SolutionImage2 from "../../img/so2.png";
import SolutionImage3 from "../../img/so3.png";
import SolutionImage4 from "../../img/so4.png";
import SolutionImage5 from "../../img/so1.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

const Solution = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="solution layout_padding">
      <div className="container">
        <div className="row">
          <div className="w-left col-md-5">
            <div className="awesome">
              <span style={{ color: darkMode ? "white" : "" }} className="mt-5">
                Tại sao nên chọn GD Việt Nam?
              </span>
              <span>GIẢI PHÁP TOÀN DIỆN</span>
              <span>
                Công ty Cổ phần Giải pháp Công nghệ GD Việt Nam đi đầu trong lĩnh vực số hóa, chuyển đổi số. Chúng tôi chuyên cung cấp giải pháp và các phần mềm theo yêu cầu. Với đội ngũ kĩ thuật chuyên môn cao từ khâu thiết kế đến tư vấn, nghiên cứu, phân tích và tạo ra các sản phẩm tối ưu nhất.
              </span>
              <Link to="contact" smooth={true}>
                <button className="btn-hover color-1">Xem thêm</button>
              </Link>
            </div>
          </div>
          <div className="w-right col-md-7">
            <motion.div
              initial={{ rotate: -90 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
              className="w-mainCircle">
              <div className="w-secCircle">
                <img src={SolutionImage1} alt="img-solution" />
              </div>
              <div className="w-secCircle">
                <img src={SolutionImage2} alt="img-solution" />
              </div>
              <div className="w-secCircle">
                <img src={SolutionImage3} alt="img-solution" />
              </div>{" "}
              <div className="w-secCircle">
                <img src={SolutionImage4} alt="img-solution" />
              </div>
              <div className="w-secCircle">
                <img src={SolutionImage5} alt="img-solution" />
              </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;