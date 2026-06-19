import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, totalItems, totalPrice, removeItem, updateQuantity, closeCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] w-full max-w-md h-full bg-brand-cream shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-warmgray/30">
          <h2 className="font-serif text-xl tracking-wide">Your Cart ({totalItems})</h2>
          <button onClick={closeCart} className="p-1 text-brand-charcoal hover:text-brand-gold transition-colors" aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag size={48} className="text-brand-warmgray mb-4" strokeWidth={1} />
              <p className="font-serif text-xl text-brand-charcoal mb-2">Your cart is empty</p>
              <p className="text-sm text-brand-soft-brown">Discover our curated collection of fine jewelry.</p>
              <button onClick={closeCart} className="btn-primary mt-6">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 pb-6 border-b border-brand-warmgray/20">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-brand-sand flex-shrink-0 flex items-center justify-center">
                    <span className="text-brand-warmgray text-xs">Image</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-product-name text-sm text-brand-charcoal truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-soft-brown mt-1">{item.variant}</p>
                    <p className="text-sm font-medium text-brand-charcoal mt-2">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 border border-brand-warmgray/50 flex items-center justify-center hover:border-brand-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 border border-brand-warmgray/50 flex items-center justify-center hover:border-brand-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-soft-brown hover:text-brand-charcoal underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-brand-cream border-t border-brand-warmgray/30">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm tracking-wider uppercase text-brand-soft-brown">Subtotal</span>
              <span className="font-serif text-xl text-brand-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-brand-soft-brown mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="btn-gold w-full">
              Proceed to Checkout
            </button>
            <button onClick={closeCart} className="w-full text-center text-sm text-brand-soft-brown hover:text-brand-charcoal mt-3 underline transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
