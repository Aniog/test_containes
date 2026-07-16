import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-[70] flex flex-col animate-slide-in-right shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl tracking-wider uppercase text-text-primary">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-text-muted hover:text-text-primary transition-colors duration-300 p-1"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-text-muted/30 mb-4" />
              <p className="font-serif text-lg text-text-muted mb-2">Your cart is empty</p>
              <p className="text-sm text-text-muted/70">Discover our collection of fine jewelry</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-border last:border-0"
                  >
                    {/* Image placeholder */}
                    <div className="w-20 h-20 bg-base rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <span className="text-gold text-xs font-serif">V</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium tracking-wider uppercase text-text-primary truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-text-muted mt-0.5">{item.variant}</p>
                      <p className="text-sm text-gold font-medium mt-1">${item.price}</p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 border border-border rounded flex items-center justify-center text-text-muted hover:text-text-primary hover:border-gold transition-colors duration-200"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm text-text-primary w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 border border-border rounded flex items-center justify-center text-text-muted hover:text-text-primary hover:border-gold transition-colors duration-200"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-text-muted hover:text-red-400 transition-colors duration-200 underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted uppercase tracking-wider">Subtotal</span>
              <span className="text-lg font-serif text-gold">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-text-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold hover:bg-gold-light text-base font-medium text-sm tracking-widest-xl uppercase py-4 transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center text-xs text-text-muted hover:text-gold transition-colors duration-300 tracking-wider uppercase py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
