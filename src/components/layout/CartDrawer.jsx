import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-ivory flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-gold" />
            <h2 className="font-serif text-xl text-ink">
              Your Cart
              {totalItems > 0 && (
                <span className="font-sans text-sm text-muted ml-2">({totalItems})</span>
              )}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-ink transition-colors p-1"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} className="text-linen" />
              <p className="font-serif text-2xl text-ink">Your cart is empty</p>
              <p className="font-sans text-sm text-muted">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 bg-gold text-obsidian font-sans text-xs tracking-widest uppercase font-semibold hover:bg-gold-light transition-colors duration-200"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map(item => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={() => removeItem(item.key)}
                  onUpdateQty={(qty) => updateQuantity(item.key, qty)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-linen px-6 py-6 bg-ivory">
            <div className="flex justify-between items-center mb-2">
              <span className="font-sans text-sm text-muted uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-2xl text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-whisper mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-4 bg-obsidian text-parchment font-sans text-xs tracking-widest uppercase font-semibold hover:bg-espresso transition-colors duration-200 mb-3">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 border border-linen text-center font-sans text-xs tracking-widest uppercase text-muted hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onUpdateQty }) {
  const { product, variant, quantity } = item;

  return (
    <div className="flex gap-4 py-4 border-b border-linen last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-linen to-parchment flex items-center justify-center">
          <span className="font-serif text-xs text-whisper text-center px-1 leading-tight">{product.name.split(' ')[0]}</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h4 className="font-serif text-sm tracking-wider uppercase text-ink leading-tight">{product.name}</h4>
            <p className="font-sans text-xs text-muted mt-0.5">{variant}</p>
          </div>
          <button
            onClick={onRemove}
            className="text-whisper hover:text-gold transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <Trash2 size={14} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-linen">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-muted hover:text-gold transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} />
            </button>
            <span className="w-8 text-center font-sans text-sm text-ink">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-muted hover:text-gold transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} />
            </button>
          </div>
          <span className="font-serif text-lg text-ink">${(product.price * quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
