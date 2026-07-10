import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-obsidian/60 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-ivory flex flex-col transition-transform duration-400 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-gold/15">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-cormorant text-lg tracking-widest-sm text-velmora-obsidian">
              Your Cart
            </span>
            {items.length > 0 && (
              <span className="font-manrope text-xs text-velmora-text-muted ml-1">
                ({items.length} {items.length === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-text-mid hover:text-velmora-obsidian transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-gold/40" />
              <p className="font-cormorant text-xl text-velmora-text-mid">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-text-muted">
                Discover our curated collection of fine jewelry
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs tracking-widest-md uppercase border border-velmora-gold text-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-velmora-gold/10">
              {items.map(item => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Product image */}
                  <div className="w-20 h-20 bg-velmora-linen flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-widest-sm text-velmora-obsidian leading-tight">
                      {item.name}
                    </p>
                    <p className="font-manrope text-xs text-velmora-text-muted mt-0.5">{item.variant}</p>
                    <p className="font-manrope text-sm text-velmora-gold mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-velmora-gold/20">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-velmora-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="font-manrope text-xs text-velmora-text-muted hover:text-velmora-obsidian underline underline-offset-2 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <p className="font-manrope text-sm text-velmora-obsidian font-medium flex-shrink-0">
                    ${(item.price * item.quantity).toFixed(0)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-gold/15 px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs tracking-widest-sm uppercase text-velmora-text-mid">
                Subtotal
              </span>
              <span className="font-cormorant text-xl text-velmora-obsidian">
                ${subtotal.toFixed(0)}
              </span>
            </div>
            <p className="font-manrope text-xs text-velmora-text-muted">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest-md uppercase py-4 hover:bg-velmora-gold-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-obsidian/20 text-velmora-text-mid font-manrope text-xs tracking-widest-md uppercase py-3 hover:border-velmora-obsidian hover:text-velmora-obsidian transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
