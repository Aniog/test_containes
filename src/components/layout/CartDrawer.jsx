import React, { useEffect, useRef } from 'react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../../lib/store'
import { cn } from '../../lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../strk-img-config.json'

export const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQuantity, getCartTotal } = useCartStore()
  const containerRef = useRef(null)

  const SVG_PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnLz4=";

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [items])

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div 
        ref={containerRef}
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl tracking-wide uppercase">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 text-[#2C2A26]">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag size={48} strokeWidth={1} className="text-muted-foreground/30" />
              <p className="text-muted-foreground text-lg">Your cart is empty.</p>
              <button 
                onClick={closeCart}
                className="mt-4 border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-muted relative overflow-hidden flex-shrink-0">
                    <img 
                      src={SVG_PLACEHOLDER}
                      data-strk-img={`[${item.descId}] [${item.titleId}] cart thumbnail`}
                      data-strk-img-id={`${item.imgId}-cart-item`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      alt={item.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  <div className="flex flex-col justify-between flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-serif text-lg tracking-wide uppercase" id={`${item.titleId}-cart`}>
                          {item.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                          Tone: {item.variant}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border">
                        <button 
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          className="px-2 py-1 text-muted-foreground hover:text-foreground"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-background">
            <div className="flex justify-between text-lg mb-6">
              <span className="font-serif tracking-wide">Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-primary text-white py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}