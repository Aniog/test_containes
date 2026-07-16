import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream animate-slide-in-right shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand/30">
            <h2 className="font-serif text-lg tracking-wide">
              Your Bag ({totalItems})
            </h2>
            <button onClick={onClose} className="p-1 text-stone hover:text-charcoal transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-stone">
                <ShoppingBag className="w-12 h-12 mb-4 text-sand" />
                <p className="font-serif text-lg text-charcoal">Your bag is empty</p>
                <p className="text-sm mt-1">Discover something beautiful.</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="btn-primary mt-6 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => {
                  const p = products.find((prod) => prod.id === item.id);
                  return (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-sand/20">
                    <div className="w-20 h-20 bg-sand/30 flex-shrink-0">
                      <img
                        data-strk-img-id={`cart-${item.id}`}
                        data-strk-img={`[cart-name-${item.id}] gold jewelry`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 id={`cart-name-${item.id}`} className="product-name text-xs tracking-widest text-charcoal truncate">{item.name}</h4>
                      <p className="text-xs text-stone uppercase mt-0.5">{item.variant} tone</p>
                      <p className="text-sm text-charcoal mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 border border-sand/50 flex items-center justify-center hover:border-charcoal transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 border border-sand/50 flex items-center justify-center hover:border-charcoal transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id, item.variant)}
                      className="text-stone hover:text-charcoal transition-colors p-1 self-start"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-sand/30 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone">Subtotal</span>
                <span className="font-medium text-charcoal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-stone text-center">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center">
                Checkout — ${totalPrice.toFixed(2)}
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs text-stone hover:text-charcoal uppercase tracking-wider transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
