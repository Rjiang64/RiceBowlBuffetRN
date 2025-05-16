import React from "react";
import "../css/HomePage.css";
import placeholder from "../assets/placeholder.JPG";
import heroImg from "../assets/hero.jpg";
import popular1 from "../assets/popular_img1.jpg";
import popular2 from "../assets/popular_img2.jpg";
import popular3 from "../assets/popular_img3.jpg";
import popular4 from "../assets/popular_img4.jpg";
import popular5 from "../assets/popular_img5.jpg";
import popular6 from "../assets/popular_img6.jpg";

const popularImages = [
  popular1,
  popular2,
  popular3,
  popular4,
  popular5,
  popular6,
];

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-text">
          <h1>
            Delicious Eats,
            <br />
            Memorable Experiences
          </h1>
        </div>
        <button className="order-btn ">ORDER NOW</button>
      </section>
      {/* Carousel: Popular Dishes */}
      <section className="carousel-section">
        <h2>Popular Dishes</h2>
        <div className="carousel">
          {popularImages.map((img, i) => (
            <img
              key={`popular-${i}`}
              src={img}
              alt={`Popular dish ${i + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* Info Cards */}
      <section className="info-grid">
        <div className="card large">Card showing the time that we are open</div>
        <div className="card">promotional deals</div>
        <div className="card">Map showing where we are located</div>
      </section>

      {/* Carousel: Scenery */}
      <section className="carousel-section">
        <h2>Scenery</h2>
        <div className="carousel">
          {Array(4)
            .fill()
            .map((_, i) => (
              <img key={`scenery-${i}`} src={placeholder} alt="scenery" />
            ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h3>Subscribe for news and promotional deals</h3>
        <form>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <div>
            <p>Contact</p>
            <p>123 Rice Bowl Ave</p>
            <p>Open Daily 11am–9pm</p>
          </div>
          <div>
            <p>Follow Us</p>
            <p>Facebook | Instagram | Twitter</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Rice Bowl Buffet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
