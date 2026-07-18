import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velvet-950/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velvet-50 shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
            <h2 className="font-serif text-xl tracking-wide">
              Your Bag ({itemCount})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 text-velvet-500 hover:text-velvet-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-velvet-400 text-sm mb-4">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-outline text-xs"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.color}`} className="flex gap-4">
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 flex-shrink-0 bg-velvet-100 rounded-sm overflow-hidden" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <p
                          id={`cart-name-${item.id}-${item.color}`}
                          className="product-name text-xs text-velvet-800 truncate"
                        >
                          {item.name}
                        </p>
                        <button
                          onClick={() => removeItem(item.id, item.color)}
                          className="p-1 text-velvet-400 hover:text-velvet-700 transition-colors flex-shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-velvet-400 uppercase mt-0.5">
                        {item.color} tone
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-velvet-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                            className="p-1.5 text-velvet-500 hover:text-velvet-800 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs text-velvet-700">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                            className="p-1.5 text-velvet-500 hover:text-velvet-800 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium text-velvet-800">
                          ${(item.price * item.quantity).toFixed(0)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-velvet-200 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velvet-500">Subtotal</span>
                <span className="font-medium text-velvet-900">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-[11px] text-velvet-400 text-center">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-accent w-full text-sm">
                Checkout — ${subtotal.toFixed(0)}
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-xs text-velvet-500 hover:text-velvet-700 transition-colors underline underline-offset-4"
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