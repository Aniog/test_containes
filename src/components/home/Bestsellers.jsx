import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
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
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-charcoal aspect-product mb-4">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-obsidian text-[8px] tracking-widest uppercase px-2 py-1 font-medium">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian/80 text-parchment text-[8px] tracking-widest uppercase px-2 py-1 border border-mink/60">
              New
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAdd}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-parchment text-[9px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-all duration-300 border-t border-mink/40"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1">
        <p id={product.titleId} className="text-[10px] tracking-widest uppercase text-parchment font-medium group-hover:text-gold transition-colors duration-300">
          {product.name}
        </p>
        <p id={product.descId} className="text-xs text-stone">{product.shortDescription}</p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm text-parchment font-medium">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" className="text-gold" />
            <span className="text-[10px] text-stone">{product.rating}</span>
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
    <section ref={containerRef} className="py-20 lg:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3 font-medium">Curated for You</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-parchment font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center border border-gold text-gold text-[10px] tracking-widest uppercase px-8 py-4 hover:bg-gold hover:text-obsidian transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
