import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-velmora-espresso/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl flex flex-col animate-[slideInRight_0.3s_ease-out]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <h2 className="font-serif text-lg tracking-wide">
            Shopping Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-velmora-stone hover:text-velmora-espresso transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-stone-light mb-4" />
              <p className="text-velmora-stone text-sm">Your bag is empty.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 bg-velmora-sand flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-velmora-stone-light" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="product-name text-xs truncate">{item.product.name}</p>
                    <p className="text-xs text-velmora-stone mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm text-velmora-espresso mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs tabular-nums w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-sand text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant)}
                        className="ml-auto text-xs text-velmora-stone underline hover:text-velmora-espresso"
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
          <div className="border-t border-velmora-sand px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-velmora-stone">Subtotal</span>
              <span className="font-serif text-lg text-velmora-espresso">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-stone">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">Checkout</button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="block w-full text-center text-xs text-velmora-stone underline hover:text-velmora-espresso"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
