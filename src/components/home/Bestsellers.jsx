import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
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
    <section ref={containerRef} className="bg-ivory py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-widest text-champagne font-medium mb-3">Curated for You</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal font-light">Bestsellers</h2>
          <div className="w-12 h-px bg-champagne mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-champagne text-champagne-dark font-sans text-xs uppercase tracking-widest font-semibold px-10 py-3.5 hover:bg-champagne hover:text-obsidian transition-colors duration-300"
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
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <Link to={`/product/${product.slug}`}>
        <div className="relative aspect-[3/4] bg-parchment overflow-hidden mb-4">
          {/* Main image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="bg-champagne text-obsidian font-sans text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-obsidian text-ivory font-sans text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5">
                New
              </span>
            )}
          </div>

          {/* Quick add button */}
          <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <button
              onClick={(e) => { e.preventDefault(); onAddToCart(); }}
              className="w-full bg-obsidian/90 text-ivory font-sans text-[10px] uppercase tracking-widest font-semibold py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
            >
              <ShoppingBag size={12} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div>
        <p id={product.descId} className="hidden">{product.shortDescription}</p>
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-wider text-charcoal hover:text-champagne-dark transition-colors leading-tight mb-1">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'text-champagne fill-champagne' : 'text-mist'}
            />
          ))}
          <span className="font-sans text-[10px] text-stone ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-serif text-base text-charcoal">${product.price}</p>
      </div>
    </div>
  );
}
