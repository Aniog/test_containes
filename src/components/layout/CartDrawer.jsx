import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 backdrop-blur-sm z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-obsidian" />
            <span className="font-serif text-lg font-light tracking-widest2 uppercase text-obsidian">
              Your Bag
            </span>
            {totalItems > 0 && (
              <span className="font-sans text-xs text-stone">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-divider" />
              <p className="font-serif text-xl font-light text-stone">Your bag is empty</p>
              <p className="font-sans text-xs text-stone/70 tracking-wide">
                Discover our curated collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs uppercase tracking-widest2 border border-obsidian text-obsidian px-6 py-3 hover:bg-obsidian hover:text-ivory transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-divider last:border-0">
                  <div className="w-20 h-20 bg-blush flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-xs text-stone italic">
                      {item.product.name.split(' ')[0]}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm font-medium uppercase tracking-widest2 text-obsidian leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-stone mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-obsidian mt-1">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-divider">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-sans text-xs text-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-stone hover:text-obsidian transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
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
          <div className="px-6 py-5 border-t border-divider bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-widest2 text-stone">Subtotal</span>
              <span className="font-serif text-xl font-light text-obsidian">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone/70 mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-ivory font-sans text-xs uppercase tracking-widest2 py-4 hover:bg-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-divider text-stone font-sans text-xs uppercase tracking-widest2 py-3 hover:border-obsidian hover:text-obsidian transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
