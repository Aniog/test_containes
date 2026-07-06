import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useCart } from "@/context/CartContext"
import { Price } from "@/components/Price"
import { ProductName } from "@/components/ProductName"
import { Link } from "react-router-dom"

export function CartTrigger({ className }) {
  const { count, setIsOpen } = useCart()
  return (
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      className={className}
      aria-label={`Cart with ${count} items`}
    >
      <ShoppingBag className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center bg-gold text-[10px] font-medium text-white">
          {count}
        </span>
      )}
    </button>
  )
}

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal, count } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full max-w-md bg-cream">
        <SheetHeader>
          <SheetTitle>Your Cart ({count})</SheetTitle>
          <SheetClose />
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="mb-4 h-10 w-10 text-sand" />
            <p className="font-serif text-lg text-espresso">Your cart is empty</p>
            <p className="mt-1 text-sm text-taupe">Discover something beautiful.</p>
            <Button className="mt-6" onClick={() => setIsOpen(false)} asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-6 py-4">
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 shrink-0 overflow-hidden bg-linen">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <ProductName className="text-xs">{item.product.name}</ProductName>
                        <p className="mt-0.5 text-xs capitalize text-taupe">{item.variant} tone</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-sand">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-taupe hover:text-espresso"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-xs">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-taupe hover:text-espresso"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <Price amount={item.product.price * item.quantity} />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="self-start text-taupe hover:text-red-600"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-sand p-6">
              <div className="mb-4 flex items-center justify-between text-sm">
                <span className="text-taupe">Subtotal</span>
                <Price amount={subtotal} className="text-base font-semibold" />
              </div>
              <p className="mb-5 text-xs text-taupe">Shipping & taxes calculated at checkout.</p>
              <Button className="w-full">Checkout</Button>
              <Button
                variant="outline"
                className="mt-3 w-full"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
