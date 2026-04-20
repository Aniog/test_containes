import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function CartDrawer() {
  const { items, cartOpen, setCartOpen, removeFromCart, updateQty, cartTotal } = useCart()

  if (!cartOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setCartOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 border-l border-gray-700 z-50 flex flex-col shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <h2 className="text-white font-bold text-lg flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-indigo-400" />
            Your Cart ({items.length})
          </h2>
          <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-3">
              <ShoppingBag className="w-12 h-12 opacity-30" />
              <p className="text-sm">Your cart is empty</p>
              <Link to="/store" onClick={() => setCartOpen(false)}>
                <Button size="sm">Browse Store</Button>
              </Link>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-3 bg-gray-800 rounded-lg p-3 border border-gray-700">
                <img
                  src={item.cover_image_url || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=80'}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{item.title}</p>
                  <p className="text-indigo-400 text-sm font-bold">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="text-gray-400 hover:text-white p-0.5">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-white text-xs w-5 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="text-gray-400 hover:text-white p-0.5">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-400 transition-colors self-start">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-gray-700 space-y-3">
            <div className="flex justify-between text-white font-bold text-lg">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <Link to="/store/checkout" onClick={() => setCartOpen(false)}>
              <Button className="w-full" size="lg">Proceed to Checkout</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
