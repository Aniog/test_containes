import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-warmwhite flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold-muted">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-inter text-xs uppercase tracking-[0.14em] text-charcoal">
              Your Cart
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone-warm hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-gold-muted" />
              <p className="font-cormorant text-2xl font-light text-charcoal">Your cart is empty</p>
              <p className="font-inter text-xs text-stone-warm">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-inter text-[11px] uppercase tracking-[0.14em] text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-warmwhite transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-gold-muted/50">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-gold-muted/30 flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gold-muted/40 flex items-center justify-center">
                      <span className="font-cormorant text-xs text-stone-warm uppercase tracking-wider">
                        {item.product.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="font-cormorant text-sm uppercase tracking-[0.1em] text-ink leading-tight"
                    >
                      {item.product.name}
                    </p>
                    <p className="font-inter text-[11px] text-stone-warm mt-0.5 capitalize">
                      {item.variant} tone
                    </p>
                    <p className="font-inter text-sm text-charcoal mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-stone-warm hover:text-ink transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} strokeWidth={1.5} />
                      </button>
                      <span className="font-inter text-xs text-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-stone-warm hover:text-ink transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone-light hover:text-ink transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-gold-muted space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs uppercase tracking-[0.12em] text-stone-warm">
                Subtotal
              </span>
              <span className="font-cormorant text-xl text-ink">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-inter text-[10px] text-stone-warm text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-warmwhite font-inter text-[11px] uppercase tracking-[0.14em] py-4 hover:bg-gold-light transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-gold-muted text-charcoal font-inter text-[11px] uppercase tracking-[0.14em] py-3 hover:border-gold hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
