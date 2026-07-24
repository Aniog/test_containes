import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Gem, Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, count, updateQuantity, removeItem } = useCart()
  const location = useLocation()

  useEffect(() => {
    closeCart()
  }, [location.pathname])

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="flex flex-col bg-surface">
        <SheetHeader className="pb-4 border-b border-hairline">
          <SheetTitle className="font-serif text-2xl tracking-wide">
            Your Cart ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
            <ShoppingBag className="h-12 w-12 text-hairline mb-4" />
            <p className="font-serif text-xl text-primary mb-2">Your cart is empty</p>
            <p className="text-sm text-muted-foreground mb-6">
              Discover pieces crafted to be treasured.
            </p>
            <Button asChild onClick={closeCart}>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-6 py-6">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                    <Link
                      to={`/products/${item.product.slug}`}
                      onClick={closeCart}
                      className="shrink-0"
                      aria-label={`View ${item.product.name}`}
                    >
                      <div className="h-20 w-20 bg-muted rounded-sm flex items-center justify-center">
                        <Gem className="h-8 w-8 text-accent/40" aria-hidden="true" />
                      </div>
                    </Link>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link
                          to={`/products/${item.product.slug}`}
                          onClick={closeCart}
                          className="font-serif text-base tracking-wide hover:text-accent"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-0.5 capitalize">
                          {item.variant} tone
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-hairline rounded-sm">
                          <button
                            className="px-2 py-1 hover:bg-muted"
                            onClick={() =>
                              updateQuantity(item.product.id, item.variant, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-sm min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2 py-1 hover:bg-muted"
                            onClick={() =>
                              updateQuantity(item.product.id, item.variant, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-hairline pt-6 space-y-4">
              <div className="flex items-center justify-between text-base">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full h-12 text-sm tracking-wide uppercase">
                Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 text-sm tracking-wide uppercase"
                asChild
                onClick={closeCart}
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
