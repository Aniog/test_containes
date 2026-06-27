import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, itemCount, removeItem, updateQuantity } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-velmora-divider">
            <h2 className="font-serif text-lg tracking-wide">Your Bag ({itemCount})</h2>
            <button onClick={closeCart} className="text-velmora-text-secondary hover:text-velmora-text">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-velmora-text-muted gap-3">
                <ShoppingBag className="w-12 h-12 stroke-1" />
                <p className="text-sm">Your bag is empty</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-velmora-gold-light rounded-sm flex-shrink-0 flex items-center justify-center">
                      <ShoppingBag className="w-6 h-6 text-velmora-gold" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-wide uppercase">{item.name}</h3>
                      <p className="text-xs text-velmora-text-muted mt-0.5">{item.tone} Tone</p>
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-velmora-divider rounded-full text-velmora-text-secondary hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-velmora-divider rounded-full text-velmora-text-secondary hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.tone)}
                          className="ml-auto text-xs text-velmora-text-muted underline-offset-2 hover:underline"
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
          {items.length > 0 && (
            <div className="border-t border-velmora-divider px-5 py-4">
              <div className="flex justify-between text-sm mb-4">
                <span className="text-velmora-text-secondary">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full bg-velmora-gold text-white py-3 text-sm tracking-widest uppercase hover:bg-velmora-gold-hover transition-colors duration-300">
                Checkout
              </button>
              <p className="text-xs text-velmora-text-muted text-center mt-3">
                Free shipping on all orders
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
