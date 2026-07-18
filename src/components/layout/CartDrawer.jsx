import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#faf8f5] z-50 shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/50">
            <h3 className="font-serif text-lg tracking-wider">Your Bag ({items.length})</h3>
            <button onClick={closeCart} className="p-1 hover:text-accent transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <p className="text-sm">Your bag is empty.</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-3 text-sm text-accent underline underline-offset-4 hover:text-warm-600 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-border/30">
                    <div className="w-20 h-20 flex-shrink-0 bg-warm-100 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-warm-100 to-warm-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-xs tracking-[0.08em] uppercase font-medium truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="p-1 text-muted-foreground hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-border/50 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:text-accent transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs min-w-[2rem] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:text-accent transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border/50 px-6 py-5">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-sm font-medium">${subtotal.toFixed(0)}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-accent text-white py-3 text-xs tracking-[0.1em] uppercase font-medium hover:bg-warm-600 transition-colors duration-300">
                Checkout — ${subtotal.toFixed(0)}
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-2 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-2"
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
