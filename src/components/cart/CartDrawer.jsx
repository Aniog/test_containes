import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";

// Tiny image element using the strk-img system for cart items.
// The strk-img plugin needs literal IDs and queries, so we map each
// known product slug to a static entry already in the registry.
const CART_THUMB = {
  "vivid-aura-jewels": {
    id: "cart-vivid-aura-jewels",
    query: "vivid aura ear cuff crystal accent gold plated warm editorial",
  },
  "majestic-flora-nectar": {
    id: "cart-majestic-flora-nectar",
    query: "majestic flora multicolor crystal necklace gold plated warm editorial",
  },
  "golden-sphere-huggies": {
    id: "cart-golden-sphere-huggies",
    query: "golden sphere chunky gold dome huggie earrings warm editorial",
  },
  "amber-lace-earrings": {
    id: "cart-amber-lace-earrings",
    query: "amber lace textured gold filigree drop earrings warm editorial",
  },
  "royal-heirloom-set": {
    id: "cart-royal-heirloom-set",
    query: "royal heirloom gold earring and necklace set in ivory box warm editorial",
  },
};
const DEFAULT_THUMB = {
  id: "cart-vivid-aura-jewels",
  query: "demi fine gold jewelry editorial warm product still life",
};

function CartThumb({ productId, name }) {
  const spec = CART_THUMB[productId] || DEFAULT_THUMB;
  return (
    <div className="w-20 h-24 bg-blush overflow-hidden flex-shrink-0">
      <img
        alt={name}
        data-strk-img-id={spec.id}
        data-strk-img={spec.query}
        data-strk-img-ratio="3x4"
        data-strk-img-width="200"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, totals } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-espresso/50"
        onClick={closeCart}
        aria-label="Close cart"
      />
      <aside
        className={cn(
          "absolute top-0 right-0 h-full w-full max-w-md bg-cream text-ink flex flex-col shadow-xl transition-transform duration-500 ease-out-soft",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-ink/10">
          <h2 className="text-[11px] tracking-wider-3 uppercase font-medium">
            Your Cart · {totals.count}
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1">
            <X className="w-5 h-5" strokeWidth={1.25} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-10">
              <span className="font-display text-3xl text-ink">Your cart awaits</span>
              <p className="mt-4 text-sm text-ink-soft max-w-xs">
                Begin with one of our hand-finished pieces — every order is presented in our signature gift box.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-primary mt-8"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="px-6 divide-y divide-ink/10">
              {items.map((item) => (
                <li key={item.id} className="py-5 flex gap-4">
                  <CartThumb productId={item.id} name={item.name} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="product-name block truncate hover:text-champagne-deep transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-[10px] tracking-wider-3 uppercase text-mute">
                          {item.tone === "multicolor" ? "Multi-Tone" : "Gold Tone"}
                        </p>
                      </div>
                      <p className="text-sm text-ink whitespace-nowrap">
                        {formatPrice(item.price * item.qty)}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-ink/15">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-ink-soft hover:text-ink"
                        >
                          <Minus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-xs tabular-nums">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-ink-soft hover:text-ink"
                        >
                          <Plus className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[10px] tracking-wider-3 uppercase text-mute hover:text-ink transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-6 bg-ivory">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-ink-soft">
                <span>Subtotal</span>
                <span className="tabular-nums">{formatPrice(totals.subtotal)}</span>
              </div>
              <div className="flex justify-between text-ink-soft">
                <span>Shipping</span>
                <span className="tabular-nums">
                  {totals.shipping === 0 ? "Complimentary" : formatPrice(totals.shipping)}
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-ink/10 text-ink">
                <span className="text-[11px] tracking-wider-3 uppercase">Total</span>
                <span className="font-medium tabular-nums">{formatPrice(totals.total)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="mt-6 w-full btn-accent justify-center"
            >
              Checkout
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <p className="mt-4 text-center text-[10px] tracking-wider-3 uppercase text-mute">
              Free worldwide shipping over $75
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
