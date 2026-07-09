import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-cream shadow-drawer flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-muted" />
            <span className="font-sans text-[11px] font-medium uppercase tracking-widest text-ink">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-muted hover:text-ink transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-serif text-xl text-muted font-light">Your cart is empty</p>
              <p className="font-sans text-xs text-whisper">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-sans text-[11px] font-medium uppercase tracking-widest text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-linen">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-linen to-parchment flex items-center justify-center">
                      <span className="font-serif text-2xl text-gold/40">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <Link
                        to={`/product/${item.product.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors leading-tight"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-whisper hover:text-ink transition-colors flex-shrink-0"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <p className="font-sans text-xs text-muted mt-1 capitalize">{item.variant} tone</p>

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
                        <span className="w-8 text-center font-sans text-xs text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink hover:bg-linen transition-colors"
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
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs uppercase tracking-widest text-muted">Subtotal</span>
              <span className="font-serif text-xl text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-[11px] text-whisper">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-parchment font-sans text-[11px] font-medium uppercase tracking-widest py-4 hover:bg-espresso transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-muted font-sans text-[11px] font-medium uppercase tracking-widest py-3 hover:border-obsidian hover:text-ink transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
