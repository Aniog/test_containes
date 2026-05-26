import { X, ShoppingCart, Trash2, CreditCard } from 'lucide-react';

const CartSidebar = ({ cart, onClose, onRemove, onClear }) => {
  const total = cart.reduce((sum, item) => {
    const price = item.is_on_sale ? item.sale_price : item.price;
    return sum + price * item.qty;
  }, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-[#13131f] border-l border-[#2a2a3e] z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#2a2a3e]">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-violet-400" />
            <h2 className="text-white font-bold text-lg">Your Cart</h2>
            <span className="bg-violet-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.reduce((s, i) => s + i.qty, 0)}
            </span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-3">
              <ShoppingCart className="w-12 h-12 opacity-30" />
              <p className="text-sm">Your cart is empty</p>
              <button onClick={onClose} className="text-violet-400 hover:text-violet-300 text-sm transition-colors">
                Browse games →
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const price = item.is_on_sale ? item.sale_price : item.price;
              return (
                <div key={item.id} className="flex items-center gap-3 bg-[#1a1a2e] border border-[#2a2a3e] rounded-xl p-3">
                  <div className="w-12 h-12 rounded-lg bg-[#0d0d14] flex-shrink-0 overflow-hidden">
                    <div
                      className="w-full h-full"
                      data-strk-bg-id={`cart-item-bg-${item.id}`}
                      data-strk-bg={`${item.title} video game`}
                      data-strk-bg-ratio="1x1"
                      data-strk-bg-width="100"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold truncate">{item.title}</p>
                    <p className="text-gray-500 text-xs capitalize">{item.genre}</p>
                    <p className="text-green-400 text-sm font-bold">${(price * item.qty).toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors flex-shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-[#2a2a3e] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Total</span>
              <span className="text-white font-bold text-xl">${total.toFixed(2)}</span>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-violet-900/30">
              <CreditCard className="w-4 h-4" />
              Checkout
            </button>
            <button
              onClick={onClear}
              className="w-full text-gray-500 hover:text-red-400 text-xs text-center transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
