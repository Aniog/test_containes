import { X, Trash2, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[420px] bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-border">
            <h2 className="font-serif text-xl text-text-primary">Your Cart</h2>
            <button onClick={closeCart} className="p-1 hover:text-gold-accent transition-colors" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-warm-gray">
                <p className="text-sm">Your cart is empty</p>
                <Link
                  to="/shop"
                  className="mt-4 text-sm uppercase tracking-wider text-gold-accent hover:underline"
                  onClick={closeCart}
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-warm-border last:border-0">
                    <div className="w-20 h-20 flex-shrink-0 bg-ivory rounded overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="text-xs uppercase tracking-wider font-medium text-text-primary truncate">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-2 p-0.5 text-warm-gray hover:text-red-500 transition-colors flex-shrink-0"
                          aria-label="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-warm-gray mt-0.5">{item.variant}</p>
                      <p className="text-sm font-medium text-text-primary mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-0.5 border border-warm-border rounded hover:border-gold-accent transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-0.5 border border-warm-border rounded hover:border-gold-accent transition-colors"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
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
            <div className="border-t border-warm-border px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-warm-gray">Subtotal</span>
                <span className="font-medium text-text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-warm-gray">Shipping & taxes calculated at checkout</p>
              <button className="w-full py-3 bg-text-primary text-white text-sm uppercase tracking-wider hover:bg-warm-dark transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-2 text-xs uppercase tracking-wider text-warm-gray hover:text-text-primary transition-colors"
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