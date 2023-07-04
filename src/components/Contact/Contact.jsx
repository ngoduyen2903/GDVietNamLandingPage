import React, { useContext } from "react";
import "./Contact.css";
import { BiMap } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="contact" id="contact">
      <div className="contact-us section">
        <div className="container">
          <div className="justify-content-center text-center">
            <div className="container service-title">
              <h3 style={{ color: darkMode ? "#fff" : "" }}>LIÊN HỆ</h3>
              <p style={{ color: darkMode ? "#fff" : "" }}>Rất vui khi bạn liên hệ với chúng tôi</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="contact-us-content">
                <div className="row">
                  <div className="col-md-4">
                    <div id="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d4384.412449449693!2d105.7841027254593!3d10.009556472869363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d10.0095434!2d105.7862948!4m5!1s0x31a0627e021b58e1%3A0x214c32d84ee4abd8!2zS2h1IGTDom4gY8awIE5hbSBMb25nLCAxMDAgUXVhbmcgVHJ1bmcsIEjGsG5nIFBow7osIEPDoWkgUsSDbmcsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!3m2!1d10.0097309!2d105.7870272!5e1!3m2!1svi!2s!4v1688348123223!5m2!1svi!2s"
                        width="100%"
                        height="540px"
                        style={{ border: 0, borderRadius: '23px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <form id="contact-form">
                      <div className="row">
                        <div className="col-md-6">
                          <fieldset>
                            <input type="text" placeholder="Họ của bạn..." required={true} />
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <input type="text" placeholder="Tên của bạn..." required={true} />
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <input type="text" placeholder="Số điện thoại..." required={true} />
                          </fieldset>
                        </div>
                        <div className="col-md-6">
                          <fieldset>
                            <input type="email" placeholder="Email của bạn..." required={true} />
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <textarea placeholder="Nội dung"></textarea>
                          </fieldset>
                        </div>
                        <div className="col-md-12">
                          <fieldset>
                            <button type="submit">Gửi</button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                    <div className="more-info">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="info-item">
                            <AiOutlinePhone style={{ fontSize: 40, color: '#fff' }} />
                            <h4><Link to="contact">0799 552 667</Link></h4>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="info-item">
                            <AiOutlineMail style={{ fontSize: 40, color: '#fff' }} />
                            <h4><Link to="contact">info@gdvietnam.com</Link></h4>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="info-item">
                            <BiMap style={{ fontSize: 40, color: '#fff' }} />
                            <h4><Link to="contact">A1-48, đường số 5, KDC Nam Long, P. Hưng Thạnh, Q. Cái Răng, TP. Cần Thơ</Link></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
