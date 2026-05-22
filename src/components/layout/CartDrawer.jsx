import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, total, itemCount, isOpen, setIsOpen, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0d0d1a] border-l border-purple-900/30 z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-purple-900/20">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-bold text-white font-gaming">Cart ({itemCount})</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag className="w-16 h-16 text-gray-700 mb-4" />
              <p className="text-gray-400 font-medium">Your cart is empty</p>
              <p className="text-gray-600 text-sm mt-1">Add some games to get started!</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-6 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-500 transition-colors"
              >
                Browse Store
              </button>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                {/* Cover */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.cover_color || 'from-purple-900 to-purple-600'} flex-shrink-0 flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold text-center px-1 leading-tight">{item.title.slice(0, 2)}</span>
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.platform}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-purple-400 font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1.5 rounded-lg text-gray-600 hover:text-red-400 hover:bg-red-400/10 transition-colors self-start"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-purple-900/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-white font-bold text-lg">${total.toFixed(2)}</span>
            </div>
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold hover:opacity-90 transition-opacity">
              <CreditCard className="w-5 h-5" />
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full py-2 rounded-xl text-gray-500 hover:text-red-400 text-sm transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
