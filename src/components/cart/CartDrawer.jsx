import React from "react"
import { Link } from "react-router-dom"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/Components"
import { cn } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-surface flex flex-col",
          "animate-slide-in-right"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border-light">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
              <p className="font-serif text-lg text-velmora-text-secondary mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-velmora-text-muted mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link to="/collection">
                <Button variant="outline" size="sm">
                  Shop Now
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-border-light flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-sm tracking-wider uppercase text-velmora-text truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-text-muted mt-0.5">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium text-velmora-text mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        className="w-7 h-7 border border-velmora-border flex items-center justify-center hover:border-velmora-gold transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        className="w-7 h-7 border border-velmora-border flex items-center justify-center hover:border-velmora-gold transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        className="ml-auto text-xs text-velmora-text-muted underline hover:text-velmora-gold transition-colors"
                        onClick={() => removeItem(item.id)}
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

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-border-light px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm tracking-wider uppercase text-velmora-text-secondary">
                Subtotal
              </span>
              <span className="font-serif text-xl text-velmora-text">
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-text-muted">
              Shipping & taxes calculated at checkout
            </p>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
            <button
              className="w-full text-center text-xs text-velmora-text-muted underline hover:text-velmora-gold transition-colors"
              onClick={clearCart}
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
