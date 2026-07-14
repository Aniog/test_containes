import React, { useState } from 'react';
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { toast } from 'sonner';

const Info = ({ product }) => {
  const [variant, setVariant] = useState('Gold');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, variant);
    }
    toast.success(`${quantity} x ${product.name} (${variant}) added to cart`);
  };

  return (
    <div className="flex flex-col space-y-8">
      <div className="space-y-4">
        <h1 id={`prod-title-${product.id}`} className="font-serif text-3xl md:text-5xl uppercase tracking-wider">{product.name}</h1>
        
        <div className="flex items-center gap-4">
          <p className="font-serif text-2xl">${product.price}</p>
          <div className="h-4 w-[1px] bg-gray-200" />
          <div className="flex items-center gap-1 text-accent">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />
            ))}
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold ml-2">(12 reviews)</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 font-light leading-relaxed">
        {product.description || "A timeless addition to your collection. Meticulously crafted for daily elegance."}
      </p>

      {/* Variant Selector */}
      <div className="space-y-4">
        <h3 className="uppercase tracking-widest font-bold text-[10px]">Finish</h3>
        <div className="flex gap-3">
          {['Gold', 'Silver'].map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={cn(
                "px-8 py-3 text-[10px] uppercase tracking-widest font-bold border transition-all",
                variant === v ? "bg-brand-dark text-white border-brand-dark" : "hover:border-primary border-gray-200"
              )}
            >
              {v} Tone
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Add to Cart */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <div className="flex items-center border border-gray-200 w-full sm:w-32 justify-between">
          <button 
            disabled={quantity <= 1}
            onClick={() => setQuantity(q => q - 1)}
            className="p-4 hover:text-accent disabled:opacity-30"
          >
            <Minus size={16} />
          </button>
          <span className="font-serif text-lg">{quantity}</span>
          <button 
            onClick={() => setQuantity(q => q + 1)}
            className="p-4 hover:text-accent"
          >
            <Plus size={16} />
          </button>
        </div>

        <button 
          onClick={handleAddToCart}
          className="btn-premium flex-grow flex items-center justify-center gap-3 py-4"
        >
          <ShoppingBag size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Info;
