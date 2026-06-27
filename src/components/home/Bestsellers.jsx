import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { formatPrice, cn } from '@/lib/utils';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream rounded-sm mb-4">
          {/* Primary image */}
          <img
            data-strk-img-id={product.imgIdPrimary}
            data-strk-img={`[${product.descId}] [${product.titleId}] jewelry editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              hovered ? 'opacity-0' : 'opacity-100'
            )}
          />
          {/* Secondary image on hover */}
          <img
            data-strk-img-id={product.imgIdSecondary}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />
          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-velmora-charcoal text-velmora-cream text-[10px] tracking-widest uppercase px-3 py-1">
              {product.badge}
            </span>
          )}
          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, 'gold');
            }}
            className={cn(
              'absolute bottom-3 left-3 right-3 bg-velmora-charcoal/90 backdrop-blur-sm text-velmora-cream py-2.5 flex items-center justify-center gap-2 text-xs tracking-widest uppercase transition-all duration-300',
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            )}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Product info */}
      <div className="space-y-1">
        <h3 className="font-serif text-sm sm:text-base tracking-[0.15em] uppercase text-velmora-charcoal">
          <span id={product.titleId}>{product.name}</span>
        </h3>
        <p className="text-xs text-velmora-taupe" id={product.descId}>{product.subtitle}</p>
        <div className="flex items-center gap-2">
          <span className="font-serif text-base text-velmora-charcoal">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn('w-3 h-3', i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand')}
              />
            ))}
            <span className="text-[10px] text-velmora-taupe ml-1">({product.reviewCount})</span>
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
    <section ref={containerRef} className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-velmora-charcoal tracking-wide">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4 mb-3" />
          <p className="text-sm text-velmora-taupe tracking-wider">Our most loved pieces</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <Link
            to="/shop"
            className="inline-block border border-velmora-charcoal text-velmora-charcoal px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-velmora-charcoal hover:text-velmora-cream transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
