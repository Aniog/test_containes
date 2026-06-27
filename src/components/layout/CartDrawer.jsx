import * as React from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetHeader, SheetBody, SheetFooter, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartDispatch, useCartState, useCartUi, formatPrice } from "@/context/CartContext";
import { Plus, Minus, X } from "lucide-react";

const SHIPPING_THRESHOLD = 75;
const FLAT_SHIPPING = 8;

export function CartDrawer() {
  const { isOpen, closeCart, subtotal, itemCount } = useCartUi();
  const items = useCartState().items;
  const { setQuantity, removeItem } = useCartDispatch();
  const shipping = subtotal >= SHIPPING_THRESHOLD || subtotal === 0 ? 0 : FLAT_SHIPPING;
  const progress = Math.min(100, (subtotal / SHIPPING_THRESHOLD) * 100);
  const remaining = Math.max(0, SHIPPING_THRESHOLD - subtotal);

  return (
    <Sheet open={isOpen} onClose={closeCart} ariaLabel="Shopping cart">
      <SheetHeader onClose={closeCart}>
        <SheetTitle>
          Your Bag{itemCount > 0 ? ` · ${itemCount}` : ""}
        </SheetTitle>
      </SheetHeader>

      {itemCount === 0 ? (
        <SheetBody>
          <EmptyState onClose={closeCart} />
        </SheetBody>
      ) : (
        <>
          <SheetBody>
            {/* Free shipping progress */}
            {remaining > 0 ? (
              <div className="mb-6 pb-6 border-b border-hairline">
                <p className="text-xs text-ink-muted">
                  You're <span className="text-ink">{formatPrice(remaining)}</span> away from free shipping.
                </p>
                <div className="mt-3 h-px bg-hairline relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gold transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="mb-6 pb-6 border-b border-hairline">
                <p className="text-xs uppercase tracking-button font-medium text-gold-deep">
                  You've unlocked free shipping.
                </p>
              </div>
            )}

            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      data-strk-img-id={`cart-${item.productId}-${item.variant || "default"}`}
                      data-strk-img={item.image || `gold jewelry product photo ${item.name}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="240"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-serif uppercase tracking-product text-sm text-ink truncate">
                          {item.name}
                        </p>
                        {item.variant && (
                          <p className="mt-1 text-[11px] uppercase tracking-button text-ink-muted">
                            {item.variant}
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-ink-muted hover:text-ink transition-colors duration-300 -mr-1 -mt-1 p-1"
                      >
                        <X strokeWidth={1.25} className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <QuantityStepper
                        value={item.quantity}
                        onChange={(q) => setQuantity(item.key, q)}
                      />
                      <p className="text-sm text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </SheetBody>

          <SheetFooter>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">Subtotal</span>
                <span className="text-ink">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink-muted">Shipping</span>
                <span className="text-ink">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </span>
              </div>
              <div className="pt-4 border-t border-hairline flex items-center justify-between">
                <span className="text-xs uppercase tracking-button font-medium text-ink">
                  Total
                </span>
                <span className="font-serif text-2xl text-ink">
                  {formatPrice(subtotal + shipping)}
                </span>
              </div>
              <Link to="/checkout" onClick={closeCart} className="block">
                <Button variant="primary" size="lg" className="w-full">
                  Checkout
                </Button>
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="block w-full text-center text-xs uppercase tracking-button text-ink-muted hover:text-ink transition-colors duration-300 py-2"
              >
                Continue Shopping
              </button>
            </div>
          </SheetFooter>
        </>
      )}
    </Sheet>
  );
}

function EmptyState({ onClose }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center py-20">
      <p className="text-[11px] uppercase tracking-eyebrow font-medium text-ink-muted">
        Your bag is empty
      </p>
      <h3 className="mt-4 font-serif text-3xl text-ink">
        Let's change that.
      </h3>
      <p className="mt-3 text-sm text-ink-muted max-w-xs">
        Discover our most-loved pieces, designed to be worn every day.
      </p>
      <div className="mt-8">
        <Link to="/shop" onClick={onClose}>
          <Button variant="primary" size="md">
            Shop the Collection
          </Button>
        </Link>
      </div>
    </div>
  );
}

function QuantityStepper({ value, onChange }) {
  return (
    <div className="inline-flex items-center border border-hairline">
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        aria-label="Decrease quantity"
        disabled={value <= 1}
        className="w-8 h-8 inline-flex items-center justify-center text-ink hover:text-gold-deep disabled:opacity-30 transition-colors duration-300"
      >
        <Minus strokeWidth={1.25} className="w-3 h-3" />
      </button>
      <span className="w-8 text-center text-xs text-ink tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
        className="w-8 h-8 inline-flex items-center justify-center text-ink hover:text-gold-deep transition-colors duration-300"
      >
        <Plus strokeWidth={1.25} className="w-3 h-3" />
      </button>
    </div>
  );
}
