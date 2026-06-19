import React, { useRef, useEffect } from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, toggleDrawer, updateQuantity, removeItem, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") toggleDrawer(false);
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, toggleDrawer]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => toggleDrawer(false)}
        />
      )}
      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-velmora-cream shadow-2xl transform transition-transform duration-500 ease-velmora ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone/20">
            <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
            <button
              onClick={() => toggleDrawer(false)}
              className="p-1 text-velmora-ink hover:text-velmora-mocha transition-colors"
              aria-label="Close cart"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="font-serif text-lg text-velmora-mocha mb-2">Your bag is empty</p>
                <p className="text-sm text-velmora-taupe mb-6">Discover pieces crafted to be treasured.</p>
                <button
                  onClick={() => toggleDrawer(false)}
                  className="btn-primary text-xs"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={() => toggleDrawer(false)}
                      className="shrink-0"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-sm"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={() => toggleDrawer(false)}
                        className="block font-serif text-[15px] tracking-wide truncate"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-velmora-taupe mt-0.5">{item.variant}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-stone/40 rounded-sm">
                          <button
                            className="px-2 py-1 text-velmora-mocha hover:bg-velmora-sand transition-colors"
                            onClick={() =>
                              updateQuantity(item.productId, item.variant, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-xs font-medium min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2 py-1 text-velmora-mocha hover:bg-velmora-sand transition-colors"
                            onClick={() =>
                              updateQuantity(item.productId, item.variant, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium">${item.price * item.quantity}</span>
                          <button
                            onClick={() => removeItem(item.productId, item.variant)}
                            className="text-velmora-taupe hover:text-red-500 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-velmora-stone/20 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-velmora-mocha">Subtotal</span>
                <span className="font-serif text-lg">${subtotal}</span>
              </div>
              <p className="text-[11px] text-velmora-taupe leading-relaxed">
                Shipping & taxes calculated at checkout. Free shipping on orders over $50.
              </p>
              <button className="w-full btn-primary">Checkout — ${subtotal}</button>
              <button
                onClick={() => toggleDrawer(false)}
                className="w-full btn-outline text-[11px] py-3"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
