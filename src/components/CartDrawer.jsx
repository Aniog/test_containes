import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, totalItems, isCartOpen, setIsCartOpen, clearCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="flex-1 bg-black/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b bg-gradient-to-r from-pink-50 to-purple-50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-pink-600" />
            <h2 className="text-lg font-bold text-gray-800">购物车</h2>
            <span className="bg-pink-500 text-white text-xs rounded-full px-2 py-0.5">{totalItems}</span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
              <ShoppingBag className="w-16 h-16 opacity-30" />
              <p className="text-lg">购物车是空的</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-pink-600 hover:underline text-sm"
              >
                去逛逛 →
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{item.name}</p>
                  <p className="text-pink-600 font-bold mt-1">¥{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-300 hover:text-red-500 transition flex-shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t px-5 py-4 space-y-3 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">合计</span>
              <span className="text-2xl font-bold text-pink-600">¥{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={clearCart}
                className="flex-1 py-3 border border-gray-300 rounded-xl text-gray-600 hover:border-red-400 hover:text-red-500 transition text-sm"
              >
                清空购物车
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition text-sm"
              >
                立即结算
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center">🔒 隐私包装 · 安全支付 · 快速发货</p>
          </div>
        )}
      </div>
    </div>
  );
}
