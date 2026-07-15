import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, cartTotal, cartCount, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[60] shadow-2xl transform transition-transform duration-300 flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-charcoal/10 flex-shrink-0">
          <h2 className="font-serif text-xl uppercase tracking-widest" style={{ letterSpacing: '0.2em' }}>
            Your Bag ({cartCount})
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <ShoppingBag size={48} className="text-charcoal/20 mb-4" />
              <p className="font-serif text-lg text-charcoal/60 mb-2">Your bag is empty</p>
              <p className="text-sm text-charcoal/40 mb-6">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="btn-primary"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.key} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-24 h-24 bg-charcoal/5 flex-shrink-0 flex items-center justify-center">
                    <div 
                      className="w-12 h-12 rounded-full"
                      style={{ backgroundColor: item.variant === 'gold' ? '#C8A96E' : '#C0C0C0' }}
                    />
                  </div>
                  
                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-wider truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-charcoal/50 capitalize mt-0.5">
                      {item.variant} tone
                    </p>
                    <p className="text-sm font-medium mt-1">
                      ${item.product.price}
                    </p>
                    
                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 border border-charcoal/20 flex items-center justify-center hover:bg-charcoal/5 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 border border-charcoal/20 flex items-center justify-center hover:bg-charcoal/5 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-charcoal/40 hover:text-charcoal transition-colors underline"
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
        {cartItems.length > 0 && (
          <div className="border-t border-charcoal/10 p-6 flex-shrink-0">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-charcoal/60">Subtotal</span>
              <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-charcoal/40 mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-gold text-center">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
