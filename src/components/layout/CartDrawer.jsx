import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQty, totalPrice, totalItems, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-velvet/40 z-50 fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col slide-in-right shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-blush">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-champagne" />
            <span className="font-serif text-lg font-light tracking-wide text-velvet">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-stone font-sans text-xs">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-velvet transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-blush" />
              <p className="font-serif text-xl font-light text-stone">Your cart is empty</p>
              <p className="font-sans text-xs text-stone/70">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-widest text-champagne hover:text-gold transition-colors underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-blush last:border-0">
                  {/* Product image thumbnail */}
                  <div className="w-20 h-20 bg-cream rounded-sm flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-2xl font-light text-champagne select-none">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="product-name text-xs text-velvet leading-tight mb-1 truncate">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-stone capitalize mb-3">
                      {item.variant} tone
                    </p>

                    <div className="flex items-center justify-between">
                      {/* Qty controls */}
                      <div className="flex items-center gap-2 border border-blush">
                        <button
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-sans text-xs w-5 text-center text-velvet">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="font-sans text-sm font-semibold text-velvet">
                        ${(item.product.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone/50 hover:text-stone transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-blush bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-serif text-xl font-light text-velvet">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone/70 mb-5">Shipping & taxes calculated at checkout</p>

            <button className="w-full bg-champagne hover:bg-gold text-velvet font-sans text-xs uppercase tracking-widest font-semibold py-4 transition-colors duration-300">
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-3 font-sans text-xs uppercase tracking-widest text-stone hover:text-champagne transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
