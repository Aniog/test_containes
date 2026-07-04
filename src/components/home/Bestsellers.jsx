import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
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
          size={11}
          style={i <= Math.round(rating)
            ? { fill: '#C9A96E', color: '#C9A96E' }
            : { fill: 'none', color: '#D4C9B5' }
          }
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <article className="group relative bg-velmora-cream">
      {/* Image area */}
      <div className="relative overflow-hidden aspect-[3/4] bg-velmora-cream">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
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

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-gold font-manrope text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={() => addItem(product, product.variants[0])}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-text-light font-manrope text-xs tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="pt-3 pb-4 px-1">
        <div className="flex items-center gap-1.5 mb-1.5">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[10px] text-velmora-text-muted">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-cormorant text-base uppercase tracking-[0.12em] text-velmora-text-dark font-medium hover:text-velmora-gold transition-colors duration-200 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <p className="font-manrope text-sm text-velmora-text-mid mt-1 font-medium">
          ${product.price}
        </p>
      </div>
    </article>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-linen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-manrope text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-text-dark">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-stone text-velmora-text-dark font-manrope text-xs tracking-widest uppercase px-10 py-4 hover:bg-velmora-obsidian hover:text-velmora-text-light hover:border-velmora-obsidian transition-all duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
