import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { Badge } from '@/components/ui/Badge';
import { useCart } from '@/context/CartContext';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className={`w-3 h-3 ${i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-border'}`}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-heading]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0"
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry styled flat lay`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate view`}
            className="w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute inset-0"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3">
              <Badge variant="gold">{product.badge}</Badge>
            </div>
          )}

          {/* Quick add overlay */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full bg-charcoal text-ivory font-inter text-xs tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-charcoal-mid transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div>
        <p id={product.descId} className="sr-only">{product.shortDesc}</p>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-cormorant font-medium text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors mb-1.5"
          >
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="font-inter text-sm font-medium text-charcoal">${product.price}</span>
          <div className="flex items-center gap-1.5">
            <StarRating rating={product.rating} />
            <span className="font-inter text-xs text-taupe-light">({product.reviewCount})</span>
          </div>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">Our Favorites</p>
          <h2 id="bestsellers-heading" className="font-cormorant font-light text-4xl md:text-5xl text-charcoal">
            Bestsellers
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
