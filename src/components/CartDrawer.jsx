import { Minus, Plus, X, ShoppingBag } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/useCart'

export const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal, count } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md bg-background flex flex-col">
        <SheetHeader className="text-left">
          <SheetTitle className="font-heading text-2xl uppercase tracking-brand">
            Your Cart ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <ShoppingBag size={48} className="text-border mb-4" />
            <p className="text-muted-foreground">Your cart is empty.</p>
            <Button
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-muted rounded-sm flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-heading text-base uppercase tracking-brand leading-tight">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-0.5 capitalize">
                          Tone: {item.tone}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          className="px-2 py-1 hover:bg-muted"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button
                          className="px-2 py-1 hover:bg-muted"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        ${item.product.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-4">
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="font-heading text-xl">${subtotal}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-brand text-xs">
                Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full uppercase tracking-brand text-xs"
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
