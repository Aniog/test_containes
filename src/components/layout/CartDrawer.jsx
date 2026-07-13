import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import JewelryPlaceholder from '../ui/JewelryPlaceholder';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  useEffect(() => {
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
        className={`fixed inset-0 z-50 bg-obsidian/40 cart-overlay transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-drawer flex flex-col transition-transform duration-400 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold" />
            <h2 className="font-serif text-xl text-ink">Your Cart</h2>
            {totalItems > 0 && (
              <span className="font-sans text-xs text-ivory bg-gold rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-linen" />
              <p className="font-serif text-2xl text-ink">Your cart is empty</p>
              <p className="font-sans text-sm text-ink-muted">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-gold text-gold font-sans text-xs font-semibold uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Product image */}
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                    <JewelryPlaceholder
                      bg={item.product.images[0].bg}
                      label={item.product.images[0].label}
                      ratio="1x1"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-widest text-ink leading-tight mb-1">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-ink-muted mb-3">{item.variant}</p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <p className="font-sans text-sm font-semibold text-ink">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.key)}
                    className="self-start text-ink-faint hover:text-ink transition-colors mt-1"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-linen space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-ink-muted uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-2xl text-ink">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-ink-faint text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full font-sans text-sm font-semibold uppercase tracking-widest py-4 transition-all duration-300"
              style={{ backgroundColor: '#C9A96E', color: '#1A1714' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DFC08A'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
            >
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-ink-muted font-sans text-xs font-semibold uppercase tracking-widest py-3 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
