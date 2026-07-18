import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/Sheet"
import { Button } from "@/components/ui/Button"
import { Separator } from "@/components/ui/Separator"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

export function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    subtotal,
    count,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart ({count})</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">Your cart is empty.</p>
            <Button onClick={() => setIsOpen(false)}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex flex-1 flex-col gap-6 overflow-y-auto py-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 rounded-md bg-muted" />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h4 className="product-name text-foreground">
                        {item.name}
                      </h4>
                      <p className="mt-0.5 text-xs capitalize text-muted-foreground">
                        Tone: {item.tone}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-md border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.tone, item.quantity - 1)
                          }
                          className="p-2 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-4 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.tone, item.quantity + 1)
                          }
                          className="p-2 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm">
                          ${item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.tone)}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-border pt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full">Checkout</Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
              <button
                onClick={clearCart}
                className="w-full text-center text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

export function CartIcon({ className }) {
  const { count, setIsOpen } = useCart()
  return (
    <button
      onClick={() => setIsOpen(true)}
      className={cn("relative p-2 transition-colors hover:text-primary", className)}
      aria-label="Open cart"
    >
      <ShoppingBag className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
          {count}
        </span>
      )}
    </button>
  )
}
