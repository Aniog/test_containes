import { Link } from "react-router-dom";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { useStrkImages } from "@/lib/useStrkImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart();
  const containerRef = useStrkImages([isOpen, items.length]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-400 ease-luxury ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-xl text-ink">
            Your Bag{" "}
            <span className="font-sans text-sm text-stone">({count})</span>
          </h2>
          <button type="button" onClick={closeCart} aria-label="Close cart" className="text-ink transition-colors hover:text-gold">
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div ref={containerRef} className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={40} className="text-hairline" strokeWidth={1} />
              <p className="mt-4 font-serif text-lg text-ink">Your bag is empty</p>
              <p className="mt-1 font-sans text-sm text-stone">
                Discover pieces crafted to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 bg-gold px-8 py-3.5 font-sans text-[11px] uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                    <div className="relative h-24 w-20 overflow-hidden bg-sand">
                      <img
                        alt={item.name}
                        data-strk-img-id={`cart-${item.imgId}`}
                        data-strk-img={`[${item.descId}] [${item.titleId}]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="200"
                        src={PLACEHOLDER}
                        className="h-full w-full object-cover"
                      />
                      <span id={item.titleId} className="sr-only">{item.name}</span>
                      <span id={item.descId} className="sr-only">{item.subtitle}</span>
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-wider text-ink">{item.name}</p>
                        {item.tone && (
                          <p className="mt-0.5 font-sans text-xs text-stone">Tone: {item.tone}</p>
                        )}
                      </div>
                      <p className="font-sans text-sm text-ink">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1.5 text-ink transition-colors hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="min-w-8 text-center font-sans text-xs text-ink">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1.5 text-ink transition-colors hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="font-sans text-[11px] uppercase tracking-wider text-stone transition-colors hover:text-ink"
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm uppercase tracking-wider text-stone">Subtotal</span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 font-sans text-xs text-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 w-full bg-gold py-4 font-sans text-[11px] uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-3 font-sans text-[11px] uppercase tracking-widest2 text-stone transition-colors hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
