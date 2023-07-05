import React, { useContext } from "react";
import "./Testimonials.css";
import Quote from '../../img/quote.png'
import { themeContext } from "../../Context";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="row">
                    <div className="container testimonials-title">
                        <h3 style={{ color: darkMode ? "#fff" : "" }}>KHẢO SÁT</h3>
                        <p style={{ color: darkMode ? "#fff" : "" }}>Người trong ngành nói gì?</p>
                    </div>
                    <div className="row">
                        <div className="item col-md-3">
                            <p><RiDoubleQuotesL />Chuyển đổi số đã giúp lập trình viên tiếp cận với các công cụ phân tích dữ liệu mạnh mẽ, từ đó tối ưu hóa quá trình phát triển phần mềm và cải thiện trải nghiệm người dùng<RiDoubleQuotesR /></p>
                            <h4>......</h4>
                            <span>Developer</span>
                            <img src={Quote} alt="Quote" />
                        </div>
                        <div className="item col-md-3">
                            <p><RiDoubleQuotesL />Thiết kế kỹ thuật số đã thay thế nhiều phương pháp truyền thống, từ việc tạo ra mẫu vật bằng tay đến việc sử dụng phần mềm đồ họa và công cụ thiết kế 3D<RiDoubleQuotesR /></p>
                            <h4>......</h4>
                            <span>Designer</span>
                            <img src={Quote} alt="Quote" />
                        </div>
                        <div className="item col-md-3">
                            <p><RiDoubleQuotesL />Chuyển đổi số đã giúp lập trình viên tiếp cận với các công cụ phân tích dữ liệu mạnh mẽ, từ đó tối ưu hóa quá trình phát triển phần mềm và cải thiện trải nghiệm người dùng<RiDoubleQuotesR /></p>
                            <h4>......</h4>
                            <span>Team Leader</span>
                            <img src={Quote} alt="Quote" />
                        </div>
                        <div className="item col-md-3">
                            <p><RiDoubleQuotesL />Thiết kế kỹ thuật số đã thay thế nhiều phương pháp truyền thống, từ việc tạo ra mẫu vật bằng tay đến việc sử dụng phần mềm đồ họa và công cụ thiết kế 3D<RiDoubleQuotesR /></p>
                            <h4>......</h4>
                            <span>Manager</span>
                            <img src={Quote} alt="Quote" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
