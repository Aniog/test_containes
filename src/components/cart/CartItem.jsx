import React from 'react';
import { X, Minus, Plus } from 'lucide-react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const DynamicImg = "img";
  const transparentGif = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  const itemId = "cart-item-" + item.id + "-" + item.variant;
  const titleId = "cart-item-title-" + item.id + "-" + item.variant;

  return (
    <div className="flex gap-6 items-start">
      <div className="w-24 h-32 bg-gray-100 flex-shrink-0 overflow-hidden rounded-sm">
        <DynamicImg 
          data-strk-img-id={itemId}
          data-strk-img={"[" + titleId + "] jewelry"}
          data-strk-img-ratio="3x4"
          data-strk-img-width="200"
          src={transparentGif}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between mb-1">
          <h3 id={titleId} className="font-serif text-md tracking-widest-editorial uppercase truncate text-charcoal">
            {item.name}
          </h3>
          <button 
            onClick={() => removeFromCart(item.id, item.variant)}
            className="text-charcoal/40 hover:text-charcoal transition-colors ml-4"
          >
            <X className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
        <p className="font-sans text-[10px] tracking-widest-editorial uppercase text-charcoal/60 mb-4">
          Tone: {item.variant}
        </p>
        <div className="flex justify-between items-end">
          <div className="flex items-center border border-charcoal/10 px-2 py-1 gap-4">
            <button 
              onClick={() => updateQuantity(item.id, item.variant, -1)}
              className="text-charcoal hover:text-gold"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="font-sans text-xs font-medium w-4 text-center">{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.variant, 1)}
              className="text-charcoal hover:text-gold"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <p className="font-serif text-lg font-medium">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
