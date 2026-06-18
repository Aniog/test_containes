import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import StrkImage from "@/components/ui/StrkImage";
import StrkImageHost from "@/components/ui/StrkImageHost";

const formatPrice = (n) => `$${n.toFixed(2)}`;

export default function CartDrawer() {
  const { drawerOpen, closeDrawer, items, subtotal, removeItem, setQuantity } = useCart();

  // Close on Escape
  useEffect(() => {
    if (!drawerOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen, closeDrawer]);

  // Body scroll lock
  useEffect(() => {
    if (drawerOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
    return undefined;
  }, [drawerOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
        aria-hidden={!drawerOpen}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-ivory text-ink shadow-soft transform transition-transform duration-400 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!drawerOpen}
        aria-label="Shopping cart"
      >
        <StrkImageHost deps={[drawerOpen, items.length]} className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
            <h2 className="font-serif text-2xl">Your Bag</h2>
            <button
              type="button"
              aria-label="Close cart"
              onClick={closeDrawer}
              className="p-1 hover:text-gold transition"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                <p className="font-serif text-2xl text-ink">Your bag is empty.</p>
                <p className="text-sm text-muted max-w-xs">
                  Begin with a piece you'll wear every day. Or one for someone you love.
                </p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="mt-2 inline-block bg-ink text-ivory px-7 py-3.5 tracking-editorial uppercase text-[11px] hover:bg-goldDeep transition"
                >
                  Shop the Collection
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-sand/70">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 py-5">
                    <div className="w-20 h-24 bg-bone overflow-hidden flex-shrink-0">
                      <StrkImage
                        imgId={`cart-thumb-${item.imageRefId}`}
                        query={`[${item.imageQueryDesc}] [${item.imageQueryTitle}] gold jewelry`}
                        ratio="3x4"
                        width={200}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <Link
                          to={`/product/${item.slug}`}
                          onClick={closeDrawer}
                          className="block font-serif text-base uppercase tracking-editorial leading-snug hover:text-gold transition truncate"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-muted mt-1">{item.variant}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="inline-flex items-center border border-sand">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            className="px-2 py-1.5 hover:text-gold transition"
                            onClick={() => setQuantity(item.key, item.quantity - 1)}
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="px-3 text-xs">{item.quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            className="px-2 py-1.5 hover:text-gold transition"
                            onClick={() => setQuantity(item.key, item.quantity + 1)}
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>
                        <span className="text-sm">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-[11px] uppercase tracking-editorial text-muted hover:text-gold transition mt-2 self-start"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-sand px-6 py-5 space-y-4 bg-bone/40">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-editorial text-muted">Subtotal</span>
                <span className="font-serif text-2xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted">Shipping &amp; taxes calculated at checkout.</p>
              <button
                type="button"
                className="w-full bg-ink text-ivory py-4 tracking-editorial uppercase text-[11px] hover:bg-goldDeep transition"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeDrawer}
                className="w-full text-center text-[11px] uppercase tracking-editorial text-muted hover:text-gold transition"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </StrkImageHost>
      </aside>
    </>
  );
}
