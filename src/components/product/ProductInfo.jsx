import React, { useState } from 'react';
import { Star, Minus, Plus, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem, toggleCart } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
    toggleCart();
  };

  return (
    <div className="md:pl-8">
      <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-gold)] mb-2">{product.category}</p>
      <h1 className="product-name text-3xl md:text-4xl mb-3">{product.name}</h1>
      
      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-[var(--color-gold)] text-[var(--color-gold)]'
                  : 'text-[var(--color-light-gray)]'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-[var(--color-warm-gray)]">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="text-2xl font-light mb-6">${product.price}</p>

      {/* Description */}
      <p className="text-[var(--color-warm-gray)] leading-relaxed mb-6">{product.description}</p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="text-sm tracking-wider uppercase mb-3">Color</p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-6 py-2 text-sm tracking-wider uppercase border transition-all duration-300 ${
                selectedVariant === variant
                  ? 'border-[var(--color-gold)] bg-[var(--color-gold)] text-white'
                  : 'border-[var(--color-border)] hover:border-[var(--color-gold)]'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-8">
        <p className="text-sm tracking-wider uppercase mb-3">Quantity</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-lg w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleAddToCart}
          className={`flex-1 py-4 text-sm tracking-wider uppercase transition-all duration-300 ${
            addedToCart
              ? 'bg-green-600 text-white'
              : 'bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-dark)]'
          }`}
        >
          {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
        </button>
        <button className="w-14 h-14 flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Trust badges */}
      <div className="space-y-3 text-sm text-[var(--color-warm-gray)]">
        <p>Free worldwide shipping on all orders</p>
        <p>30-day hassle-free returns</p>
        <p>18K gold plated over sterling silver</p>
      </div>
    </div>
  );
};

export default ProductInfo;
