import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-obsidian/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-cream shadow-2xl shadow-obsidian/30 flex flex-col animate-slideInRight">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <h2 className="font-cormorant text-xl tracking-wide text-ink">
              Your Cart
              {totalItems > 0 && (
                <span className="font-manrope text-sm text-muted ml-2">({totalItems})</span>
              )}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-cormorant text-2xl text-ink">Your cart is empty</p>
              <p className="font-manrope text-sm text-muted">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-block bg-gold text-ivory font-manrope text-xs tracking-widest uppercase px-8 py-3 hover:bg-gold-light transition-colors duration-200"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-linen">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product thumbnail */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <ShoppingBag size={20} strokeWidth={1} className="text-gold/60" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-widest text-ink font-medium leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-manrope text-xs text-muted mt-0.5">{item.variant}</p>
                    <p className="font-manrope text-sm text-ink font-medium mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="font-manrope text-sm text-ink w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-whisper hover:text-ink transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-linen bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs text-muted uppercase tracking-widest">Subtotal</span>
              <span className="font-cormorant text-xl text-ink">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-whisper mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-ivory font-manrope text-xs tracking-widest uppercase py-4 hover:bg-gold-light transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-linen text-muted font-manrope text-xs tracking-widest uppercase py-3 hover:border-ink hover:text-ink transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
