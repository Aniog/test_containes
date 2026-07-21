import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../data/products';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    setQuantity,
    totalPrice,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-velmora-ivory z-50 shadow-lux-lg transform transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-velmora-charcoal/10">
          <h2 className="font-serif text-lg font-semibold text-velmora-charcoal tracking-[0.08em]">
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="bg-transparent border-none p-1 text-velmora-charcoal hover:text-velmora-gold transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6" style={{ height: 'calc(100vh - 180px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-velmora-charcoal/60 mb-2">
                Your cart is empty
              </p>
              <p className="text-sm text-velmora-muted">
                Discover pieces crafted to be treasured.
              </p>
            </div>
          ) : (
            <ul className="space-y-5 list-none p-0 m-0">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="flex gap-4 bg-white rounded-lg p-4 shadow-lux"
                >
                  {/* Image placeholder */}
                  <div className="w-20 h-20 rounded-md bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-cream to-velmora-gold/10 flex items-center justify-center">
                      <span className="text-velmora-gold/40 text-xs font-serif">V</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-velmora-charcoal uppercase-wide truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-velmora-charcoal mt-1">
                      {formatPrice(item.price)}
                    </p>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => setQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 rounded-full border border-velmora-charcoal/15 flex items-center justify-center bg-white text-velmora-charcoal hover:border-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="text-sm font-medium w-5 text-center text-velmora-charcoal">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 rounded-full border border-velmora-charcoal/15 flex items-center justify-center bg-white text-velmora-charcoal hover:border-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-velmora-muted hover:text-red-500 transition-colors bg-transparent border-none p-0"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
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
          <div className="absolute bottom-0 left-0 right-0 px-6 py-5 border-t border-velmora-charcoal/10 bg-velmora-ivory">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-muted">Subtotal</span>
              <span className="text-lg font-medium text-velmora-charcoal">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <button className="w-full h-12 bg-velmora-gold hover:bg-velmora-gold-light text-white font-medium text-sm tracking-[0.1em] uppercase rounded transition-colors border-none">
              Proceed to Checkout
            </button>
            <p className="text-[11px] text-velmora-muted text-center mt-3">
              Free worldwide shipping · 30-day returns
            </p>
          </div>
        )}
      </div>
    </>
  );
}
