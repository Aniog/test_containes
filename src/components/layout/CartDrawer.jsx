import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import StrkImage from "@/components/ui/StrkImage";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, closeCart, removeItem, setQty } = useCart();

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl animate-slide-in-right">
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-xl font-medium uppercase tracking-product text-ink">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-muted transition-colors hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-sand" strokeWidth={1.2} />
            <p className="font-serif text-2xl text-ink">Your bag is empty</p>
            <p className="text-sm text-muted">
              Discover pieces crafted to be treasured.
            </p>
            <Link to="/shop" onClick={closeCart} className="btn-outline-light mt-2">
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.product.id}`}
                    onClick={closeCart}
                    className="h-24 w-20 shrink-0 overflow-hidden bg-sand"
                  >
                    <StrkImage
                      imgId={`cart-${item.product.imgId}`}
                      query={`[${item.product.tagId}] [${item.product.titleId}]`}
                      ratio="3x4"
                      width="300"
                      alt={item.product.name}
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.product.id}`}
                          onClick={closeCart}
                          className="font-serif text-[15px] font-medium uppercase tracking-product text-ink hover:text-gold-deep"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-muted">
                          {item.variant} Tone
                        </p>
                      </div>
                      <p className="text-sm font-medium text-ink">
                        {formatPrice(item.product.price * item.qty)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          className="px-2.5 py-1.5 text-muted transition-colors hover:text-ink"
                          onClick={() => setQty(item.key, item.qty - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm text-ink">{item.qty}</span>
                        <button
                          className="px-2.5 py-1.5 text-muted transition-colors hover:text-ink"
                          onClick={() => setQty(item.key, item.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        className="text-muted transition-colors hover:text-gold-deep"
                        onClick={() => {
                          removeItem(item.key);
                          toast("Removed from bag");
                        }}
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-line bg-cream px-6 py-6">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-5 text-xs text-muted">
                Complimentary worldwide shipping & 30-day returns.
              </p>
              <button
                className="btn-gold w-full"
                onClick={() => toast.success("Checkout is coming soon — this is a design preview.")}
              >
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-3 w-full text-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
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
