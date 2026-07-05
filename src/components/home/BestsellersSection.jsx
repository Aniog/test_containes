import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = React.useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--velmora-bg-alt)] mb-4">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-[var(--velmora-accent)] text-white text-xs px-2 py-1 tracking-wider uppercase">
            Bestseller
          </span>
        )}
        {/* Quick add overlay */}
        <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={() => addToCart(product, product.variants[0])}
            className="w-full bg-white/95 backdrop-blur-sm text-[var(--velmora-text)] py-3 text-sm tracking-widest uppercase hover:bg-[var(--velmora-accent)] hover:text-white transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-center">
        <h3 className="product-name text-[var(--velmora-text)] mb-1">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? 'fill-[var(--velmora-accent)] text-[var(--velmora-accent)]' : 'text-gray-300'}
            />
          ))}
          <span className="text-xs text-[var(--velmora-text-muted)] ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </div>
  );
};

const BestsellersSection = () => {
  const bestsellers = products.filter(p => p.bestseller).slice(0, 5);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title text-[var(--velmora-text)] mb-4">Bestsellers</h2>
          <div className="w-16 h-px bg-[var(--velmora-accent)] mx-auto mb-4" />
          <p className="text-[var(--velmora-text-muted)] max-w-md mx-auto">
            Our most-loved pieces, chosen by women who know what matters.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
