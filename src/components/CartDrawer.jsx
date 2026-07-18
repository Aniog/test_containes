import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

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
        className={cn(
          'fixed inset-0 z-60 bg-black/40 transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-70 h-full w-full max-w-md bg-cream shadow-xl transition-transform duration-300 ease-in-out flex flex-col',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warm-beige">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-warm-black" />
            <span className="font-sans text-sm font-medium text-warm-black">
              Cart ({totalItems})
            </span>
          </div>
          <button onClick={onClose} className="text-warm-gray hover:text-warm-black transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-warm-beige mb-4" />
              <p className="font-serif text-xl text-warm-gray mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-warm-muted mb-6">Add some pieces to get started</p>
              <button
                onClick={onClose}
                className="font-sans text-sm uppercase tracking-wider text-gold hover:text-gold-hover transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 pb-5 border-b border-warm-beige/60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={onClose}
                      className="font-serif text-sm uppercase tracking-wide text-warm-black hover:text-gold transition-colors block truncate"
                    >
                      {item.name}
                    </Link>
                    <p className="font-sans text-xs text-warm-muted mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-warm-black mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        className="w-7 h-7 rounded-full border border-warm-beige flex items-center justify-center text-warm-gray hover:text-warm-black hover:border-warm-gray transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm font-medium text-warm-black w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="w-7 h-7 rounded-full border border-warm-beige flex items-center justify-center text-warm-gray hover:text-warm-black hover:border-warm-gray transition-colors"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        className="ml-auto text-xs text-warm-muted hover:text-warm-black transition-colors font-sans"
                        onClick={() => removeItem(item.id)}
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
          <div className="border-t border-warm-beige px-6 py-6 bg-cream">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm font-medium text-warm-black uppercase tracking-wider">
                Subtotal
              </span>
              <span className="font-serif text-xl text-warm-black font-medium">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="font-sans text-xs text-warm-muted mb-4">
              Free shipping on all orders
            </p>
            <button
              className="w-full bg-gold hover:bg-gold-hover text-white font-sans text-sm uppercase tracking-widest py-3.5 transition-all duration-300"
              onClick={() => {
                alert('Checkout coming soon!');
              }}
            >
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full text-center mt-3 font-sans text-xs text-warm-muted hover:text-warm-black uppercase tracking-wider transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}