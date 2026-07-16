import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velvet-surface z-50 transform transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-border">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-velvet-gold" />
              <span className="font-sans text-sm text-velvet-cream">Cart ({totalItems})</span>
            </div>
            <button onClick={onClose} className="text-velvet-taupe hover:text-velvet-cream transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velvet-muted mb-4" />
                <p className="text-velvet-taupe text-sm">Your cart is empty</p>
                <Link to="/shop" onClick={onClose} className="mt-4 btn-outline text-xs">
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-velvet-border/50">
                    <div className="w-20 h-20 bg-velvet-elevated rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-xs tracking-extrawide uppercase text-velvet-cream truncate">
                        {item.name}
                      </h4>
                      {item.variant && (
                        <p className="text-velvet-muted text-[11px] mt-0.5 uppercase tracking-wider">
                          {item.variant}
                        </p>
                      )}
                      <p className="text-velvet-gold text-sm mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-velvet-border rounded">
                          <button
                            className="p-1 text-velvet-taupe hover:text-velvet-cream transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs text-velvet-cream">{item.quantity}</span>
                          <button
                            className="p-1 text-velvet-taupe hover:text-velvet-cream transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="text-velvet-muted hover:text-velvet-cream text-xs transition-colors"
                          onClick={() => removeItem(item.id, item.variant)}
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
            <div className="border-t border-velvet-border px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-velvet-cream text-sm">Subtotal</span>
                <span className="text-velvet-gold font-serif text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-velvet-muted text-xs">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-velvet-taupe hover:text-velvet-cream text-xs tracking-wider uppercase transition-colors"
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