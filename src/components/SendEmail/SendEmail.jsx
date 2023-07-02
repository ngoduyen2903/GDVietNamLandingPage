import React, { useContext } from "react";
import "./SendEmail.css";
import NewLetter from '../../img/email-removebg-preview.png';
import { BsSendFill } from "react-icons/bs";

const SendEmail = () => {
  return (
    <div className="container-xxl newsletter my-5" id="sendemail">
      <div className="container px-lg-5">
        <div className="row align-items-center" style={{ height: 250 }}>
          <div className="col-12 col-md-6">
            <h4 className="mt-2" style={{ fontFamily: 'Roboto-Medium', color: '#fff' }}>Sẵn sàng để bắt đầu</h4>
            <small style={{ fontFamily: 'Roboto-Light', color: '#fff', fontSize: 16 }}>Cung cấp email để cập nhật thông tin mới nhất</small>
            <div className="position-relative w-100 mt-3">
              <input className="form-control border-0 rounded-pill w-100 ps-3 pe-5 mb-5" type="text" placeholder="Nhập email của bạn" style={{ padding: 12, fontSize: 14, fontFamily: 'Roboto-Light' }} />
              <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-0 me-2 ">
                <BsSendFill className="fs-5 mb-2" style={{ color: '#00509d', fontSize: 16 }} />
              </button>
            </div>
          </div>
          <div className="col-md-6 text-center mb-n5 d-none d-md-block">
            <img className="img-fluid mt-5" src={NewLetter} alt="" style={{ height: 250 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
