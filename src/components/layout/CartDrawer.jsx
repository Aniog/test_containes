import React from 'react'
import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetBody } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { isOpen, closeDrawer, items, removeItem, updateQuantity, total } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={closeDrawer}>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>Your Cart</SheetTitle>
            <SheetClose onOpenChange={closeDrawer} />
          </div>
        </SheetHeader>
        <SheetBody>
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <ShoppingBag className="h-10 w-10 text-brand-subtle" />
              <p className="text-sm text-brand-muted">Your cart is empty.</p>
              <Button variant="accent" onClick={closeDrawer}>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="h-20 w-16 overflow-hidden rounded-lg bg-brand-warm">
                      <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-brand-ink">{item.name}</p>
                      <p className="text-xs text-brand-muted capitalize">{item.variant}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="h-7 w-7 rounded-full border border-brand-line text-xs text-brand-ink hover:bg-brand-warm"
                          >
                            -
                          </button>
                          <span className="text-xs text-brand-ink">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="h-7 w-7 rounded-full border border-brand-line text-xs text-brand-ink hover:bg-brand-warm"
                          >
                            +
                          </button>
                        </div>
                        <button onClick={() => removeItem(item.id, item.variant)} className="text-brand-subtle hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-brand-ink">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-brand-line pt-4">
                <div className="flex items-center justify-between text-sm font-medium text-brand-ink">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-xs text-brand-muted">Shipping and taxes calculated at checkout.</p>
                <Button className="mt-4 w-full" variant="accent">
                  Checkout
                </Button>
                <Button variant="outline" className="mt-2 w-full" onClick={closeDrawer}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </SheetBody>
      </SheetContent>
    </Sheet>
  )
}

export default CartDrawer
