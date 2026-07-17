import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-ivory-dark overflow-hidden product-img-wrap">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-400 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-400 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-obsidian font-sans text-[9px] uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian text-ivory font-sans text-[9px] uppercase tracking-widest px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-obsidian/90 text-ivory font-sans text-[10px] uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={13} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 px-1">
        <p id={product.titleId} className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight">
          {product.name}
        </p>
        <p id={product.descId} className="font-sans text-xs text-taupe mt-1 line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm font-semibold text-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={11} className="text-gold fill-gold" />
            <span className="font-sans text-xs text-taupe">{product.rating}</span>
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
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-3">
              Most Loved
            </p>
            <h2 id="bestsellers-title" className="font-serif text-3xl md:text-4xl font-light text-obsidian">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs uppercase tracking-widest text-taupe hover:text-gold transition-colors duration-300 border-b border-taupe-light pb-0.5 self-start md:self-auto"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
