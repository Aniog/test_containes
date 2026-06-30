import React from 'react'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { useStrkImages } from '@/lib/useStrkImages'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()
  const containerRef = useStrkImages([isOpen, items.length])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso-900/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-espresso-200/40">
          <h2 className="font-serif text-xl tracking-widest2 uppercase text-espresso-800">
            Your Bag ({items.length})
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-espresso-800 hover:text-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div ref={containerRef} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag className="w-10 h-10 text-espresso-300" strokeWidth={1} />
              <p className="font-serif text-xl text-espresso-800">Your bag is empty</p>
              <p className="text-sm text-espresso-500">Discover pieces crafted to be treasured.</p>
              <button onClick={closeCart} className="btn-outline mt-2">
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4">
                  <Link to={`/product/${item.slug}`} onClick={closeCart} className="shrink-0">
                    <img
                      src={PLACEHOLDER}
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      className="w-20 h-20 object-cover bg-cream-deep"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="product-name text-sm text-espresso-800 hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        aria-label="Remove item"
                        className="text-espresso-400 hover:text-gold transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-espresso-500 mt-1">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-espresso-200">
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2 py-1 text-espresso-800 hover:bg-espresso-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm text-espresso-800 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2 py-1 text-espresso-800 hover:bg-espresso-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-espresso-800">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-espresso-200/40 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest2 text-espresso-600">Subtotal</span>
              <span className="font-serif text-2xl text-espresso-800">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-espresso-500">Shipping & taxes calculated at checkout.</p>
            <button className="btn-accent w-full">Proceed to Checkout</button>
            <button
              onClick={closeCart}
              className="w-full text-xs uppercase tracking-widest2 text-espresso-600 hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
