import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

const bestsellers = products.filter((p) => p.isBestseller);

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      {/* Image container */}
      <div className="relative overflow-hidden bg-velmora-cream aspect-portrait">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.images[1]?.id || `${product.imgId}-hover`}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
        />

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className={`w-full py-3 font-manrope text-xs uppercase tracking-widest transition-colors duration-200 flex items-center justify-center gap-2 ${
              added
                ? 'bg-velmora-gold text-velmora-obsidian'
                : 'bg-velmora-obsidian text-velmora-ivory hover:bg-velmora-charcoal'
            }`}
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {/* Bestseller badge */}
        <div className="absolute top-3 left-3">
          <span className="font-manrope text-[9px] uppercase tracking-widest bg-velmora-gold text-velmora-obsidian px-2 py-1">
            Bestseller
          </span>
        </div>
      </div>

      {/* Product info */}
      <div className="pt-4 pb-2">
        <p id={product.titleId} className="font-cormorant text-base uppercase tracking-widest text-velmora-obsidian leading-tight mb-1">
          {product.name}
        </p>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>

        <div className="flex items-center justify-between">
          <span className="font-manrope text-sm text-velmora-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-stone'}
                  strokeWidth={1}
                />
              ))}
            </div>
            <span className="font-manrope text-[10px] text-velmora-mink">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-2">Curated for You</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal hover:text-velmora-gold transition-colors duration-200 border-b border-velmora-stone hover:border-velmora-gold pb-0.5 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
