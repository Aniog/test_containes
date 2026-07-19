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
        className={`fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-ivory flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-light/30">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-espresso" />
            <span className="font-cormorant text-lg font-medium tracking-wide text-espresso">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-inter text-xs text-stone ml-1">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone-light" />
              <p className="font-cormorant text-xl text-espresso-light">Your cart is empty</p>
              <p className="font-inter text-sm text-stone">Discover our collection of fine jewelry.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-[0.12em] text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-stone-light/20 last:border-0">
                  {/* Product thumbnail */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-cormorant text-2xl font-light text-stone select-none">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <Link
                        to={`/product/${item.product.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="font-cormorant text-sm uppercase tracking-[0.1em] text-espresso hover:text-gold transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-stone-light hover:text-espresso transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    {item.variant && (
                      <p className="font-inter text-xs text-stone mt-0.5">{item.variant}</p>
                    )}

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-stone-light/40">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-inter text-xs text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-espresso transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <span className="font-inter text-sm font-medium text-espresso">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-stone-light/30 bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-[0.1em] text-stone">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-espresso">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-stone mb-4">Shipping & taxes calculated at checkout</p>

            <button className="w-full bg-gold text-ivory font-inter text-xs uppercase tracking-[0.12em] py-4 hover:bg-gold-light transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-stone-light/50 text-espresso-light font-inter text-xs uppercase tracking-[0.12em] py-3 hover:border-espresso transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
