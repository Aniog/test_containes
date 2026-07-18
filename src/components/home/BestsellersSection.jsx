import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { Star, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    openCart();
  };

  const primaryImg = product.images[0];
  const hoverImg = product.images[1];

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-velmora-dark/5 aspect-[3/4] mb-4">
        {/* Primary image - always visible */}
        <img
          data-strk-img-id={primaryImg.id}
          data-strk-img={primaryImg.query}
          data-strk-img-ratio={primaryImg.ratio}
          data-strk-img-width={primaryImg.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Hover image - shown on hover */}
        <img
          data-strk-img-id={hoverImg.id}
          data-strk-img={hoverImg.query}
          data-strk-img-ratio={hoverImg.ratio}
          data-strk-img-width={hoverImg.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-dark text-white text-[10px] tracking-widest uppercase px-3 py-1.5 font-sans">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-dark/90 backdrop-blur-sm text-white text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-velmora-gold transition-colors"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="text-center">
        <h3 className="font-sans text-xs tracking-widest-xl uppercase text-velmora-text group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
            />
          ))}
          <span className="text-[10px] text-velmora-muted ml-1">({product.reviews})</span>
        </div>
        <p className="font-serif text-lg mt-2 text-velmora-text">${product.price}</p>
      </div>
    </Link>
  );
}

export default function BestsellersSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="section-subtitle">Curated for you</p>
          <h2 className="section-title mt-3">Bestsellers</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link to="/shop" className="btn-secondary inline-block">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  );
}
