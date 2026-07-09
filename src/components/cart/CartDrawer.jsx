import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, subtotal, totalItems } = useCart();

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
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-cream shadow-2xl transform transition-transform duration-500 ease-out flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-xl font-semibold tracking-wide text-velmora-charcoal">
            Your Bag ({totalItems})
          </h2>
          <button onClick={onClose} className="text-velmora-charcoal hover:text-velmora-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag className="w-12 h-12 text-velmora-stone" />
              <p className="text-velmora-smoke font-sans text-sm">Your bag is empty.</p>
              <Link to="/shop" onClick={onClose} className="btn-outline mt-2">
                Start Shopping
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {cart.map((item) => {
                const itemKey = `${item.productId}-${item.variant}`;
                return (
                  <li key={itemKey} className="flex gap-4 pb-5 border-b border-velmora-border">
                    <div className="w-20 h-24 flex-shrink-0 bg-gradient-to-br from-velmora-sand to-velmora-gold/20 rounded-sm flex items-center justify-center">
                      <span className="text-velmora-gold/40 text-2xl font-serif">✦</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 id={item.titleId} className="font-serif text-sm font-semibold tracking-wider uppercase text-velmora-charcoal">
                        {item.name}
                      </h4>
                      <p className="text-xs text-velmora-stone mt-0.5">{item.variant}</p>
                      <p className="font-sans text-sm font-medium text-velmora-charcoal mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-velmora-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                            className="p-1.5 text-velmora-charcoal hover:text-velmora-gold transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-sans text-velmora-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                            className="p-1.5 text-velmora-charcoal hover:text-velmora-gold transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.productId, item.variant)}
                          className="text-velmora-stone hover:text-red-500 transition-colors ml-auto"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-velmora-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm text-velmora-smoke">Subtotal</span>
              <span className="font-serif text-lg font-semibold text-velmora-charcoal">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-stone mb-4">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}