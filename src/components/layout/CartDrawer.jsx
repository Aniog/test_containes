import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-[-4px_0_32px_rgba(26,23,20,0.12)] transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-cormorant text-lg font-medium tracking-wide text-ink">
              Your Cart
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink-muted hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-cormorant text-xl text-ink-muted">Your cart is empty</p>
              <p className="font-manrope text-xs text-ink-faint">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs uppercase tracking-[0.12em] text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-cream transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-linen">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 flex items-center justify-center">
                    <span className="font-cormorant text-xs text-ink-faint italic">
                      {item.product.name.split(' ')[0]}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-[0.1em] text-ink leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-manrope text-xs text-ink-muted mt-0.5 capitalize">
                      {item.variant} tone
                    </p>
                    <p className="font-manrope text-sm font-medium text-ink mt-1">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-linen">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="font-manrope text-[10px] uppercase tracking-[0.1em] text-ink-faint hover:text-ink transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs uppercase tracking-[0.1em] text-ink-muted">
                Subtotal
              </span>
              <span className="font-cormorant text-xl font-medium text-ink">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="font-manrope text-[10px] text-ink-faint text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-cream font-manrope text-xs uppercase tracking-[0.14em] py-4 hover:bg-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-ink-muted font-manrope text-xs uppercase tracking-[0.12em] py-3 hover:border-ink hover:text-ink transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
