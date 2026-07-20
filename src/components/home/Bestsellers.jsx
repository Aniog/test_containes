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
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          className={s <= Math.round(rating) ? 'text-gold fill-gold' : 'text-stone'}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      {/* Image container */}
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
        />

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full bg-obsidian/90 text-cream font-inter text-xs tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-200"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-inter text-[10px] tracking-widest uppercase text-mist mb-1">
              {product.category}
            </p>
            <Link to={`/product/${product.slug}`}>
              <h3
                id={product.titleId}
                className="font-cormorant text-base font-medium tracking-widest uppercase text-ink hover:text-gold transition-colors duration-200 leading-tight"
              >
                {product.name}
              </h3>
            </Link>
            <p id={product.descId} className="sr-only">{product.shortDescription}</p>
          </div>
          <span className="font-inter text-sm font-medium text-ink flex-shrink-0">
            ${product.price}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-inter text-[10px] text-mist">({product.reviewCount})</span>
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">
              Curated for You
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-inter text-xs tracking-widest uppercase text-mist border-b border-mist/40 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
