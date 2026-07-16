import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal-950/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-cream-50 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-charcoal-100">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-charcoal-700" />
            <h2 className="font-serif text-lg tracking-wider uppercase text-charcoal-800">
              Your Bag ({totalItems})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="text-charcoal-400 hover:text-charcoal-700 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 240px)' }}>
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag size={40} className="text-charcoal-200 mx-auto mb-4" />
              <p className="font-serif text-xl text-charcoal-400 mb-2">Your bag is empty</p>
              <p className="text-sm text-charcoal-300">Discover our collection of fine jewelry</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-cream-100 flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="product-name text-charcoal-800 text-xs">{item.name}</h3>
                        <p className="text-[11px] text-charcoal-400 mt-1">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-charcoal-300 hover:text-red-400 transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-charcoal-200">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-charcoal-500 hover:text-charcoal-800"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center text-xs font-medium border-x border-charcoal-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-charcoal-500 hover:text-charcoal-800"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-charcoal-800">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-charcoal-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-charcoal-500">Subtotal</span>
              <span className="font-serif text-xl text-charcoal-800">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-charcoal-400 mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-4 bg-charcoal-800 hover:bg-charcoal-900 text-cream-50 text-xs font-medium tracking-ultra-wide uppercase transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 py-3 text-xs font-medium tracking-ultra-wide uppercase text-charcoal-500 hover:text-charcoal-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
