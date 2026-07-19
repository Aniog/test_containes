import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-espresso/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-label="Shopping cart"
        className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col animate-slideInRight shadow-[-4px_0_24px_rgba(26,20,16,0.12)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-charcoal" />
            <span className="font-inter text-xs tracking-widest uppercase text-charcoal">
              Your Cart ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="p-1 text-warm-gray hover:text-charcoal transition-colors bg-transparent border-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-divider" />
              <p className="font-cormorant text-xl text-warm-gray">Your cart is empty</p>
              <p className="font-inter text-xs text-warm-gray">
                Discover our collection and find something you love.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs tracking-widest uppercase text-espresso border border-espresso px-6 py-3 hover:bg-espresso hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-divider last:border-0">
                  {/* Product thumbnail */}
                  <div className="w-20 h-20 bg-stone flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-cormorant text-2xl font-light text-gold select-none">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p
                          id={`cart-item-${item.key}-name`}
                          className="font-cormorant text-sm font-medium tracking-widest uppercase text-charcoal leading-tight"
                        >
                          {item.product.name}
                        </p>
                        <p className="font-inter text-[10px] text-warm-gray mt-0.5 tracking-wider uppercase">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-warm-gray hover:text-charcoal transition-colors bg-transparent border-0 p-0 flex-shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-divider">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-stone transition-colors bg-transparent border-0"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-inter text-xs text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-stone transition-colors bg-transparent border-0"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <p className="font-inter text-sm font-medium text-charcoal">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
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
            {/* Free shipping note */}
            <div className="flex items-center justify-center gap-2 py-2 bg-stone">
              <span className="font-inter text-[10px] tracking-widest uppercase text-warm-gray">
                ✦ Free worldwide shipping included
              </span>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="font-inter text-xs tracking-wider uppercase text-warm-gray">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-charcoal">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <p className="font-inter text-[10px] text-warm-gray text-center">
              Taxes and shipping calculated at checkout
            </p>

            <button className="w-full bg-espresso text-cream font-inter text-xs tracking-widest uppercase py-4 hover:bg-charcoal transition-colors">
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="block text-center font-inter text-xs tracking-widest uppercase text-warm-gray hover:text-charcoal transition-colors py-1"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
