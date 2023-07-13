import React, { useContext } from "react";
import "./Contact.css";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const validationSchema = Yup.object({
    firstname: Yup.string().required('Họ không được trống!'),
    lastname: Yup.string().required('Tên không được để trống!'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại chỉ chứa các chữ số từ 0 đến 9!').required('Số điện thoại không được để trống!'),
    email: Yup.string().email('Email không hợp lệ!').required('Email không được để trống!'),
    content: Yup.string().required('Nội dung không được để trống!'),
  });

  const handleSubmit = (values, { resetForm }) => {
    setTimeout(() => {
      showToastMessage();
      resetForm();
    }, 2000);
  };
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      content: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  const showToastMessage = () => {
    toast.success('Đã gửi thành công!', {
      position: toast.POSITION.TOP_CENTER,
      // closeButton: 
      autoClose: 2000,
    });
  };
  const motionVertical = {
    initial: { rotateX: -90 },
    whileInView: { rotateX: 0 },
    viewport: { margin: "0px" },
    transition: { duration: 1 }
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="contact" id="contact">
      <div className="contact-us section">
        <div className="container">
          <div className="justify-content-center text-center">
            <div className="container contact-title">
              <motion.h3 style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>LIÊN HỆ</motion.h3>
              <motion.p style={{ color: darkMode ? "#fff" : "" }} {...motionVertical}>Rất vui khi bạn liên hệ với chúng tôi</motion.p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <motion.div className="contact-us-content" {...motionVertical}>
                <div className="row">
                  <div className="col-md-4">
                    <div id="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d4384.412449449693!2d105.7841027254593!3d10.009556472869363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d10.0095434!2d105.7862948!4m5!1s0x31a0627e021b58e1%3A0x214c32d84ee4abd8!2zS2h1IGTDom4gY8awIE5hbSBMb25nLCAxMDAgUXVhbmcgVHJ1bmcsIEjGsG5nIFBow7osIEPDoWkgUsSDbmcsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!3m2!1d10.0097309!2d105.7870272!5e1!3m2!1svi!2s!4v1688348123223!5m2!1svi!2s"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps" />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <motion.div id="contact-form" {...motionVertical}>
                      <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                          <div className="col-md-6">
                            <TextField
                              fullWidth
                              id="firstname"
                              name="firstname"
                              label="Họ của bạn"
                              value={formik.values.firstname}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.firstname && formik.errors.firstname}
                              helperText={
                                formik.touched.firstname && formik.errors.firstname} />
                          </div>
                          <div className="col-md-6">
                            <TextField
                              fullWidth
                              id="lastname"
                              name="lastname"
                              label="Tên của bạn"
                              value={formik.values.lastname}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.lastname && formik.errors.lastname}
                              helperText={formik.touched.lastname && formik.errors.lastname} />
                          </div>
                          <div className="col-md-6">
                            <TextField
                              fullWidth
                              id="phone"
                              name="phone"
                              label="Số điện thoại"
                              value={formik.values.phone}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.phone && formik.errors.phone}
                              helperText={formik.touched.phone && formik.errors.phone}
                            />
                          </div>
                          <div className="col-md-6">
                            <TextField
                              fullWidth
                              id="email"
                              name="email"
                              label="Email"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.email && formik.errors.email}
                              helperText={formik.touched.email && formik.errors.email} />
                          </div>
                          <div className="col-md-12">
                            <TextField
                              fullWidth
                              id="content"
                              name="content"
                              label="Nội dung"
                              multiline
                              value={formik.values.content}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.content && formik.errors.content}
                              helperText={formik.touched.content && formik.errors.content}
                            />
                          </div>
                          <div className="col-md-12 mt-2">
                            <Button
                              variant="contained"
                              color="primary"
                              type="submit"
                              disabled={formik.isSubmitting}>
                              Gửi
                            </Button>
                          </div>
                          <ToastContainer />
                        </div>
                      </form>
                    </motion.div>
                    <div className="more-info">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="info-item">
                            <AiOutlineMail style={{ fontSize: 40, color: '#fff' }} />
                            <h4><Link to="contact">info@gdvietnam.com</Link></h4>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="info-item">
                            <BiMap style={{ fontSize: 40, color: '#fff' }} />
                            <h4><Link to="contact">A1-48, đường số 5, KDC Nam Long <br />P. Hưng Thạnh, Q. Cái Răng, TP. Cần Thơ</Link></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
