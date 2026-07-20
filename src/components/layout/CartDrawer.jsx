import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart();

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
        className={`fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-ivory shadow-drawer flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-ink" />
            <span className="font-serif text-lg font-light tracking-wide text-ink">Your Cart</span>
            {items.length > 0 && (
              <span className="font-sans text-xs text-muted ml-1">({items.length})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-ink transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-serif text-xl font-light text-ink">Your cart is empty</p>
              <p className="font-sans text-sm text-muted">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Product image */}
                  <div className="w-20 h-20 flex-shrink-0 bg-cream overflow-hidden">
                    <div className="w-full h-full bg-cream flex items-center justify-center">
                      <span className="font-sans text-[10px] text-subtle text-center px-1 leading-tight">
                        {item.product.name.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-widest text-ink leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-muted mt-1 capitalize">{item.variant} tone</p>
                    <p className="font-sans text-sm font-medium text-ink mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-linen text-muted hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm text-ink w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-linen text-muted hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto font-sans text-xs text-subtle hover:text-ink transition-colors underline underline-offset-2"
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
          <div className="px-6 py-6 border-t border-linen bg-ivory">
            <div className="flex items-center justify-between mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-muted">Subtotal</span>
              <span className="font-serif text-xl font-light text-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-subtle mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-ivory font-sans text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-colors duration-300">
              Checkout
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 font-sans text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
