import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartActions } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, itemCount, subtotal, removeItem, updateQuantity, closeDrawer } =
    useCartActions();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-[60] transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-velvet-50 z-[70] shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
            <h2 className="font-serif text-xl tracking-wide">
              Your Bag ({itemCount})
            </h2>
            <button onClick={closeDrawer} className="p-1 hover:opacity-70 transition-opacity" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center pt-16">
                <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
                <p className="font-serif text-lg mb-2">Your bag is empty</p>
                <p className="text-sm text-velvet-500 mb-6">Discover pieces you'll treasure forever.</p>
                <button onClick={closeDrawer} className="btn-outline">
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velvet-100">
                    {/* Image placeholder */}
                    <div className="w-20 h-20 bg-velvet-200 flex-shrink-0 flex items-center justify-center">
                      <span className="text-velvet-400 text-[10px] tracking-wider uppercase text-center px-1 leading-tight">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-serif text-sm tracking-wider uppercase">{item.name}</p>
                          <p className="text-xs text-velvet-500 mt-0.5">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velvet-400 hover:text-velvet-700 p-1"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velvet-300">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-velvet-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-velvet-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-medium text-sm">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-velvet-200 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velvet-600">Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <p className="text-xs text-velvet-500">Shipping & taxes calculated at checkout</p>
              <Link to="/checkout" onClick={closeDrawer} className="btn-primary w-full text-center">
                Checkout
              </Link>
              <button
                onClick={closeDrawer}
                className="w-full text-center text-xs tracking-wider uppercase text-velvet-600 hover:text-velvet-900 transition-colors py-2"
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
