import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]?.id || 'gold');
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] bg-velmora-linen overflow-hidden mb-4">
        <div
          data-strk-img-id={`product-${product.id}`}
          data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          className="absolute inset-0"
        >
          <div className={`w-full h-full bg-gradient-to-br from-velmora-ivory to-velmora-sand transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-serif text-3xl text-velmora-gold-muted/60 tracking-widest-2xl">VM</span>
            </div>
          </div>
        </div>

        {/* Quick add overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm text-velmora-charcoal py-2.5 text-[10px] uppercase tracking-widest-xl font-sans hover:bg-velmora-gold hover:text-white transition-all duration-200"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.round(product.rating)
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'text-velmora-sand'
              }`}
            />
          ))}
          <span className="text-[10px] text-velmora-taupe ml-1">({product.reviewCount})</span>
        </div>
        <p id={`product-name-${product.id}`} className="font-serif text-base uppercase tracking-widest-xl text-velmora-charcoal">
          {product.name}
        </p>
        <p id={`product-desc-${product.id}`} className="text-xs text-velmora-taupe line-clamp-1">
          {product.description}
        </p>
        <p className="font-sans text-sm text-velmora-charcoal">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
