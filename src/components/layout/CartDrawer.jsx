import { Minus, Plus, Trash2, ShoppingBag, Gem } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetBody,
  SheetFooter,
} from '@/components/ui/Sheet'
import { Button } from '@/components/ui/Button'
import { Separator } from '@/components/ui/Separator'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={closeCart} side="right">
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetClose onClick={closeCart} />
        </SheetHeader>

        <SheetBody>
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="mb-4 h-12 w-12 text-muted-foreground/40" />
              <p className="font-serif text-lg">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Discover something treasured.
              </p>
              <Button onClick={closeCart} className="mt-6" asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted">
                    <Gem className="h-8 w-8 text-muted-foreground/60" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="font-serif text-sm uppercase tracking-wider">{item.name}</p>
                      <p className="text-xs capitalize text-muted-foreground">{item.variant}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-md border border-border">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1.5 text-muted-foreground hover:text-foreground"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1.5 text-muted-foreground hover:text-foreground"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">${item.price * item.quantity}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.cartItemId)}
                    className="self-start text-muted-foreground hover:text-destructive"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </SheetBody>

        {items.length > 0 && (
          <SheetFooter>
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-serif text-lg">${subtotal}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <Button className="w-full" onClick={closeCart}>
                Checkout
              </Button>
              <Button variant="outline" className="w-full" onClick={closeCart} asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
