import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, subtotal, itemCount } = useCart();

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
        className={`fixed inset-0 z-50 bg-velvet/60 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-ivory flex flex-col shadow-[-8px_0_40px_rgba(26,20,16,0.15)] transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-parchment">
          <div>
            <h2 className="font-serif text-xl text-velvet tracking-wide">Your Cart</h2>
            <p className="text-xs text-mink font-sans mt-0.5 uppercase tracking-widest">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </p>
          </div>
          <button
            onClick={closeDrawer}
            aria-label="Close cart"
            className="text-mink hover:text-velvet transition-colors p-1"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto scrollbar-thin px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-parchment" />
              <p className="font-serif text-lg text-velvet">Your cart is empty</p>
              <p className="text-sm text-mink font-sans">Discover our curated collection</p>
              <button
                onClick={closeDrawer}
                className="mt-2 text-xs uppercase tracking-widest font-sans font-medium text-velvet border border-velvet px-6 py-3 hover:bg-velvet hover:text-ivory transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product thumbnail */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden border border-parchment flex items-center justify-center">
                    <span className="font-serif text-2xl text-mink/40 select-none">
                      {item.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p
                          id={`cart-item-${item.id}-name`}
                          className="font-serif text-sm uppercase tracking-widest2 text-velvet leading-tight"
                        >
                          {item.name}
                        </p>
                        <p className="text-xs text-mink font-sans mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        aria-label="Remove item"
                        className="text-parchment hover:text-velvet transition-colors flex-shrink-0"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-parchment">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-mink hover:text-velvet transition-colors"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-xs font-sans text-velvet">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-mink hover:text-velvet transition-colors"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <p className="font-sans text-sm font-medium text-velvet">
                        ${(item.price * item.quantity).toFixed(2)}
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
          <div className="border-t border-parchment px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest font-sans text-mink">Subtotal</span>
              <span className="font-serif text-lg text-velvet">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-mink font-sans text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velvet text-ivory text-xs uppercase tracking-widest font-sans font-medium py-4 hover:bg-charcoal transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full border border-parchment text-charcoal text-xs uppercase tracking-widest font-sans font-medium py-3 hover:border-velvet transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
