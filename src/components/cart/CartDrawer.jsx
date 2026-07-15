import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <h2 className="serif-heading text-xl tracking-wider">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-primary transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/40 mb-4" />
              <p className="serif-heading text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link
                to="/shop"
                className="btn-primary"
                onClick={() => setIsCartOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-secondary/30 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="product-name text-sm mb-1">{item.name}</h3>
                    <p className="text-xs text-muted-foreground capitalize mb-2">
                      {item.variant} tone
                    </p>
                    <p className="text-sm font-medium mb-3">${item.price}</p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border/50 rounded hover:border-primary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border/50 rounded hover:border-primary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="ml-auto text-xs text-muted-foreground hover:text-primary transition-colors underline"
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
          <div className="p-6 border-t border-border/50 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm tracking-widest uppercase">Subtotal</span>
              <span className="serif-heading text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping and taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              className="btn-outline w-full"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
