import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import StrkImage from "@/components/ui/StrkImage";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    totals,
    updateQuantity,
    removeFromCart,
  } = useCart();

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-50 bg-espresso/50 transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true"
      />
      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping bag"
        aria-hidden={!isOpen}
        inert={!isOpen ? "" : undefined}
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full sm:w-[440px] bg-bg shadow-xl flex flex-col transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-ink/70 hover:text-ink"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <ShoppingBag
              className="w-10 h-10 text-muted mb-5"
              strokeWidth={1.2}
            />
            <p className="font-serif text-2xl text-ink mb-2">Your bag is empty</p>
            <p className="text-[13px] text-muted max-w-xs mb-7">
              Begin with a bestseller — or browse the latest arrivals.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-hairline">
              {items.map((line) => (
                <li key={line.id} className="flex gap-4 p-5">
                  <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                    <StrkImage
                      imgId={`${line.productId}-1`}
                      query={`[${line.productId}-name] ${line.name} gold jewelry product`}
                      ratio="1x1"
                      width={400}
                      alt={line.name}
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          to={`/product/${line.productId}`}
                          onClick={closeCart}
                          className="product-name block"
                        >
                          {line.name}
                        </Link>
                        <p className="text-[12px] text-muted mt-1">
                          {line.colorLabel}
                        </p>
                      </div>
                      <p className="text-[13px] text-ink whitespace-nowrap">
                        {formatPrice(line.price * line.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(line.id, line.quantity - 1)
                          }
                          className="w-8 h-8 inline-flex items-center justify-center text-ink/70 hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-[12px]">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(line.id, line.quantity + 1)
                          }
                          className="w-8 h-8 inline-flex items-center justify-center text-ink/70 hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(line.id)}
                        className="text-[11px] uppercase tracking-widest2 text-muted hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-hairline px-6 py-5 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="label-cap text-muted">Subtotal</span>
                <span className="font-serif text-xl">
                  {formatPrice(totals.subtotal)}
                </span>
              </div>
              <p className="text-[12px] text-muted">
                Shipping and taxes calculated at checkout.
              </p>
              <button type="button" className="btn-primary w-full mt-2">
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="block w-full text-center label-cap text-muted hover:text-ink py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
