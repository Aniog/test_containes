import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn, formatPrice } from "@/lib/utils";
import ImageFrame from "@/components/ui/ImageFrame";

export default function CartDrawer() {
  const {
    items,
    summary,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
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
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div
        className={cn(
          "absolute inset-0 bg-charcoal/40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-ivory shadow-editorial-md transition-transform duration-300 ease-editorial",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between border-b border-mist px-6 py-5">
          <div>
            <p className="eyebrow">Your bag</p>
            <h2 className="mt-1 font-serif text-2xl text-charcoal">
              {summary.count === 0 ? "Empty" : `${summary.count} ${summary.count === 1 ? "piece" : "pieces"}`}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="inline-flex h-10 w-10 items-center justify-center text-charcoal transition-colors hover:text-gold-deep"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-mist text-charcoal">
              <ShoppingBag size={22} strokeWidth={1.4} />
            </div>
            <p className="mt-6 font-serif text-2xl text-charcoal">
              Your bag is empty
            </p>
            <p className="mt-2 font-sans text-[14px] text-mocha">
              Discover pieces designed to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary mt-8"
            >
              Shop the collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              <ul className="divide-y divide-mist">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4 py-5">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="block w-20 flex-shrink-0"
                    >
                      <ImageFrame
                        id={`cart-${item.productId}-img`}
                        query={`[cart-${item.productId}-name]`}
                        ratio="3x4"
                        width={200}
                        tone="dark"
                        alt={item.name}
                        className="!bg-espresso"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="font-serif text-base text-charcoal hover:underline"
                      >
                        <span
                          id={`cart-${item.productId}-name`}
                          className="font-serif text-sm uppercase tracking-product"
                        >
                          {item.name}
                        </span>
                      </Link>
                      <p className="mt-1 font-sans text-[12px] uppercase tracking-product text-mocha">
                        {item.variant === "gold" ? "Gold tone" : item.variant}
                      </p>
                      <div className="mt-auto flex items-end justify-between">
                        <div className="inline-flex items-center border border-mist">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.key, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                            className="inline-flex h-8 w-8 items-center justify-center text-charcoal transition-colors hover:bg-bone"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="inline-flex h-8 w-8 items-center justify-center font-sans text-[13px] text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.key, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                            className="inline-flex h-8 w-8 items-center justify-center text-charcoal transition-colors hover:bg-bone"
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-sans text-[14px] text-charcoal">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeItem(item.key)}
                            className="mt-1 font-sans text-[11px] uppercase tracking-product text-mocha underline-offset-2 hover:text-charcoal hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-mist bg-ivory px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="font-sans text-[12px] uppercase tracking-product text-mocha">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-charcoal">
                  {formatPrice(summary.subtotal)}
                </span>
              </div>
              <p className="mt-1 font-sans text-[12px] text-mocha">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                onClick={() => alert("Checkout is coming soon — connect your payment provider in src/api.")}
                className="btn-primary mt-5 w-full"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="btn-ghost mt-3 w-full justify-center"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
