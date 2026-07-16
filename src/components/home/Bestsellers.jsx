import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product, index, className = '' }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className={`group animate-fade-in ${className}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-4">
          <img
            data-strk-img-id={`bestseller-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {hovered && (
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product, 'Gold', 1);
              }}
              className="absolute bottom-3 left-3 right-3 bg-velmora-charcoal/90 text-white text-[11px] font-medium tracking-wider uppercase py-2.5 text-center hover:bg-velmora-gold transition-colors"
            >
              Quick Add to Bag
            </button>
          )}
        </div>
      </Link>
      <div className="flex items-center gap-1 mb-1.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`}
          />
        ))}
        <span className="text-[11px] text-velmora-stone ml-1">({product.reviewCount})</span>
      </div>
      <Link to={`/product/${product.slug}`}>
        <h3
          id={product.titleId}
          className="product-name text-xs md:text-sm mb-1 hover:text-velmora-gold transition-colors"
        >
          {product.name}
        </h3>
      </Link>
      <p id={product.descId} className="sr-only">{product.description}</p>
      <p className="text-sm font-medium text-velmora-charcoal">${product.price}</p>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);
  const bestsellers = products.filter((p) => p.isBestseller);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-xs font-medium tracking-widest uppercase text-velmora-stone mb-3">Loved by Our Community</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">Bestsellers</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
        {bestsellers.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            className={i === bestsellers.length - 1 ? 'lg:col-span-1 md:col-span-1' : ''}
          />
        ))}
      </div>
      <div className="text-center mt-14">
        <Link to="/shop" className="btn-outline text-xs">
          View All Products
        </Link>
      </div>
    </section>
  );
}