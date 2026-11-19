import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, Headphones } from "lucide-react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO GISUBIZO FASHION STORE</p>

          <h1>
            Discover Your
            <span> Unique Style</span>
          </h1>

          <p className="hero-description">
            Find beautiful shoes, watches, bags and fashion accessories that
            make every moment special.
          </p>

          <Link to="/shop" className="primary-btn">
            Shop Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="benefits section-container">
        <div className="benefit">
          <Truck size={30} />
          <div>
            <h3>Convenient Shopping</h3>
            <p>Shop from anywhere in Rwanda.</p>
          </div>
        </div>

        <div className="benefit">
          <ShieldCheck size={30} />
          <div>
            <h3>Quality Products</h3>
            <p>Fashion products selected with care.</p>
          </div>
        </div>

        <div className="benefit">
          <Headphones size={30} />
          <div>
            <h3>Customer Support</h3>
            <p>We are ready to assist you.</p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>

          <Link to="/shop" className="view-all">
            View All <ArrowRight size={17} />
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="promo-section">
        <div>
          <p className="eyebrow">STYLE STARTS HERE</p>
          <h2>Make Every Outfit Count</h2>
          <p>
            Explore our collection and find something that matches your
            personality.
          </p>
          <Link to="/shop" className="primary-btn">
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
<section className="store-stats">
  <div>
    <h2>30+</h2>
    <p>Fashion Products</p>
  </div>

  <div>
    <h2>7</h2>
    <p>Product Categories</p>
  </div>

  <div>
    <h2>100%</h2>
    <p>Fashion Inspiration</p>
  </div>
</section>;