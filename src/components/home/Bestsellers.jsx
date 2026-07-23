import { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function Bestsellers() {
  const { addItem, openCart } = useCart();
  const bestsellers = products.filter(p => p.isBestseller);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <h2 className="section-heading">Bestsellers</h2>
        <p className="section-sub">Our most-loved pieces, chosen by women like you.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} addItem={addItem} openCart={openCart} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, addItem, openCart }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-cream-dark rounded overflow-hidden mb-3">
        {/* Front image */}
        <img
          data-strk-img-id={`product-${product.id}-front`}
          data-strk-img={`[product-name-${product.id}] [product-cat-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={`product-${product.id}-hover`}
          data-strk-img={`[product-name-${product.id}] [product-cat-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick add button on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-text-primary text-xs uppercase tracking-widest py-2.5 font-sans flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gold hover:text-white"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="px-1">
        <span id={`product-cat-${product.id}`} className="text-[10px] uppercase tracking-widest text-text-secondary font-sans">
          {product.category}
        </span>
        <h3
          id={`product-name-${product.id}`}
          className="product-name mt-1 text-text-primary"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-xs text-text-secondary font-sans">{product.rating}</span>
        </div>
        <p className="font-sans text-sm font-medium mt-1">${product.price}</p>
      </div>
    </Link>
  );
}
