import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-3">
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Quick add overlay */}
          <div
            className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full bg-white/95 backdrop-blur-sm text-charcoal py-2.5 px-4 flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-sans font-medium hover:bg-gold hover:text-white transition-colors duration-300"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-base md:text-lg uppercase tracking-product text-charcoal hover:text-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1.5 mt-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-warm-gray-light'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-warm-gray">({product.reviews})</span>
        </div>
        <p className="font-sans text-sm font-medium text-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function Bestsellers() {
  const containerRef = useRef(null);
  const featured = products.filter(p => p.featured);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
