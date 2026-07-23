import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal } = useCartStore();
  const total = getTotal();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#FAF8F5] z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#D4CFC7]">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-1 hover:text-primary transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag size={48} className="text-muted-foreground mb-4" strokeWidth={1} />
              <p className="font-serif text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mb-6">
                Discover our collection of demi-fine jewelry
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
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#E8E2D9] rounded-sm flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <span className="text-xs">IMG</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm mb-1 truncate">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{item.variant}</p>
                    <p className="text-sm font-medium">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 border border-[#D4CFC7] rounded-sm flex items-center justify-center hover:border-primary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 border border-[#D4CFC7] rounded-sm flex items-center justify-center hover:border-primary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-muted-foreground hover:text-foreground transition-colors underline"
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
          <div className="border-t border-[#D4CFC7] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Subtotal</span>
              <span className="font-serif text-lg">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="btn-secondary w-full"
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
