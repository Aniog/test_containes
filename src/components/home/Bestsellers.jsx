import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      {/* Image container */}
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 scale-105"
        />

        {/* Tags */}
        {product.tags?.includes('bestseller') && (
          <span className="absolute top-3 left-3 font-manrope text-[9px] tracking-[0.12em] uppercase bg-gold text-obsidian px-2 py-1">
            Bestseller
          </span>
        )}
        {product.tags?.includes('new') && (
          <span className="absolute top-3 left-3 font-manrope text-[9px] tracking-[0.12em] uppercase bg-obsidian text-parchment px-2 py-1">
            New
          </span>
        )}

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-parchment font-manrope text-[10px] tracking-[0.15em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors duration-200"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        {/* Hidden text for image query */}
        <span id={product.titleId} className="sr-only">{product.name}</span>
        <span id={product.descId} className="sr-only">{product.shortDesc}</span>

        <Link to={`/product/${product.slug}`}>
          <h3 className="font-cormorant text-base font-medium tracking-[0.12em] uppercase text-obsidian hover:text-gold transition-colors duration-200 leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="font-manrope text-xs text-muted mt-1">{product.shortDesc}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-manrope text-sm font-medium text-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-manrope text-[10px] text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-manrope text-xs tracking-[0.18em] uppercase text-gold mb-3">
              Our Favourites
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian tracking-wide">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs tracking-[0.12em] uppercase text-muted border-b border-muted pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
