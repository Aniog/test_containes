import { Link } from "react-router-dom"
import { Minus, Plus, Trash2, ShoppingBag, X } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/CartContext"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal, shipping, total, count } =
    useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="space-y-2 pb-4 text-left">
          <SheetTitle className="font-serif text-xl uppercase tracking-[0.15em] text-velmora-charcoal">
            Your Cart ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
            <ShoppingBag className="h-12 w-12 text-velmora-border" />
            <p className="font-serif text-lg text-velmora-charcoal">
              Your cart is empty
            </p>
            <p className="text-sm text-velmora-warm-gray">
              Discover something timeless to treasure.
            </p>
            <SheetClose asChild>
              <Button asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="flex h-24 w-20 flex-shrink-0 items-center justify-center overflow-hidden bg-velmora-ivory">
                    <span className="font-serif text-lg uppercase tracking-widest text-velmora-warm-gray">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-[0.15em] text-velmora-charcoal">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs capitalize text-velmora-warm-gray">
                          Tone: {item.variant}
                        </p>
                        <p className="mt-1 text-sm font-medium text-velmora-charcoal">
                          ${item.price}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-border">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            className="p-2 text-velmora-charcoal hover:bg-velmora-ivory"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm text-velmora-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            className="p-2 text-velmora-charcoal hover:bg-velmora-ivory"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velmora-warm-gray transition-colors hover:text-velmora-charcoal"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 border-t border-velmora-border pt-4">
              <div className="space-y-2 text-sm text-velmora-charcoal">
                <div className="flex justify-between">
                  <span className="text-velmora-warm-gray">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-velmora-warm-gray">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-base font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Button className="w-full">Checkout</Button>
              <p className="text-center text-xs text-velmora-warm-gray">
                Shipping & taxes calculated at checkout
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
