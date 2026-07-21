import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import JewelImage from "@/components/ui/JewelImage";
import { PRODUCTS } from "@/data/products";

const SHAPES = {
  "vivid-aura-jewels": "cuff",
  "majestic-flora-nectar": "pendant",
  "golden-sphere-huggies": "huggie",
  "amber-lace-earrings": "drop",
  "royal-heirloom-set": "set",
};
const BGS = {
  "vivid-aura-jewels": "velvet",
  "majestic-flora-nectar": "dusk",
  "golden-sphere-huggies": "warm",
  "amber-lace-earrings": "glow",
  "royal-heirloom-set": "cream",
};

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, totals, bumpKey } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeCart(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[70] bg-ink/45 transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[71] w-full sm:w-[440px] bg-cream shadow-drawer transform transition-transform duration-500 ease-velvet ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
        role="dialog"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
            <div className="flex items-center gap-3">
              <h2 className="eyebrow text-ink">Your Bag</h2>
              <span key={bumpKey} className="text-xs text-muted">
                {totals.count} {totals.count === 1 ? "item" : "items"}
              </span>
            </div>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Close cart"
              className="p-1 text-ink hover:text-champagne-dark"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="px-6 py-16 flex flex-col items-center text-center gap-5">
                <p className="font-display text-2xl text-ink">Your bag is empty</p>
                <p className="text-sm text-muted max-w-xs">
                  Begin your collection — demi-fine pieces designed for everyday wear.
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-base btn-primary mt-2"
                >
                  Shop the Collection
                </Link>
              </div>
            ) : (
              <ul className="divide-y divide-hairline">
                {items.map((line) => {
                  const product = PRODUCTS.find((p) => p.id === line.productId);
                  return (
                    <li key={line.key} className="px-6 py-5 flex gap-4">
                      <div className="w-20 h-24 flex-none overflow-hidden">
                        <JewelImage
                          shape={SHAPES[line.productId] || "cuff"}
                          bg={BGS[line.productId] || "warm"}
                          alt={product?.alt || line.name}
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="eyebrow text-[0.7rem] text-ink truncate">
                            {line.name}
                          </h3>
                          <button
                            type="button"
                            onClick={() => removeItem(line.key)}
                            aria-label="Remove item"
                            className="text-muted hover:text-ink p-0.5 -mt-0.5"
                          >
                            <Trash2 size={14} strokeWidth={1.5} />
                          </button>
                        </div>
                        {line.variantId && product && (
                          <p className="text-xs text-muted">
                            {product.variants.find((v) => v.id === line.variantId)?.label}
                          </p>
                        )}
                        <p className="text-sm text-ink">${line.price}</p>
                        <div className="mt-auto flex items-center gap-3">
                          <div className="inline-flex items-center border border-hairline">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() => updateQty(line.key, line.qty - 1)}
                              className="w-7 h-7 flex items-center justify-center text-ink hover:text-champagne-dark"
                            >
                              <Minus size={12} strokeWidth={1.5} />
                            </button>
                            <span className="w-7 text-center text-xs">{line.qty}</span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() => updateQty(line.key, line.qty + 1)}
                              className="w-7 h-7 flex items-center justify-center text-ink hover:text-champagne-dark"
                            >
                              <Plus size={12} strokeWidth={1.5} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-hairline px-6 py-5 flex flex-col gap-4 bg-cream">
              <div className="flex items-baseline justify-between">
                <span className="eyebrow text-muted">Subtotal</span>
                <span className="text-lg text-ink">${totals.subtotal}</span>
              </div>
              <p className="text-xs text-muted -mt-2">
                Shipping & taxes calculated at checkout.
              </p>
              <button type="button" className="btn-base btn-primary w-full">
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="btn-base btn-outline w-full"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
