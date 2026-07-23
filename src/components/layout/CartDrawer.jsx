import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/40 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-ivory flex flex-col transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ivory-dark">
          <h2 className="font-serif text-xl font-light tracking-wide text-obsidian">
            Your Cart
            {items.length > 0 && (
              <span className="ml-2 text-sm font-sans text-taupe">({items.length})</span>
            )}
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-taupe-light" />
              <p className="font-serif text-xl font-light text-taupe">Your cart is empty</p>
              <p className="text-xs font-sans text-taupe-light">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-gold text-gold hover:bg-gold hover:text-obsidian px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-ivory-dark last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-ivory-dark flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blush to-ivory-dark flex items-center justify-center">
                      <span className="text-gold text-xs font-serif">✦</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-widest2 text-obsidian leading-tight">
                      {item.product.name}
                    </p>
                    <p className="text-xs font-sans text-taupe mt-1">{item.variant}</p>
                    <p className="text-sm font-sans font-medium text-obsidian mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-ivory-dark flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-xs font-sans font-medium text-obsidian w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-ivory-dark flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-taupe-light hover:text-obsidian transition-colors self-start mt-1"
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
          <div className="px-6 py-6 border-t border-ivory-dark bg-ivory">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-sans uppercase tracking-widest text-taupe">Subtotal</span>
              <span className="font-serif text-xl font-light text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs font-sans text-taupe-light mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-obsidian hover:bg-gold-dark py-4 text-xs uppercase tracking-widest font-sans font-semibold transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-ivory-dark text-taupe hover:border-gold hover:text-gold py-3 text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
