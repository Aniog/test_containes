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
            id={`bs-img-${product.id}`}
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
          {/* Secondary image (hover) */}
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

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {product.tags.includes('bestseller') && (
              <span className="bg-gold text-obsidian text-[9px] tracking-widest uppercase font-bold px-2 py-1">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-obsidian text-ivory text-[9px] tracking-widest uppercase font-bold px-2 py-1">
                New
              </span>
            )}
          </div>

          {/* Quick add button */}
          <button
            onClick={handleAdd}
            className={`absolute bottom-0 left-0 right-0 bg-obsidian text-ivory text-[10px] tracking-widest uppercase font-semibold py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag size={12} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {/* Product info */}
        <div>
          <p
            id={product.titleId}
            className="font-sans text-xs tracking-widest uppercase font-semibold text-obsidian mb-1"
          >
            {product.name}
          </p>
          <p
            id={product.descId}
            className="text-xs text-taupe mb-2 leading-relaxed"
          >
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-sans text-sm font-semibold text-obsidian">
              ${product.price}
            </span>
            <div className="flex items-center gap-1">
              <Star size={10} className="text-gold" fill="#C9A96E" />
              <span className="text-[10px] text-taupe">{product.rating}</span>
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

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-ultra-wide uppercase font-medium mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian mb-4">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
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
            className="inline-block border border-obsidian text-obsidian text-xs tracking-widest uppercase font-semibold px-10 py-4 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
