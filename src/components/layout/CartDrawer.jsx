import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-[60] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl transform transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone/10">
            <div className="flex items-center gap-3">
              <ShoppingBag size={18} className="text-charcoal" />
              <span className="text-sm uppercase tracking-widest font-medium">
                Cart ({totalItems})
              </span>
            </div>
            <button onClick={onClose} aria-label="Close cart" className="hover:text-gold transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-stone/40 mb-4" />
                <p className="text-stone text-sm">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-4 btn-primary text-xs"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-stone/10 last:border-0">
                    <div className="w-20 h-20 flex-shrink-0 bg-warm-white overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xs uppercase tracking-widest font-medium text-charcoal">
                            {item.name}
                          </h4>
                          <p className="text-sm text-stone mt-0.5">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-stone/50 hover:text-error transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 border border-stone/20 flex items-center justify-center hover:border-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 border border-stone/20 flex items-center justify-center hover:border-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
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
            <div className="border-t border-stone/10 px-6 py-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm uppercase tracking-widest font-medium">Subtotal</span>
                <span className="text-lg font-serif">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-stone">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">Checkout</button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-stone hover:text-charcoal transition-colors"
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