import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isOpen, closeDrawer, items, totalItems, totalPrice, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream z-50 animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-gray/50">
          <h2 className="font-serif text-xl tracking-wide">
            YOUR BAG ({totalItems})
          </h2>
          <button
            onClick={closeDrawer}
            className="p-2 hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-xl text-velmora-gray-dark mb-4">Your bag is empty</p>
              <Link
                to="/collection"
                onClick={closeDrawer}
                className="btn-outline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item, index) => (
                <li key={`${item.productId}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-warm flex-shrink-0 overflow-hidden rounded-sm">
                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                      <span className="text-amber-600 text-xs font-serif">V</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-sm tracking-wider uppercase">{item.name}</h3>
                    <p className="text-xs text-velmora-gray-dark mt-1 capitalize">{item.variant} tone</p>
                    <p className="font-sans text-sm mt-2">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-velmora-gray flex items-center justify-center hover:border-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-velmora-gray flex items-center justify-center hover:border-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="ml-auto text-xs text-velmora-gray-dark hover:text-velmora-black underline"
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
          <div className="border-t border-velmora-gray/50 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm tracking-wider uppercase">Subtotal</span>
              <span className="font-serif text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-gray-dark">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={closeDrawer}
              className="w-full text-center text-sm text-velmora-gray-dark hover:text-velmora-black underline"
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
