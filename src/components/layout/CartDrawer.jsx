import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Drawer } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal, cartCount } = useCart()

  return (
    <Drawer open={isOpen} onOpenChange={setCartOpen}>
      <div className="fixed inset-0 z-50">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                <h2 className="font-serif text-lg">Your Cart ({cartCount})</h2>
              </div>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="p-2 text-current/60 hover:text-current transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="mb-4 h-12 w-12 text-current/20" />
                  <p className="font-serif text-lg">Your cart is empty</p>
                  <p className="mt-2 text-sm text-current/60">
                    Discover our collection and find something you love.
                  </p>
                  <Button
                    asChild
                    className="mt-6 bg-[#b08d57] text-white hover:bg-[#9a7a4a]"
                    onClick={() => setCartOpen(false)}
                  >
                    <Link to="/shop">Shop Now</Link>
                  </Button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.material}`} className="flex gap-4">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-sm bg-[#f5f5f0]">
                        <img
                          alt={item.name}
                          data-strk-img-id={`cart-${item.id}-${item.material}`}
                          data-strk-img={`[cart-product-${item.id}]`}
                          data-strk-img-ratio="1x1"
                          data-strk-img-width="200"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="h-full w-full object-cover"
                        />
                        <span id={`cart-product-${item.id}`} className="hidden">
                          {item.name} {item.material} jewelry
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-serif text-sm uppercase tracking-wide">{item.name}</h3>
                            <p className="mt-1 text-xs text-current/60 capitalize">{item.material}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id, item.material)}
                            className="p-1 text-current/40 hover:text-current transition-colors"
                            aria-label={`Remove ${item.name}`}
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.material, item.quantity - 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-current/70 hover:text-current transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm font-medium">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.material, item.quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 text-current/70 hover:text-current transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-black/5 px-6 py-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-current/70">Subtotal</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-xs text-current/50">Shipping and taxes calculated at checkout.</p>
                <Button className="mt-4 w-full bg-[#b08d57] text-white hover:bg-[#9a7a4a]">
                  Checkout
                </Button>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="mt-3 w-full text-center text-xs uppercase tracking-widest text-current/60 hover:text-current transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Drawer>
  )
}
