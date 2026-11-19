import { useMemo, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    category: "Shoes",
    price: 25000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
  {
    id: 2,
    name: "Sport Shoes",
    category: "Shoes",
    price: 30000,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500",
  },
  {
    id: 3,
    name: "Elegant High Heels",
    category: "Shoes",
    price: 28000,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
  },
  {
    id: 4,
    name: "Casual Sandals",
    category: "Shoes",
    price: 15000,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500",
  },
  {
    id: 5,
    name: "Luxury Handbag",
    category: "Bags",
    price: 35000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
  },
  {
    id: 6,
    name: "Ladies Shoulder Bag",
    category: "Bags",
    price: 27000,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
  },
  {
    id: 7,
    name: "Travel Backpack",
    category: "Bags",
    price: 32000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
  },
  {
    id: 8,
    name: "Fashion Handbag",
    category: "Bags",
    price: 30000,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=500",
  },
  {
    id: 9,
    name: "Classic Wrist Watch",
    category: "Watches",
    price: 22000,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500",
  },
  {
    id: 10,
    name: "Luxury Gold Watch",
    category: "Watches",
    price: 45000,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500",
  },
  {
    id: 11,
    name: "Men's Watch",
    category: "Watches",
    price: 35000,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500",
  },
  {
    id: 12,
    name: "Silver Watch",
    category: "Watches",
    price: 28000,
    image: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500",
  },
  {
    id: 13,
    name: "Classic T-Shirt",
    category: "Clothes",
    price: 12000,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    id: 14,
    name: "Men's Jacket",
    category: "Clothes",
    price: 40000,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
  },
  {
    id: 15,
    name: "Ladies Dress",
    category: "Clothes",
    price: 30000,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
  },
  {
    id: 16,
    name: "Casual Shirt",
    category: "Clothes",
    price: 18000,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
  },
  {
    id: 17,
    name: "Fashion Sunglasses",
    category: "Accessories",
    price: 10000,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
  },
  {
    id: 18,
    name: "Elegant Necklace",
    category: "Accessories",
    price: 15000,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
  },
  {
    id: 19,
    name: "Fashion Earrings",
    category: "Accessories",
    price: 8000,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500",
  },
  {
    id: 20,
    name: "Leather Belt",
    category: "Accessories",
    price: 12000,
    image: "https://images.unsplash.com/photo-1624222247344-550fb8d9b7f8?w=500",
  },
  {
    id: 21,
    name: "Perfume Collection",
    category: "Beauty",
    price: 25000,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
  },
  {
    id: 22,
    name: "Beauty Makeup Kit",
    category: "Beauty",
    price: 30000,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
  },
  {
    id: 23,
    name: "Luxury Ring",
    category: "Accessories",
    price: 18000,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500",
  },
  {
    id: 24,
    name: "Fashion Cap",
    category: "Accessories",
    price: 9000,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
  },
];

const categories = [
  "All",
  "Shoes",
  "Bags",
  "Watches",
  "Clothes",
  "Accessories",
  "Beauty",
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const changeQuantity = (id, amount) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const formatPrice = (price) => `${price.toLocaleString("en-US")} RWF`;

  const orderOnWhatsApp = () => {
    if (cart.length === 0) {
      alert("Your shopping cart is empty.");
      return;
    }

    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} x ${item.quantity} = ${formatPrice(
            item.price * item.quantity,
          )}`,
      )
      .join("\n");

    const message = `Hello GISUBIZO FASHION STORE!

I would like to order:

${orderDetails}

Total: ${formatPrice(totalPrice)}

Please help me complete my order.`;

    window.open(
      `https://wa.me/250780983336?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="store">
      <header className="navbar">
        <a href="#home" className="logo">
          GISUBIZO <span>FASHION STORE</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#cart" className="cart-link">
          🛒 Cart ({totalItems})
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO OUR FASHION STORE</p>
          <h1>Discover Your Style</h1>
          <p>
            Quality shoes, watches, bags, clothes and accessories at affordable
            prices.
          </p>
          <a href="#shop" className="shop-button">
            Shop Now
          </a>
        </div>
      </section>

      <section className="shop-section" id="shop">
        <div className="section-heading">
          <p>OUR COLLECTION</p>
          <h2>Explore Our Products</h2>
          <span>Find your favorite fashion items.</span>
        </div>

        <div className="shop-tools">
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-category">{product.category}</span>
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="price">{formatPrice(product.price)}</p>
                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </article>
            ))
          ) : (
            <p className="no-products">No products found.</p>
          )}
        </div>
      </section>

      <section className="cart-section" id="cart">
        <div className="section-heading">
          <p>YOUR SHOPPING</p>
          <h2>Shopping Cart</h2>
        </div>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is currently empty.</p>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{formatPrice(item.price)}</p>
                  </div>

                  <div className="quantity-control">
                    <button onClick={() => changeQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => changeQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <h3>Total: {formatPrice(totalPrice)}</h3>
              <button className="order-button" onClick={orderOnWhatsApp}>
                Order on WhatsApp
              </button>
              <button className="clear-button" onClick={() => setCart([])}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="section-label">WHO WE ARE</p>
          <h2>About GISUBIZO FASHION STORE</h2>
          <p>
            GISUBIZO FASHION STORE is an online fashion shop offering
            fashionable shoes, watches, bags, clothing and accessories. Our goal
            is to make shopping simple and convenient by providing a variety of
            products at affordable prices.
          </p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>Contact Us</h2>
        </div>

        <div className="contact-details">
          <p>
            <strong>Store:</strong> GISUBIZO FASHION STORE
          </p>
          <p>
            <strong>Owner:</strong> GISUBIZO Josee
          </p>
          <p>
            <strong>Email:</strong> joseegisubizo3@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 0780983336
          </p>
          <p>
            <strong>Location:</strong> Gisozi, Gasabo, Kigali, Rwanda
          </p>
          <a
            href="https://wa.me/250780983336"
            target="_blank"
            rel="noreferrer"
            className="contact-whatsapp"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

      <footer className="footer">
        <h3>GISUBIZO FASHION STORE</h3>
        <p>Fashion • Quality • Affordable Prices</p>
        <p>© 2026 GISUBIZO FASHION STORE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
