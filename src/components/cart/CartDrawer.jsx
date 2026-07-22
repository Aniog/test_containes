import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-taupe/30">
          <h2 className="font-serif text-xl tracking-wide">
            YOUR BAG ({itemCount})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <ShoppingBag size={48} className="text-velmora-taupe mb-4" />
              <p className="font-serif text-xl text-velmora-black mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-warm-gray mb-6">Discover pieces you'll love</p>
              <Link
                to="/shop"
                className="btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-velmora-cream-dark flex-shrink-0 flex items-center justify-center">
                    <ShoppingBag size={20} className="text-velmora-taupe/50" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-wider text-velmora-black truncate">
                      {item.shortName}
                    </h3>
                    <p className="text-xs text-velmora-warm-gray mt-1">{item.variant}</p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-taupe/50 hover:border-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-velmora-taupe/50 hover:border-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-velmora-warm-gray hover:text-velmora-gold transition-colors underline"
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
          <div className="border-t border-velmora-taupe/30 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-velmora-warm-gray">Subtotal</span>
              <span className="font-serif text-xl">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-warm-gray">Shipping & taxes calculated at checkout</p>
            <button className="w-full btn-primary">
              Checkout
            </button>
            <button
              className="w-full btn-outline"
              onClick={() => setIsOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
