import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[4/5] bg-[var(--color-ivory)] overflow-hidden mb-4">
          {/* Primary Image */}
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Hover Image */}
          <img
            src={product.hoverImage}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Quick Add Button */}
          <div
            className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product, 1, product.variants[0]);
              }}
              className="w-full py-3 bg-white/90 backdrop-blur-sm font-sans text-sm tracking-wide hover:bg-white transition-colors flex items-center justify-center gap-2"
              style={{ color: 'var(--color-warm-black)' }}
            >
              <ShoppingBag className="w-4 h-4" />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name text-xs mb-2" style={{ color: 'var(--color-warm-black)' }}>
          {product.name}
        </h3>
        <p className="font-sans text-sm mb-2" style={{ color: 'var(--color-muted)' }}>
          {product.description}
        </p>
        <p className="font-sans font-medium" style={{ color: 'var(--color-warm-black)' }}>
          ${product.price}
        </p>
        
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3"
              fill={i < product.rating ? 'var(--color-gold)' : 'none'}
              style={{ color: 'var(--color-gold)' }}
            />
          ))}
          <span className="font-sans text-xs ml-1" style={{ color: 'var(--color-muted)' }}>
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-20 lg:py-28">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: 'var(--color-warm-black)' }}>
            Bestsellers
          </h2>
          <div className="hairline max-w-20 mx-auto mb-4" />
          <p className="font-sans text-sm max-w-md mx-auto" style={{ color: 'var(--color-muted)' }}>
            Our most loved pieces, chosen by women who appreciate timeless elegance
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {bestsellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}