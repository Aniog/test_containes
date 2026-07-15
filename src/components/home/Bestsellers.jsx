import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function Bestsellers() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const bestsellers = products.slice(0, 5);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="section-heading">Bestsellers</h2>
        <p className="section-subhead">The pieces our customers treasure most.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onNavigate={() => navigate(`/product/${product.id}`)}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onNavigate, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velmora-sand overflow-hidden mb-3">
        <img
          alt={product.name}
          data-strk-img-id={`bestseller-${product.id}`}
          data-strk-img={`[bestseller-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Quick add overlay */}
        <div
          className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onAddToCart(); }}
            className="w-full bg-velmora-espresso/90 backdrop-blur-sm text-white text-xs font-medium tracking-wider uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-velmora-gold transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <span id={`bestseller-name-${product.id}`} className="hidden">{product.name}</span>
      <div onClick={onNavigate} className="cursor-pointer">
        <h3 className="product-name">{product.name}</h3>
        <p className="text-sm text-velmora-stone mt-0.5">${product.price}</p>
      </div>
    </div>
  );
}
