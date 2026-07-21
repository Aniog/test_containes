import { X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import CartItem from './CartItem';

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-espresso/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-ivory z-50 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-silk">
          <h2 className="font-serif text-xl text-espresso">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 text-cocoa hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100%-180px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <div className="w-20 h-20 bg-champagne rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-cocoa" />
              </div>
              <h3 className="font-serif text-xl text-espresso mb-2">
                Your bag is empty
              </h3>
              <p className="text-cocoa text-sm mb-6">
                Discover our collection of demi-fine jewelry crafted to be treasured.
              </p>
              <Button onClick={closeCart} variant="primary">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6">
                {items.map((item) => (
                  <CartItem key={`${item.product.id}-${item.variant?.name}`} item={item} />
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-silk px-6 py-6 bg-cream">
                {/* Subtotal */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cocoa">Subtotal</span>
                  <span className="font-medium text-espresso">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <p className="text-xs text-cocoa mb-4">
                  Shipping and taxes calculated at checkout
                </p>

                {/* Checkout Button */}
                <Button variant="primary" size="full" className="mb-3">
                  Proceed to Checkout
                </Button>

                {/* Continue Shopping */}
                <button
                  onClick={closeCart}
                  className="w-full text-center text-sm text-cocoa hover:text-gold transition-colors py-2"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
