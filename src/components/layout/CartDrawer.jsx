import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Lock, Minus, Plus, ShoppingBag, Truck, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { StrkImg } from "@/components/ui/strk-img";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { items, count, subtotal, isCartOpen, closeCart, removeItem, setQty } = useCart();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeCart();
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isCartOpen, closeCart]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-espresso/50 backdrop-blur-sm transition-opacity duration-400",
          isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        aria-hidden={!isCartOpen}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-luxe",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-6">
          <h2 className="font-serif text-lg font-medium uppercase tracking-name text-espresso">
            Your Bag {count > 0 && <span className="text-cocoa">({count})</span>}
          </h2>
          <button
            type="button"
            aria-label="Close bag"
            onClick={closeCart}
            className="p-2 -mr-2 text-espresso transition-colors hover:text-bronze"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-line" strokeWidth={1} />
            <p className="font-serif text-2xl font-light text-espresso">Your bag is empty</p>
            <p className="text-sm text-cocoa leading-relaxed">
              Discover pieces crafted to be treasured — and made for every day.
            </p>
            <Button variant="primary" onClick={closeCart} asChild={false}>
              <Link to="/shop" onClick={closeCart} className="text-cream">
                Explore the Collection
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="border-b border-line bg-sand/60 px-6 py-3 flex items-center gap-2.5">
              <Truck className="h-4 w-4 text-bronze shrink-0" strokeWidth={1.5} />
              <p className="text-[11px] uppercase tracking-luxe text-espresso">
                You've unlocked free worldwide shipping
              </p>
            </div>

            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="block h-28 w-22 w-[88px] shrink-0 overflow-hidden bg-shell"
                  >
                    <StrkImg
                      imgId={`cart-${item.productId}-${item.variant}`}
                      query={`[card-${item.productId}-name] [card-${item.productId}-tagline]`}
                      ratio="3x4"
                      width="300"
                      alt={item.product.name}
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${item.productId}`}
                          onClick={closeCart}
                          className="font-serif text-sm font-medium uppercase tracking-name text-espresso hover:text-bronze transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-1 text-[11px] uppercase tracking-widest text-cocoa">
                          {item.variant === "gold" ? "Gold Tone" : "Silver Tone"}
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.product.name}`}
                        onClick={() => removeItem(item.key)}
                        className="p-1 text-cocoa transition-colors hover:text-clay"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQty(item.key, item.qty - 1)}
                          className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-sand"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium text-espresso">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQty(item.key, item.qty + 1)}
                          className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:bg-sand"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-espresso">
                        {formatPrice(item.product.price * item.qty)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-line px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-luxe text-cocoa">Subtotal</span>
                <span className="font-serif text-xl font-medium text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-cocoa">
                Shipping, taxes and gift wrap calculated at checkout.
              </p>
              <Button
                variant="accent"
                className="mt-5 w-full"
                onClick={() =>
                  alert("Demo checkout — connect your payment provider to go live.")
                }
              >
                <Lock className="h-3.5 w-3.5" /> Checkout Securely
              </Button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-4 w-full text-center text-[11px] uppercase tracking-luxe text-cocoa underline-offset-4 hover:text-bronze hover:underline transition-colors"
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
