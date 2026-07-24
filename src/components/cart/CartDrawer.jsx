import React from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/store/cart";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, totalPrice, closeCart, removeItem, updateQuantity } =
    useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            className="p-1 text-warm-gray hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-sand mb-4" />
              <p className="font-serif text-xl text-charcoal mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-warm-gray mb-6">
                Discover our handcrafted collection
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block px-8 py-3 bg-gold text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-gold-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="flex gap-4 pb-6 border-b border-sand/50 last:border-0"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory flex-shrink-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gold/20" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-[0.1em] uppercase text-charcoal mb-1 truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-warm-gray mb-3">
                      {item.variant}
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity - 1)
                          }
                          className="p-1.5 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity + 1)
                          }
                          className="p-1.5 text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <p className="font-medium text-charcoal">
                        ${item.product.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-warm-gray hover:text-red-500 transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-sand bg-ivory/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-warm-gray">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">
                ${totalPrice}
              </span>
            </div>
            <p className="text-xs text-warm-gray mb-4">
              Shipping calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-charcoal text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-espresso transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 py-2 text-xs tracking-[0.15em] uppercase font-medium text-warm-gray hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
