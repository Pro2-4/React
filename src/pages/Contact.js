import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Giả lập gửi form với setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    }
    setLoading(false);
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Liên Hệ GPU Store</h1>
          <p>Tư vấn miễn phí về card đồ họa phù hợp với nhu cầu của bạn</p>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Địa Chỉ</h3>
              <p>123 Đường ABC, Quận 1</p>
              <p>TP. Hồ Chí Minh</p>
            </div>

            <div className="info-card">
              <i className="fas fa-phone"></i>
              <h3>Điện Thoại</h3>
              <p>Hotline: 1900 1234</p>
              <p>Kỹ thuật: 1900 5678</p>
            </div>

            <div className="info-card">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>info@gpustore.com</p>
              <p>support@gpustore.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div className="container">
          <h2>Gửi Thông Tin Liên Hệ</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                Họ và tên
                <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email<span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Số điện thoại<span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Chủ đề<span className="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Nội dung<span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`submit-btn ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Đang gửi..." : "Gửi Thông Tin"}
            </button>

            {submitStatus === "success" && (
              <div className="alert alert-success">
                Gửi thông tin thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="alert alert-error">
                Có lỗi xảy ra. Vui lòng thử lại sau.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="map">
        <div className="container">
          <h2>Bản Đồ Cửa Hàng</h2>
          <div className="map-container">
            {/* Thêm Google Maps hoặc bản đồ khác ở đây */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1234567890123!2d106.12345678901234!3d10.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA3JzM0LjQiTiAxMDbCsDA3JzM0LjQiRQ!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
