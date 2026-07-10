import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import StrkImage from "@/components/ui/StrkImage";
import Button from "@/components/ui/Button";
import { formatPrice, cn } from "@/lib/utils";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    subtotal,
    setQty,
    removeItem,
    itemCount,
  } = useCart();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 editorial-transition",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink-950/60 editorial-transition",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeCart}
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          "absolute right-0 top-0 h-full w-full sm:w-[440px] bg-sand-50 text-ink-950 shadow-2xl flex flex-col editorial-transition",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <header className="flex items-center justify-between px-6 h-16 border-b border-sand-200">
          <div className="flex items-baseline gap-3">
            <h2 className="font-serif text-2xl font-light">Your Bag</h2>
            <span className="label-cap text-textmute">
              {itemCount} item{itemCount === 1 ? "" : "s"}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 text-ink-950 hover:text-champagne-600 editorial-transition"
          >
            <X size={20} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-8">
              <p className="font-serif text-3xl font-light">Your bag is quiet.</p>
              <p className="mt-3 text-sm text-textmute max-w-xs">
                Begin with a single piece, or explore the collection to find one to keep.
              </p>
              <Button
                variant="primary"
                size="md"
                className="mt-8"
                onClick={closeCart}
                as={Link}
                to="/shop"
              >
                Shop the Collection
              </Button>
            </div>
          ) : (
            <ul className="px-6 divide-y divide-sand-200">
              {items.map((it) => (
                <li key={it.id} className="py-5 flex gap-4">
                  <div className="w-20 flex-shrink-0">
                    <StrkImage
                      imgId={`cart-${it.id}-img`}
                      query={`[${it.titleId}] Velmora fine jewelry product`}
                      ratio="1x1"
                      width={200}
                      alt={it.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          to={`/product/${it.id}`}
                          onClick={closeCart}
                          className="block font-sans text-[12px] uppercase tracking-wider1 font-medium text-ink-950 truncate hover:text-champagne-600 editorial-transition"
                        >
                          {it.name}
                        </Link>
                        <p className="mt-1 text-xs text-textmute">{it.category}</p>
                      </div>
                      <span className="font-sans text-sm text-ink-950 whitespace-nowrap">
                        {formatPrice(it.price * it.qty)}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center border border-sand-200">
                        <button
                          type="button"
                          onClick={() => setQty(it.id, it.qty - 1)}
                          aria-label="Decrease quantity"
                          className="w-8 h-8 inline-flex items-center justify-center text-ink-950 hover:text-champagne-600 editorial-transition"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs">{it.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(it.id, it.qty + 1)}
                          aria-label="Increase quantity"
                          className="w-8 h-8 inline-flex items-center justify-center text-ink-950 hover:text-champagne-600 editorial-transition"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(it.id)}
                        aria-label={`Remove ${it.name}`}
                        className="p-2 text-textmute hover:text-ink-950 editorial-transition"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-sand-200 px-6 py-6 space-y-5">
            <div className="flex items-baseline justify-between">
              <span className="label-cap text-textmute">Subtotal</span>
              <span className="font-sans text-base text-ink-950">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-textmute">
              Shipping and taxes calculated at checkout.
            </p>
            <Button
              variant="primary"
              size="full"
              onClick={closeCart}
              as={Link}
              to="/checkout"
            >
              Checkout
            </Button>
          </div>
        )}
      </aside>
    </div>
  );
}
