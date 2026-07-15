import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { Link } from 'react-router-dom';
import { getProductById } from '@/data/products';

const CartDrawer = () => {
  const { items, isCartOpen, closeCart, removeItem, updateQuantity, getCartTotal } = useCartStore();
  const total = getCartTotal();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-secondary rounded-sm transition-colors"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <ShoppingBag size={48} className="text-muted-foreground mb-4" />
              <p className="font-serif text-lg mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-muted-foreground mb-6">
                Discover our collection of demi-fine jewelry.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              {items.map((item) => {
                const product = getProductById(item.productId);
                return (
                  <div
                    key={`${item.productId}-${item.variant}`}
                    className="flex gap-4 py-4 border-b border-border-light"
                  >
                    {/* Image placeholder */}
                    <div className="w-20 h-20 bg-secondary rounded-sm flex-shrink-0 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        data-strk-bg-id={`cart-thumb-${item.productId}-${item.variant}`}
                        data-strk-bg={`[${item.productId}-name] gold jewelry`}
                        data-strk-bg-ratio="1x1"
                        data-strk-bg-width="200"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-sm text-foreground truncate">
                        {item.name}
                      </h3>
                      <p className="font-sans text-xs text-muted-foreground mt-1">
                        {item.variant === 'gold' ? 'Gold Plated' : 'Silver Plated'}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center border border-border rounded-sm hover:bg-secondary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="font-sans text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center border border-border rounded-sm hover:bg-secondary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-sans text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(item.productId, item.variant)}
                      className="p-1 text-muted-foreground hover:text-destructive transition-colors self-start"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <X size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm text-muted-foreground">Subtotal</span>
              <span className="font-sans text-lg font-medium">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-muted-foreground">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center font-sans text-xs tracking-widest uppercase text-primary hover:text-[#A07D52] transition-colors py-2"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
