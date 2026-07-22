import { Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, Trash2, Truck } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { toast } from "sonner"

const FREE_SHIPPING_THRESHOLD = 75

export function CartDrawer() {
  const { items, subtotal, count, isOpen, setIsOpen, updateQty, removeItem } = useCart()
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full">
        <div className="border-b border-line p-6 pb-5">
          <SheetTitle>
            Your Bag{" "}
            <span className="font-sans text-sm font-normal text-ink-soft">
              ({count} {count === 1 ? "item" : "items"})
            </span>
          </SheetTitle>
        </div>

        {items.length > 0 ? (
          <>
            <div className="border-b border-line px-6 py-4">
              <p className="flex items-center gap-2 text-xs text-ink-soft">
                <Truck className="size-4 text-bronze" />
                {remaining > 0 ? (
                  <span>
                    You're <span className="font-semibold text-ink">${remaining.toFixed(0)}</span> away from free shipping
                  </span>
                ) : (
                  <span className="font-medium text-ink">You've unlocked free worldwide shipping</span>
                )}
              </p>
              <div className="mt-2.5 h-[3px] w-full overflow-hidden rounded-full bg-sand">
                <div className="h-full bg-bronze transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6">
              {items.map((item) => {
                const titleId = `cart-${item.product.id}-title`
                return (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4 border-b border-line py-5">
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={() => setIsOpen(false)}
                      className="flex size-20 shrink-0 items-center justify-center rounded-sm bg-cream"
                    >
                      <span className="font-serif text-2xl font-medium text-bronze">
                        {item.product.name.charAt(0)}
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link to={`/product/${item.product.id}`} onClick={() => setIsOpen(false)}>
                            <h4
                              id={titleId}
                              className="font-serif text-sm font-medium uppercase leading-snug tracking-[0.12em] text-ink hover:text-bronze"
                            >
                              {item.product.name}
                            </h4>
                          </Link>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-ink-soft">{item.variant}</p>
                        </div>
                        <p className="text-sm font-medium text-ink">${(item.product.price * item.qty).toFixed(0)}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-line">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            className="flex size-7 items-center justify-center text-ink-soft transition-colors hover:text-ink"
                            onClick={() => updateQty(item.productId, item.variant, item.qty - 1)}
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-ink">{item.qty}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            className="flex size-7 items-center justify-center text-ink-soft transition-colors hover:text-ink"
                            onClick={() => updateQty(item.productId, item.variant, item.qty + 1)}
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          aria-label="Remove item"
                          className="flex items-center gap-1 text-[11px] uppercase tracking-[0.15em] text-ink-soft transition-colors hover:text-destructive"
                          onClick={() => {
                            removeItem(item.productId, item.variant)
                            toast.success(`${item.product.name} removed from your bag`)
                          }}
                        >
                          <Trash2 className="size-3.5" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-line p-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-soft">Subtotal</span>
                <span className="font-serif text-2xl font-medium text-ink">${subtotal.toFixed(0)}</span>
              </div>
              <p className="mt-1 text-[11px] text-ink-soft">Shipping & taxes calculated at checkout.</p>
              <Button
                className="mt-5 w-full"
                size="lg"
                onClick={() => toast.success("Checkout is coming soon — this is a preview storefront.")}
              >
                Proceed to Checkout
              </Button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-3 w-full text-center text-[11px] uppercase tracking-[0.22em] text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-cream">
              <ShoppingBag className="size-6 text-bronze" />
            </span>
            <p className="font-serif text-2xl font-medium text-ink">Your bag is empty</p>
            <p className="max-w-[240px] text-sm leading-relaxed text-ink-soft">
              Discover demi-fine pieces crafted to be treasured every day.
            </p>
            <Button asChild className="mt-2">
              <Link to="/shop" onClick={() => setIsOpen(false)}>
                Shop the Collection
              </Link>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
