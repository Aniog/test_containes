import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function BestsellersGrid() {
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleQuickAdd = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: product.variants[0],
      quantity: 1,
      image: product.images[0],
    });
  };

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto" />
          <p className="mt-4 text-taupe text-sm">Our most loved pieces, chosen by you</p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-4">
                <img
                  alt={product.shortName}
                  data-strk-img-id={product.images[0].id}
                  data-strk-img={`[${product.images[0].id}-text]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Quick add button */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                  hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="w-full bg-charcoal/90 hover:bg-charcoal text-cream text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product info */}
              <h3 className="text-xs tracking-widest uppercase text-charcoal mb-1 group-hover:text-gold transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'}`}
                  />
                ))}
                <span className="text-[10px] text-taupe ml-1">({product.reviews})</span>
              </div>
              <p className="text-sm text-charcoal font-medium">${product.price}</p>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-charcoal text-charcoal text-xs tracking-widest uppercase px-8 py-3 hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
