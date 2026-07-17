import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, toggleDrawer, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => toggleDrawer(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-[70] bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-warm">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button
            onClick={() => toggleDrawer(false)}
            className="p-2 hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-velmora-stone">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-40" />
              <p className="font-serif text-lg">Your bag is empty</p>
              <p className="text-sm mt-1">Discover our latest collection</p>
              <Link
                to="/shop"
                onClick={() => toggleDrawer(false)}
                className="mt-6 px-8 py-3 bg-velmora-base text-white text-sm tracking-widest uppercase hover:bg-velmora-gold transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-surfaceAlt flex-shrink-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-velmora-gold/20" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-wide uppercase truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-velmora-stone mt-0.5 capitalize">
                      {item.variant}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-velmora-warm">
                        <button
                          className="px-2 py-1 hover:bg-velmora-cream transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-sm min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="px-2 py-1 hover:bg-velmora-cream transition-colors"
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-velmora-stone hover:text-velmora-base transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-warm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-stone">Subtotal</span>
              <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-stone mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-velmora-base text-white text-sm tracking-widest uppercase hover:bg-velmora-gold transition-colors">
              Checkout
            </button>
            <button
              onClick={() => toggleDrawer(false)}
              className="w-full py-3 mt-2 text-sm text-velmora-stone hover:text-velmora-base transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
