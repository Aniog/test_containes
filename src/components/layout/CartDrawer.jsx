import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] transition-opacity animate-fade-in"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-velmora-cream z-[70] shadow-2xl transform transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/50">
            <h2 className="font-serif text-xl tracking-wider text-velmora-ink">
              YOUR BAG ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="text-velmora-charcoal hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={22} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-velmora-sand/60 mb-4" />
                <p className="text-velmora-smoke/60 text-sm">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="mt-6 btn-outline text-xs"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-velmora-sand/30">
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 bg-velmora-sand/40 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-xs tracking-[0.15em] text-velmora-ink uppercase truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velmora-smoke/60 mt-1">{item.variant}</p>
                      <p className="text-sm text-velmora-gold mt-1 font-medium">${item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-sand/50 text-velmora-charcoal hover:border-velmora-gold transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm text-velmora-charcoal w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-sand/50 text-velmora-charcoal hover:border-velmora-gold transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-xs text-velmora-smoke/40 hover:text-red-500 transition-colors underline"
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

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-velmora-sand/50 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velmora-smoke">Subtotal</span>
                <span className="font-medium text-velmora-ink">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-smoke/60">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-sm">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
