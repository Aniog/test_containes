import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[#F8F5F0] shadow-xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
            <h2 className="font-serif text-xl tracking-wider text-velvet-900">
              Your Bag ({itemCount})
            </h2>
            <button
              onClick={onClose}
              className="text-velvet-600 hover:text-velvet-900 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
                <p className="text-velvet-600 font-serif text-lg">Your bag is empty</p>
                <p className="text-velvet-400 text-sm mt-2">Add some pieces to get started</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-6 inline-block bg-gold text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-velvet-200">
                    <div className="w-20 h-20 bg-velvet-100 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-widest text-velvet-900 uppercase truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-velvet-600 mt-0.5">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 border border-velvet-300 flex items-center justify-center text-velvet-700 hover:bg-velvet-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium text-velvet-900 w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 border border-velvet-300 flex items-center justify-center text-velvet-700 hover:bg-velvet-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-auto text-xs text-velvet-400 hover:text-velvet-700 transition-colors uppercase tracking-wider"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-velvet-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-velvet-600 uppercase tracking-wider">Subtotal</span>
                <span className="font-serif text-xl text-velvet-900">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velvet-400">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-gold text-white py-3.5 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-velvet-600 hover:text-velvet-900 transition-colors uppercase tracking-wider"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}