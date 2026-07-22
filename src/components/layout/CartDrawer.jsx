import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCart } from "@/store/useCart"
import { Minus, Plus, X, ShoppingBag } from 'lucide-react'

export function CartDrawer() {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:max-w-md bg-background border-border p-0 flex flex-col">
        <SheetHeader className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-2xl tracking-wide flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" /> CART
            </SheetTitle>
          </div>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 text-muted-foreground gap-4">
              <ShoppingBag className="w-12 h-12 opacity-20" />
              <p className="font-sans text-sm tracking-wide">YOUR CART IS EMPTY</p>
              <Button onClick={() => toggleCart()} variant="outline" className="mt-4 rounded-none border-border">
                Continue Shopping
              </Button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex gap-4 items-start">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-secondary/50 overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex-1 flex flex-col justify-between h-full py-1">
                  <div>
                    <h4 className="font-serif text-lg tracking-wide uppercase leading-tight pr-6 relative">
                      {item.name}
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="absolute right-0 top-0 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </h4>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mt-1 mb-2">Variant: {item.variant}</p>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center border border-border">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-2 hover:bg-secondary/50 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-2 hover:bg-secondary/50 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="font-medium tracking-wide">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <SheetFooter className="p-6 border-t border-border bg-background mt-auto flex-col gap-4">
            <div className="flex items-center justify-between text-lg tracking-wide font-serif w-full">
              <span>SUBTOTAL</span>
              <span>${cartTotal().toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground tracking-wide text-center uppercase">Shipping & taxes calculated at checkout</p>
            <Button className="w-full rounded-none tracking-widest uppercase h-14 bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors duration-300">
              Secure Checkout
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
