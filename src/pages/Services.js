import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "NVIDIA GeForce RTX Series",
      description:
        "Dòng card đồ họa cao cấp với công nghệ Ray Tracing thế hệ mới",
      icon: "fas fa-microchip",
      features: [
        "Ray Tracing thế hệ 2",
        "DLSS 3.0 AI",
        "Hiệu năng gaming cực đỉnh",
        "Tản nhiệt cao cấp",
        "Hỗ trợ công nghệ NVIDIA Reflex",
        "Bảo hành 36 tháng",
      ],
    },
    {
      id: 2,
      title: "AMD Radeon RX Series",
      description:
        "Card đồ họa gaming với công nghệ AMD RDNA độc quyền",
      icon: "fas fa-fire",
      features: [
        "Kiến trúc RDNA 3",
        "AMD FSR 3.0",
        "Tối ưu cho gaming",
        "Công nghệ Smart Access Memory",
        "Hỗ trợ Ray Tracing",
        "Bảo hành 36 tháng",
      ],
    },
    {
      id: 3,
      title: "Workstation Graphics",
      description:
        "Card đồ họa chuyên nghiệp cho công việc đồ họa và render",
      icon: "fas fa-desktop",
      features: [
        "NVIDIA Quadro RTX",
        "AMD Radeon PRO",
        "Chuyên nghiệp cho đồ họa",
        "Render nhanh chóng",
        "Độ ổn định cao",
        "Bảo hành 36 tháng",
      ],
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Dòng Sản Phẩm</h1>
          <p>Khám phá các dòng card đồ họa cao cấp từ các thương hiệu hàng đầu</p>
        </div>
      </section>

      <section className="services-grid container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="learn-more-btn">Tìm hiểu thêm</button>
          </div>
        ))}
      </section>

      <section className="service-support">
        <div className="container">
          <h2>Dịch Vụ Hỗ Trợ</h2>
          <div className="support-grid">
            <div className="support-item">
              <div className="support-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Giao Hàng Toàn Quốc</h3>
              <p>Miễn phí giao hàng cho đơn hàng từ 20 triệu</p>
            </div>
            <div className="support-item">
              <div className="support-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>Bảo Hành Tận Nơi</h3>
              <p>Đội ngũ kỹ thuật hỗ trợ tận nơi trong 24h</p>
            </div>
            <div className="support-item">
              <div className="support-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3>Đổi Trả Miễn Phí</h3>
              <p>Đổi mới trong 15 ngày nếu có lỗi từ nhà sản xuất</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
