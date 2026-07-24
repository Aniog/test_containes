import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-obsidian/50 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-gold" />
            <h2 className="font-serif text-lg font-light tracking-wide text-velmora-text">
              Your Cart
              {totalItems > 0 && (
                <span className="font-sans text-sm font-normal text-velmora-text-muted ml-2">
                  ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-text-muted hover:text-velmora-text transition-colors p-1"
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
              <p className="font-serif text-xl font-light text-velmora-text-muted">Your cart is empty</p>
              <p className="font-sans text-sm text-velmora-text-light">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs font-sans font-medium tracking-widest uppercase text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
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
          <div className="border-t border-velmora-sand px-6 py-6 bg-velmora-cream">
            {/* Free shipping notice */}
            <div className="flex items-center justify-center gap-2 mb-4 py-2 bg-velmora-gold/10 border border-velmora-gold/20">
              <span className="text-xs font-sans font-medium tracking-widest uppercase text-velmora-gold-muted">
                Free Worldwide Shipping
              </span>
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between mb-5">
              <span className="font-sans text-sm font-medium tracking-wide text-velmora-text-muted uppercase">Subtotal</span>
              <span className="font-serif text-xl font-light text-velmora-text">${subtotal.toFixed(2)}</span>
            </div>

            <button className="w-full bg-velmora-gold text-velmora-obsidian py-4 text-xs font-sans font-medium tracking-widest uppercase hover:bg-velmora-gold-light transition-colors duration-300">
              Proceed to Checkout
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 text-xs font-sans font-medium tracking-widest uppercase text-velmora-text-muted hover:text-velmora-text transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function CartItem({ item, onRemove, onUpdateQty }) {
  const { product, variant, quantity } = item;

  return (
    <div className="flex gap-4 py-4 border-b border-velmora-sand last:border-0">
      {/* Image thumbnail */}
      <div className="w-20 h-20 bg-velmora-sand flex-shrink-0 overflow-hidden flex items-center justify-center">
        <ShoppingBag size={20} strokeWidth={1} className="text-velmora-text-light" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p
              id={`cart-item-${item.key}-name`}
              className="font-sans text-xs font-medium tracking-[0.12em] uppercase text-velmora-text leading-tight"
            >
              {product.name}
            </p>
            {variant && (
              <p className="font-sans text-xs text-velmora-text-light mt-0.5">{variant}</p>
            )}
          </div>
          <button
            onClick={onRemove}
            className="text-velmora-text-light hover:text-velmora-text transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <Trash2 size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center gap-2 border border-velmora-sand">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text hover:bg-velmora-sand transition-colors"
            >
              <Minus size={12} strokeWidth={2} />
            </button>
            <span className="font-sans text-sm font-medium text-velmora-text w-5 text-center">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-text-muted hover:text-velmora-text hover:bg-velmora-sand transition-colors"
            >
              <Plus size={12} strokeWidth={2} />
            </button>
          </div>

          <span className="font-serif text-base font-light text-velmora-text">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
