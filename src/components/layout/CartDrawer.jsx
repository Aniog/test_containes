import { useEffect, useRef } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setIsOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 cart-overlay transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-cream flex flex-col transition-transform duration-400 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-serif text-lg font-light tracking-wide text-ink">Your Cart</span>
            {items.length > 0 && (
              <span className="font-sans text-xs text-mist ml-1">({items.length})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-mist hover:text-ink transition-colors duration-200"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-serif text-xl font-light text-mist">Your cart is empty</p>
              <p className="font-sans text-sm text-whisper">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs font-medium tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-cream transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-linen">
              {items.map(item => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onUpdateQty={(q) => updateQuantity(item.key, q)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-linen px-6 py-6 bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-sm text-mist">Subtotal</span>
              <span className="font-serif text-xl font-light text-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-whisper mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-cream font-sans text-xs font-medium tracking-widest uppercase py-4 hover:bg-gold-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 font-sans text-xs font-medium tracking-widest uppercase text-mist hover:text-ink transition-colors duration-300 py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onUpdateQty }) {
  const { product, variant, quantity } = item;

  return (
    <div className="flex gap-4 py-5">
      <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-linen to-parchment flex items-center justify-center">
          <span className="font-serif text-xs text-whisper text-center px-1 leading-tight">{product.name.split(' ')[0]}</span>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <Link
            to={`/product/${product.slug}`}
            className="font-sans text-xs font-medium tracking-product uppercase text-ink hover:text-gold transition-colors duration-200 leading-tight"
          >
            {product.name}
          </Link>
          <button onClick={onRemove} aria-label="Remove item" className="text-whisper hover:text-ink transition-colors duration-200 flex-shrink-0">
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>
        <p className="font-sans text-xs text-mist mt-0.5">{variant}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-linen">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              aria-label="Decrease quantity"
              className="w-7 h-7 flex items-center justify-center text-mist hover:text-ink transition-colors duration-200"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center font-sans text-xs text-ink">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              aria-label="Increase quantity"
              className="w-7 h-7 flex items-center justify-center text-mist hover:text-ink transition-colors duration-200"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>
          <span className="font-serif text-base font-light text-ink">${(product.price * quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
