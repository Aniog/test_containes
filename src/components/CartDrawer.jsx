import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, itemCount, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-velvet-950/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-100">
          <h2 className="font-serif text-xl tracking-wide text-velvet-900">
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="text-velvet-500 hover:text-velvet-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <p className="text-velvet-500 text-sm mb-1">Your bag is empty.</p>
            <button
              onClick={closeCart}
              className="text-gold-600 text-sm underline underline-offset-4 hover:text-gold-700"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <div key={`${item.id}-${item.color}`} className="flex gap-4">
                    {/* Image placeholder */}
                    <div className="w-20 h-24 flex-shrink-0 bg-velvet-100 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gold-200/60 to-velvet-200/40" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <Link
                          to={`/product/${product?.slug || item.id}`}
                          onClick={closeCart}
                          className="font-serif text-sm tracking-wider text-velvet-900 hover:text-gold-600 transition-colors truncate"
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.id, item.color)}
                          className="text-velvet-400 hover:text-velvet-700 transition-colors ml-2 flex-shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-velvet-500 mt-0.5">{item.color} Tone</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-velvet-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-velvet-600 hover:text-velvet-900 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 h-7 flex items-center justify-center text-xs font-medium text-velvet-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-velvet-600 hover:text-velvet-900 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-velvet-900">
                          ${(item.price * item.quantity).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="border-t border-velvet-100 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velvet-600">Subtotal</span>
                <span className="font-semibold text-velvet-900">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-[11px] text-velvet-400">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3 bg-velvet-900 text-white text-sm tracking-wider uppercase font-medium hover:bg-velvet-800 transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-2 text-xs text-velvet-500 underline underline-offset-4 hover:text-velvet-700 transition-colors text-center"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
