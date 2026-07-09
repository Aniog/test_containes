import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal, itemCount } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col bg-velmora-cream sm:max-w-md">
        <SheetHeader className="space-y-1 pb-4 text-left">
          <SheetTitle className="font-serif text-2xl tracking-wide">Your Cart</SheetTitle>
          <SheetDescription>
            {itemCount === 0 ? "Your cart is empty." : `${itemCount} item${itemCount !== 1 ? "s" : ""}`}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <ShoppingBag className="h-12 w-12 text-velmora-stone" />
            <p className="text-velmora-taupe">Discover something beautiful to treasure.</p>
            <Button onClick={() => setIsOpen(false)}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 bg-velmora-sand" />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-widest">{item.name}</p>
                        <p className="text-xs text-velmora-taupe capitalize">{item.variant}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 border border-velmora-stone">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 hover:bg-velmora-stone/30"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 hover:bg-velmora-stone/30"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="self-start text-velmora-taupe hover:text-velmora-accent"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4 pt-4">
              <Separator />
              <div className="flex items-center justify-between text-sm">
                <span className="text-velmora-taupe">Subtotal</span>
                <span className="font-serif text-lg uppercase tracking-wide">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-velmora-taupe">Shipping & taxes calculated at checkout.</p>
              <Button className="w-full">Checkout</Button>
              <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
