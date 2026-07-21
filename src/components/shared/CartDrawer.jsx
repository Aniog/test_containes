import React from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, Gem } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-lg tracking-extra-wide uppercase text-text-primary">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            className="text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto cart-scroll px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-text-secondary mb-2">Your bag is empty</p>
              <p className="text-sm text-text-muted font-light mb-6">
                Discover our collection of fine jewelry
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="font-sans text-xs tracking-wide uppercase bg-gold text-warm-black px-8 py-3 hover:bg-gold-light transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  {/* Thumbnail */}
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="w-20 h-24 flex-shrink-0 bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center"
                  >
                    <Gem className="w-6 h-6 text-gold/60" />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link
                        to={`/product/${item.productId}`}
                        onClick={closeCart}
                        className="font-serif text-sm tracking-extra-wide uppercase text-text-primary hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-text-muted mt-1">{item.variant}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-7 h-7 flex items-center justify-center text-xs text-text-primary">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-sans text-sm text-text-primary">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.key)}
                    className="self-start text-text-muted hover:text-text-primary transition-colors mt-1"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-wide uppercase text-text-secondary">
                Subtotal
              </span>
              <span className="font-serif text-lg text-text-primary">${totalPrice}</span>
            </div>
            <p className="text-xs text-text-muted font-light mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full font-sans text-xs tracking-wide uppercase bg-gold text-warm-black py-3.5 hover:bg-gold-light transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
