import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { StarRating } from '@/components/ui/StarRating';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BestsellersGrid() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-3">Curated for You</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="font-inter text-xs tracking-widest uppercase text-velmora-obsidian border-b border-velmora-gold pb-0.5 hover:text-velmora-gold transition-colors duration-200"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4] rounded-sm mb-3">
          {/* Badge */}
          {product.badge && (
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="font-inter text-[9px] tracking-widest uppercase bg-velmora-gold text-velmora-obsidian px-2 py-0.5">
                {product.badge}
              </span>
            </div>
          )}

          {/* Primary image */}
          <img
            id={product.imgId}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />

          {/* Hover image */}
          <img
            id={product.img2Id}
            data-strk-img-id={product.img2Id}
            data-strk-img={`[${product.titleId}] gold jewelry worn editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={`${product.name} worn`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Quick add overlay */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); onAddToCart(); }}
              className="w-full bg-velmora-obsidian/90 text-velmora-linen font-inter text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-200"
            >
              <ShoppingBag size={12} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="space-y-1">
        <p id={product.titleId} className="font-cormorant text-sm uppercase tracking-[0.12em] text-velmora-obsidian leading-tight">
          {product.name}
        </p>
        <p id={product.descId} className="hidden">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <StarRating rating={product.rating} size={11} />
          <div className="flex items-center gap-1.5">
            {product.originalPrice && (
              <span className="font-inter text-xs text-velmora-ash line-through">${product.originalPrice}</span>
            )}
            <span className="font-inter text-sm text-velmora-obsidian font-medium">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
