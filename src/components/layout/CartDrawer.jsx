import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { cartItems, cartTotal, cartCount, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transform transition-transform duration-400 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand-200">
            <h2 className="font-serif text-xl tracking-wide text-velvet-800">
              Your Bag ({cartCount})
            </h2>
            <button onClick={onClose} className="p-1.5 text-velvet-600 hover:text-velvet-900 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-sand-300 mb-4" />
                <p className="font-serif text-lg text-velvet-700 mb-2">Your bag is empty</p>
                <p className="text-sm text-sand-500 mb-6">Discover pieces crafted to be treasured.</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="btn-primary text-xs"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-sand-100">
                    <div
                      className="w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #d4b98e 0%, #8a5c3c 100%)',
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-sm tracking-wider uppercase text-velvet-800">
                            {item.name}
                          </h3>
                          <p className="text-xs text-sand-500 mt-0.5">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-sand-400 hover:text-velvet-700 transition-colors p-0.5"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-sand-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-velvet-600 hover:text-velvet-900 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-medium text-velvet-800 tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-velvet-600 hover:text-velvet-900 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-medium text-velvet-800">
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
          {cartItems.length > 0 && (
            <div className="border-t border-sand-200 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm text-velvet-700">Subtotal</span>
                <span className="font-serif text-xl text-velvet-800">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-sand-500 text-center">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button onClick={onClose} className="w-full text-xs text-velvet-600 hover:text-velvet-900 transition-colors underline underline-offset-4 text-center">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
