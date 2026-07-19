import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import StrkImage from "@/components/ui/StrkImage";

export default function CartDrawer() {
  const { items, isOpen, closeCart, setQuantity, removeItem, subtotal, count } =
    useCart();

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeCart}
        className={`fixed inset-0 z-[80] bg-ink/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping bag"
        aria-modal="true"
        className={`fixed top-0 right-0 z-[90] h-full w-full sm:w-[440px] bg-paper border-l border-stone shadow-2xl transition-transform duration-300 ease-out-soft flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-stone">
          <div>
            <p className="eyebrow">Your Bag</p>
            <h2 className="display-2 text-xl text-ink mt-1">
              {count === 0 ? "Empty" : `${count} ${count === 1 ? "piece" : "pieces"}`}
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="text-ink hover:text-gold-deep transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <EmptyState onClose={closeCart} />
          ) : (
            <ul className="divide-y divide-stone">
              {items.map((item) => (
                <li
                  key={item.lineId}
                  className="flex gap-4 px-6 py-5"
                >
                  <div className="w-20 shrink-0">
                    <StrkImage
                      imgId={item.imgId}
                      query={`[cart-item-${item.id}-name] [cart-item-${item.id}-variant]`}
                      ratio="1x1"
                      width="200"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      id={`cart-item-${item.id}-name`}
                      className="product-name text-ink"
                    >
                      {item.name}
                    </p>
                    <p
                      id={`cart-item-${item.id}-variant`}
                      className="text-xs text-muted mt-1"
                    >
                      {item.variant?.label || "Default"}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-stone">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            setQuantity(item.lineId, item.quantity - 1)
                          }
                          className="w-8 h-8 inline-flex items-center justify-center text-ink hover:bg-stone transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            setQuantity(item.lineId, item.quantity + 1)
                          }
                          className="w-8 h-8 inline-flex items-center justify-center text-ink hover:bg-stone transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm text-ink tabular-nums">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.lineId)}
                      className="mt-3 text-xs uppercase tracking-eyebrow text-muted hover:text-ink transition-colors"
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
          <footer className="border-t border-stone px-6 py-5 bg-paper">
            <div className="flex items-center justify-between text-sm text-ink mb-1">
              <span className="uppercase tracking-eyebrow text-xs text-muted">
                Subtotal
              </span>
              <span className="tabular-nums text-base">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-muted">
              Shipping and taxes calculated at checkout.
            </p>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="btn-primary w-full mt-4"
            >
              Checkout
            </Link>
            <button
              type="button"
              onClick={closeCart}
              className="btn-ghost w-full mt-2"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}

function EmptyState({ onClose }) {
  return (
    <div className="px-6 py-16 text-center">
      <p className="eyebrow text-muted">Your bag is empty</p>
      <h3 className="display-2 text-2xl text-ink mt-3">
        Nothing here yet
      </h3>
      <p className="text-sm text-muted mt-3 max-w-xs mx-auto">
        Find a piece you'll wear on repeat — or two. Our demi-fine
        jewelry is made to be lived in.
      </p>
      <Link
        to="/shop"
        onClick={onClose}
        className="btn-outline mt-6 inline-flex"
      >
        Shop the Collection
      </Link>
    </div>
  );
}
