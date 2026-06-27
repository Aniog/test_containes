import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { formatCurrency, cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

function resolveLine(line) {
  const product = products.find((p) => p.id === line.id);
  if (!product) return null;
  const variant = product.variants.find((v) => v.id === line.variantId);
  return {
    product,
    variantLabel: variant?.label ?? product.variants[0].label,
  };
}

export default function CartDrawer() {
  const {
    drawerOpen,
    closeDrawer,
    items,
    setQty,
    removeItem,
    itemCount,
  } = useCart();

  // Close on Escape
  useEffect(() => {
    if (!drawerOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen, closeDrawer]);

  const lines = items
    .map((line) => {
      const resolved = resolveLine(line);
      if (!resolved) return null;
      return {
        ...line,
        ...resolved,
        lineTotal: resolved.product.price * line.qty,
      };
    })
    .filter(Boolean);

  const subtotal = lines.reduce((sum, l) => sum + l.lineTotal, 0);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!drawerOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/40"
        onClick={closeDrawer}
      />

      {/* Panel */}
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-bone shadow-[0_24px_48px_rgba(31,24,20,0.18)] flex flex-col transition-transform duration-500 ease-out",
          drawerOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-line">
          <h2 className="font-serif text-xl tracking-[0.18em] uppercase">
            Your Bag
            <span className="ml-3 text-xs text-muted tracking-wide">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </span>
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeDrawer}
            className="p-2 text-espresso hover:text-espresso-soft"
          >
            <X strokeWidth={1.25} className="w-5 h-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <ShoppingBag
              strokeWidth={1.25}
              className="w-12 h-12 text-muted mb-6"
            />
            <p className="font-serif text-2xl text-espresso">Your bag is empty</p>
            <p className="text-sm text-muted mt-2 max-w-xs">
              Pieces you add will appear here. Begin with our bestsellers.
            </p>
            <Button
              variant="secondary"
              size="md"
              className="mt-8"
              onClick={closeDrawer}
              as={Link}
              to="/shop"
            >
              Shop the Collection
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto thin-scrollbar px-6 py-4">
              <ul className="divide-y divide-line">
                {lines.map((line) => (
                  <li key={`${line.id}-${line.variantId}`} className="py-5 flex gap-4">
                    <Link
                      to={`/product/${line.product.slug}`}
                      onClick={closeDrawer}
                      className="block w-20 h-24 bg-taupe overflow-hidden shrink-0"
                    >
                      <img
                        src={line.product.images[0]}
                        alt={line.product.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <Link
                            to={`/product/${line.product.slug}`}
                            onClick={closeDrawer}
                            className="font-serif text-sm uppercase tracking-[0.15em] text-espresso hover:text-espresso-soft truncate block"
                          >
                            {line.product.name}
                          </Link>
                          <p className="text-xs text-muted mt-1">
                            {line.variantLabel}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${line.product.name}`}
                          onClick={() => removeItem(line.id, line.variantId)}
                          className="text-muted hover:text-espresso p-1 -m-1"
                        >
                          <X strokeWidth={1.25} className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="inline-flex items-center border border-line">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(line.id, line.variantId, line.qty - 1)}
                            disabled={line.qty <= 1}
                            className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-taupe disabled:opacity-30"
                          >
                            <Minus strokeWidth={1.25} className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQty(line.id, line.variantId, line.qty + 1)}
                            disabled={line.qty >= 99}
                            className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-taupe disabled:opacity-30"
                          >
                            <Plus strokeWidth={1.25} className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm text-espresso tabular-nums">
                          {formatCurrency(line.lineTotal)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line px-6 py-6 bg-ivory">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-label text-muted">Subtotal</span>
                <span className="font-serif text-2xl text-espresso tabular-nums">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <p className="text-xs text-muted mb-5">
                Shipping & taxes calculated at checkout.
              </p>
              <Button variant="primary" size="lg" className="w-full">
                Checkout
              </Button>
              <button
                type="button"
                onClick={closeDrawer}
                className="w-full mt-3 text-label text-espresso-soft hover:text-espresso transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}