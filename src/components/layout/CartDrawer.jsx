import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm" onClick={() => toggleCart(false)} />
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-[#faf8f6] shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
          <h2 className="font-serif text-xl tracking-wider">
            Your Bag ({totalItems})
          </h2>
          <button onClick={() => toggleCart(false)} className="p-1.5 hover:text-warm-700 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-stone-400 text-sm">Your bag is empty.</p>
              <button
                onClick={() => toggleCart(false)}
                className="mt-4 text-xs tracking-widest uppercase text-warm-800 underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velvet-100">
                  {/* Placeholder image */}
                  <div
                    className="w-20 h-20 flex-shrink-0 rounded-sm"
                    style={{ backgroundColor: item.product.images[0]?.color || '#d9c6b4' }}
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="product-name text-sm">{item.product.name}</h4>
                    <p className="text-xs text-stone-400 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-stone-800 mt-1.5">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border border-velvet-200 rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-warm-700 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-warm-700 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-stone-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velvet-200 px-6 py-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-stone-500">Subtotal</span>
              <span className="font-semibold text-stone-900">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-400">Shipping & taxes calculated at checkout</p>
            <Link
              to="/checkout"
              onClick={() => toggleCart(false)}
              className="block w-full text-center btn-accent py-3 text-xs"
            >
              Checkout — ${subtotal.toFixed(2)}
            </Link>
            <button
              onClick={() => toggleCart(false)}
              className="block w-full text-center text-xs tracking-widest uppercase text-stone-500 hover:text-stone-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
