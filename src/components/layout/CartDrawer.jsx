import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, total, count, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 backdrop-blur-sm z-50 animate-fadeIn"
        style={{ backgroundColor: 'rgba(26,23,20,0.45)' }}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-linen z-50 flex flex-col shadow-drawer animate-slideInRight">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/30">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-cormorant text-xl font-medium text-velmora-obsidian tracking-wide">
              Your Cart
            </span>
            {count > 0 && (
              <span className="font-manrope text-xs text-velmora-text-muted ml-1">
                ({count} {count === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-text-muted hover:text-velmora-obsidian transition-colors duration-200"
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
              <p className="font-cormorant text-2xl text-velmora-text-mid font-light">
                Your cart is empty
              </p>
              <p className="font-manrope text-sm text-velmora-text-muted">
                Discover our collection and find something you love.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs uppercase tracking-widest-md text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-velmora-sand/20">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-cream to-velmora-sand flex items-center justify-center">
                      <span className="font-cormorant text-xs text-velmora-text-muted italic">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-cormorant text-sm uppercase tracking-widest-sm font-medium text-velmora-obsidian leading-tight">
                          {item.product.name}
                        </p>
                        <p className="font-manrope text-xs text-velmora-text-muted mt-0.5">
                          {item.variant}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-velmora-text-muted hover:text-velmora-obsidian transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-velmora-sand/50">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-manrope text-sm text-velmora-obsidian">
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
          <div className="px-6 py-6 border-t border-velmora-sand bg-velmora-cream" style={{ borderTopColor: 'rgba(212,201,176,0.4)' }}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs uppercase tracking-widest-sm text-velmora-text-muted">
                Subtotal
              </span>
              <span className="font-cormorant text-2xl font-medium text-velmora-obsidian">
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="font-manrope text-xs text-velmora-text-muted mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-obsidian text-velmora-text-light font-manrope text-xs uppercase tracking-widest-md py-4 hover:bg-velmora-charcoal transition-colors duration-300 mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-sand text-velmora-text-mid font-manrope text-xs uppercase tracking-widest-md py-3 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
