import { Link } from "react-router-dom"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, count } =
    useCart()

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-serif uppercase tracking-label">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="mb-4 h-12 w-12 text-velmora-taupe" />
            <p className="font-serif text-xl text-velmora-espresso">Your cart is empty</p>
            <p className="mt-2 text-sm text-velmora-mocha">
              Discover something treasured.
            </p>
            <Button
              className="mt-6 uppercase tracking-label"
              variant="accent"
              onClick={closeCart}
              asChild
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-2">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 bg-velmora-sand" />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-label text-velmora-espresso">
                          {item.name}
                        </p>
                        <p className="text-xs capitalize text-velmora-mocha">
                          {item.variant} tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-velmora-espresso/10">
                          <button
                            type="button"
                            className="px-2 py-1 text-velmora-mocha hover:bg-velmora-sand"
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-xs">{item.quantity}</span>
                          <button
                            type="button"
                            className="px-2 py-1 text-velmora-mocha hover:bg-velmora-sand"
                            onClick={() =>
                              updateQuantity(item.id, item.variant, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-velmora-espresso">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="self-start text-velmora-taupe hover:text-red-600"
                      onClick={() => removeFromCart(item.id, item.variant)}
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-velmora-espresso/10 p-6">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-velmora-mocha">Subtotal</span>
                <span className="font-medium text-velmora-espresso">${subtotal}</span>
              </div>
              <p className="mb-4 text-xs text-velmora-taupe">
                Shipping & taxes calculated at checkout.
              </p>
              <Button className="w-full uppercase tracking-label" variant="accent">
                Checkout
              </Button>
              <Button
                variant="ghost"
                className="mt-2 w-full uppercase tracking-label"
                onClick={closeCart}
                asChild
              >
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
