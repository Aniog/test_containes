import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    if (isOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-ivory shadow-drawer flex flex-col transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-sans text-xs uppercase tracking-widest-md font-medium text-ink">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-stone hover:text-ink transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-whisper" />
              <p className="font-serif text-xl text-muted font-light">Your cart is empty</p>
              <p className="font-sans text-xs text-whisper">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-widest-md font-medium text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-ivory transition-colors"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-sand last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-sand to-linen flex items-center justify-center">
                      <span className="font-serif text-xs text-whisper italic">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <Link
                        to={`/product/${item.product.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="font-serif text-sm uppercase tracking-widest-sm text-ink hover:text-gold transition-colors leading-tight"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-whisper hover:text-stone transition-colors flex-shrink-0"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    {item.variant && (
                      <p className="font-sans text-xs text-muted mt-0.5">{item.variant}</p>
                    )}

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-ink transition-colors"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-sans text-xs text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-ink transition-colors"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <span className="font-sans text-sm font-medium text-ink">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-sand bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-widest-sm text-muted">Subtotal</span>
              <span className="font-serif text-xl text-ink">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-whisper mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-ivory font-sans text-xs uppercase tracking-widest-md font-medium py-4 hover:bg-gold-dark transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 font-sans text-xs uppercase tracking-widest-md font-medium text-stone py-2 hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
