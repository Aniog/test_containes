import { useEffect, useRef } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setIsOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/60 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-ivory flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
          <h2 className="font-serif text-xl tracking-widest uppercase text-obsidian">
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-obsidian transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-taupe-light" />
              <p className="font-serif text-xl text-taupe">Your cart is empty</p>
              <p className="font-sans text-sm text-taupe-light">
                Discover our collection of fine jewelry
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blush to-ivory-dark flex items-center justify-center">
                      <span className="font-serif text-xs text-taupe-light text-center px-1 leading-tight">
                        {item.product.name.split(" ")[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="product-name text-xs text-obsidian leading-tight mb-1">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-taupe mb-2">{item.variant}</p>
                    <p className="font-sans text-sm font-500 text-obsidian">
                      ${item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-gold/40 flex items-center justify-center text-taupe hover:border-gold hover:text-obsidian transition-all duration-200"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-sans text-sm text-obsidian w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-gold/40 flex items-center justify-center text-taupe hover:border-gold hover:text-obsidian transition-all duration-200"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-taupe-light hover:text-obsidian transition-colors duration-200 self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold/20 px-6 py-6 bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-taupe">
                Subtotal
              </span>
              <span className="font-serif text-xl text-obsidian">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-sans text-xs text-taupe-light mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4 hover:bg-obsidian-light transition-colors duration-300 mb-3">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center border border-gold/40 text-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:border-gold transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
