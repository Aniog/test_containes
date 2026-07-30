import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cartItems, cartCount, cartTotal, isDrawerOpen, toggleDrawer, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') toggleDrawer(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [toggleDrawer]);

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-velmora-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => toggleDrawer(false)}
      />

      {/* Drawer panel */}
      <div
        className="absolute top-0 right-0 h-full w-full max-w-[420px] bg-velmora-ivory shadow-drawer animate-slide-in-right flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/30">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-charcoal" />
            <h2 className="font-serif text-heading-3 text-velmora-black">Your Bag</h2>
            {cartCount > 0 && (
              <span className="text-body-sm text-velmora-warm-gray">({cartCount})</span>
            )}
          </div>
          <button
            onClick={() => toggleDrawer(false)}
            className="p-2 text-velmora-warm-gray hover:text-velmora-black transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto cart-scrollbar px-6 py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} strokeWidth={1} className="text-velmora-sand mb-4" />
              <p className="font-serif text-heading-3 text-velmora-charcoal mb-2">Your bag is empty</p>
              <p className="text-body-sm text-velmora-warm-gray mb-6">Discover pieces you'll treasure forever.</p>
              <Link
                to="/shop"
                onClick={() => toggleDrawer(false)}
                className="inline-block px-8 py-3 bg-velmora-gold text-white text-body-sm font-medium tracking-[0.06em] uppercase rounded-pill hover:bg-velmora-gold-dark transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-velmora-sand/20 last:border-0">
                  {/* Product thumbnail — styled initial */}
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-velmora-cream to-velmora-rose/40 overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-2xl text-velmora-gold/70 font-medium">
                      {item.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={() => toggleDrawer(false)}
                      className="font-sans text-body font-medium text-velmora-black hover:text-velmora-gold transition-colors tracking-[0.04em] uppercase truncate block"
                    >
                      {item.name}
                    </Link>
                    <p className="text-body-sm text-velmora-warm-gray capitalize mt-0.5">{item.variant}</p>
                    <p className="text-body font-medium text-velmora-black mt-1">${item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full border border-velmora-sand/50 text-velmora-warm-gray hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} strokeWidth={2} />
                      </button>
                      <span className="text-body-sm font-medium w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full border border-velmora-sand/50 text-velmora-warm-gray hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} strokeWidth={2} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-body-sm text-velmora-warm-gray hover:text-red-500 transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-velmora-sand/30 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-body font-medium text-velmora-warm-gray uppercase tracking-[0.06em]">Subtotal</span>
              <span className="font-serif text-heading-3 text-velmora-black">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-body-sm text-velmora-warm-gray">Shipping & taxes calculated at checkout.</p>
            <button className="w-full py-3.5 bg-velmora-gold text-white text-body-sm font-medium tracking-[0.08em] uppercase rounded-pill hover:bg-velmora-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => toggleDrawer(false)}
              className="w-full py-3 text-body-sm text-velmora-warm-gray hover:text-velmora-black transition-colors underline underline-offset-4"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
