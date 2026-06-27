import { useState } from 'react';
import { Star, Minus, Plus, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    openCart();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-stone/30'}
      />
    ));
  };

  return (
    <div className="lg:sticky lg:top-24">
      {/* Product name */}
      <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-velmora-black uppercase tracking-wider mb-3">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-xl md:text-2xl font-sans font-medium text-velmora-black mb-4">
        ${product.price}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex gap-0.5">{renderStars(product.rating)}</div>
        <span className="text-xs text-velmora-muted">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-velmora-muted leading-relaxed mb-8">
        {product.description}
      </p>

      {/* Variant selector */}
      {product.variants && product.variants.length > 1 && (
        <div className="mb-6">
          <span className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-black mb-3 block">
            Tone: <span className="font-normal text-velmora-muted capitalize">{selectedVariant}</span>
          </span>
          <div className="flex gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`px-5 py-2.5 text-xs font-sans font-medium tracking-widest uppercase border transition-all duration-300 ${
                  selectedVariant === variant
                    ? 'border-velmora-black bg-velmora-black text-white'
                    : 'border-velmora-border text-velmora-black hover:border-velmora-black'
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="mb-8">
        <span className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-black mb-3 block">
          Quantity
        </span>
        <div className="inline-flex items-center border border-velmora-border">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 text-velmora-black/60 hover:text-velmora-black transition-colors duration-300"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="px-5 text-sm font-medium text-velmora-black min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 text-velmora-black/60 hover:text-velmora-black transition-colors duration-300"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <Button variant="accent" size="lg" className="w-full mb-4" onClick={handleAddToCart}>
        Add to Cart — ${(product.price * quantity).toFixed(2)}
      </Button>

      {/* Trust badges */}
      <div className="flex flex-wrap gap-4 text-[11px] text-velmora-stone tracking-wide">
        <span>Free shipping over $75</span>
        <span>&middot;</span>
        <span>30-day returns</span>
        <span>&middot;</span>
        <span>Hypoallergenic</span>
      </div>
    </div>
  );
};

export default ProductInfo;
