import { useEffect, useRef } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, subtotal, totalItems } = useCart();
  const drawerRef = useRef(null);

  // Trap focus / close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="cart-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        ref={drawerRef}
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-champagne">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-sans text-xs tracking-widest uppercase text-velvet">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-driftwood hover:text-velvet transition-colors duration-300"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-champagne" />
              <p className="font-serif text-lg text-driftwood">Your cart is empty</p>
              <p className="font-sans text-xs text-driftwood">Add something beautiful.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 border border-gold text-gold hover:bg-gold hover:text-velvet font-sans text-xs tracking-widest2 uppercase px-6 py-3 transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-champagne last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-linen flex items-center justify-center">
                      <span className="font-serif text-xs text-driftwood italic text-center px-1 leading-tight">
                        {item.product.name}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-sm tracking-widest uppercase text-velvet hover:text-gold transition-colors duration-300 block truncate"
                    >
                      {item.product.name}
                    </Link>
                    <p className="font-sans text-xs text-driftwood mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-velvet mt-1">
                      ${(item.product.price * item.qty).toFixed(2)}
                    </p>

                    {/* Qty controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQty(item.key, item.qty - 1)}
                        aria-label="Decrease quantity"
                        className="w-6 h-6 border border-champagne text-velvet hover:border-gold flex items-center justify-center transition-colors duration-300"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-sans text-xs text-velvet w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.key, item.qty + 1)}
                        aria-label="Increase quantity"
                        className="w-6 h-6 border border-champagne text-velvet hover:border-gold flex items-center justify-center transition-colors duration-300"
                      >
                        <Plus size={10} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="ml-auto text-driftwood hover:text-velvet transition-colors duration-300"
                      >
                        <X size={14} strokeWidth={1.5} />
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
          <div className="px-6 py-5 border-t border-champagne space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs tracking-widest uppercase text-driftwood">Subtotal</span>
              <span className="font-serif text-lg text-velvet">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-driftwood">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-gold hover:bg-gold-light text-velvet font-sans text-xs tracking-widest2 uppercase py-4 transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velvet text-velvet hover:bg-velvet hover:text-parchment font-sans text-xs tracking-widest2 uppercase py-3 transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
