import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, subtotal, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-ink/40 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-mist/60">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-charcoal" />
            <span className="font-inter text-xs uppercase tracking-widest text-charcoal">
              Your Cart
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-mist" />
              <p className="font-cormorant text-xl text-charcoal">Your cart is empty</p>
              <p className="font-inter text-xs text-taupe">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-widest text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-white transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-mist/40">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full shimmer" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-widest text-charcoal leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-inter text-xs text-taupe mt-0.5">{item.variant}</p>
                    <p className="font-inter text-sm font-medium text-charcoal mt-1">
                      {formatPrice(item.product.price)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-mist flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-inter text-xs text-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-mist flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-mist hover:text-taupe transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-mist/60 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs uppercase tracking-widest text-taupe">Subtotal</span>
              <span className="font-cormorant text-xl text-charcoal">{formatPrice(subtotal)}</span>
            </div>
            <p className="font-inter text-xs text-taupe">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-white font-inter text-xs uppercase tracking-widest py-4 hover:bg-gold-dark transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-mist text-charcoal font-inter text-xs uppercase tracking-widest py-3 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
