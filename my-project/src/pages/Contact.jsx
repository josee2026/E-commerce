import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

function Contact() {
  const phone = "250780983336";

  return (
    <section className="section-container contact-page">
      <div className="page-heading">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Let's Talk About Fashion</h2>
          <p>
            Have a question about our products? Contact GISUBIZO FASHION STORE
            using the details below.
          </p>

          <div className="contact-detail">
            <MapPin />
            <div>
              <h3>Our Location</h3>
              <p>Kigali, Gasabo, Gisozi, Rwanda</p>
            </div>
          </div>

          <div className="contact-detail">
            <Phone />
            <div>
              <h3>Phone Number</h3>
              <p>0780983336</p>
            </div>
          </div>

          <div className="contact-detail">
            <Mail />
            <div>
              <h3>Email Address</h3>
              <p>joseegisubizo3@gmail.com</p>
            </div>
          </div>

          <a
            className="whatsapp-btn"
            href={`https://wa.me/${phone}?text=${encodeURIComponent(
              "Hello GISUBIZO FASHION STORE, I would like to know more about your products.",
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={19} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-message">
          <h2>Thank You for Visiting!</h2>
          <p>
            Your interest means a lot to us. Contact us for product information,
            availability and orders.
          </p>

          <div className="contact-highlight">
            <h3>GISUBIZO FASHION STORE</h3>
            <p>Discover Your Unique Style.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
