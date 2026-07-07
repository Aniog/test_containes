import * as React from "react"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Sheet, SheetHeader, SheetBody, SheetFooter } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cartContext"
import { formatPrice } from "@/data/products"

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart()

  return (
    <Sheet open={isOpen} onClose={closeCart}>
      <SheetHeader onClose={closeCart}>
        <h2 className="font-serif text-2xl tracking-wide text-velmora-espresso">
          Your Cart
        </h2>
      </SheetHeader>

      <SheetBody className="flex flex-1 flex-col overflow-hidden">
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="font-serif text-xl text-velmora-espresso">Your cart is empty</p>
            <p className="mt-2 text-sm text-velmora-muted">
              Discover something beautiful today.
            </p>
            <Button onClick={closeCart} className="mt-6" asChild>
              <a href="/shop">Continue Shopping</a>
            </Button>
          </div>
        ) : (
          <ul className="flex-1 space-y-6 overflow-y-auto pr-1">
            {items.map((item) => (
              <li key={item.lineItemId} className="flex gap-4">
                <div className="flex h-24 w-20 flex-shrink-0 items-center justify-center bg-velmora-stone">
                  <span className="font-serif text-lg uppercase tracking-widest text-velmora-gold/70">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-sm font-medium uppercase tracking-wider text-velmora-espresso">
                      {item.name}
                    </h3>
                    <p className="mt-0.5 text-xs capitalize text-velmora-muted">
                      {item.variant}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-velmora-border">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineItemId, item.quantity - 1)}
                        className="p-2 text-velmora-espresso hover:text-velmora-gold"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="min-w-[1.5rem] text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineItemId, item.quantity + 1)}
                        className="p-2 text-velmora-espresso hover:text-velmora-gold"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-velmora-espresso">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineItemId)}
                        className="text-velmora-muted hover:text-red-500"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </SheetBody>

      {items.length > 0 && (
        <SheetFooter>
          <div className="w-full space-y-4">
            <div className="flex items-center justify-between text-velmora-espresso">
              <span className="text-sm uppercase tracking-wide">Subtotal</span>
              <span className="font-serif text-xl font-medium">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-velmora-muted">
              Shipping & taxes calculated at checkout.
            </p>
            <Button size="full">Checkout</Button>
          </div>
        </SheetFooter>
      )}
    </Sheet>
  )
}
