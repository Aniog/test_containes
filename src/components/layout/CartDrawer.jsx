import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

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
        className={`fixed inset-0 z-50 bg-velmora-obsidian/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-velmora-cream flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-parchment">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian">
              Your Cart ({items.length})
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-velmora-mist hover:text-velmora-obsidian transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-whisper" />
              <p className="font-cormorant text-xl text-velmora-mist">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-whisper">Discover our collection and find something you love.</p>
              <button
                onClick={closeCart}
                className="mt-2 font-manrope text-xs uppercase tracking-widest text-velmora-gold border border-velmora-gold px-6 py-2.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-200"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-velmora-parchment last:border-0">
                  {/* Product image */}
                  <div className="w-20 h-20 flex-shrink-0 bg-velmora-parchment overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-parchment to-velmora-linen flex items-center justify-center">
                      <span className="font-cormorant text-2xl text-velmora-gold/40 select-none">V</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm font-medium uppercase tracking-wider text-velmora-obsidian leading-tight">
                      {item.name}
                    </p>
                    <p className="font-manrope text-xs text-velmora-mist mt-0.5">{item.variant}</p>
                    <p className="font-manrope text-sm font-medium text-velmora-obsidian mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="w-6 h-6 flex items-center justify-center border border-velmora-parchment text-velmora-mist hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Minus size={10} strokeWidth={2} />
                      </button>
                      <span className="font-manrope text-xs text-velmora-obsidian w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="w-6 h-6 flex items-center justify-center border border-velmora-parchment text-velmora-mist hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Plus size={10} strokeWidth={2} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto font-manrope text-[10px] uppercase tracking-widest text-velmora-whisper hover:text-velmora-mist transition-colors"
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
          <div className="px-6 py-5 border-t border-velmora-parchment bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-mist">Subtotal</span>
              <span className="font-cormorant text-xl text-velmora-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-[10px] text-velmora-whisper mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-obsidian text-velmora-cream font-manrope text-xs uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-velmora-charcoal transition-colors duration-200">
              Proceed to Checkout
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 border border-velmora-parchment text-velmora-mist font-manrope text-xs uppercase tracking-widest py-3 hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-200"
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
