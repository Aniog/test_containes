import React from 'react'
import { X, ShoppingCart, Trash2 } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Button } from '../ui/Button'

export default function CartDrawer() {
  const { items, removeFromCart, total, count, isOpen, setIsOpen } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-50" onClick={() => setIsOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white border-l border-slate-200 z-50 flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-violet-600" />
            <h2 className="text-slate-900 font-bold text-lg">Cart ({count})</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-700 p-1 rounded transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingCart className="w-12 h-12 text-slate-300 mb-3" />
              <p className="text-slate-600 font-medium">Your cart is empty</p>
              <p className="text-slate-400 text-sm mt-1">Add some games to get started</p>
            </div>
          ) : (
            items.map(item => {
              const d = item.data
              const price = d.sale_price || d.price
              return (
                <div key={item.id} className="flex gap-3 bg-slate-50 rounded-xl p-3 border border-slate-200">
                  <img
                    src={d.cover_image || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&q=80'}
                    alt={d.title}
                    className="w-16 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-900 font-medium text-sm leading-tight line-clamp-2">{d.title}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {d.platform?.slice(0, 2).map(p => (
                        <span key={p} className="text-xs text-slate-500">{p}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-violet-600 font-bold">${price?.toFixed(2)}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Total</span>
              <span className="text-slate-900 font-bold text-xl">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full" size="lg">Checkout</Button>
            <Button variant="ghost" className="w-full" onClick={() => setIsOpen(false)}>Continue Shopping</Button>
          </div>
        )}
      </div>
    </>
  )
}
