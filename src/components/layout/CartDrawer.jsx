import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import strkImgConfig from '@/strk-img-config.json';

function getProductImageUrl(imgId) {
  const entry = strkImgConfig[imgId];
  if (!entry || !entry.picked) return '';
  const result = entry.results?.find((r) => r.id === entry.picked);
  return result?.url || '';
}

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-sans text-xs tracking-widest uppercase font-medium text-ink">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-ink transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-whisper" />
              <p className="font-serif text-xl text-muted font-light">Your cart is empty</p>
              <p className="font-sans text-xs text-whisper tracking-wide">
                Discover our curated collection
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase font-sans font-medium hover:bg-gold hover:text-ivory transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-stone">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <img
                      src={getProductImageUrl(item.product.imgId)}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-widest text-ink leading-tight">
                          {item.product.name}
                        </p>
                        <p className="font-sans text-xs text-muted mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-whisper hover:text-gold transition-colors duration-300 flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-stone">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-gold transition-colors duration-300"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-sans text-xs text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-muted hover:text-gold transition-colors duration-300"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <span className="font-sans text-sm font-medium text-ink">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-xs tracking-widest uppercase text-muted">Subtotal</span>
              <span className="font-serif text-xl text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-whisper">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-ivory py-4 font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-stone text-muted py-3 font-sans text-xs tracking-widest uppercase font-medium hover:border-gold hover:text-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
