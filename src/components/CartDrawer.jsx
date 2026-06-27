import * as React from "react"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "../lib/CartContext"
import { Button } from "./ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "../strk-img-config.json"

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, getSubtotal } = useCart()
  const subtotal = getSubtotal()
  
  const containerRef = React.useRef(null)
  
  React.useEffect(() => {
    if (isOpen && containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [isOpen, items])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      <section className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md w-full">
          <div className="h-full flex flex-col bg-surface shadow-xl" ref={containerRef}>
            {/* Header */}
            <div className="px-6 py-6 border-b border-border flex items-center justify-between">
              <h2 className="font-serif text-2xl text-ink">Your Cart</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-ink-light hover:text-ink transition-colors"
                aria-label="Close cart"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-ink-light space-y-4">
                  <ShoppingBag className="w-12 h-12 stroke-[1px] mb-2 text-border" />
                  <p className="font-serif text-xl text-ink">Your cart is empty</p>
                  <p className="text-sm">Discover our latest pieces and find something to treasure.</p>
                  <a href="/shop" onClick={() => setIsOpen(false)}>
                    <Button className="mt-4 bg-ink hover:bg-ink-light text-white rounded-none tracking-widest uppercase text-xs h-12 px-8">
                      Start Shopping
                    </Button>
                  </a>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="w-24 h-32 flex-shrink-0 bg-surface-dim overflow-hidden relative">
                        <img 
                          data-strk-img-id={`cart-img-${item.id}-${item.variant}`}
                          data-strk-img={`[cart-item-${item.id}] elegant warm gold jewelry neutral default high resolution detailed`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="300"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 id={`cart-item-${item.id}`} className="font-serif text-base text-ink uppercase tracking-wider">{item.name}</h3>
                            <p className="text-xs text-ink-light mt-1">Metal: {item.variant}</p>
                          </div>
                          <button 
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-ink-lighter hover:text-ink transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="mt-auto flex justify-between items-end">
                          <div className="flex items-center border border-border h-8 w-24 justify-between px-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                              className="text-ink-light hover:text-ink"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                              className="text-ink-light hover:text-ink"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-medium text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-6 bg-surface-dim/30">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-ink font-medium uppercase tracking-widest text-sm">Subtotal</span>
                  <span className="font-serif text-2xl text-ink">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-ink-light text-center mb-6">Shipping & taxes calculated at checkout</p>
                <Button className="w-full bg-brand hover:bg-brand-dark text-white rounded-none tracking-widest uppercase text-sm h-14 transition-colors">
                  Checkout
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
