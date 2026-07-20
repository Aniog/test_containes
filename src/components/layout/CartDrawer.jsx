import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Dialog } from "@/components/ui/dialog";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { formatPrice, cn } from "@/lib/utils";
import { getProductById } from "@/data/products";

const FALLBACK_BY_PRODUCT = {
  "vivid-aura-jewels": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=90&fit=max&fm=jpg",
  "majestic-flora-nectar": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=90&fit=max&fm=jpg",
  "golden-sphere-huggies": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=90&fit=max&fm=jpg",
  "amber-lace-earrings": "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&q=90&fit=max&fm=jpg",
  "royal-heirloom-set": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=90&fit=max&fm=jpg",
  "celeste-pearl-drops": "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=90&fit=max&fm=jpg",
  "lumiere-chain-necklace": "https://images.unsplash.com/photo-1633934542430-0905ccb5f050?w=400&q=90&fit=max&fm=jpg",
  "siren-twisted-huggies": "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=90&fit=max&fm=jpg",
};

function CartItem({ item }) {
  const { setQty, remove } = useCart();
  const fallback = FALLBACK_BY_PRODUCT[item.product.id];
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [item.product.id]);

  return (
    <li className="flex gap-4 py-6 border-b border-hairline last:border-b-0">
      <Link
        to={`/product/${item.product.id}`}
        className="shrink-0 w-20 h-24 bg-ivory overflow-hidden"
      >
        <div ref={ref} className="w-full h-full">
          <img
            data-strk-img-id={`prod-${item.product.id}-1`}
            src={fallback}
            alt={item.product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              to={`/product/${item.product.id}`}
              className="block text-[11px] uppercase tracking-wider2 text-ink font-medium truncate"
            >
              {item.product.name}
            </Link>
            <p className="mt-1 text-[11px] text-muted tracking-wider2 uppercase">
              {item.variant === "silver" ? "Sterling Silver" : "18K Gold"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => remove(item.product.id, item.variant)}
            aria-label={`Remove ${item.product.name}`}
            className="text-muted hover:text-ink p-1"
          >
            <X className="w-4 h-4" strokeWidth={1.25} />
          </button>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div className="inline-flex items-center border border-hairline">
            <button
              type="button"
              onClick={() => setQty(item.product.id, item.variant, item.qty - 1)}
              aria-label="Decrease quantity"
              className="w-7 h-7 flex items-center justify-center text-ink hover:text-gold-deep"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-7 text-center text-[12px] text-ink">{item.qty}</span>
            <button
              type="button"
              onClick={() => setQty(item.product.id, item.variant, item.qty + 1)}
              aria-label="Increase quantity"
              className="w-7 h-7 flex items-center justify-center text-ink hover:text-gold-deep"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <p className="text-[13px] text-ink font-medium">
            {formatPrice(item.lineTotal)}
          </p>
        </div>
      </div>
    </li>
  );
}

export function CartDrawer() {
  const { open, setOpen, items, subtotal } = useCart();

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
          <h2 className="font-serif text-xl text-ink tracking-wider2">Your Bag</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            className="text-ink hover:text-gold-deep p-1"
          >
            <X className="w-5 h-5" strokeWidth={1.25} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-10 h-10 text-muted mb-6" strokeWidth={1} />
            <p className="font-serif text-2xl text-ink mb-2">Your bag is empty</p>
            <p className="text-sm text-muted max-w-xs">
              Discover our bestsellers — hand-finished demi-fine pieces, made to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center justify-center bg-ink text-bone px-8 py-4 text-[11px] uppercase tracking-wider2 font-medium hover:bg-gold-deep transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6">
              {items.map((it) => (
                <CartItem key={`${it.product.id}-${it.variant}`} item={it} />
              ))}
            </ul>
            <div className="border-t border-hairline px-6 py-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-wider2 text-muted">Subtotal</span>
                <span className="text-base text-ink font-medium">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-[11px] text-muted leading-relaxed">
                Shipping and taxes calculated at checkout. Free worldwide shipping on orders over $75.
              </p>
              <button
                type="button"
                onClick={() => alert("Checkout is a demo — connect your real payment provider here.")}
                className={cn(
                  "mt-5 w-full bg-ink text-bone py-4 text-[11px] uppercase tracking-wider2 font-medium",
                  "hover:bg-gold-deep transition-colors"
                )}
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-2 w-full py-3 text-[11px] uppercase tracking-wider2 text-muted hover:text-ink transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </Dialog>
  );
}
