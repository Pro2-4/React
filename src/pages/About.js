import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Về GPU Store</h1>
          <p>Đơn vị phân phối card đồ họa uy tín hàng đầu Việt Nam</p>
        </div>
      </section>

      <section className="company-overview">
        <div className="container">
          <h2>Câu Chuyện Của Chúng Tôi</h2>
          <div className="overview-grid">
            <div className="overview-content">
              <p>
                GPU Store tự hào là đơn vị tiên phong trong việc cung cấp các sản phẩm
                card đồ họa chính hãng tại Việt Nam. Với hơn 10 năm kinh nghiệm,
                chúng tôi cam kết mang đến những sản phẩm chất lượng cao với giá
                thành tốt nhất cho người dùng.
              </p>
              <p>
                Chúng tôi là đối tác chính thức của NVIDIA và AMD tại Việt Nam,
                đảm bảo nguồn hàng chính hãng và chế độ bảo hành uy tín.
              </p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&w=800&q=80" alt="GPU Store Overview" />
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>Giá Trị Cốt Lõi</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-heart"></i>
              <h3>Tận Tâm</h3>
              <p>Luôn đặt lợi ích khách hàng lên hàng đầu</p>
            </div>
            <div className="value-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Uy Tín</h3>
              <p>Cam kết chất lượng sản phẩm và dịch vụ</p>
            </div>
            <div className="value-card">
              <i className="fas fa-handshake"></i>
              <h3>Chuyên Nghiệp</h3>
              <p>Đội ngũ nhân viên được đào tạo bài bản</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Đội Ngũ Của Chúng Tôi</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="./images/truong.jpg" alt="CEO" />
              </div>
              <h3>Nguyễn Hữu Trường</h3>
              <p className="member-title">Giám đốc điều hành</p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="./images/quy.jpg" alt="Tech Lead" />
              </div>
              <h3>Nguyễn Văn Quý</h3>
              <p className="member-title">Trưởng phòng kỹ thuật</p>
            </div>

            <div className="team-member">
              <div className="member-image">
                <img src="./images/huy.jpg" alt="Sales Manager" />
              </div>
              <h3>Hoàng Đình Quang Huy</h3>
              <p className="member-title">Trưởng phòng kinh doanh</p>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <h2>Thành Tựu</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <h3>10,000+</h3>
              <p>Khách hàng tin tưởng</p>
            </div>
            <div className="achievement-card">
              <h3>50+</h3>
              <p>Đối tác chiến lược</p>
            </div>
            <div className="achievement-card">
              <h3>100%</h3>
              <p>Khách hàng hài lòng</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
