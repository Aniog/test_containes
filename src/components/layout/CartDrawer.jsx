import { useCart } from '../../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalPrice, totalItems, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-ink-950/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-cream-50 shadow-2xl transform transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink-100">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-ink-600" />
              <span className="text-sm font-medium text-ink-800">Cart ({totalItems})</span>
            </div>
            <button onClick={closeCart} className="p-1 hover:text-gold-600 transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-ink-300 mb-4" />
                <p className="text-ink-500 text-sm">Your cart is empty</p>
                <p className="text-ink-400 text-xs mt-1">Add some pieces to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.cartId} className="flex gap-4 py-4 border-b border-ink-100 last:border-0">
                    {/* Placeholder image square */}
                    <div className="w-20 h-20 bg-ink-100 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gold-200/30 to-ink-200" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xs uppercase tracking-widest font-medium text-ink-800 truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-ink-500 mt-0.5">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.cartId)}
                          className="p-1 hover:text-gold-600 transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-ink-200 rounded">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:text-gold-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium text-ink-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:text-gold-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-ink-800">
                          ${(item.price * item.quantity).toFixed(0)}
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
            <div className="border-t border-ink-100 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-ink-600">Subtotal</span>
                <span className="text-lg font-serif font-semibold text-ink-900">${totalPrice.toFixed(0)}</span>
              </div>
              <p className="text-xs text-ink-400">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3 bg-ink-900 text-cream-50 text-xs uppercase tracking-widest font-medium hover:bg-ink-800 transition-colors rounded-none">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-3 border border-ink-200 text-ink-700 text-xs uppercase tracking-widest font-medium hover:bg-ink-100 transition-colors rounded-none"
              >
                <Link to="/shop">Continue Shopping</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}