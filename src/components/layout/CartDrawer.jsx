import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-velmora-obsidian/50 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-linen z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <h2 className="font-serif text-xl font-light tracking-widest text-velmora-obsidian uppercase">
            Your Cart
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-ash hover:text-velmora-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-sand" />
              <p className="font-serif text-lg text-velmora-stone">Your cart is empty</p>
              <p className="text-sm text-velmora-ash">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs tracking-widest uppercase font-medium text-velmora-gold border border-velmora-gold px-6 py-2.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-velmora-sand">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-cream to-velmora-sand flex items-center justify-center">
                      <span className="text-velmora-gold text-xs font-serif italic">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium tracking-widest uppercase text-velmora-obsidian truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-velmora-ash mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm font-medium text-velmora-obsidian mt-1">${item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-sand flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-sm text-velmora-obsidian w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-sand flex items-center justify-center text-velmora-stone hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-velmora-sand hover:text-velmora-obsidian transition-colors self-start mt-1"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-sand bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs tracking-widest uppercase text-velmora-ash">Subtotal</span>
              <span className="font-serif text-lg text-velmora-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-ash mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian text-xs font-semibold tracking-widest uppercase py-4 hover:bg-velmora-gold-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 text-xs tracking-widest uppercase text-velmora-ash hover:text-velmora-obsidian transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
