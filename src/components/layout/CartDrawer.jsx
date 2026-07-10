import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, setIsOpen]);

  // Re-scan cart images whenever items change (new products added)
  useEffect(() => {
    if (!isOpen || items.length === 0) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [isOpen, items]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-cream flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-gray-light">
          <h2 className="font-cormorant text-xl tracking-widest uppercase text-espresso">
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-warm-gray hover:text-espresso transition-colors"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-warm-gray-light" />
              <p className="font-cormorant text-2xl text-espresso">Your cart is empty</p>
              <p className="font-inter text-xs text-warm-gray tracking-wide">
                Discover pieces made to be treasured.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs tracking-widest uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-espresso transition-colors duration-200"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-warm-gray-light last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-warm-gray-pale flex-shrink-0 overflow-hidden">
                    <div
                      data-strk-bg-id={item.cartImgId}
                      data-strk-bg={`[cart-item-name-${item.key}]`}
                      data-strk-bg-ratio="1x1"
                      data-strk-bg-width="160"
                      className="w-full h-full bg-cover bg-center"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      id={`cart-item-name-${item.key}`}
                      className="font-cormorant text-sm uppercase tracking-widest text-espresso leading-tight"
                    >
                      {item.name}
                    </p>
                    {item.variant && (
                      <p className="font-inter text-xs text-warm-gray mt-0.5">{item.variant}</p>
                    )}
                    <p className="font-inter text-sm text-espresso mt-1 font-medium">
                      ${item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-warm-gray hover:text-espresso transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-inter text-xs text-espresso w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-warm-gray hover:text-espresso transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto font-inter text-xs text-warm-gray hover:text-espresso underline underline-offset-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-warm-gray-light bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs tracking-widest uppercase text-warm-gray">Subtotal</span>
              <span className="font-cormorant text-xl text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-warm-gray mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-espresso text-cream font-inter text-xs tracking-widest uppercase py-4 hover:bg-charcoal transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-warm-gray-light text-warm-gray font-inter text-xs tracking-widest uppercase py-3 hover:border-espresso hover:text-espresso transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
