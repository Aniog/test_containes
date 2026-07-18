import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { Star, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

function RelatedCard({ product }) {
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
      className="group block flex-shrink-0 w-48 md:w-56"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-velmora-dark/5 aspect-[3/4] mb-3">
        {/* Primary image */}
        <img
          data-strk-img-id={primaryImg.id}
          data-strk-img={primaryImg.query}
          data-strk-img-ratio={primaryImg.ratio}
          data-strk-img-width={primaryImg.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Hover image */}
        <img
          data-strk-img-id={hoverImg.id}
          data-strk-img={hoverImg.query}
          data-strk-img-ratio={hoverImg.ratio}
          data-strk-img-width={hoverImg.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={handleAddToCart}
            className="w-full bg-velmora-dark/90 backdrop-blur-sm text-white text-[10px] tracking-widest uppercase py-2.5 flex items-center justify-center gap-1.5 hover:bg-velmora-gold transition-colors"
          >
            <ShoppingBag size={12} />
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="font-sans text-[10px] tracking-widest uppercase text-velmora-text group-hover:text-velmora-gold transition-colors truncate">
        {product.name}
      </h3>
      <div className="flex items-center gap-1 mt-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={10}
            className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
          />
        ))}
      </div>
      <p className="font-serif text-base mt-1">${product.price}</p>
    </Link>
  );
}

export default function RelatedProducts({ currentProductId }) {
  const containerRef = useRef(null);
  const related = products.filter((p) => p.id !== currentProductId).slice(0, 4);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-velmora-border mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-velmora-text tracking-wide mb-8">
          You May Also Like
        </h2>
        <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-2">
          {related.map((product) => (
            <RelatedCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
