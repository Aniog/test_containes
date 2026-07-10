import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import './Bestsellers.css';

export default function Bestsellers() {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <section className="bestsellers section">
      <div className="container">
        <div className="bestsellers__header">
          <h2 className="bestsellers__title">Bestsellers</h2>
          <p className="bestsellers__subtitle">
            Our most loved pieces, chosen by you
          </p>
        </div>

        <div className="bestsellers__grid">
          {products.map((product) => (
            <div 
              key={product.id}
              className="product-card"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <Link to={`/product/${product.id}`} className="product-card__link">
                <div className="product-card__image-container">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="product-card__image"
                  />
                  {hoveredProduct === product.id && product.images[1] && (
                    <img 
                      src={product.images[1]} 
                      alt={`${product.name} alternate view`}
                      className="product-card__image product-card__image--hover"
                    />
                  )}
                  <button 
                    className={`product-card__quick-add ${hoveredProduct === product.id ? 'product-card__quick-add--visible' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                  >
                    <ShoppingBag size={16} strokeWidth={1.5} />
                    Quick Add
                  </button>
                </div>
                
                <div className="product-card__info">
                  <h3 className="product-card__name">{product.name}</h3>
                  <div className="product-card__rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        fill={i < product.rating ? 'currentColor' : 'none'}
                        strokeWidth={1.5}
                      />
                    ))}
                    <span>({product.reviews})</span>
                  </div>
                  <p className="product-card__price">{formatPrice(product.price)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="bestsellers__cta">
          <Link to="/shop" className="btn btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}