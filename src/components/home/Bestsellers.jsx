import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { getBestsellers } from '../../data/products';
import { formatPrice } from '../../lib/utils';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';

function ProductCard({ product }) {
  const { addToCart, isLoading } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0]);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] mb-4 overflow-hidden" style={{ backgroundColor: 'var(--color-ivory)' }}>
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isHovered && product.images[1] ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Secondary Image (hover) */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Bestseller Badge */}
        <div
          className="absolute top-3 left-3 px-2 py-1 text-[10px] tracking-widest uppercase"
          style={{
            backgroundColor: 'var(--color-charcoal)',
            color: 'var(--color-cream)',
          }}
        >
          Bestseller
        </div>

        {/* Quick Add Button */}
        <button
          onClick={handleQuickAdd}
          disabled={isLoading}
          className={`absolute bottom-4 left-4 right-4 py-3 text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          style={{
            backgroundColor: 'var(--color-cream)',
            color: 'var(--color-charcoal)',
          }}
        >
          <ShoppingBag className="w-4 h-4" />
          Quick Add
        </button>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="product-name text-sm mb-1" style={{ color: 'var(--color-espresso)' }}>
          {product.name}
        </h3>
        <p className="text-sm font-medium" style={{ color: 'var(--color-walnut)' }}>
          {formatPrice(product.price)}
        </p>
        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mt-2">
          <Star className="w-3 h-3 fill-current" style={{ color: 'var(--color-gold)' }} />
          <span className="text-xs" style={{ color: 'var(--color-taupe)' }}>
            {product.rating} ({product.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="font-serif text-3xl md:text-4xl mb-3"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-espresso)' }}
          >
            Our Bestsellers
          </h2>
          <p className="text-sm" style={{ color: 'var(--color-taupe)' }}>
            Most loved pieces from our collection
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}