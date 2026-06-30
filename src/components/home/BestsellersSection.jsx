import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative flex flex-col">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-linen aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-velmora-obsidian/90 backdrop-blur-sm">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 font-manrope text-xs uppercase tracking-widest text-velmora-ivory hover:text-velmora-champagne transition-colors duration-200"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>

        {/* Bestseller badge */}
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-velmora-champagne text-velmora-obsidian font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
            Bestseller
          </div>
        )}
      </Link>

      {/* Product info */}
      <div className="pt-4 flex flex-col gap-1">
        <div className="flex items-center gap-1 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-velmora-champagne text-velmora-champagne' : 'text-velmora-blush'}`}
            />
          ))}
          <span className="font-manrope text-[10px] text-velmora-stone ml-1">({product.reviewCount})</span>
        </div>

        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian hover:text-velmora-champagne transition-colors duration-200 leading-tight"
          >
            {product.name}
          </h3>
        </Link>

        <p id={product.descId} className="font-manrope text-xs text-velmora-stone leading-relaxed line-clamp-2 hidden">
          {product.shortDescription}
        </p>

        <p className="font-manrope text-sm font-medium text-velmora-obsidian mt-1">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne mb-3">
              Most Loved
            </p>
            <h2 id="bestsellers-title" className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-manrope text-xs uppercase tracking-widest text-velmora-stone hover:text-velmora-champagne transition-colors duration-200 flex items-center gap-2 self-start md:self-auto"
          >
            View All
            <span className="text-velmora-champagne">→</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
