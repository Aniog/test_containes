import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag, Heart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const handleAddToCart = () => {
    addItem(product, variant, quantity);
    openCart();
  };

  return (
    <div className="md:pl-8 lg:pl-12">
      {/* Badge */}
      {product.badge && (
        <span className="inline-block bg-velmora-dark text-white text-[10px] tracking-widest uppercase px-3 py-1.5 font-sans mb-4">
          {product.badge}
        </span>
      )}

      {/* Name */}
      <h1 className="font-sans text-sm md:text-base tracking-widest-xl uppercase text-velmora-text">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-3">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'}
            />
          ))}
        </div>
        <span className="text-sm text-velmora-muted">{product.rating} ({product.reviews} reviews)</span>
      </div>

      {/* Price */}
      <p className="font-serif text-3xl md:text-4xl text-velmora-text mt-4">${product.price}</p>
      <p className="text-xs text-velmora-muted mt-1">or 4 interest-free payments of ${(product.price / 4).toFixed(2)}</p>

      {/* Divider */}
      <div className="w-full h-px bg-velmora-border my-6" />

      {/* Description */}
      <p className="text-velmora-muted leading-relaxed text-sm">{product.description}</p>

      {/* Divider */}
      <div className="w-full h-px bg-velmora-border my-6" />

      {/* Variant selector */}
      <div>
        <p className="text-xs tracking-widest uppercase text-velmora-text mb-3">Finish</p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 ${
                v === variant
                  ? 'bg-velmora-dark text-white'
                  : 'border border-velmora-border text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-6">
        <p className="text-xs tracking-widest uppercase text-velmora-text mb-3">Quantity</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center border border-velmora-border hover:border-velmora-gold transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="text-lg font-serif w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center border border-velmora-border hover:border-velmora-gold transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <div className="mt-8 flex gap-3">
        <button
          onClick={handleAddToCart}
          className="btn-primary flex-1 flex items-center justify-center gap-2"
        >
          <ShoppingBag size={16} />
          Add to Cart
        </button>
        <button
          className="w-14 h-14 flex items-center justify-center border border-velmora-border hover:border-velmora-gold hover:text-velmora-gold transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Trust badges */}
      <div className="mt-6 flex flex-wrap gap-4 text-xs text-velmora-muted">
        <span className="flex items-center gap-1.5">Free Shipping</span>
        <span className="flex items-center gap-1.5">30-Day Returns</span>
        <span className="flex items-center gap-1.5">Hypoallergenic</span>
      </div>
    </div>
  );
}
