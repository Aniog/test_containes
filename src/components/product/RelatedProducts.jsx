import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function RelatedProducts({ currentProduct }) {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const related = products
    .filter(p => p.id !== currentProduct.id && (p.category === currentProduct.category || p.tags.some(t => currentProduct.tags.includes(t))))
    .slice(0, 4);

  const fallback = products.filter(p => p.id !== currentProduct.id).slice(0, 4);
  const items = related.length >= 2 ? related : fallback;

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [currentProduct.id]);

  return (
    <section className="py-16 md:py-24 bg-velmora-linen" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            You May Also Like
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-text-primary">
            Complete the Look
          </h2>
          <div className="w-10 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map(product => (
            <RelatedCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-velmora-cream aspect-portrait mb-3">
          <img
            data-strk-img-id={`related-${product.imgId}`}
            data-strk-img={`[related-${product.id}-desc] [related-${product.id}-title] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-105' : 'scale-100'}`}
          />
          <button
            onClick={(e) => { e.preventDefault(); onAddToCart(); }}
            className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 text-velmora-cream font-sans text-[10px] tracking-[0.2em] uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <ShoppingBag className="w-3 h-3" />
            Add to Cart
          </button>
        </div>
      </Link>
      <p id={`related-${product.id}-title`} className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-text-primary text-center mb-1">
        {product.name}
      </p>
      <p id={`related-${product.id}-desc`} className="sr-only">{product.shortDescription}</p>
      <p className="font-serif text-sm text-velmora-text-primary text-center">${product.price}</p>
    </div>
  );
}
