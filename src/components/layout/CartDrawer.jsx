import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-base/10">
          <h2 className="font-serif text-2xl text-base">Shopping Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:text-gold transition-colors duration-300"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-base/20 mb-4" />
              <p className="font-serif text-xl text-base/60 mb-2">Your bag is empty</p>
              <p className="text-sm text-base/40 mb-6">Discover our collection and find something you love.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="px-6 py-3 bg-gold text-white text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-24 bg-cream-dark rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-base text-base truncate">{item.name}</h3>
                        <p className="text-xs text-base/50 uppercase tracking-wider mt-1">
                          {item.tone === 'gold' ? '18K Gold' : 'Sterling Silver'}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="p-1 hover:text-red-500 transition-colors duration-300"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-base/20 rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="p-2 hover:bg-base/5 transition-colors duration-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm min-w-[2rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="p-2 hover:bg-base/5 transition-colors duration-300"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-medium text-base">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-base/10 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-base/60">Subtotal</span>
              <span className="font-serif text-xl text-base">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-base/40 text-center">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-gold text-white text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full py-3 border border-base/20 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;