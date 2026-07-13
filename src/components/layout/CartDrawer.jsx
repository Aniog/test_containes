import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

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
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-espresso" />
            <span className="font-sans font-medium uppercase tracking-widest text-xs text-espresso">
              Your Bag ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-linen" />
              <p className="font-serif text-xl text-espresso">Your bag is empty</p>
              <p className="font-sans text-sm text-taupe">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs font-medium uppercase tracking-widest text-gold border-b border-gold pb-0.5 hover:text-espresso hover:border-espresso transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Product image — linen swatch (cart items are runtime state, no stock image slot) */}
                  <div className="w-20 h-20 bg-linen rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-xs text-taupe/60 uppercase tracking-widest">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif font-medium uppercase tracking-wider text-sm text-espresso leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-taupe mt-0.5">{item.variant} Tone</p>
                    <p className="font-sans text-sm font-medium text-espresso mt-1">
                      ${item.product.price}
                    </p>
                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-linen text-taupe hover:border-espresso hover:text-espresso transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-sm text-espresso w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-linen text-taupe hover:border-espresso hover:text-espresso transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-taupe hover:text-espresso transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-linen bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-widest text-taupe">Subtotal</span>
              <span className="font-serif text-xl text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-taupe mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-espresso text-ivory font-sans text-xs font-medium uppercase tracking-widest py-4 hover:bg-gold hover:text-espresso transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-linen text-taupe font-sans text-xs font-medium uppercase tracking-widest py-3 hover:border-espresso hover:text-espresso transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
