import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart()
  const navigate = useNavigate()

  const handleCheckout = () => {
    setIsOpen(false)
    navigate('/checkout')
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-red-600" />
            <h2 className="text-lg font-bold text-gray-900">购物车</h2>
            {totalItems > 0 && (
              <span className="bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
              <p className="text-gray-500 font-medium">购物车是空的</p>
              <p className="text-gray-400 text-sm mt-1">快去挑选心仪的商品吧！</p>
              <button
                onClick={() => { setIsOpen(false); navigate('/products') }}
                className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                去购物
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    {item.image_url ? (
                      <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center p-1">
                        {item.name?.slice(0, 4)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight">
                      {item.name}
                    </p>
                    <p className="text-red-600 font-bold mt-1">¥{item.price?.toFixed(2)}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
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
          <div className="border-t border-gray-200 px-5 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">小计</span>
              <span className="text-xl font-bold text-red-600">¥{subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-400 text-center">运费将在结算时计算</p>
            <button
              onClick={handleCheckout}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-colors text-base"
            >
              去结算 (¥{subtotal.toFixed(2)})
            </button>
          </div>
        )}
      </div>
    </>
  )
}
