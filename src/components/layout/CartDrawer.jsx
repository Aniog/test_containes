import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

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
        className={`fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-parchment flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} className="text-gold" />
            <span className="font-cormorant text-lg font-medium tracking-wider">
              Your Cart
              {totalItems > 0 && (
                <span className="font-manrope text-sm text-ink-muted ml-2">({totalItems})</span>
              )}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink-muted hover:text-obsidian transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-sand" />
              <p className="font-cormorant text-xl text-ink-muted">Your cart is empty</p>
              <p className="font-manrope text-xs text-ink-muted/70">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs tracking-widest uppercase text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-obsidian transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-sand/60">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-sand/50 to-linen flex items-center justify-center">
                      <span className="font-cormorant text-xs text-ink-muted/50 text-center px-1">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-wider text-obsidian leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-manrope text-xs text-ink-muted mt-0.5">{item.variant}</p>
                    <p className="font-manrope text-sm font-medium text-obsidian mt-1">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border border-sand">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 text-ink-muted hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-manrope text-xs w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 text-ink-muted hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="font-manrope text-xs text-ink-muted/60 hover:text-obsidian transition-colors underline underline-offset-2"
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
          <div className="px-6 py-5 border-t border-sand bg-linen/50">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs tracking-widest uppercase text-ink-muted">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-ink-muted/70 mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-cream font-manrope text-xs tracking-widest uppercase py-4 hover:bg-charcoal transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-sand text-ink-muted font-manrope text-xs tracking-widest uppercase py-3 hover:border-obsidian hover:text-obsidian transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
