import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, subtotal, totalItems, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/40 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-cream flex flex-col transition-transform duration-400 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-ink" />
            <span className="font-cormorant text-lg font-medium tracking-wide text-ink">
              Your Cart
              {totalItems > 0 && <span className="font-manrope text-sm text-mist ml-2">({totalItems})</span>}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-mist hover:text-ink transition-colors duration-300"
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
              <p className="font-cormorant text-xl text-mist">Your cart is empty</p>
              <p className="font-manrope text-sm text-whisper">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs font-medium tracking-[0.12em] uppercase text-gold hover:text-gold-dark transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-linen">
              {items.map(item => (
                <div key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-linen to-parchment flex items-center justify-center">
                      <span className="font-cormorant text-xs text-mist italic">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="font-cormorant text-sm font-medium tracking-widest2 uppercase text-ink hover:text-gold transition-colors duration-300 block truncate"
                    >
                      {item.product.name}
                    </Link>
                    <p className="font-manrope text-xs text-mist mt-0.5">{item.variant}</p>
                    <p className="font-manrope text-sm font-medium text-ink mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-mist hover:border-gold hover:text-gold transition-colors duration-300"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-manrope text-sm text-ink w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-linen flex items-center justify-center text-mist hover:border-gold hover:text-gold transition-colors duration-300"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto font-manrope text-xs text-whisper hover:text-mist transition-colors duration-300"
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
          <div className="px-6 py-6 border-t border-linen bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-sm text-mist">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-whisper mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-cream font-manrope text-xs font-semibold tracking-[0.12em] uppercase py-4 hover:bg-gold-light transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-linen text-ink font-manrope text-xs font-medium tracking-[0.12em] uppercase py-3.5 hover:border-ink transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
