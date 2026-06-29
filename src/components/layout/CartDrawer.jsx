import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function CartDrawer() {
  const { items, drawerOpen, toggleDrawer, removeItem, updateQuantity, totalPrice } = useCart();
  const drawerRef = useRef(null);

  const itemList = Object.entries(items);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen || !drawerRef.current) return;
    // Small delay to let the drawer slide in and items render
    const timer = setTimeout(() => {
      if (drawerRef.current) {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [drawerOpen, itemList.length]);

  return (
    <>
      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
          onClick={() => toggleDrawer(false)}
          style={{ animation: "fadeIn 0.2s ease-out" }}
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-surface z-[90] flex flex-col transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-velmora-gold" />
            <h2 className="font-serif text-xl tracking-[0.1em] text-velmora-cream">Your Cart</h2>
          </div>
          <button onClick={() => toggleDrawer(false)} aria-label="Close cart">
            <X className="w-5 h-5 text-velmora-text-secondary hover:text-velmora-cream transition-colors" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {itemList.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag className="w-12 h-12 text-velmora-muted" />
              <p className="font-serif text-lg text-velmora-text-secondary">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={() => toggleDrawer(false)}
                className="px-6 py-3 bg-velmora-gold text-velmora-bg text-sm tracking-[0.1em] uppercase font-medium hover:bg-velmora-gold-light transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {itemList.map(([key, { product, variant, quantity }]) => (
                <div key={key} className="flex gap-4 py-4 border-b border-velmora-border/50">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-card rounded flex-shrink-0 flex items-center justify-center">
                    <img
                      data-strk-img-id={`bestseller-${product.id}-1`}
                      data-strk-img={product.name}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-[0.12em] uppercase text-velmora-cream truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-velmora-text-secondary mt-0.5">{variant}</p>
                    <p className="text-sm text-velmora-gold mt-1">${product.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(key, quantity - 1)}
                        className="w-7 h-7 border border-velmora-border rounded-sm flex items-center justify-center text-velmora-text-secondary hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-velmora-cream w-6 text-center">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(key, quantity + 1)}
                        className="w-7 h-7 border border-velmora-border rounded-sm flex items-center justify-center text-velmora-text-secondary hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(key)}
                    className="self-start text-velmora-text-secondary hover:text-velmora-error transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {itemList.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-text-secondary uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-lg text-velmora-gold">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-text-secondary mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-3.5 bg-velmora-gold text-velmora-bg text-sm tracking-[0.15em] uppercase font-semibold hover:bg-velmora-gold-light transition-colors">
              Checkout
            </button>
            <button
              onClick={() => toggleDrawer(false)}
              className="w-full py-3 mt-2 text-sm text-velmora-text-secondary hover:text-velmora-cream tracking-[0.1em] uppercase transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
