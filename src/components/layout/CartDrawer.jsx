import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const overlayRef = useRef();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        className={`fixed inset-0 z-60 bg-black/30 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-70 h-full w-full max-w-md bg-cream shadow-2xl transform transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-warm-beige">
            <div>
              <h2 className="font-serif text-xl tracking-wider text-dark-forest">Your Cart</h2>
              <p className="text-xs text-taupe mt-0.5">{itemCount} item{itemCount !== 1 ? 's' : ''}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-dark-forest hover:text-warm-gold transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-taupe/40 mb-4" />
                <p className="text-taupe text-sm">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-4 text-sm text-warm-gold hover:text-warm-gold/80 underline underline-offset-2"
                >
                  Shop our collection
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {cart.map((item) => (
                  <div
                    key={item.key}
                    className="flex gap-4 pb-5 border-b border-warm-beige/50 last:border-0"
                  >
                    {/* Image placeholder */}
                    <div className="w-20 h-20 bg-warm-beige/40 rounded flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect fill='%23E8E3DC' width='80' height='80'/%3E%3Ccircle cx='40' cy='40' r='15' fill='%23D4A853' opacity='0.5'/%3E%3C/svg%3E")`,
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm uppercase tracking-widest text-dark-forest truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-taupe mt-0.5 capitalize">{item.material} tone</p>
                      <p className="text-sm font-medium text-dark-forest mt-1">
                        ${item.price.toFixed(2)}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-warm-beige rounded">
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity - 1)}
                            className="p-1.5 text-taupe hover:text-dark-forest transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm text-dark-forest min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.key, item.quantity + 1)}
                            className="p-1.5 text-taupe hover:text-dark-forest transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-xs text-taupe hover:text-red-500 transition-colors"
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
            <div className="border-t border-warm-beige px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-dark-forest">Subtotal</span>
                <span className="font-serif text-lg text-dark-forest">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-taupe">Free shipping on all orders</p>
              <button className="w-full bg-warm-gold text-white py-3 text-sm tracking-wider uppercase hover:bg-warm-gold/90 transition-colors duration-300 rounded-sm">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-taupe hover:text-dark-forest transition-colors"
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