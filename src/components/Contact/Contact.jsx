import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import { BiMap } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="container contact-title">
            <h3 style={{ color: darkMode ? "#fff" : "" }}>LIÊN HỆ</h3>
            <p style={{ color: darkMode ? "#fff" : "" }}>Rất vui khi bạn liên hệ với chúng tôi</p>
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-box">
                  <BiMap className="contact-icon" />
                  <h3>Địa chỉ</h3>
                  <p>A1-48, đường số 5, KDC Nam Long, P. Hưng Thạnh, Q. Cái Răng, TP. Cần Thơ</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <AiOutlinePhone className="contact-icon" />
                  <h3>Điện thoại</h3>
                  <p>+1 0000 1111 22<br />+1 1234 12345 12</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <AiOutlineMail className="contact-icon" />
                  <h3>Email</h3>
                  <p>info@example.com<br />contact@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <BiTimeFive className="contact-icon" />
                  <h3>Giờ làm việc</h3>
                  <p>Thứ Hai - Thứ Sáu<br />8:00 AM - 05:15 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="email-form">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Tên của bạn" required />
                </div>
                <div className="col-md-6 ">
                  <input type="email" className="form-control" placeholder="Email của bạn" required />
                </div>
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="Số điện thoại" required />
                </div>
                <div className="col-md-12">
                  <textarea className="form-control" rows="6" placeholder="Nội dung" required></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <button className="btn-hover color-1">Gửi</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
