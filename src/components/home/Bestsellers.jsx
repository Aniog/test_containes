import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase font-medium text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-ink tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addItem(product, 'gold', 1)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 border border-velmora-ink text-velmora-ink text-xs tracking-widest uppercase font-medium px-8 py-3.5 hover:bg-velmora-ink hover:text-velmora-ivory transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate view`}
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-ivory text-[9px] tracking-widest uppercase font-medium px-2.5 py-1">
            {product.badge}
          </div>
        )}

        {/* Quick add */}
        <button
          onClick={(e) => { e.preventDefault(); onAddToCart(); }}
          className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 text-velmora-ivory text-[10px] tracking-widest uppercase font-medium py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          Add to Cart
        </button>
      </Link>

      {/* Info */}
      <div className="pt-3 pb-1">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm font-medium tracking-[0.12em] uppercase text-velmora-ink hover:text-velmora-gold transition-colors duration-200 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="text-xs text-velmora-mist mt-1 leading-relaxed">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm font-medium text-velmora-ink">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" className="text-velmora-gold" />
            <span className="text-[10px] text-velmora-mist">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
