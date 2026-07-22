import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import StrkImage from "@/components/ui/StrkImage";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, setQuantity, removeItem, itemCount } = useCart();

  // Lock body scroll when open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm transition-opacity duration-500 ease-editorial ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[440px] flex-col bg-white shadow-drawer transition-transform duration-500 ease-editorial ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        aria-hidden={!isOpen}
        inert={!isOpen ? "" : undefined}
      >
        <header className="flex items-center justify-between border-b border-cream px-6 py-5">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl text-espresso">Your Bag</span>
            <span className="text-[11px] uppercase tracking-widest2 text-muted">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-full p-2 text-espresso transition hover:bg-cream/60"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ivory text-gold-deep">
              <ShoppingBag size={22} strokeWidth={1.4} />
            </span>
            <div className="space-y-2">
              <p className="font-serif text-2xl text-espresso">Your bag is empty</p>
              <p className="text-sm text-espresso-soft">
                Begin with a piece from our newest collection.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-flex items-center justify-center bg-espresso px-8 py-3 text-[11px] font-medium uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-espresso-soft"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 py-4">
              {lines.map((line) => (
                <li
                  key={line.id}
                  className="flex gap-4 border-b border-cream py-5 last:border-b-0"
                >
                  <Link
                    to={`/product/${line.product.id}`}
                    onClick={closeCart}
                    className="block w-20 shrink-0"
                  >
                    <StrkImage
                      query={line.product.imageQuery}
                      ratio="1x1"
                      width={200}
                      alt={line.product.name}
                      className="rounded-sm"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${line.product.id}`}
                          onClick={closeCart}
                          className="block font-sans text-[12px] font-medium uppercase tracking-editorial text-espresso hover:text-gold-deep"
                        >
                          {line.product.name}
                        </Link>
                        <p className="mt-1 text-[11px] uppercase tracking-wide text-muted">
                          {line.variant?.label}
                        </p>
                      </div>
                      <span className="font-sans text-sm font-medium tabular text-espresso">
                        {formatPrice(line.lineTotal)}
                      </span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-cream">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQuantity(line.id, line.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center text-espresso transition hover:bg-cream/60 disabled:opacity-40"
                          disabled={line.quantity <= 1}
                        >
                          <Minus size={12} strokeWidth={1.6} />
                        </button>
                        <span className="w-8 text-center text-[12px] tabular text-espresso">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity(line.id, line.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center text-espresso transition hover:bg-cream/60"
                        >
                          <Plus size={12} strokeWidth={1.6} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.id)}
                        className="text-[11px] uppercase tracking-widest2 text-muted underline-offset-4 transition hover:text-espresso hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="border-t border-cream bg-ivory-soft px-6 py-6">
              <div className="mb-4 flex items-baseline justify-between">
                <span className="text-[12px] uppercase tracking-widest2 text-muted">
                  Subtotal
                </span>
                <span className="font-sans text-base font-medium tabular text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mb-5 text-[11px] leading-relaxed text-muted">
                Shipping and taxes calculated at checkout. Free worldwide shipping on orders
                over $75.
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="block w-full bg-espresso py-4 text-center text-[11px] font-medium uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-espresso-soft"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 block w-full py-2 text-center text-[11px] uppercase tracking-widest2 text-muted transition hover:text-espresso"
              >
                Continue Shopping
              </button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}
