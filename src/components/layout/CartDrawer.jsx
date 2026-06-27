import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[var(--color-brand-sand)] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-brand-stone)]">
          <h2 className="font-serif text-2xl tracking-wide">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-[var(--color-brand-stone)] rounded-full transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <ShoppingBag size={48} strokeWidth={1} className="text-[var(--color-brand-clay)]" />
              <div>
                <p className="font-serif text-xl mb-2">Your cart is empty.</p>
                <p className="text-[var(--color-brand-clay)] text-sm mb-6">Discover our latest pieces.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="bg-[var(--color-brand-charcoal)] text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-[var(--color-brand-charcoal)]/90 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image Placeholder */}
                  <div className="w-24 h-24 bg-[var(--color-brand-stone)] overflow-hidden">
                    <img 
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      data-strk-img-id={`cart-thumb-${item.imgId}`}
                      data-strk-img={`[cart-item-${item.id}-name]`}
                      data-strk-img-ratio="1x1"
                      className="w-full h-full object-cover mix-blend-multiply"
                      alt={item.name}
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 id={`cart-item-${item.id}-name`} className="font-serif font-medium leading-tight mb-1">{item.name}</h3>
                        <p className="text-xs text-[var(--color-brand-clay)] uppercase tracking-wide">{item.variant}</p>
                      </div>
                      <p className="text-sm">${item.price}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      {/* Quantity */}
                      <div className="flex items-center border border-[var(--color-brand-stone)]">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-[var(--color-brand-clay)] hover:text-[var(--color-brand-charcoal)]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-2 text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-[var(--color-brand-clay)] hover:text-[var(--color-brand-charcoal)]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      {/* Remove */}
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-[var(--color-brand-clay)] hover:text-[var(--color-brand-charcoal)] underline underline-offset-4"
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
          <div className="border-t border-[var(--color-brand-stone)] p-6 bg-[var(--color-brand-sand)]">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-xl">Subtotal</span>
              <span className="font-serif text-xl">${cartTotal}</span>
            </div>
            <p className="text-xs text-center text-[var(--color-brand-clay)] mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-[var(--color-brand-charcoal)] text-white py-4 uppercase tracking-widest text-sm hover:bg-[var(--color-brand-gold-dark)] transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
