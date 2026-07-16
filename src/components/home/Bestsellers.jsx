import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-taupe text-xs tracking-[0.25em] uppercase font-sans mb-2">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-dark-forest">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-warm-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-warm-gold hover:text-warm-gold/80 transition-colors duration-300 border border-warm-gold px-6 py-2.5 rounded-sm"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative bg-white border border-warm-beige/60 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] bg-warm-beige/30 relative overflow-hidden">
          <img
            data-strk-img-id={`bestseller-${product.id}`}
            data-strk-img={`${product.description} gold jewelry editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            data-strk-img-id={`bestseller-${product.id}-hover`}
            data-strk-img={`${product.description} style detail gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </Link>

      <div className="p-3 md:p-4">
        <div className="flex items-center gap-1 mb-1">
          <Star size={12} className="text-muted-gold fill-muted-gold" />
          <span className="text-[10px] text-taupe">{product.rating}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xs tracking-[0.2em] uppercase text-dark-forest leading-tight">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm font-medium text-dark-forest mt-1">${product.price}</p>
      </div>

      <button
        onClick={() => onAddToCart(product, 'gold', 1)}
        className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-warm-gold hover:text-white"
      >
        <ShoppingBag size={14} />
      </button>
    </div>
  );
}