import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag, Gem } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col animate-slideInRight shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-charcoal" />
            <span className="font-inter text-xs font-medium tracking-[0.15em] uppercase text-charcoal">
              Your Cart ({items.length})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-warmgray hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-cormorant text-2xl font-light text-charcoal">Your cart is empty</p>
              <p className="font-inter text-xs text-warmgray">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-charcoal text-white font-inter text-xs tracking-[0.15em] uppercase px-8 py-3 hover:bg-gold transition-colors duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-linen last:border-0">
                  {/* Product thumbnail — static placeholder (no dynamic strk-img in cart) */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden flex items-center justify-center border border-linen">
                    <Gem size={20} strokeWidth={1} className="text-gold/60" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-inter text-xs font-medium tracking-[0.1em] uppercase text-charcoal truncate">
                      {item.product.name}
                    </p>
                    <p className="font-inter text-xs text-warmgray mt-0.5">{item.variant}</p>
                    <p className="font-inter text-sm font-medium text-charcoal mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity + Remove */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-warmgray hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={10} strokeWidth={2} />
                        </button>
                        <span className="w-7 text-center font-inter text-xs text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-warmgray hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={10} strokeWidth={2} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="font-inter text-xs text-warmgray hover:text-charcoal underline underline-offset-2 transition-colors"
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
          <div className="px-6 py-5 border-t border-linen bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs text-warmgray tracking-wide">Subtotal</span>
              <span className="font-inter text-base font-medium text-charcoal">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="font-inter text-xs text-warmgray mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-charcoal text-white font-inter text-xs tracking-[0.15em] uppercase py-4 hover:bg-gold transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-linen text-charcoal font-inter text-xs tracking-[0.12em] uppercase py-3 hover:border-charcoal transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
