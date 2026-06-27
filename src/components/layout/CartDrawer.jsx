import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal/40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-cream flex flex-col transition-transform duration-350 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ boxShadow: '-4px 0 24px rgba(28,25,23,0.12)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-charcoal" />
            <span
              className="text-xs tracking-widest uppercase font-medium text-charcoal"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Your Cart
              {totalItems > 0 && (
                <span className="ml-2 text-taupe">({totalItems})</span>
              )}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-warm-gray" />
              <p
                className="text-sm text-taupe"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Your cart is empty
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs tracking-widest uppercase border border-charcoal text-charcoal px-6 py-2.5 hover:bg-charcoal hover:text-cream transition-all duration-200"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory flex-shrink-0 overflow-hidden">
                    <img
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E`}
                      data-strk-img-id={`cart-${item.key}-img`}
                      data-strk-img={`[${item.product.descId}] [${item.product.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="160"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p
                          className="text-xs tracking-widest uppercase font-medium text-charcoal leading-tight"
                          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.8rem' }}
                        >
                          {item.product.name}
                        </p>
                        {item.variant && (
                          <p className="text-xs text-taupe mt-0.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
                            {item.variant}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-warm-gray hover:text-charcoal transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-0">
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span
                          className="w-8 text-center text-sm text-charcoal border-t border-b border-border h-8 flex items-center justify-center"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <span
                        className="text-sm font-medium text-charcoal"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        ${(item.product.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span
                className="text-xs tracking-widest uppercase text-taupe"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Subtotal
              </span>
              <span
                className="text-base font-medium text-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                ${subtotal.toFixed(0)}
              </span>
            </div>
            <p className="text-xs text-taupe text-center" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Shipping & taxes calculated at checkout
            </p>
            <button
              className="w-full bg-charcoal text-cream text-xs tracking-widest uppercase py-4 hover:bg-espresso transition-colors duration-200"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-border text-charcoal text-xs tracking-widest uppercase py-3 hover:border-charcoal transition-colors duration-200"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
