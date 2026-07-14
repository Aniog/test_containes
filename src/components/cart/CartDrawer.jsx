import { ShoppingBag, X, Plus, Minus } from "lucide-react"
import { useCart } from "./CartContext"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CartDrawer() {
  const { cartItems, cartOpen, setCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart()

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col p-0 border-l border-border bg-background">
        <SheetHeader className="p-6 border-b border-border/50 text-left">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-2xl font-light tracking-wide text-primary">Your Cart</SheetTitle>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-hidden">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 p-6 text-center text-muted-foreground">
              <ShoppingBag className="h-12 w-12 stroke-[1]" />
              <p className="font-serif text-xl tracking-wide">Your cart is empty.</p>
              <Button 
                variant="outline" 
                className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-serif tracking-widest uppercase text-xs rounded-none h-12 px-8 transition-colors"
                onClick={() => setCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-full">
              <div className="p-6 space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-border/30 pb-6 last:border-0 last:pb-0">
                    <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-secondary">
                      <img
                        src={item.image || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                        data-strk-img-id={item.imgId}
                        data-strk-img={`[cart-item-${item.id}-name]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-serif text-lg leading-tight uppercase tracking-widest border-b border-transparent hover:border-foreground transition-colors max-w-fit" id={`cart-item-${item.id}-name`}>
                            {item.name}
                          </h3>
                          {item.variant && (
                            <p className="mt-1 text-sm text-muted-foreground">{item.variant}</p>
                          )}
                        </div>
                        <p className="text-sm font-medium ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-border h-8">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="w-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="w-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>

        {cartItems.length > 0 && (
          <SheetFooter className="border-t border-border/50 p-6 flex flex-col gap-4 sm:flex-col sm:justify-start">
            <div className="flex items-center justify-between text-base font-medium">
              <span className="font-serif tracking-widest text-lg">SUBTOTAL</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-serif tracking-widest uppercase text-sm rounded-none h-14 transition-all hover:shadow-md">
              Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
