import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, removeItem, updateQuantity } = useCart();
  const drawerRef = useRef(null);

  // Lock scroll while open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Load images for newly added items
  useEffect(() => {
    if (!isOpen) return;
    const frame = window.requestAnimationFrame(() => {
      if (drawerRef.current) {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen, items]);

  return (
    <div
      className={`fixed inset-0 z-[60] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-[#1A1410]/50 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`absolute top-0 right-0 h-full w-full sm:w-[440px] bg-[#F7F2EA] text-[#1A1410] shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1A1410]/10">
          <h2 className="font-serif text-2xl tracking-wide">Your Bag</h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-2 -mr-2 hover:text-[#B8924A]">
            <X className="w-5 h-5" strokeWidth={1.25} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-2xl mb-3">Your bag is empty.</p>
            <p className="text-sm text-[#8B7D6B] mb-8">
              Add a few pieces to begin — every order arrives in our linen-lined keepsake box.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-block bg-[#B8924A] hover:bg-[#8E6E33] text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-4 px-8 transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#1A1410]/10">
              {items.map((it) => (
                <li key={it.key} className="py-5 flex gap-4">
                  <div className="w-20 h-24 bg-[#EFE7DA] overflow-hidden flex-shrink-0">
                    <img
                      alt={it.name}
                      data-strk-img-id={it.imgId}
                      data-strk-img={`[cart-name-${it.key}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      className="w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between gap-3">
                      <p
                        id={`cart-name-${it.key}`}
                        className="font-serif uppercase tracking-[0.18em] text-sm leading-snug"
                      >
                        {it.name}
                      </p>
                      <button
                        onClick={() => removeItem(it.key)}
                        aria-label={`Remove ${it.name}`}
                        className="text-[#8B7D6B] hover:text-[#1A1410]"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.25} />
                      </button>
                    </div>
                    <p className="text-xs text-[#8B7D6B] mt-1">Tone: {it.tone}</p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-[#1A1410]/15">
                        <button
                          aria-label="Decrease quantity"
                          className="w-8 h-8 flex items-center justify-center hover:bg-[#EFE7DA]"
                          onClick={() => updateQuantity(it.key, it.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm">{it.quantity}</span>
                        <button
                          aria-label="Increase quantity"
                          className="w-8 h-8 flex items-center justify-center hover:bg-[#EFE7DA]"
                          onClick={() => updateQuantity(it.key, it.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm tracking-wide">${(it.price * it.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#1A1410]/10 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#8B7D6B]">
                  Subtotal
                </span>
                <span className="font-serif text-2xl">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-xs text-[#8B7D6B]">
                Taxes and shipping calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full bg-[#1A1410] hover:bg-[#3D332A] text-[#F7F2EA] uppercase tracking-[0.22em] text-xs py-4 transition-colors duration-300"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full text-[11px] uppercase tracking-[0.3em] text-[#8B7D6B] hover:text-[#1A1410] transition-colors py-2"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
