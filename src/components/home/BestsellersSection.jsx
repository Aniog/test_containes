import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          strokeWidth={1}
          className={s <= Math.round(rating) ? 'star-filled fill-gold' : 'star-empty'}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-ivory aspect-[3/4]">
        {/* Primary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Secondary image */}
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId2}
          data-strk-img={`gold jewelry close-up detail [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className="bg-charcoal text-cream text-[9px] tracking-widest uppercase px-2.5 py-1"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 py-3 flex items-center justify-center gap-2 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="flex items-center gap-2 text-cream text-xs tracking-widest uppercase font-medium hover:text-gold transition-colors"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2">
        <div className="flex items-center justify-between mb-1">
          <span
            className="text-[9px] tracking-widest uppercase text-taupe"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {product.categoryLabel}
          </span>
          <StarRating rating={product.rating} />
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="text-sm tracking-widest uppercase text-charcoal font-light hover:text-gold transition-colors leading-snug"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.12em' }}
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={product.descId}
          className="text-xs text-taupe mt-0.5 leading-snug"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {product.subtitle}
        </p>
        <p
          className="text-sm font-medium text-charcoal mt-2"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
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
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="text-xs tracking-widest uppercase text-gold mb-3"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Most Loved
          </p>
          <h2
            className="text-4xl md:text-5xl font-light text-charcoal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-charcoal text-charcoal text-xs tracking-widest uppercase px-10 py-3.5 hover:bg-charcoal hover:text-cream transition-all duration-200"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
