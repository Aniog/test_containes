import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, setIsOpen, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setOrderPlaced(false);
      setIsOpen(false);
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-slate-900">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-yellow-400" />
            <h2 className="text-white font-bold text-lg">购物车</h2>
            {totalItems > 0 && (
              <span className="bg-red-700 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Success */}
        {orderPlaced && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">订单提交成功！</h3>
            <p className="text-gray-500 text-center text-sm">感谢您的购买，我们将尽快为您发货。</p>
          </div>
        )}

        {/* Empty Cart */}
        {!orderPlaced && items.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-lg font-semibold text-slate-700">购物车是空的</h3>
            <p className="text-gray-400 text-sm text-center">快去挑选您喜欢的世界杯周边吧！</p>
            <Button onClick={() => setIsOpen(false)} variant="primary" size="md">
              去购物
            </Button>
          </div>
        )}

        {/* Cart Items */}
        {!orderPlaced && items.length > 0 && (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {items.map(item => (
                <div key={item.key} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-red-900 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-2xl">
                      {item.product.category === 'jersey' ? '👕' :
                       item.product.category === 'ball' ? '⚽' :
                       item.product.category === 'scarf' ? '🧣' :
                       item.product.category === 'hat' ? '🧢' :
                       item.product.category === 'trophy' ? '🏆' :
                       item.product.category === 'flag' ? '🚩' :
                       item.product.category === 'collectible' ? '🎖️' : '🎁'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-900 font-semibold text-sm leading-tight line-clamp-2">
                      {item.product.name}
                    </p>
                    {item.size && (
                      <p className="text-gray-500 text-xs mt-0.5">尺码: {item.size}</p>
                    )}
                    <p className="text-red-700 font-bold text-sm mt-1">
                      ¥{(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <Minus className="w-3 h-3 text-slate-700" />
                      </button>
                      <span className="text-slate-900 font-semibold text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        <Plus className="w-3 h-3 text-slate-700" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-gray-400 hover:text-red-600 transition-colors p-1 self-start"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-6 py-5 space-y-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">商品合计</span>
                <span className="text-slate-900 font-bold text-lg">¥{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>运费</span>
                <span className="text-green-600 font-medium">免运费</span>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                <span className="text-slate-900 font-bold">总计</span>
                <span className="text-red-700 font-extrabold text-xl">¥{totalPrice.toFixed(2)}</span>
              </div>
              <Button onClick={handleCheckout} variant="primary" size="lg" className="w-full">
                立即结算
              </Button>
              <button
                onClick={clearCart}
                className="w-full text-gray-400 hover:text-red-600 text-sm transition-colors py-1"
              >
                清空购物车
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
