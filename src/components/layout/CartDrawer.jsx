import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

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
      <div
        className={`fixed inset-0 z-50 bg-obsidian/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-blush">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-charcoal" />
            <span className="font-cormorant text-lg font-medium text-charcoal tracking-wide">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-xs font-manrope text-stone ml-1">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-charcoal transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-blush" />
              <p className="font-cormorant text-xl text-stone font-light">Your cart is empty</p>
              <p className="text-xs font-manrope text-stone/70">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs font-manrope uppercase tracking-widest text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-obsidian transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-blush last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-blush/50 flex-shrink-0 flex items-center justify-center">
                    <ShoppingBag size={20} className="text-mink/40" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-manrope uppercase tracking-widest text-charcoal font-medium leading-tight mb-1">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="text-xs font-manrope text-stone mb-2">{item.variant}</p>
                    )}
                    <p className="text-sm font-manrope font-medium text-charcoal mb-3">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-blush">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-manrope text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-xs font-manrope text-stone/60 hover:text-charcoal transition-colors underline underline-offset-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="text-sm font-manrope font-medium text-charcoal flex-shrink-0">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-blush bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-manrope uppercase tracking-widest text-stone">Subtotal</span>
              <span className="text-lg font-cormorant font-medium text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs font-manrope text-stone/60 mb-5">Shipping & taxes calculated at checkout</p>

            <button className="w-full bg-gold text-obsidian py-4 text-xs font-manrope uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-blush text-stone py-3 text-xs font-manrope uppercase tracking-widest hover:border-charcoal hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
