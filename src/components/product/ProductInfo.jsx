import { useState } from 'react';
import { Star, Minus, Plus, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart, openCart } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Simulate brief delay for UX feedback
    await new Promise(resolve => setTimeout(resolve, 500));
    
    addToCart(product, selectedVariant, quantity);
    setIsAdding(false);
    setJustAdded(true);
    openCart();
    
    // Reset the "just added" state after 2 seconds
    setTimeout(() => setJustAdded(false), 2000);
  };

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="space-y-8">
      {/* Product Name */}
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl text-charcoal tracking-ultra uppercase">
          {product.name}
        </h1>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'fill-gold-500 text-gold-500' 
                    : 'fill-softGray/30 text-softGray/30'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm text-softGray font-sans">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="font-serif text-2xl text-charcoal">
        ${product.price}
      </div>

      {/* Short Description */}
      <p className="font-sans text-base text-warmGray leading-relaxed">
        {product.description}
      </p>

      {/* Variant Selector */}
      <div>
        <label className="block font-sans text-sm text-charcoal mb-3">
          Finish: <span className="text-warmGray">{selectedVariant}</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-5 py-2.5 border-2 font-sans text-sm tracking-wide transition-all duration-200 ${
                selectedVariant === variant
                  ? 'border-charcoal bg-charcoal text-warm-white'
                  : 'border-softGray/30 text-charcoal hover:border-charcoal'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div>
        <label className="block font-sans text-sm text-charcoal mb-3">
          Quantity
        </label>
        <div className="flex items-center border border-softGray/30 w-fit">
          <button
            onClick={decrementQuantity}
            disabled={quantity <= 1}
            className="p-3 hover:bg-cream transition-colors disabled:opacity-50"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-6 font-sans text-base text-charcoal">
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            className="p-3 hover:bg-cream transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        variant="primary"
        size="lg"
        fullWidth
        onClick={handleAddToCart}
        disabled={isAdding}
        className={justAdded ? 'bg-green-600 border-green-600' : ''}
      >
        {isAdding ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" 
                       stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span>ADDING...</span>
          </>
        ) : justAdded ? (
          <>
            <Check className="w-5 h-5" />
            <span>ADDED TO BAG</span>
          </>
        ) : (
          <span>ADD TO BAG</span>
        )}
      </Button>

      {/* Shipping Info */}
      <div className="pt-4 border-t border-cream">
        <div className="flex items-center gap-2 text-sm text-warmGray font-sans">
          <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          <span>Free shipping on orders over $50</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
