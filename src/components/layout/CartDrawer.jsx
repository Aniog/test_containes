import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-ink/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-[201] bg-cream flex flex-col transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transition: 'transform 0.4s ease' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-dark">
          <p className="label-caps text-ink">Your Bag</p>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink hover:text-gold transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <p className="font-serif text-2xl text-ink/40" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Your bag is empty
              </p>
              <p className="label-caps text-muted">The hours are waiting</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-secondary mt-4"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-cream-dark flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.key}-img`}
                      data-strk-img={`[cart-item-${item.key}-name]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p
                        id={`cart-item-${item.key}-name`}
                        className="font-serif text-base text-ink"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {item.name}
                      </p>
                      {item.size && item.size !== 'One size' && (
                        <p className="label-caps text-muted mt-0.5">Size {item.size}</p>
                      )}
                      <p className="text-ink text-sm mt-1 font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                        ${item.price}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="text-ink hover:text-gold transition-colors duration-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="text-ink text-xs font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="text-ink hover:text-gold transition-colors duration-300"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.key)}
                        className="label-caps text-muted hover:text-ink transition-colors duration-300"
                        style={{ fontSize: '9px' }}
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
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-cream-dark">
            <div className="flex items-center justify-between mb-5">
              <p className="label-caps text-ink">Subtotal</p>
              <p className="font-serif text-lg text-ink" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                ${subtotal.toFixed(2)}
              </p>
            </div>
            <p className="label-caps text-muted text-center mb-4" style={{ fontSize: '9px' }}>
              Shipping calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center block"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
