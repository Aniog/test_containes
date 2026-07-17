import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  const productIds = [
    'vivid-aura-jewels',
    'majestic-flora-nectar',
    'golden-sphere-huggies',
    'amber-lace-earrings',
    'royal-heirloom-set'
  ];

  return (
    <div className="flex gap-4">
      <div className="w-24 h-32 bg-velmora-beige flex-shrink-0 relative">
        {productIds.map(pid => (
          item.id === pid && (
            <img
              key={pid}
              data-strk-img-id={`product-${pid}-main`}
              data-strk-img={`[cart-item-name-${pid}] jewelry luxury`}
              data-strk-img-ratio="2x3"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
              alt={item.name}
              className="w-full h-full object-cover"
            />
          )
        ))}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h3 id={`cart-item-name-${item.id}`} className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
          <button onClick={() => removeFromCart(item.id)}>
            <X className="w-4 h-4 text-velmora-muted" />
          </button>
        </div>
        <p className="text-xs text-velmora-muted mb-4">${item.price}</p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center border border-velmora-border px-2 py-1">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-xs w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <p className="text-sm font-medium font-serif">${item.price * item.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
