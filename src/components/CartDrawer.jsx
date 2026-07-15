import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-espresso/40 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-warmgold" />
              <span className="font-sans text-sm tracking-wider uppercase text-espresso">
                Your Bag ({totalItems})
              </span>
            </div>
            <button onClick={closeCart} className="p-1 text-taupe hover:text-espresso transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-stone mb-4" />
                <p className="font-serif text-lg text-espresso mb-2">Your bag is empty</p>
                <p className="font-sans text-sm text-taupe mb-6">Discover our collection of fine jewelry.</p>
                <Link to="/shop" onClick={closeCart} className="btn-outline text-xs">
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-stone last:border-0">
                    <div className="w-20 h-20 bg-sand rounded-sm flex-shrink-0 overflow-hidden">
                      <div
                        className="w-full h-full"
                        data-strk-bg-id={`cart-thumb-${item.id}-${item.variant?.toLowerCase() || 'default'}`}
                        data-strk-bg={`[cart-item-name-${item.id}] gold jewelry`}
                        data-strk-bg-ratio="1x1"
                        data-strk-bg-width="160"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p id={`cart-item-name-${item.id}`} className="product-name text-xs mb-1">
                        {item.name}
                      </p>
                      <p className="text-xs text-taupe font-sans mb-2">{item.variant}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-stone rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:text-warmgold transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-sans">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:text-warmgold transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-sans text-sm text-espresso">${(item.price * item.quantity).toFixed(0)}</span>
                          <button
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-taupe hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-stone px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm tracking-wider uppercase text-espresso">Subtotal</span>
                <span className="font-serif text-lg text-espresso">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-xs text-taupe font-sans mb-4">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full mb-3">Checkout</button>
              <button onClick={closeCart} className="btn-ghost w-full text-xs tracking-wider">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
