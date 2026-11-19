import { Link } from "react-router-dom";
import { ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, totalPrice, clearCart } = useCart();

  const orderMessage = cart
    .map(
      (item) =>
        `${item.name} x ${item.quantity} = ${(item.price * item.quantity).toLocaleString()} RWF`,
    )
    .join("\n");

  const whatsappMessage = encodeURIComponent(
    `Hello GISUBIZO FASHION STORE, I want to order:\n${orderMessage}\n\nTotal: ${totalPrice.toLocaleString()} RWF`,
  );

  const whatsappLink = `https://wa.me/250780983336?text=${whatsappMessage}`;

  return (
    <section className="section-container cart-page">
      <div className="page-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>Review your selected products.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <ShoppingBag size={55} />
          <h2>Your cart is empty</h2>
          <p>You have not added any products yet.</p>
          <Link to="/shop" className="primary-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Products</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-row total-row">
              <strong>Total</strong>
              <strong>{totalPrice.toLocaleString()} RWF</strong>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="checkout-btn"
            >
              Order on WhatsApp
            </a>

            <button className="clear-cart-btn" onClick={clearCart}>
              <Trash2 size={17} />
              Clear Cart
            </button>

            <Link to="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
