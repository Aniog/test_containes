import React, { useRef, useEffect } from 'react'
import { X, Minus, Plus } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { PRODUCTS } from '@/data/products'

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeItem, cartTotal } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isCartOpen && items.length > 0) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [isCartOpen, items])

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0" ref={drawerRef}>
        <SheetHeader className="p-6 border-b">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-2xl font-semibold tracking-wide">YOUR CART</SheetTitle>
          </div>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <Button onClick={() => setIsCartOpen(false)} variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white">
                Continue Shopping
              </Button>
            </div>
          ) : (
            PRODUCTS.map((product) => {
              const item = items.find(i => i.id === product.id)
              if (!item) return null
              
              return (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 h-32 bg-secondary flex-shrink-0 flex items-center justify-center overflow-hidden relative">
                    <img 
                      alt={item.name}
                      data-strk-img-id={`cart-item-${product.id}`}
                      data-strk-img={`[cart-item-title-${product.id}] ${product.imageQueries?.[0] || 'gold jewelry'}`}
                      data-strk-img-ratio="2x3"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 3'/%3E"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 id={`cart-item-title-${product.id}`} className="font-serif uppercase tracking-widest text-sm font-semibold">{item.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.variant || 'Gold'}</p>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-foreground transition-colors">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6 bg-background space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full rounded-none h-12 text-md bg-primary hover:bg-primary/90 text-primary-foreground">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
