import React, { useEffect, useRef } from 'react'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQuantity, cartSubtotal } = useCart()
  const cartRef = useRef(null)

  useEffect(() => {
    if (isOpen && cartRef.current) {
        try {
            ImageHelper.loadImages(strkImgConfig, cartRef.current)
        } catch (e) {
            console.log('ImageHelper init skipped')
        }
    }
  }, [isOpen, items])

  if (!isOpen) return null

  return (
    <div ref={cartRef}>
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] animate-in fade-in duration-300"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-card border-l border-border z-[110] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-2xl uppercase tracking-widest text-foreground">Your Cart</h2>
          <button onClick={closeCart} className="text-muted-foreground hover:text-foreground">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-serif text-muted-foreground mb-6 text-lg">Your cart is softly empty.</p>
              <button 
                onClick={closeCart}
                className="bg-primary text-primary-foreground px-8 py-3 font-serif uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-colors"
              >
                Shop Now
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${item.tone}-${idx}`} className="flex gap-4">
                  <div className="w-20 aspect-[3/4] bg-secondary relative overflow-hidden shrink-0">
                   <img 
                       data-strk-img-id={`cart-thumb-${item.id}-${idx}`}
                       data-strk-img={`[${item.id}-title]`}
                       data-strk-img-ratio="2x3"
                       data-strk-img-width="150"
                       src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                       alt={item.name}
                       className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-serif text-sm uppercase tracking-wider text-foreground mb-1 pr-6 leading-tight">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground mb-2">Tone: {item.tone}</p>
                    <p className="font-sans text-sm text-foreground">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                     <div className="flex items-center border border-border h-8 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="px-2 font-sans hover:bg-secondary transition-colors"
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-sans text-xs">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="px-2 font-sans hover:bg-secondary transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id, item.tone)}
                        className="font-sans text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground mt-2"
                      >
                        Remove
                      </button>
                  </div>
                   <div className="text-center mt-2">
                      <span id={`${item.id}-title`} className="sr-only">{item.name}</span>
                   </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-card">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-lg text-foreground">Subtotal</span>
              <span className="font-sans font-medium text-lg text-foreground">${cartSubtotal}</span>
            </div>
            <p className="font-sans text-xs text-muted-foreground mb-6 text-center">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-primary-foreground py-4 font-serif uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-colors shadow-sm">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}