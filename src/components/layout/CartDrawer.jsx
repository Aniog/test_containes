import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[70] bg-charcoal/40 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md z-[80] bg-cream flex flex-col transition-transform duration-400 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-charcoal" />
            <span className="font-sans text-xs tracking-widest uppercase text-charcoal">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-charcoal hover:text-gold transition-colors duration-300">
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-divider" />
              <p className="font-serif text-xl font-light text-charcoal">Your cart is empty</p>
              <p className="font-sans text-xs text-charcoal-muted">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-sans text-xs tracking-widest uppercase text-gold underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-divider">
              {items.map(item => (
                <div key={item.key} className="py-5 flex gap-4">
                  <div className="w-20 h-20 bg-cream-200 flex-shrink-0 overflow-hidden">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      data-strk-img-id={`cart-${item.key}-img`}
                      data-strk-img={`[${item.product.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-widest uppercase text-charcoal truncate">{item.product.name}</p>
                    <p className="font-sans text-xs text-charcoal-muted mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-charcoal mt-1">${item.product.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-charcoal-muted hover:text-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-xs text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-charcoal-muted hover:text-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-charcoal-muted hover:text-charcoal transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-divider px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs tracking-widest uppercase text-charcoal-muted">Subtotal</span>
              <span className="font-serif text-xl font-light text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-charcoal-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-charcoal text-cream font-sans text-xs tracking-widest uppercase py-4 hover:bg-charcoal-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-divider text-charcoal font-sans text-xs tracking-widest uppercase py-3 hover:border-charcoal transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
