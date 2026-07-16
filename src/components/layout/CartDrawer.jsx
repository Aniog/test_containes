import { useEffect } from 'react';
import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ open, onClose }) {
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
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          open ? 'bg-black/30 backdrop-blur-sm pointer-events-auto' : 'bg-transparent pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      {open && (
        <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-[70] shadow-2xl animate-slide-in">
          <CartContent onClose={onClose} />
        </div>
      )}
    </>
  );
}

function CartContent({ onClose }) {
  const { cart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/50">
        <h2 className="font-serif text-xl tracking-wide flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-velmora-gold" />
          Your Bag ({itemCount})
        </h2>
        <button onClick={onClose} className="text-velmora-stone hover:text-velmora-charcoal transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <ShoppingBag className="w-12 h-12 text-velmora-stone/30 mb-4" />
            <p className="text-velmora-stone text-sm">Your bag is empty</p>
            <Link
              to="/shop"
              onClick={onClose}
              className="mt-4 btn-primary text-xs"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <ul className="space-y-5">
            {cart.map((item) => (
              <li key={`${item.productId}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velmora-sand/30">
                <div className="w-20 h-20 bg-velmora-sand flex-shrink-0 flex items-center justify-center">
                  <span className="font-serif text-2xl text-velmora-gold/40">
                    {item.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="product-name text-xs mb-1 truncate">{item.name}</p>
                  <p className="text-[11px] text-velmora-stone mb-2">{item.variant}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-velmora-sand">
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 h-7 flex items-center justify-center text-xs font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</span>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="text-velmora-stone/40 hover:text-velmora-rose transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="border-t border-velmora-sand/50 px-6 py-5 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-velmora-stone">Subtotal</span>
            <span className="font-medium text-lg">${subtotal.toFixed(0)}</span>
          </div>
          <p className="text-[11px] text-velmora-stone">Shipping & taxes calculated at checkout</p>
          <button className="btn-primary w-full text-xs">Checkout</button>
          <button
            onClick={onClose}
            className="btn-ghost w-full text-xs"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}