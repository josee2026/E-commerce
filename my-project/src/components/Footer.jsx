import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>
            GISUBIZO <span>FASHION STORE</span>
          </h2>
          <p>
            Your destination for quality shoes, watches, bags, clothes and
            fashion accessories.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Contact Information</h3>
          <p>
            <MapPin size={16} /> Kigali, Gasabo, Gisozi, Rwanda
          </p>
          <p>
            <Phone size={16} /> 0780983336
          </p>
          <p>
            <Mail size={16} /> joseegisubizo3@gmail.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} GISUBIZO FASHION STORE. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
