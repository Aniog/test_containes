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
    <div className="group cursor-pointer">
      <Link to={`/product/${product.slug}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-linen aspect-[3/4]">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-600 group-hover:opacity-0"
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-600 group-hover:opacity-100"
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="bg-obsidian text-cream font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-gold text-obsidian font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
                New
              </span>
            )}
          </div>

          {/* Quick add overlay */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full bg-obsidian/90 backdrop-blur-sm text-cream font-manrope text-xs tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
            >
              <ShoppingBag size={13} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div className="mt-3 px-0.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p
              id={product.titleId}
              className="font-cormorant text-sm uppercase tracking-wider text-obsidian leading-tight"
            >
              {product.name}
            </p>
            <p
              id={product.descId}
              className="font-manrope text-xs text-ink-muted mt-0.5"
            >
              {product.shortDescription}
            </p>
          </div>
          <p className="font-manrope text-sm font-medium text-obsidian flex-shrink-0">
            ${product.price}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand'}
              fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
            />
          ))}
          <span className="font-manrope text-[10px] text-ink-muted ml-1">({product.reviewCount})</span>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
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
            className="inline-block border border-obsidian text-obsidian font-manrope text-xs tracking-widest uppercase px-10 py-3.5 hover:bg-obsidian hover:text-cream transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
