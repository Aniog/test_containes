import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, subtotal } = useCart();

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
          className="fixed inset-0 bg-obsidian/40 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-350 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="font-inter text-xs tracking-widest uppercase text-ink">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-stone" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-linen" />
              <p className="font-cormorant text-2xl text-stone">Your cart is empty</p>
              <p className="font-inter text-xs text-dust tracking-wide">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase font-inter hover:bg-gold hover:text-cream transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-parchment flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-champagne to-linen flex items-center justify-center">
                      <span className="text-gold text-xs font-cormorant italic">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-cormorant text-sm uppercase tracking-widest text-ink leading-tight">
                          {item.product.name}
                        </p>
                        {item.variant && (
                          <p className="font-inter text-xs text-stone mt-0.5">{item.variant}</p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-dust hover:text-stone transition-colors ml-2 flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-linen transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 text-stone" />
                        </button>
                        <span className="w-8 text-center font-inter text-xs text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-linen transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-stone" />
                        </button>
                      </div>

                      <span className="font-cormorant text-base text-ink">
                        {formatPrice(item.product.price * item.quantity)}
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
          <div className="px-6 py-6 border-t border-linen space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs tracking-widest uppercase text-stone">Subtotal</span>
              <span className="font-cormorant text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="font-inter text-xs text-dust text-center">Shipping & taxes calculated at checkout</p>
            <Link
              to="/checkout"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-gold text-cream text-center py-4 font-inter text-xs tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="block w-full text-center font-inter text-xs tracking-widest uppercase text-stone hover:text-gold transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
