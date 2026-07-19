import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, subtotal, itemCount } =
    useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[440px] bg-cream shadow-2xl transition-transform duration-400 ease-out flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl tracking-wide text-espresso">
            YOUR BAG ({itemCount})
          </h2>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-espresso" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-taupe text-sm mb-4">Your bag is empty.</p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="text-sm text-gold hover:text-gold-deep underline underline-offset-4 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-4 border-b border-border"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 rounded-lg bg-[#E8E2D9] flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-taupe text-xs text-center px-1">
                        {item.name}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-serif text-xs tracking-wider text-espresso uppercase">
                          {item.name}
                        </h3>
                        <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="p-1 text-taupe hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-1.5 hover:bg-gold/10 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 text-espresso" />
                        </button>
                        <span className="px-2 text-xs text-espresso min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-1.5 hover:bg-gold/10 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-espresso" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-espresso">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-taupe">Subtotal</span>
              <span className="text-lg font-serif text-espresso">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-taupe mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold hover:bg-gold-deep text-white text-sm font-medium tracking-wider uppercase py-3 rounded transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full mt-3 text-xs text-taupe hover:text-espresso underline underline-offset-4 transition-colors text-center"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}