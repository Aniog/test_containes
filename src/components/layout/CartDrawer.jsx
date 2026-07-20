import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import strkImgConfig from "@/strk-img-config.json";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } =
    useCart();
  const listRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  useEffect(() => {
    if (!isOpen || !listRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, listRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items.length]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-modal={isOpen ? "true" : undefined}
        aria-hidden={isOpen ? undefined : "true"}
        inert={!isOpen ? "" : undefined}
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full sm:w-[440px] bg-ivory text-espresso flex flex-col transform transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-sand">
          <h2 className="font-serif text-2xl tracking-tight">Your Bag</h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-2 -mr-2 hover:opacity-60 transition-opacity"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <p className="font-serif text-3xl mb-2">Your bag is empty</p>
            <p className="text-sm text-espresso/60 mb-8 max-w-xs">
              Begin a quiet collection — discover pieces designed to be worn forever.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="btn-primary"
            >
              Shop the Collection
            </button>
          </div>
        ) : (
          <>
            <div ref={listRef} className="flex-1 overflow-y-auto px-6 divide-y divide-sand">
              {items.map((item) => (
                <div key={item.id} className="py-6 flex gap-4">
                  <div className="w-20 h-24 bg-sand/60 flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={item.imageId || item.id}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="product-name text-[0.82rem] truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-espresso/60 mt-1">
                          {item.tagline}
                        </p>
                      </div>
                      <p className="text-sm font-medium whitespace-nowrap">
                        {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQuantity(item.id, item.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-sand/40 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQuantity(item.id, item.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-sand/40 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.id)}
                        className="text-espresso/50 hover:text-espresso transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.4} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-6 border-t border-sand bg-bone">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-espresso/70">Subtotal</span>
                <span className="text-lg font-serif">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-espresso/55 mb-5">
                Shipping & taxes calculated at checkout. Free worldwide shipping over $80.
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary w-full"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center text-xs uppercase tracking-[0.22em] text-espresso/70 hover:text-espresso transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
