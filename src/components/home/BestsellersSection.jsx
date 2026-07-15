import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
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
          className="w-3 h-3"
          style={i <= Math.round(rating)
            ? { fill: '#C9A96E', color: '#C9A96E' }
            : { fill: 'none', color: '#E8E0D5' }
          }
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="product-card group cursor-pointer">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-portrait">
        {/* Primary image */}
        <img
          className="product-image-primary absolute inset-0 w-full h-full object-cover"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
        {/* Secondary image (hover) */}
        <img
          className="product-image-secondary absolute inset-0 w-full h-full object-cover"
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
        />

        {/* Badge */}
        {product.badge && (
          <div
            className="absolute top-3 left-3 font-manrope text-[10px] tracking-widest uppercase px-2.5 py-1"
            style={{ backgroundColor: '#1A1614', color: '#FAF7F2' }}
          >
            {product.badge}
          </div>
        )}

        {/* Quick add button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-full font-manrope text-xs tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 transition-colors"
            style={{ backgroundColor: '#1A1614', color: '#FAF7F2' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2C2420'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1A1614'; }}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link to={`/product/${product.slug}`}>
              <h3
                id={product.titleId}
                className="font-cormorant text-base uppercase tracking-[0.12em] text-velmora-obsidian font-medium leading-tight hover:text-velmora-gold-muted transition-colors"
              >
                {product.name}
              </h3>
            </Link>
            <p
              id={product.descId}
              className="font-manrope text-xs text-velmora-text-muted mt-1 leading-relaxed"
            >
              {product.shortDescription}
            </p>
          </div>
          <span className="font-manrope text-sm font-medium text-velmora-obsidian flex-shrink-0">
            ${product.price}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[11px] text-velmora-text-muted">
            ({product.reviewCount})
          </span>
        </div>
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
    <section ref={containerRef} className="py-20 lg:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-obsidian">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-obsidian text-velmora-obsidian font-manrope text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-velmora-obsidian hover:text-velmora-ivory transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
