import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[60] bg-black/50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] z-[70] bg-brand-ivory shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-brand-cream-dark">
          <h2 className="font-serif text-xl tracking-[0.1em] text-brand-charcoal">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="text-brand-charcoal hover:text-brand-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <ShoppingBag size={48} className="text-brand-taupe/40 mb-4" strokeWidth={1} />
              <p className="font-serif text-xl text-brand-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-brand-warm-gray mb-6">
                Explore our collection and find something you love.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="px-8 py-3 bg-brand-charcoal text-brand-ivory text-sm tracking-[0.1em] uppercase hover:bg-brand-charcoal/90 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="p-5 space-y-5">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 pb-5 border-b border-brand-cream-dark last:border-0">
                  {/* Product image */}
                  <div className="w-20 h-20 bg-brand-cream-dark flex-shrink-0 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="product-name-text text-xs text-brand-charcoal leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-brand-warm-gray mt-1">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-brand-taupe hover:text-brand-charcoal transition-colors ml-2"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity controls */}
                      <div className="flex items-center border border-brand-cream-dark">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 text-brand-charcoal hover:bg-brand-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm text-brand-charcoal font-sans">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 text-brand-charcoal hover:bg-brand-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <p className="text-sm text-brand-charcoal font-sans">
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
          <div className="border-t border-brand-cream-dark p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-brand-warm-gray uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-lg text-brand-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-brand-warm-gray">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3.5 bg-brand-charcoal text-brand-ivory text-sm tracking-[0.15em] uppercase font-sans hover:bg-brand-charcoal/90 transition-colors">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={closeCart}
              className="block text-center text-sm text-brand-charcoal underline underline-offset-4 decoration-brand-taupe/40 hover:decoration-brand-gold transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
