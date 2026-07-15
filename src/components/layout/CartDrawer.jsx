import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-obsidian/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-velmora-ivory z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-gold" />
            <span className="font-cormorant text-lg font-medium tracking-wide text-velmora-obsidian">
              Your Cart
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-border" />
              <p className="font-cormorant text-xl text-velmora-text-muted">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-text-muted tracking-wide">
                Discover our collection and find something you love.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs tracking-widest uppercase border border-velmora-obsidian text-velmora-obsidian px-6 py-3 hover:bg-velmora-obsidian hover:text-velmora-ivory transition-colors"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-velmora-border">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product thumbnail */}
                  <div
                    className="w-20 h-24 flex-shrink-0 overflow-hidden flex items-center justify-center"
                    style={{ backgroundColor: '#F0EBE3' }}
                  >
                    <span
                      className="font-cormorant text-2xl font-medium"
                      style={{ color: '#C9A96E' }}
                    >
                      {item.product.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p
                          id={`cart-item-${item.key}-name`}
                          className="font-cormorant text-sm uppercase tracking-[0.1em] text-velmora-obsidian font-medium leading-tight"
                        >
                          {item.product.name}
                        </p>
                        <p className="font-manrope text-xs text-velmora-text-muted mt-0.5 capitalize">
                          {item.variant} tone
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-velmora-text-muted hover:text-velmora-obsidian transition-colors flex-shrink-0"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-velmora-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-manrope text-sm font-medium text-velmora-obsidian">
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
          <div className="border-t border-velmora-border px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs tracking-widest uppercase text-velmora-text-muted">
                Subtotal
              </span>
              <span className="font-cormorant text-xl font-medium text-velmora-obsidian">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-manrope text-xs text-velmora-text-muted">
              Shipping and taxes calculated at checkout.
            </p>
            <button className="w-full bg-velmora-obsidian text-velmora-ivory font-manrope text-xs tracking-widest uppercase py-4 hover:bg-velmora-charcoal transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-border text-velmora-text-muted font-manrope text-xs tracking-widest uppercase py-3 hover:border-velmora-obsidian hover:text-velmora-obsidian transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
