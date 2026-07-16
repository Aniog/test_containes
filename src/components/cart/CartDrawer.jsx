import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const {
    items,
    count,
    subtotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-espresso/40 backdrop-blur-sm transition-opacity duration-500 ${
          isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-soft transition-transform duration-500 ease-velmora ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        <header className="flex items-center justify-between border-b border-velmora-linen px-5 py-5">
          <div>
            <p className="section-kicker">Your bag</p>
            <h2 className="font-serifDisplay text-3xl text-velmora-espresso">
              {count} {count === 1 ? "piece" : "pieces"}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-linen p-3 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-bronze"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="cart-scroll flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-cocoa">
              <ShoppingBag className="mb-5 h-10 w-10 text-velmora-gold" />
              <p className="font-serifDisplay text-3xl text-velmora-espresso">
                Your bag is waiting.
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6">
                Add a golden detail for yourself or someone you love.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(({ product, quantity, tone }) => (
                <article
                  key={`${product.id}-${tone}`}
                  className="grid grid-cols-[6rem_1fr] gap-4 border-b border-velmora-linen pb-5"
                >
                  <div className="aspect-square rounded-2xl bg-velmora-parchment p-3">
                    <div className="flex h-full w-full items-center justify-center rounded-xl border border-velmora-linen bg-velmora-ivory text-center font-serifDisplay text-2xl text-velmora-gold">
                      V
                    </div>
                  </div>
                  <div className="text-velmora-espresso">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 className="font-serifDisplay text-xl uppercase tracking-product">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-xs uppercase tracking-nav text-velmora-cocoa">
                          {tone} tone
                        </p>
                      </div>
                      <p className="font-medium">{formatPrice(product.price)}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-velmora-linen bg-velmora-ivory">
                        <button
                          type="button"
                          className="p-2 text-velmora-espresso"
                          onClick={() => updateQuantity(product.id, tone, quantity - 1)}
                          aria-label={`Decrease ${product.name}`}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          className="p-2 text-velmora-espresso"
                          onClick={() => updateQuantity(product.id, tone, quantity + 1)}
                          aria-label={`Increase ${product.name}`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-xs font-bold uppercase tracking-nav text-velmora-bronze underline-offset-4 hover:underline"
                        onClick={() => removeFromCart(product.id, tone)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <footer className="border-t border-velmora-linen bg-velmora-parchment px-5 py-5 text-velmora-espresso">
          <div className="flex items-center justify-between font-medium">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-velmora-cocoa">
            Shipping, taxes, and quiet gift wrapping are calculated at checkout.
          </p>
          <button type="button" className="premium-button mt-5 w-full">
            Continue to checkout
          </button>
        </footer>
      </aside>
    </>
  );
}
