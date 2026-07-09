import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

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
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-velmora-obsidian/40 backdrop-blur-sm animate-fadeInFast"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-velmora-ivory shadow-2xl animate-slideInRight flex flex-col"
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone/40">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} strokeWidth={1.5} className="text-velmora-charcoal" />
            <span className="font-cormorant text-xl font-light tracking-wide text-velmora-obsidian">
              Your Cart
            </span>
            {itemCount > 0 && (
              <span className="font-manrope text-xs text-velmora-mink">({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
            )}
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-velmora-charcoal hover:text-velmora-gold transition-colors duration-200"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-stone" />
              <p className="font-cormorant text-2xl font-light text-velmora-charcoal">Your cart is empty</p>
              <p className="font-manrope text-sm text-velmora-mink">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-2 inline-flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-gold hover:text-velmora-gold-dark transition-colors"
              >
                Shop Now <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-velmora-stone/30">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="py-5 flex gap-4">
                  {/* Product thumbnail — elegant monogram placeholder */}
                  <div className="w-20 h-24 bg-velmora-cream flex-shrink-0 overflow-hidden flex items-center justify-center border border-velmora-stone/30">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-cormorant text-2xl font-light text-velmora-gold leading-none">
                        {item.name.charAt(0)}
                      </span>
                      <span className="font-manrope text-[8px] uppercase tracking-widest text-velmora-stone">
                        {item.variant}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-cormorant text-base uppercase tracking-widest text-velmora-obsidian leading-tight">
                        {item.name}
                      </p>
                      <p className="font-manrope text-xs text-velmora-mink mt-0.5">{item.variant}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-velmora-stone/60">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-charcoal hover:text-velmora-gold hover:bg-velmora-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-manrope text-sm w-5 text-center text-velmora-charcoal">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-charcoal hover:text-velmora-gold hover:bg-velmora-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-manrope text-sm font-500 text-velmora-charcoal">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velmora-stone hover:text-velmora-charcoal transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-stone/40 px-6 py-5 bg-velmora-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-mink">Subtotal</span>
              <span className="font-cormorant text-xl font-light text-velmora-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-velmora-mink mb-4">Shipping & taxes calculated at checkout</p>

            <button className="w-full bg-velmora-obsidian text-velmora-ivory font-manrope text-xs uppercase tracking-widest py-4 hover:bg-velmora-charcoal transition-colors duration-300 mb-3">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full border border-velmora-stone text-velmora-charcoal font-manrope text-xs uppercase tracking-widest py-3 hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>

            <div className="mt-4 flex items-center justify-center gap-4">
              {['visa', 'mc', 'amex', 'paypal'].map((card) => (
                <div key={card} className="w-8 h-5 bg-velmora-stone/30 rounded-sm flex items-center justify-center">
                  <span className="font-manrope text-[8px] text-velmora-mink uppercase">{card}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
