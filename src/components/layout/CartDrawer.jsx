import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-velmora-obsidian/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-velmora-cream shadow-drawer flex flex-col transition-transform duration-400 ease-out-smooth ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-cormorant text-lg font-medium text-velmora-obsidian tracking-widest-sm">
              Your Cart
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-sand" />
              <p className="font-cormorant text-xl text-velmora-text-mid">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-text-muted">
                Discover our curated collection
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs uppercase tracking-widest-md text-velmora-gold border border-velmora-gold px-6 py-2.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-velmora-sand last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-velmora-sand flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-sand to-velmora-gold/20 flex items-center justify-center">
                      <span className="font-cormorant text-xs text-velmora-text-muted">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-widest-sm text-velmora-obsidian leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-manrope text-xs text-velmora-text-muted mt-0.5 capitalize">
                      {item.variant} tone
                    </p>
                    <p className="font-manrope text-sm font-medium text-velmora-text-dark mt-1">
                      ${item.product.price}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-velmora-sand">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center font-manrope text-xs text-velmora-obsidian">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-velmora-text-mid hover:text-velmora-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.key)}
                        className="font-manrope text-[10px] uppercase tracking-widest-sm text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
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
          <div className="px-6 py-5 border-t border-velmora-sand bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs uppercase tracking-widest-md text-velmora-text-muted">
                Subtotal
              </span>
              <span className="font-cormorant text-xl font-medium text-velmora-obsidian">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-manrope text-[10px] text-velmora-text-muted mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-obsidian text-velmora-cream font-manrope text-xs uppercase tracking-widest-md py-4 hover:bg-velmora-stone transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-velmora-sand text-velmora-text-mid font-manrope text-xs uppercase tracking-widest-md py-3 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
