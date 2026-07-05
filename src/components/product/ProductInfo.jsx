import { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isLoading } = useCart();

  const handleAddToCart = async () => {
    await addToCart(product, selectedVariant, quantity);
  };

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <div>
        <h1 className="font-serif text-2xl md:text-3xl tracking-extra-wide uppercase text-charcoal">
          {product.name}
        </h1>
        <p className="font-sans text-lg md:text-xl text-charcoal/70 mt-2">
          ${product.price}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-lightTaupe'}
            />
          ))}
        </div>
        <span className="text-sm text-charcoal/60">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Short Description */}
      <p className="text-charcoal/70 leading-relaxed">
        {product.shortDescription}
      </p>

      <div className="hairline-divider" />

      {/* Variant Selector */}
      <div>
        <p className="font-sans text-sm text-charcoal/60 mb-3">
          Finish: <span className="text-charcoal">{selectedVariant.name}</span>
        </p>
        <div className="flex flex-wrap gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant.name}
              onClick={() => setSelectedVariant(variant)}
              disabled={!variant.available}
              className={`relative px-4 py-2 border rounded-full text-sm transition-all ${
                selectedVariant.name === variant.name
                  ? 'border-charcoal bg-charcoal text-warmWhite'
                  : 'border-charcoal/30 hover:border-charcoal/60'
              } ${!variant.available ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full border border-charcoal/20"
                  style={{ backgroundColor: variant.color }}
                />
                <span>{variant.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div>
        <p className="font-sans text-sm text-charcoal/60 mb-3">Quantity</p>
        <div className="flex items-center border border-charcoal/30 rounded w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>
          <span className="px-4 font-sans text-center min-w-[3rem]">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className="w-full bg-charcoal text-warmWhite py-4 text-sm tracking-extra-wide uppercase font-medium hover:bg-gold-600 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Adding to Bag...
          </>
        ) : (
          <>
            <ShoppingBag size={18} />
            Add to Bag
          </>
        )}
      </button>

      {/* Product Details Accordion */}
      <div className="hairline-divider mt-8" />
    </div>
  );
}
