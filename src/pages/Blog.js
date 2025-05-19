import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "RTX 4090 - Card Đồ Họa Mạnh Nhất Hiện Nay",
      excerpt:
        "Đánh giá chi tiết về hiệu năng và các tính năng mới nhất của NVIDIA GeForce RTX 4090.",
      image: "./images/RTX-4090.jpg",
      date: "20 Tháng 3, 2024",
      author: "Tuấn Anh",
      category: "Card Cao Cấp",
    },
    {
      id: 2,
      title: "So Sánh RX 7900 XTX vs RTX 4080",
      excerpt:
        "Phân tích chi tiết hiệu năng gaming và giá trị của hai card đồ họa cao cấp từ AMD và NVIDIA.",
      image: "./images/7900-4080.avif",
      date: "15 Tháng 3, 2024",
      author: "Minh Đức",
      category: "So Sánh",
    },
    {
      id: 3,
      title: "Hướng Dẫn Chọn Card Đồ Họa Cho Gaming",
      excerpt:
        "Những tiêu chí quan trọng cần cân nhắc khi lựa chọn card đồ họa cho nhu cầu chơi game.",
      image: "./images/huong-dan.avif",
      date: "10 Tháng 3, 2024",
      author: "Hoàng Nam",
      category: "Hướng Dẫn",
    },
    {
      id: 4,
      title: "RTX 4070 Ti - Lựa Chọn Tầm Trung Cao Cấp",
      excerpt:
        "Đánh giá chi tiết hiệu năng và giá trị của NVIDIA GeForce RTX 4070 Ti trong phân khúc tầm trung cao cấp.",
      image: "./images/4070-Ti.avif",
      date: "8 Tháng 3, 2024",
      author: "Văn Hùng",
      category: "Card Tầm Trung",
    },
    {
      id: 5,
      title: "AMD RX 7800 XT - Đối Thủ Đáng Gờm",
      excerpt:
        "Khám phá sức mạnh và khả năng cạnh tranh của AMD Radeon RX 7800 XT trong phân khúc cao cấp.",
      image: "./images/RX7800.jpg",
      date: "5 Tháng 3, 2024",
      author: "Quang Minh",
      category: "Card Cao Cấp",
    },
    {
      id: 6,
      title: "Cách Tối Ưu Card Đồ Họa Cho Gaming",
      excerpt:
        "Hướng dẫn chi tiết cách thiết lập và tối ưu card đồ họa để đạt hiệu năng gaming tốt nhất.",
      image: "./images/toi-uu.avif",
      date: "1 Tháng 3, 2024",
      author: "Đức Thắng",
      category: "Hướng Dẫn",
    },
  ];

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Card Đồ Họa - VGA</h1>
          <p>
            Cập nhật thông tin, đánh giá và so sánh các dòng card đồ họa mới
            nhất từ NVIDIA, AMD
          </p>
        </div>
      </section>

      <section className="blog-posts">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-author">By {post.author}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <h2>Đăng Ký Nhận Tin</h2>
          <p>Nhận thông tin mới nhất về card đồ họa và khuyến mãi hấp dẫn</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Nhập email của bạn" />
            <button type="submit">Đăng Ký</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
