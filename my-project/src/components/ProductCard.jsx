import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <span className="product-category">{product.category}</span>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="product-description">{product.description}</p>

        <div className="product-bottom">
          <strong>{product.price.toLocaleString()} RWF</strong>

          <button className="add-cart-btn" onClick={() => addToCart(product)}>
            <ShoppingBag size={17} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
