import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Card Đồ Họa Chính Hãng</h1>
          <p>
            Cung cấp các sản phẩm card đồ họa cao cấp từ các thương hiệu uy tín với giá tốt nhất thị trường
          </p>
          <Link to="/contact" className="cta-button">
            Tư Vấn Miễn Phí
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Điểm Nổi Bật</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3>Chính Hãng 100%</h3>
            <p>
              Cam kết các sản phẩm card đồ họa chính hãng, nhập khẩu trực tiếp từ nhà sản xuất
            </p>
            <ul className="feature-list">
              <li>Bảo hành chính hãng</li>
              <li>Tem nhãn xác thực</li>
              <li>Giấy tờ nhập khẩu đầy đủ</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <h3>Giá Cả Hợp Lý</h3>
            <p>
              Mức giá tốt nhất thị trường với chính sách bảo hành đầy đủ
            </p>
            <ul className="feature-list">
              <li>Giá cạnh tranh</li>
              <li>Nhiều ưu đãi</li>
              <li>Hỗ trợ trả góp 0%</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3>Hỗ Trợ 24/7</h3>
            <p>
              Đội ngũ tư vấn chuyên nghiệp, hỗ trợ khách hàng mọi lúc
            </p>
            <ul className="feature-list">
              <li>Tư vấn miễn phí</li>
              <li>Hỗ trợ kỹ thuật</li>
              <li>Bảo hành tận nơi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="products">
        <h2>Sản Phẩm Nổi Bật</h2>
        <div className="product-grid">
          <div className="product-card">
            <img 
              src="./images/RTX-4090.jpg" 
              alt="RTX 4090"
              loading="lazy"
            />
            <h3>NVIDIA RTX 4090</h3>
            <p>Card đồ họa cao cấp nhất với hiệu năng vượt trội</p>
            <Link to="/products/rtx4090" className="product-link">
              Xem chi tiết
            </Link>
          </div>

          <div className="product-card">
            <img 
              src="./images/RX-7900-XTX.jpg" 
              alt="RX 7900 XTX"
              loading="lazy"
            />
            <h3>AMD RX 7900 XTX</h3>
            <p>Flagship AMD với công nghệ RDNA 3 mới nhất</p>
            <Link to="/products/rx7900xtx" className="product-link">
              Xem chi tiết
            </Link>
          </div>

          <div className="product-card">
            <img 
              src="./images/RTX-4080.jpg" 
              alt="RTX 4080"
              loading="lazy"
            />
            <h3>NVIDIA RTX 4080</h3>
            <p>Hiệu năng cao cấp với giá thành hợp lý</p>
            <Link to="/products/rtx4080" className="product-link">
              Xem chi tiết
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
