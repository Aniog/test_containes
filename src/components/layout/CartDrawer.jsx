import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-richBlack/50 transition-opacity duration-400 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-ivory flex flex-col
                    transition-transform duration-400 ease-expo-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-warmGray-200">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-charcoal" />
            <h2 className="font-serif text-lg font-medium text-charcoal uppercase tracking-extra-wide">
              Your Bag
            </h2>
            {itemCount > 0 && (
              <span className="text-xs text-warmGray-500 font-sans ml-1">
                ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="p-1 text-warmGray-500 hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-warmGray-100 flex items-center justify-center mb-4">
              <ShoppingBag size={28} className="text-warmGray-400" />
            </div>
            <p className="font-serif text-xl text-charcoal mb-2">Your bag is empty</p>
            <p className="font-sans text-sm text-warmGray-500 mb-8">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/collection"
              onClick={closeCart}
              className="btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-5">
                {items.map((item) => (
                  <li
                    key={item.uniqueId}
                    className="flex gap-4"
                  >
                    {/* Image */}
                    <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                      <img
                        src={item.images && item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-xs text-charcoal leading-snug">
                        {item.name}
                      </h3>
                      {item.variant && item.variant !== 'gold' && (
                        <p className="mt-0.5 text-xs text-warmGray-500 capitalize font-sans">
                          {item.variant} tone
                        </p>
                      )}
                      <p className="mt-1 text-sm text-charcoal font-medium font-sans">
                        ${item.price}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-warmGray-200">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.uniqueId, item.quantity - 1)
                            }
                            className="w-7 h-7 flex items-center justify-center text-warmGray-500 hover:text-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center font-sans text-sm text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.uniqueId, item.quantity + 1)
                            }
                            className="w-7 h-7 flex items-center justify-center text-warmGray-500 hover:text-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.uniqueId)}
                          className="text-xs text-warmGray-400 hover:text-red-500 underline transition-colors font-sans"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-warmGray-200 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-warmGray-600">Subtotal</span>
                <span className="font-serif text-lg text-charcoal">${total.toFixed(2)}</span>
              </div>
              <p className="font-sans text-xs text-warmGray-500">
                Shipping & taxes calculated at checkout
              </p>
              <button type="button" className="btn-gold w-full">
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="btn-ghost w-full text-center"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
