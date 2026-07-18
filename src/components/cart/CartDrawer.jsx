import { useEffect, useRef, useState } from 'react'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart, useCartDispatch } from '@/context/CartContext'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function CartDrawer({ open, onClose }) {
  const { cart, count, total } = useCart()
  const dispatch = useCartDispatch()
  const drawerRef = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    if (!open || imgLoaded) return
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
      setImgLoaded(true)
    })
    return () => cancelAnimationFrame(frameId)
  }, [open, imgLoaded])

  useEffect(() => {
    if (cart.length === 0) setImgLoaded(false)
  }, [cart.length])

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velvet-950/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream-50 shadow-2xl transform transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-800/10">
            <h2 className="font-serif text-xl tracking-wide text-velvet-800">
              Your Bag ({count})
            </h2>
            <button onClick={onClose} className="p-2 hover:text-warm-600 transition-colors" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-velvet-400">
                <p className="font-serif text-lg italic">Your bag is empty</p>
                <p className="text-sm mt-2">Discover pieces made to be treasured.</p>
                <Link
                  to="/shop"
                  className="btn-outline mt-6"
                  onClick={onClose}
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {cart.map((item) => (
                  <div key={item.key} className="flex gap-4 pb-5 border-b border-velvet-800/5">
                    <div className="w-20 h-20 bg-velvet-100 flex-shrink-0">
                      <img
                        alt={item.name}
                        data-strk-img-id={`cart-${item.key}`}
                        data-strk-img={`[cart-name-${item.key}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="160"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                      <span className="hidden" id={`cart-name-${item.key}`}>{item.name} gold jewelry</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm uppercase tracking-wider text-velvet-800 truncate">{item.name}</h4>
                      <p className="text-xs text-velvet-500 mt-0.5 capitalize">{item.color} tone</p>
                      <p className="text-sm font-medium text-velvet-700 mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-velvet-800/15">
                          <button
                            className="p-1.5 hover:text-warm-600 transition-colors"
                            onClick={() => dispatch({ type: 'SET_QTY', key: item.key, qty: item.qty - 1 })}
                            disabled={item.qty <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-medium tabular-nums">{item.qty}</span>
                          <button
                            className="p-1.5 hover:text-warm-600 transition-colors"
                            onClick={() => dispatch({ type: 'SET_QTY', key: item.key, qty: item.qty + 1 })}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="p-1 text-velvet-400 hover:text-red-500 transition-colors"
                          onClick={() => dispatch({ type: 'REMOVE', key: item.key })}
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-velvet-800/10 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-velvet-600">Subtotal</span>
                <span className="font-serif text-lg text-velvet-800">${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velvet-400">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">Checkout</button>
              <button
                className="w-full text-center text-xs text-velvet-500 underline underline-offset-4 hover:text-velvet-700 transition-colors"
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
