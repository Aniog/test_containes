import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { cn, formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/50 z-[60] animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-[61] shadow-drawer flex flex-col animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 text-charcoal hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-warm-gray/30 mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
              <p className="font-sans text-sm text-warm-gray mb-6">
                Discover our handcrafted pieces
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 py-4 border-b border-divider/50"
                >
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream rounded overflow-hidden flex-shrink-0">
                    <div className="w-full h-full rounded bg-gradient-to-br from-gold/20 to-rose-gold/20" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-xs uppercase tracking-widest-xl text-charcoal font-medium truncate">
                      {item.name}
                    </p>
                    <p className="font-sans text-xs text-warm-gray mt-0.5">
                      {item.variant}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 border border-divider rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-charcoal hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-sans text-xs text-charcoal w-5 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-charcoal hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* Price & remove */}
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-sm text-charcoal font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-warm-gray hover:text-charcoal transition-colors text-xs underline font-sans"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-divider px-6 py-5">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-sm text-warm-gray uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-lg text-charcoal">{formatPrice(cartTotal)}</span>
            </div>
            <p className="font-sans text-xs text-warm-gray mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full btn-primary text-center">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full mt-3 font-sans text-xs uppercase tracking-wider text-warm-gray hover:text-charcoal transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
