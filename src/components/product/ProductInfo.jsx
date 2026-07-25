import React, { useState } from 'react';
import { Star, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { materials } from '@/data/products';

const ProductInfo = ({ product }) => {
  const [material, setMaterial] = useState(product.material || 'gold');
  const [quantity, setQuantity] = useState(1);
  const { addItem, setCartOpen } = useCart();
  const primaryImage = product.images?.gold?.[0] || product.images?.silver?.[0];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: material,
      image: primaryImage,
      quantity,
    });
    setCartOpen(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="product-name text-xl md:text-2xl text-brand-ink">{product.name}</h1>
        <p className="mt-2 font-serif text-2xl text-brand-ink">${product.price}</p>
        <div className="mt-2 flex items-center gap-2 text-brand-accent">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-brand-subtle">({product.reviewCount} reviews)</span>
        </div>
      </div>

      <p className="text-sm text-brand-muted leading-relaxed">{product.description}</p>

      <div>
        <p className="text-xs uppercase tracking-widest text-brand-ink mb-2">Tone</p>
        <div className="flex flex-wrap gap-2">
          {materials.map((option) => (
            <button
              key={option.id}
              onClick={() => setMaterial(option.id)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                material === option.id
                  ? 'border-brand-ink bg-brand-ink text-white'
                  : 'border-brand-line text-brand-ink hover:border-brand-ink'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest text-brand-ink mb-2">Quantity</p>
        <div className="inline-flex items-center gap-3 rounded-full border border-brand-line">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-10 w-10 items-center justify-center text-brand-ink hover:text-brand-accent transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="text-sm text-brand-ink">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-10 w-10 items-center justify-center text-brand-ink hover:text-brand-accent transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button onClick={handleAddToCart} className="w-full btn-primary">
        Add to Cart
      </button>

      <p className="text-xs text-brand-muted">
        Free shipping on orders over $75. 30-day returns.
      </p>
    </div>
  );
};

export default ProductInfo;
