import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

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
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-velmora-linen z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-mist/40">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-velmora-ash" />
            <span className="font-sans text-xs tracking-widest uppercase text-velmora-ash">
              Your Bag ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-ash hover:text-velmora-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-mist" />
              <p className="font-serif text-xl text-velmora-ash font-light">Your bag is empty</p>
              <p className="font-sans text-xs text-velmora-mist tracking-wide">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-sans text-xs tracking-widest uppercase border border-velmora-gold text-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-velmora-mist/30">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-gold-pale to-velmora-cream flex items-center justify-center">
                      <span className="font-serif text-velmora-gold text-xs">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-widest text-velmora-obsidian leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-velmora-ash mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm text-velmora-obsidian mt-1 font-medium">
                      ${item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-velmora-ash hover:text-velmora-obsidian transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} strokeWidth={2} />
                      </button>
                      <span className="font-sans text-xs text-velmora-obsidian w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-velmora-ash hover:text-velmora-obsidian transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-velmora-mist hover:text-velmora-ash transition-colors self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-velmora-mist/40 bg-velmora-linen">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest uppercase text-velmora-ash">Subtotal</span>
              <span className="font-serif text-lg text-velmora-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-velmora-mist mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-velmora-gold-light transition-all duration-300 font-medium">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 font-sans text-xs tracking-widest uppercase text-velmora-ash hover:text-velmora-obsidian transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
