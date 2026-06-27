import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';
import { useCart } from '@/components/cart/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const bestsellers = products.filter((p) => p.featured);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-14">
        <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)]">Customer Favorites</span>
        <h2 className="font-[var(--font-serif)] text-3xl md:text-4xl mt-3 font-semibold">Bestsellers</h2>
        <div className="w-12 h-px bg-[var(--color-accent)] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product, idx) => (
          <div key={product.id} className="group animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-[var(--color-surface-alt)] overflow-hidden rounded-sm mb-4">
              <img
                data-strk-img-id={`bestseller-${product.id}`}
                data-strk-img={`[bs-name-${product.id}] [bestsellers-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span id={`bs-name-${product.id}`} className="sr-only">{product.name}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem({ productId: product.id, variant: product.variants[0].value, price: product.price, quantity: 1, name: product.name });
                }}
                className="absolute bottom-3 right-3 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--color-surface-dark)] hover:text-white translate-y-2 group-hover:translate-y-0"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingBag className="w-4 h-4" />
              </button>
            </Link>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--color-border)]'}`} />
              ))}
              <span className="text-xs text-[var(--color-text-muted)] ml-1">({product.reviewCount})</span>
            </div>
            <Link to={`/product/${product.id}`}>
              <h3 className="font-[var(--font-serif)] text-sm font-semibold tracking-wider uppercase text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm font-medium mt-1">${product.price}</p>
          </div>
        ))}
      </div>

      <span id="bestsellers-title" className="sr-only">Bestsellers</span>
    </section>
  );
}
