import React from 'react'
import { ShoppingBag, X, Plus, Minus } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/lib/store'
import { Separator } from '@/components/ui/separator'

export function CartDrawer() {
  const { isOpen, setIsOpen, items, updateQuantity, removeItem } = useCartStore()
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-background border-l border-border px-4 sm:px-6">
        <SheetHeader className="py-4 font-serif">
          <SheetTitle className="text-2xl font-medium flex items-center gap-2">
            Your Cart <span className="text-muted-foreground text-sm font-sans font-normal ml-2">({items.length})</span>
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-muted-foreground">
              <ShoppingBag className="h-12 w-12 opacity-20" />
              <p>Your cart is empty.</p>
              <Button variant="outline" onClick={() => setIsOpen(false)} className="mt-4 font-serif uppercase tracking-widest text-xs">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-24 w-20 bg-muted/30 overflow-hidden relative border border-border">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      data-strk-img={`[cart-item-${item.id}]`}
                      data-strk-img-id={`cart-thumb-${item.id}`}
                      data-strk-img-ratio="1x1"
                      className="absolute inset-0 object-cover w-full h-full opacity-80"
                      alt={item.name}
                    />
                    <span id={`cart-item-${item.id}`} className="sr-only">{item.name} jewelry</span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-serif font-medium uppercase tracking-wider text-sm">{item.name}</h4>
                        <p className="text-muted-foreground text-xs mt-1">{item.material}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-foreground">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border">
                        <button 
                          className="px-2 py-1 hover:bg-muted"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm px-2 py-1 min-w-[2rem] text-center">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 hover:bg-muted"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-medium">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <div className="border-t border-border pt-6 pb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-serif text-lg">Subtotal</span>
              <span className="font-serif text-lg">${total}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4 text-center">Shipping & taxes calculated at checkout.</p>
            <Button className="w-full">
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}