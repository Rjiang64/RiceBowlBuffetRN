import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>Newsletter</h3>
        <p>Subscribe for news and promotional deals</p>
        <div className="input-group">
          <input type="email" placeholder="Your email" />
          <button>Submit</button>
        </div>
      </div>

      <div className="footer-info">
        <p>© 2025 Rice Bowl Buffet</p>
        <p>Privacy Policy | Terms</p>
        <div className="social-icons">📘 📸 🐦</div>
      </div>
    </footer>
  );
}
