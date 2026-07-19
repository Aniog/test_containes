import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[var(--velmora-bg-alt)] mb-4 overflow-hidden">
        {/* Primary image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          data-strk-bg-id={`bestseller-${product.id}-primary`}
          data-strk-bg={`[${product.id}-desc] [${product.id}-title] bestsellers`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
        />
        {/* Hover image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          data-strk-bg-id={`bestseller-${product.id}-hover`}
          data-strk-bg={`[${product.id}-desc] [${product.id}-title] detail view`}
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="600"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[var(--velmora-dark)] text-white text-[10px] tracking-widest uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <button
            onClick={() => addItem(product, 'gold')}
            className="w-full velmora-btn-primary text-xs py-3"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <Link to={`/product/${product.id}`} className="block">
        <h3 id={`${product.id}-title`} className="velmora-product-name text-sm text-[var(--velmora-dark)] mb-1 group-hover:text-[var(--velmora-accent)] transition-colors">
          {product.name}
        </h3>
        <p id={`${product.id}-desc`} className="text-xs text-[var(--velmora-text-muted)] mb-2 line-clamp-1">
          {product.description}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star className="w-3 h-3 fill-[var(--velmora-star)] text-[var(--velmora-star)]" />
            <span className="text-xs text-[var(--velmora-text-muted)] ml-1">{product.rating}</span>
          </div>
          <span className="text-sm font-medium">${product.price}</span>
        </div>
      </Link>
    </div>
  );
};

const Bestsellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-accent)] mb-3">Most Loved</p>
          <h2 className="velmora-serif text-3xl sm:text-4xl text-[var(--velmora-dark)]">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="velmora-btn-outline inline-flex">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
