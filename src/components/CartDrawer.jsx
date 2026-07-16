import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-soft-black/40 backdrop-blur-sm"
          onClick={closeCart}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-gold-light/30">
            <h2 className="font-serif text-lg tracking-[0.1em] text-soft-black">
              YOUR BAG
              {items.length > 0 && (
                <span className="ml-2 text-sm text-taupe font-sans tracking-normal">
                  ({items.reduce((s, i) => s + i.quantity, 0)})
                </span>
              )}
            </h2>
            <button onClick={closeCart} className="p-2 text-taupe hover:text-soft-black transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex flex-col h-[calc(100%-8rem)] overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center flex-1 gap-4 text-taupe">
                <ShoppingBagEmpty />
                <p className="text-sm tracking-wide">Your bag is empty</p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item, idx) => (
                  <div
                    key={`${item.id}-${item.variant}-${idx}`}
                    className="flex gap-4 py-4 border-b border-gold-light/20 animate-[fadeIn_0.3s_ease]"
                  >
                    {/* Image placeholder */}
                    <div className="w-20 h-20 shrink-0 bg-sand rounded-sm overflow-hidden">
                      <img
                        data-strk-img-id={`cart-${item.id}-${item.variant}`}
                        data-strk-img={`[cart-item-name-${item.id}-${idx}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        id={`cart-item-name-${item.id}-${idx}`}
                        className="hidden"
                      >
                        {item.name}
                      </span>
                      <h4 className="text-xs tracking-[0.1em] uppercase font-medium text-soft-black truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-taupe mt-1 capitalize">{item.variant}</p>
                      <p className="text-sm text-gold-dark mt-1 font-medium">${item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-gold-light/40 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-taupe hover:text-soft-black transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs text-soft-black">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-taupe hover:text-soft-black transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="p-1.5 text-taupe hover:text-dusty-rose transition-colors ml-auto"
                        >
                          <Trash2 className="w-4 h-4" />
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
            <div className="px-6 py-4 border-t border-gold-light/30 bg-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.1em] uppercase text-taupe">Subtotal</span>
                <span className="font-serif text-lg text-soft-black">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-taupe/70 mb-4">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-primary w-full text-xs">
                Checkout — ${subtotal.toFixed(2)}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function ShoppingBagEmpty() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gold-light/50"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}
