import React, { useEffect, useRef } from 'react'
import { useCart } from '@/context/CartContext'
import { X, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) closeCart()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, closeCart])

  return (
    <div className={`fixed inset-0 z-[60] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
      <div
        className={`absolute inset-0 bg-velmora-dark/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={closeCart}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream shadow-xl flex flex-col transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-hairline">
          <h2 className="font-serif text-xl tracking-[0.05em] text-velmora-dark">Your Cart</h2>
          <button onClick={closeCart} className="text-velmora-dark hover:text-velmora-gold transition-colors duration-300" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-textSecondary mb-4" />
              <p className="font-serif text-lg text-velmora-dark">Your cart is empty</p>
              <p className="text-sm text-velmora-textSecondary mt-2">Discover something beautiful to add.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 font-sans text-sm tracking-[0.1em] uppercase bg-velmora-gold text-velmora-dark px-6 py-3 hover:bg-velmora-goldHover transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <Link to={`/product/${item.slug}`} onClick={closeCart} className="w-20 h-24 bg-velmora-dark/10 rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xs tracking-[0.1em] uppercase text-velmora-dark/40 text-center leading-tight px-1">{item.name}</span>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.slug}`} onClick={closeCart}>
                      <h3 className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-dark truncate">{item.name}</h3>
                    </Link>
                    <p className="text-xs text-velmora-textSecondary mt-1">Tone: {item.tone}</p>
                    <p className="font-sans text-sm font-medium text-velmora-dark mt-1">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-7 h-7 border border-velmora-hairline rounded flex items-center justify-center text-velmora-dark hover:border-velmora-gold transition-colors duration-300"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-velmora-dark w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-7 h-7 border border-velmora-hairline rounded flex items-center justify-center text-velmora-dark hover:border-velmora-gold transition-colors duration-300"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-2 text-xs text-velmora-textSecondary hover:text-velmora-dark transition-colors duration-300 underline"
                        aria-label="Remove item"
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

        {items.length > 0 && (
          <div className="px-6 py-4 border-t border-velmora-hairline">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm text-velmora-textSecondary">Subtotal</span>
              <span className="font-serif text-lg text-velmora-dark">${totalPrice}</span>
            </div>
            <p className="text-xs text-velmora-textSecondary mb-4">Shipping calculated at checkout</p>
            <button className="w-full font-sans text-sm tracking-[0.1em] uppercase bg-velmora-gold text-velmora-dark py-3 hover:bg-velmora-goldHover transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartDrawer
