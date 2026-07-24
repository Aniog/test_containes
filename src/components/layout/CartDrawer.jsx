import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } =
    useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-ivory z-50 shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border-light">
            <h2 className="font-serif text-xl tracking-[0.1em] text-charcoal">
              Your Cart ({totalItems})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-charcoal" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-warm-gray/40 mb-4" />
                <p className="text-warm-gray font-serif text-lg">Your cart is empty</p>
                <p className="text-warm-gray text-sm mt-2">Add some treasures to get started</p>
                <Link
                  to="/collection"
                  onClick={closeCart}
                  className="mt-6 px-8 py-3 bg-gold text-white text-sm tracking-[0.1em] uppercase hover:bg-gold-hover transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-5 border-b border-border-light last:border-0"
                  >
                    <div className="w-20 h-20 bg-cream flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-[0.1em] text-charcoal uppercase truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-warm-gray mt-0.5">{item.variant}</p>
                      <p className="text-sm text-charcoal font-medium mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-1 border border-border-light hover:bg-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-1 border border-border-light hover:bg-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="ml-auto text-xs text-warm-gray hover:text-charcoal transition-colors"
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
            <div className="border-t border-border-light px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal/70">Subtotal</span>
                <span className="text-lg font-serif text-charcoal">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-warm-gray">
                Free shipping on all orders
              </p>
              <button className="w-full py-3.5 bg-charcoal text-white text-sm tracking-[0.1em] uppercase hover:opacity-90 transition-opacity">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full py-3 text-sm tracking-[0.05em] text-charcoal/70 hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}