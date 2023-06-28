import React from "react";
import "./Mile.css";
import MileImage1 from '../../img/software-development.png';
import MileImage2 from '../../img/api.png';
import MileImage3 from '../../img/web-programming.png';
import MileImage4 from '../../img/world-wide-web.png';

const Milestones = () => {
  return (
    <section className="mile">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="container section-title">
            <h3 style={{ color: '#2125B1' }}>CÂU CHUYỆN CỦA CHÚNG TÔI</h3>
            <p>Quá trình phát triển của GD Việt Nam</p>
          </div>
        </div>
        <div className="timeline">
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
              <h3 className="text-light">Thời điểm hiện tại</h3>
              <p>Hiện tại, GD Việt Nam có 5 team chính là Developers, Graphic Design, Content, Customer Service và Marketing với hơn 40 thành viên. Chúng tôi cùng chung sứ mệnh mang đến những sản phẩm công nghệ tốt nhất cho khách hàng</p>
            </div>
            <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <img src={MileImage1} className="img-fluid" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time>01/06/2023</time>
            </div>
          </div>
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
              <h3 className=" text-light">Phát triển môi trường làm việc tốt nhất</h3>
              <p>GD Việt Nam chuyển về văn phòng mới với quy mô lớn hơn tọa lạc tại A1-48, đường số 5, KDC Nam Long, P. Hưng Thạnh, Q. Cái Răng, TP. Cần Thơ nhằm tạo môi trường tốt nhất cho nhân viên để mang đến những sản phẩm công nghệ tốt nhất cho khách hàng</p>
            </div>
            <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <img src={MileImage2} className="img-fluid" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time>01/02/2023</time>
            </div>
          </div>
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
              <h3 className=" text-light">Phát triển môi trường làm việc tốt nhất</h3>
              <p>GD Việt Nam chuyển về văn phòng mới với quy mô lớn hơn tọa lạc tại A1-48, đường số 5, KDC Nam Long, P. Hưng Thạnh, Q. Cái Răng, TP. Cần Thơ nhằm tạo môi trường tốt nhất cho nhân viên để mang đến những sản phẩm công nghệ tốt nhất cho khách hàng</p>
            </div>
            <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <img src={MileImage3} className="img-fluid" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time>01/02/2023</time>
            </div>
          </div>
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
              <h3 className=" text-light">Phát triển môi trường làm việc tốt nhất</h3>
              <p>GD Việt Nam chuyển về văn phòng mới với quy mô lớn hơn tọa lạc tại A1-48, đường số 5, KDC Nam Long, P. Hưng Thạnh, Q. Cái Răng, TP. Cần Thơ nhằm tạo môi trường tốt nhất cho nhân viên để mang đến những sản phẩm công nghệ tốt nhất cho khách hàng</p>
            </div>
            <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <img src={MileImage4} className="img-fluid" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time>01/02/2023</time>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
