import React from 'react'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalItems,
  } = useCart()

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />
      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-surface shadow-2xl transform transition-transform duration-300 flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-2xl tracking-wide">YOUR CART</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-velmora-cream rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velmora-muted">
              <ShoppingBag size={48} strokeWidth={1} className="mb-4" />
              <p className="font-sans text-sm">Your cart is empty</p>
              <p className="font-sans text-xs mt-1">Add something beautiful.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => {
                const variant = item.product.variants.find(
                  (v) => v.id === item.variantId
                )
                return (
                  <li key={`${item.product.id}-${item.variantId}`} className="flex gap-4">
                    <div className="w-20 h-20 bg-velmora-cream rounded-md overflow-hidden shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm tracking-wider truncate">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-velmora-muted mt-0.5">
                        {variant?.label || 'Default'}
                      </p>
                      <p className="text-sm font-medium mt-1">
                        ${item.product.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-velmora-border rounded">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.variantId,
                                item.quantity - 1
                              )
                            }
                            className="px-2 py-1 hover:bg-velmora-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-2 text-sm font-medium min-w-[1.5rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.variantId,
                                item.quantity + 1
                              )
                            }
                            className="px-2 py-1 hover:bg-velmora-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            removeFromCart(item.product.id, item.variantId)
                          }
                          className="text-xs text-velmora-muted underline underline-offset-2 hover:text-velmora-charcoal"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-velmora-border px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-velmora-muted">
                Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
              <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted">
              Shipping and taxes calculated at checkout.
            </p>
            <Button variant="primary" className="w-full" onClick={() => toast('Coming soon', { description: 'Checkout is under development.' })}>
              CHECKOUT
            </Button>
            <button
              onClick={closeCart}
              className="w-full text-center text-sm underline underline-offset-4 hover:text-velmora-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
