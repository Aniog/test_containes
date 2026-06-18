import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, total, count, isOpen, setIsOpen } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 backdrop-blur-sm z-50 animate-fadeIn"
        style={{backgroundColor: 'rgba(26,23,20,0.4)'}}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-drawer animate-slideInRight">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <h2 className="font-cormorant text-xl font-medium tracking-wide text-ink">
              Your Cart {count > 0 && <span className="text-muted font-light">({count})</span>}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-muted hover:text-ink transition-colors p-1"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-cormorant text-2xl text-muted font-light">Your cart is empty</p>
              <p className="font-manrope text-xs text-ghost">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-4 font-manrope text-xs tracking-[0.12em] uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-ivory transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-linen to-parchment flex items-center justify-center">
                      <span className="font-cormorant text-xs text-ghost italic">
                        {item.product.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-cormorant text-sm uppercase tracking-widest2 text-ink font-medium leading-tight">
                          {item.product.name}
                        </h3>
                        <p className="font-manrope text-xs text-muted mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-ghost hover:text-ink transition-colors flex-shrink-0"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink hover:bg-linen transition-colors"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink hover:bg-linen transition-colors"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <span className="font-manrope text-sm font-medium text-ink">
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
          <div className="px-6 py-6 border-t border-linen bg-parchment">
            <div className="flex items-center justify-between mb-1">
              <span className="font-manrope text-xs tracking-wider uppercase text-muted">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-ghost mb-5">Shipping & taxes calculated at checkout</p>

            <button className="w-full bg-gold text-ivory font-manrope text-xs tracking-[0.12em] uppercase py-4 hover:bg-gold-dark transition-colors mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-muted font-manrope text-xs tracking-[0.12em] uppercase py-3.5 hover:border-ink hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>

            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="font-manrope text-[10px] text-ghost">Free Shipping</span>
              <span className="w-px h-3 bg-linen" />
              <span className="font-manrope text-[10px] text-ghost">30-Day Returns</span>
              <span className="w-px h-3 bg-linen" />
              <span className="font-manrope text-[10px] text-ghost">Secure Checkout</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
