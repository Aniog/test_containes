import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ILLUSTRATIONS } from "@/components/illustrations/JewelryArt";
import { formatPrice, cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const CartLine = ({ line }) => {
  const { updateQuantity, removeItem } = useCart();
  const Illustration = ILLUSTRATIONS[line.imageIllustration];
  return (
    <li className="flex gap-4 py-6 border-b border-ink/10">
      <div className="h-24 w-24 shrink-0 bg-mocha overflow-hidden">
        {Illustration ? (
          <Illustration />
        ) : (
          <div className="h-full w-full bg-mocha" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-serif text-lg leading-tight truncate">
              {line.name}
            </h3>
            {line.variantLabel && (
              <p className="mt-1 text-[11px] uppercase tracking-eyebrow text-taupe">
                {line.variantLabel}
              </p>
            )}
          </div>
          <button
            type="button"
            aria-label={`Remove ${line.name}`}
            onClick={() => removeItem(line.key)}
            className="p-1 -m-1 text-ink/50 hover:text-ink transition-colors"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="inline-flex items-center border border-ink/15">
            <button
              type="button"
              onClick={() => updateQuantity(line.key, line.quantity - 1)}
              aria-label="Decrease quantity"
              className="h-8 w-8 flex items-center justify-center text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center text-sm font-sans tabular-nums">
              {line.quantity}
            </span>
            <button
              type="button"
              onClick={() => updateQuantity(line.key, line.quantity + 1)}
              aria-label="Increase quantity"
              className="h-8 w-8 flex items-center justify-center text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>
          <p className="font-sans tabular-nums text-ink">
            {formatPrice(line.price * line.quantity)}
          </p>
        </div>
      </div>
    </li>
  );
};

const CartDrawer = () => {
  const { items, summary, isDrawerOpen, closeDrawer } = useCart();
  const [mounted, setMounted] = useState(false);

  // Allow the slide-out animation before unmounting
  useEffect(() => {
    if (isDrawerOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      const t = setTimeout(() => setMounted(false), 400);
      document.body.style.overflow = "";
      return () => clearTimeout(t);
    }
  }, [isDrawerOpen]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={cn(
          "absolute inset-0 bg-ink/40 transition-opacity duration-300",
          isDrawerOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeDrawer}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          "absolute inset-y-0 right-0 w-full sm:w-[440px] bg-ivory shadow-soft flex flex-col",
          "transition-transform duration-500 ease-out",
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <header className="flex items-center justify-between h-16 px-6 border-b border-ink/10 shrink-0">
          <h2 className="font-serif text-xl">Your Bag</h2>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close cart"
            className="p-2 -mr-2 text-ink"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="h-20 w-20 rounded-full bg-mocha/40 flex items-center justify-center text-ink/40 mb-6">
              <ShoppingBag size={28} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-3xl mb-2">Your bag is empty</h3>
            <p className="text-taupe text-sm leading-relaxed mb-8 max-w-xs">
              Quiet pieces, made to be worn every day. Begin with our most-loved.
            </p>
            <Button as={Link} to="/shop" onClick={closeDrawer} variant="primary">
              Shop the collection
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6">
              {items.map((line) => (
                <CartLine key={line.key} line={line} />
              ))}
            </ul>
            <footer className="px-6 py-6 border-t border-ink/10 shrink-0">
              <div className="space-y-2 mb-5 text-sm">
                <div className="flex items-center justify-between text-taupe">
                  <span>Subtotal</span>
                  <span className="text-ink tabular-nums">{formatPrice(summary.subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-taupe">
                  <span>Shipping</span>
                  <span className="text-ink">
                    {summary.shipping === 0 ? "Complimentary" : formatPrice(summary.shipping)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-ink/10">
                  <span className="font-sans text-[11px] uppercase tracking-eyebrow text-ink">
                    Total
                  </span>
                  <span className="font-sans tabular-nums text-ink text-base">
                    {formatPrice(summary.total)}
                  </span>
                </div>
              </div>
              <Button
                as={Link}
                to="/checkout"
                onClick={closeDrawer}
                variant="primary"
                fullWidth
                size="lg"
              >
                Checkout
              </Button>
              <p className="mt-4 text-center text-[11px] uppercase tracking-eyebrow text-taupe">
                Free shipping over $80 · 30-day returns
              </p>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
};

export default CartDrawer;
