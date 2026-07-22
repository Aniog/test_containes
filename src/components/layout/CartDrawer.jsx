import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

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
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-parchment">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-obsidian" />
            <span className="font-inter text-xs tracking-[0.15em] uppercase text-obsidian">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
            className="text-stone hover:text-obsidian transition-colors"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-parchment" />
              <p className="font-cormorant text-xl text-stone italic">Your cart is empty</p>
              <p className="font-inter text-xs text-stone tracking-wide">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs tracking-[0.15em] uppercase text-obsidian border border-obsidian px-6 py-2.5 hover:bg-obsidian hover:text-ivory transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-parchment last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cream to-parchment flex items-center justify-center">
                      <span className="font-cormorant text-xs text-stone italic">
                        {item.product.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian leading-tight mb-1">
                      {item.product.name}
                    </p>
                    <p className="font-inter text-xs text-stone mb-3">{item.variant}</p>

                    <div className="flex items-center justify-between">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-parchment">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-inter text-xs w-4 text-center text-obsidian">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-inter text-sm font-medium text-obsidian">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          aria-label="Remove item"
                          className="text-stone hover:text-obsidian transition-colors"
                        >
                          <Trash2 size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-parchment bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs tracking-[0.1em] uppercase text-stone">Subtotal</span>
              <span className="font-cormorant text-xl text-obsidian">{formatPrice(totalPrice)}</span>
            </div>
            <p className="font-inter text-xs text-stone mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-ivory font-inter text-xs tracking-[0.15em] uppercase py-4 hover:bg-charcoal transition-colors duration-300 mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-parchment text-stone font-inter text-xs tracking-[0.12em] uppercase py-3 hover:border-obsidian hover:text-obsidian transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
