import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-medium tracking-widest uppercase text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addItem(product)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink font-sans text-xs font-medium tracking-widest uppercase px-10 py-3.5 hover:bg-ink hover:text-cream transition-all duration-300"
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
    <div className="product-card group cursor-pointer">
      <Link to={`/product/${product.slug}`}>
        {/* Image container */}
        <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
          {/* Primary image */}
          <img
            className="product-img-primary absolute inset-0 w-full h-full object-cover"
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
          />
          {/* Secondary image (hover) */}
          <img
            className="product-img-secondary absolute inset-0 w-full h-full object-cover"
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.titleId}] gold jewelry close up detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
          />

          {/* Quick add button */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); onAddToCart(); }}
              className="w-full bg-obsidian/90 text-cream font-sans text-[10px] font-medium tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      {/* Product info */}
      <div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-sans text-[11px] font-medium tracking-product uppercase text-ink hover:text-gold transition-colors duration-300 leading-tight mb-1"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-[11px] text-mist leading-snug mb-2 line-clamp-2">{product.shortDescription}</p>
        <div className="flex items-center gap-1 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'}
            />
          ))}
          <span className="font-sans text-[10px] text-mist ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-serif text-base font-light text-ink">${product.price}</p>
      </div>
    </div>
  );
}
