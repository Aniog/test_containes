import React, { useEffect, useRef } from 'react'
import { ShoppingCart, Search, Menu, X, Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { useCartStore } from '@/lib/store'
import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function CartDrawer() {
  const { cart, isCartOpen, closeCart, toggleCart, removeFromCart, updateQuantity } = useCartStore()
  const contentRef = useRef(null)

  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0)

  useEffect(() => {
    if (isCartOpen && contentRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, contentRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [isCartOpen, cart])

  return (
    <Sheet open={isCartOpen} onOpenChange={toggleCart}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent ref={contentRef} className="w-full sm:max-w-md flex flex-col p-6">
        <SheetHeader className="mb-4">
          <SheetTitle className="font-serif text-2xl font-normal">Your Cart ({cartCount})</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto w-full pr-2 -mr-2">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingCart className="w-12 h-12 text-muted-foreground" />
              <p className="text-muted-foreground">Your cart is currently empty.</p>
              <SheetClose asChild>
                <Button variant="outline" className="mt-4">Continue Shopping</Button>
              </SheetClose>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                  <div className="h-24 w-20 bg-muted flex-shrink-0 relative overflow-hidden">
                     <img
                        alt={item.product.name}
                        className="object-cover w-full h-full"
                        data-strk-img-id={`cart-thumb-${item.product.id}`}
                        data-strk-img={`[cart-item-${item.product.id}-title]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="150"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between">
                      <div>
                        <h4 id={`cart-item-${item.product.id}-title`} className="font-serif tracking-wide uppercase text-sm line-clamp-1">{item.product.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.variant}</p>
                      </div>
                      <p className="font-medium ml-2">${item.product.price}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-border">
                        <button 
                          className="p-1 px-2 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          className="p-1 px-2 hover:bg-muted transition-colors"
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-wider transition-colors"
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="pt-6 border-t border-border mt-auto">
            <div className="flex justify-between mb-4 font-serif text-xl font-normal">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Shipping and taxes calculated at checkout.</p>
            <Button className="w-full uppercase tracking-wider py-6">Checkout</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
