import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, subtotal } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeDrawer} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-espresso-800 animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-cream-400/10">
            <h2 className="serif-heading text-lg text-cream-100 tracking-[0.08em] flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-gold" />
              Your Bag ({items.length})
            </h2>
            <button onClick={closeDrawer} className="text-cream-300/60 hover:text-cream-100 transition-colors p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-cream-300/50">
                <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
                <p className="text-sm">Your bag is empty</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-cream-400/8">
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 bg-espresso-700 rounded-sm flex-shrink-0 flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-cream-300/30" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="product-name text-xs text-cream-100">{item.product.name}</h4>
                          <p className="text-[10px] text-cream-300/50 mt-0.5 capitalize">{item.variant} tone</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id, item.variant)}
                          className="text-cream-300/40 hover:text-red-400 transition-colors p-0.5"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-0">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            className="text-cream-300/60 hover:text-cream-100 transition-colors p-1"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs text-cream-100 w-7 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            className="text-cream-300/60 hover:text-cream-100 transition-colors p-1"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm text-gold">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-cream-400/10 px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-cream-300/60">Subtotal</span>
                <span className="text-lg text-cream-100 font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-cream-300/40 mb-4">Shipping & taxes calculated at checkout</p>
              <button
                className="btn-accent w-full text-center"
                onClick={() => alert('Checkout would go here!')}
              >
                Checkout — ${subtotal.toFixed(2)}
              </button>
              <button
                onClick={closeDrawer}
                className="w-full text-center text-xs text-cream-300/50 hover:text-cream-200 mt-3 tracking-[0.06em] uppercase transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
