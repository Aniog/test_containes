import React, { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext.jsx';
import { StockImage } from './StockImage.jsx';

function CartItem({ item, updateQuantity, removeFromCart }) {
  const containerRef = useRef(null);

  return (
    <li ref={containerRef} className="flex gap-4">
      <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-background">
        <StockImage
          id={`cart-thumb-${item.id}`}
          query={item.imageQuery}
          ratio="3x4"
          width="200"
          alt={item.name}
          className="h-full w-full"
          containerRef={containerRef}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p
            id={`product-${item.id}-name`}
            className="font-serif text-xs uppercase tracking-widest-xl text-foreground"
          >
            {item.name}
          </p>
          <p className="mt-1 text-xs capitalize text-muted">Tone: {item.tone}</p>
          <p className="text-sm font-light text-foreground">${item.price}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-hairline">
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
              className="p-2 text-muted hover:text-foreground"
              aria-label="Decrease quantity"
            >
              <Minus size={12} />
            </button>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <button
              type="button"
              onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
              className="p-2 text-muted hover:text-foreground"
              aria-label="Increase quantity"
            >
              <Plus size={12} />
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeFromCart(item.id, item.tone)}
            className="p-2 text-muted transition-colors hover:text-accent"
            aria-label="Remove item"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, itemCount } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeCart}
        aria-label="Close cart overlay"
      />
      <aside className="relative flex h-full w-full max-w-md flex-col bg-surface animate-slideInRight shadow-2xl">
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-xl tracking-wide">Your Cart ({itemCount})</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-muted transition-colors hover:text-foreground"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={40} className="text-muted/40" />
            <p className="font-serif text-lg text-muted">Your cart is empty</p>
            <button
              type="button"
              onClick={closeCart}
              className="bg-accent px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-accent-hover"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="flex flex-col gap-6">
                {items.map((item) => (
                  <CartItem
                    key={`${item.id}-${item.tone}`}
                    item={item}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </ul>
            </div>

            <div className="border-t border-hairline px-6 py-6">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mb-5 text-xs text-muted">Shipping & taxes calculated at checkout.</p>
              <button
                type="button"
                className="w-full bg-accent py-4 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-accent-hover"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full border border-hairline py-3 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-surface-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
