import React from "react"
import { useCart } from "@/hooks/use-cart"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { StrkImg } from "@/components/strk-img"

export const CartDrawerTrigger = ({ children }) => {
  const { openCart, count } = useCart()
  return (
    <button onClick={openCart} className="relative p-2 text-ink transition-colors hover:text-gold" aria-label="Open cart">
      {children || <ShoppingBag className="h-5 w-5" />}
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-medium text-white">
          {count}
        </span>
      )}
    </button>
  )
}

export const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, count } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="flex flex-col bg-cream">
        <SheetHeader className="border-b border-hairline pb-4">
          <SheetTitle className="font-serif text-2xl">Your Bag</SheetTitle>
          <p className="text-xs uppercase tracking-[0.1em] text-muted">
            {count} {count === 1 ? "item" : "items"}
          </p>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <ShoppingBag className="mb-4 h-12 w-12 text-hairline" />
            <p className="font-serif text-xl text-ink">Your bag is empty</p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Discover pieces crafted to be treasured.
            </p>
            <Button onClick={closeCart} className="mt-8" asChild>
              <a href="/shop">Continue Shopping</a>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.cartItemId} className="flex gap-4">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-surface">
                      <StrkImg
                        imgId={item.image.id}
                        query={`[product-title-${item.id}]`}
                        ratio={item.image.ratio}
                        width={item.image.width}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif text-base uppercase tracking-[0.14em] text-ink">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.cartItemId)}
                            className="text-muted hover:text-gold"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="mt-0.5 text-xs uppercase tracking-wider text-muted">
                          {item.variant} tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-hairline">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="px-2 py-1 text-muted hover:text-ink"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="px-2 py-1 text-muted hover:text-ink"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-medium text-ink">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-hairline pt-5">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="uppercase tracking-[0.1em] text-muted">Subtotal</span>
                <span className="font-serif text-xl text-ink">${subtotal}</span>
              </div>
              <p className="mb-5 text-xs text-muted">
                Shipping and taxes calculated at checkout.
              </p>
              <Button size="full" className="w-full">
                Checkout
              </Button>
              <Button variant="ghost" size="full" onClick={closeCart} className="mt-3 w-full text-xs">
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
