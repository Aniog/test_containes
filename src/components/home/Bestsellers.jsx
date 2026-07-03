import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          style={i <= Math.round(rating)
            ? { fill: '#C9A96E', color: '#C9A96E' }
            : { fill: '#E2D9CC', color: '#E2D9CC' }
          }
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      {/* Image container */}
      <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="font-manrope text-[9px] uppercase tracking-widest bg-champagne text-obsidian px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-manrope text-[9px] uppercase tracking-widest bg-obsidian text-ivory px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <button
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-manrope text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-champagne hover:text-obsidian"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag size={12} />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      {/* Info */}
      <div>
        <p id={product.titleId} className="font-cormorant text-sm uppercase tracking-[0.12em] text-obsidian mb-1 leading-tight">
          {product.name}
        </p>
        <p id={product.descId} className="font-manrope text-xs text-stone mb-2 hidden">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-manrope text-sm font-medium text-obsidian">${product.price}</span>
          <StarRating rating={product.rating} />
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
    <section ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-champagne mb-3">
            Most Loved
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian mb-4">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-champagne mx-auto" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-champagne text-champagne font-manrope text-xs uppercase tracking-widest px-10 py-4 hover:bg-champagne hover:text-obsidian transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
