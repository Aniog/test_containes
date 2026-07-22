import React from 'react'
import { Link } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Sheet, SheetHeader, SheetTitle, SheetContent, SheetFooter } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { Separator } from '@/components/ui/separator'

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, isDrawerOpen, closeDrawer } = useCart()

  return (
    <Sheet open={isDrawerOpen} onOpenChange={closeDrawer} side="right">
      <SheetHeader>
        <div className="flex items-center justify-between">
          <SheetTitle>Your Bag ({items.length})</SheetTitle>
          <button onClick={closeDrawer} className="p-1 hover:text-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2" aria-label="Close cart">
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>
      </SheetHeader>

      <SheetContent>
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <ShoppingBag className="w-12 h-12 text-muted mb-4" />
            <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
            <p className="font-sans text-sm text-muted mb-6">Discover something you love.</p>
            <Link to="/shop" onClick={closeDrawer}>
              <Button variant="outline">Shop Now</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map(item => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                {/* Product image placeholder */}
                <div className="w-20 h-24 bg-cream flex-shrink-0 flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-muted" />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeDrawer}
                    className="font-serif text-sm tracking-product uppercase text-charcoal hover:text-gold transition-colors duration-300 block truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
                  >
                    {item.name}
                  </Link>
                  <p className="font-sans text-xs text-muted mt-1">{item.variant}</p>
                  <p className="font-sans text-sm text-charcoal mt-1">${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                      className="w-6 h-6 border border-borderwarm flex items-center justify-center hover:border-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3 text-charcoal" />
                    </button>
                    <span className="font-sans text-sm text-charcoal w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                      className="w-6 h-6 border border-borderwarm flex items-center justify-center hover:border-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3 text-charcoal" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="ml-auto font-sans text-xs text-muted hover:text-gold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </SheetContent>

      {items.length > 0 && (
        <SheetFooter>
          <Separator className="mb-4" />
          <div className="flex items-center justify-between mb-4">
            <span className="font-sans text-sm uppercase tracking-cta text-charcoal">Subtotal</span>
            <span className="font-serif text-lg text-charcoal">${totalPrice}</span>
          </div>
          <p className="font-sans text-xs text-muted mb-4">Shipping calculated at checkout.</p>
          <Button className="w-full">Checkout</Button>
          <Link to="/shop" onClick={closeDrawer} className="block mt-3">
            <Button variant="outline" className="w-full">Continue Shopping</Button>
          </Link>
        </SheetFooter>
      )}
    </Sheet>
  )
}

export default CartDrawer
