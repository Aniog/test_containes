import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />

          {/* Quick add button */}
          <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
            <button
              onClick={handleAdd}
              className="w-full bg-obsidian text-ivory font-manrope text-xs uppercase tracking-[0.12em] py-3.5 hover:bg-charcoal transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag size={13} strokeWidth={1.5} />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        </div>

        {/* Product info */}
        <div>
          <p
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-[0.12em] text-obsidian mb-1 group-hover:text-gold transition-colors"
          >
            {product.name}
          </p>
          <p id={product.descId} className="sr-only">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-manrope text-sm font-medium text-charcoal">
              ${product.price}
            </span>
            <div className="flex items-center gap-1">
              <Star size={11} className="fill-gold text-gold" />
              <span className="font-manrope text-xs text-mink">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = products.filter(p => p.featured);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-manrope text-xs uppercase tracking-[0.15em] text-gold mb-3">
              Most Loved
            </p>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs uppercase tracking-[0.12em] text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors self-start sm:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
