import { Award, Heart, Users } from "lucide-react";

function About() {
  return (
    <section className="section-container about-page">
      <div className="page-heading">
        <p className="eyebrow">OUR STORY</p>
        <h1>About GISUBIZO FASHION STORE</h1>
        <p>Fashion, confidence and quality in one place.</p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="Fashion store interior"
          />
        </div>

        <div className="about-text">
          <p className="eyebrow">WHO WE ARE</p>
          <h2>Helping You Express Your Style</h2>

          <p>
            GISUBIZO FASHION STORE is a fashion shopping project based in
            Kigali, Rwanda. We bring together stylish shoes, watches, bags,
            clothes and accessories.
          </p>

          <p>
            Our goal is to make fashion shopping simple and convenient while
            helping customers discover products that match their taste and
            personality.
          </p>

          <p>
            We believe that everyone deserves to feel confident and comfortable
            in what they wear.
          </p>
        </div>
      </div>

      <div className="values-grid">
        <div className="value-card">
          <Heart size={32} />
          <h3>Our Mission</h3>
          <p>To make fashion accessible and enjoyable for our customers.</p>
        </div>

        <div className="value-card">
          <Award size={32} />
          <h3>Our Vision</h3>
          <p>To grow into a trusted fashion shopping destination.</p>
        </div>

        <div className="value-card">
          <Users size={32} />
          <h3>Our Values</h3>
          <p>Quality, creativity, customer care and confidence.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
