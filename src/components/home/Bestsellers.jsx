import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBestsellers } from '@/api/products';
import { useCart } from '@/context/CartContext';
import { Star } from 'lucide-react';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-surface-muted overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            src={product.image_hover_url || product.image_url}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product, product.variants?.[0] || 'Gold');
        }}
        className={`absolute bottom-4 left-4 right-4 bg-white text-foreground py-3 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-accent hover:text-white ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        Add to Cart — ${product.price.toFixed(2)}
      </button>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-sm md:text-base tracking-product uppercase">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-star text-star" />
          <span className="text-xs text-muted">{product.rating}</span>
          <span className="text-xs text-muted">({product.review_count})</span>
        </div>
        <p className="text-sm mt-1">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetchBestsellers()
      .then((rows) => {
        setProducts(rows);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase text-muted mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light">Bestsellers</h2>
        </div>

        {status === 'loading' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-surface-muted" />
                <div className="h-4 bg-surface-muted mt-4 w-2/3 mx-auto" />
                <div className="h-3 bg-surface-muted mt-2 w-1/3 mx-auto" />
              </div>
            ))}
          </div>
        )}

        {status === 'ready' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product.data || product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
