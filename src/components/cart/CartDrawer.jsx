import { useCart } from "@/context/CartContext"
import { Minus, Plus } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full max-w-sm p-0">
        <SheetHeader className="border-b border-brand-line px-5 py-4">
          <SheetTitle className="font-serif text-xl text-brand-ink">Your Cart</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 && (
            <p className="text-sm text-brand-muted">Your cart is empty.</p>
          )}
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={`${item.id}-${item.variant}`} className="flex gap-3">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-md object-cover bg-brand-warm" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-brand-ink">{item.name}</p>
                  <p className="text-xs text-brand-subtle uppercase tracking-wider">{item.variant}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="rounded-md border border-brand-line p-1 text-brand-ink hover:bg-brand-warm"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="text-sm font-medium text-brand-ink w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="rounded-md border border-brand-line p-1 text-brand-ink hover:bg-brand-warm"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-brand-ink">${item.price * item.quantity}</p>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-brand-subtle underline underline-offset-4 hover:text-brand-accent"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {items.length > 0 && (
          <div className="border-t border-brand-line px-5 py-4">
            <div className="flex items-center justify-between text-sm font-semibold text-brand-ink">
              <span>Subtotal</span>
              <span>${totalPrice}</span>
            </div>
            <p className="mt-1 text-xs text-brand-subtle">Shipping and taxes calculated at checkout.</p>
            <button className="btn-primary mt-4 w-full">Checkout</button>
            <button onClick={clearCart} className="mt-2 w-full text-center text-xs text-brand-subtle underline underline-offset-4 hover:text-brand-accent">
              Clear cart
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
