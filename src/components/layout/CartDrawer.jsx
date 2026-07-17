import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-obsidian/40 cart-overlay transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-velmora-cream shadow-drawer flex flex-col transition-transform duration-500 ease-out-expo ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-velmora-mist">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-serif text-lg font-light tracking-wide text-velmora-obsidian">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-xs text-velmora-dust font-medium">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-slate hover:text-velmora-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-mist" />
              <p className="font-serif text-xl font-light text-velmora-slate">Your cart is empty</p>
              <p className="text-xs text-velmora-dust tracking-wide">
                Discover our curated collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-block px-8 py-3 bg-velmora-gold text-velmora-obsidian text-xs uppercase tracking-widest font-medium hover:bg-velmora-gold-light transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velmora-linen flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-xs text-velmora-dust text-center px-1 leading-tight">
                      {item.name.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-[0.12em] font-medium text-velmora-obsidian leading-tight">
                      {item.name}
                    </p>
                    <p className="text-xs text-velmora-dust mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-velmora-obsidian mt-1">
                      ${item.price}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-velmora-mist">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-slate hover:text-velmora-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium text-velmora-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-slate hover:text-velmora-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-xs text-velmora-dust hover:text-velmora-slate underline underline-offset-2 transition-colors"
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
          <div className="px-8 py-6 border-t border-velmora-mist">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs uppercase tracking-widest text-velmora-slate font-medium">
                Subtotal
              </span>
              <span className="font-serif text-xl font-light text-velmora-obsidian">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-dust mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-velmora-obsidian text-velmora-cream text-xs uppercase tracking-widest font-medium hover:bg-velmora-charcoal transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3 mt-2 border border-velmora-mist text-velmora-slate text-xs uppercase tracking-widest font-medium hover:border-velmora-stone hover:text-velmora-obsidian transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
