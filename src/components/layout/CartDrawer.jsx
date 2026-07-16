import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  // Lock body scroll when open
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
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/50 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-charcoal" />
            <span className="font-inter text-xs uppercase tracking-[0.14em] text-charcoal">
              Your Bag {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone-warm hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-stone-light" />
              <p className="font-cormorant text-xl text-charcoal">Your bag is empty</p>
              <p className="font-inter text-xs text-stone-warm">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-[0.14em] text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-obsidian transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-divider last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-parchment to-divider flex items-center justify-center">
                      <span className="font-cormorant text-xs text-stone-light italic">
                        {item.product.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={() => setIsOpen(false)}
                      className="font-cormorant text-sm uppercase tracking-[0.1em] text-charcoal hover:text-gold transition-colors block truncate"
                    >
                      {item.product.name}
                    </Link>
                    <p className="font-inter text-[11px] text-stone-light mt-0.5">{item.variant}</p>
                    <p className="font-inter text-sm font-medium text-charcoal mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-divider flex items-center justify-center text-stone-warm hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-inter text-xs text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-divider flex items-center justify-center text-stone-warm hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto font-inter text-[10px] uppercase tracking-wide text-stone-light hover:text-charcoal transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-divider space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-inter text-xs uppercase tracking-[0.12em] text-stone-warm">Subtotal</span>
              <span className="font-cormorant text-xl text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-[10px] text-stone-light">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-obsidian font-inter text-xs uppercase tracking-[0.14em] py-4 flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors">
              Checkout
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full font-inter text-xs uppercase tracking-[0.12em] text-stone-warm hover:text-charcoal transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
