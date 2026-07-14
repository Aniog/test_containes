import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-obsidian/60 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-linen z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-velmora-mist/40">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-serif text-lg tracking-wide text-velmora-ink">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-sans text-xs text-velmora-warm-gray">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-warm-gray hover:text-velmora-ink transition-colors duration-300"
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
              <p className="font-serif text-xl text-velmora-warm-gray">Your cart is empty</p>
              <p className="font-sans text-sm text-velmora-warm-gray/70">
                Discover our collection of fine jewelry
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-sans text-xs tracking-widest uppercase text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
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
          <div className="px-8 py-6 border-t border-velmora-mist/40 bg-velmora-cream">
            <div className="flex justify-between items-center mb-2">
              <span className="font-sans text-xs uppercase tracking-widest text-velmora-warm-gray">Subtotal</span>
              <span className="font-serif text-xl text-velmora-ink">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-velmora-warm-gray/70 mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-sans text-xs tracking-widest uppercase py-4 hover:bg-velmora-gold-light transition-all duration-300 font-semibold">
              Proceed to Checkout
            </button>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-3 font-sans text-xs tracking-widest uppercase text-velmora-warm-gray hover:text-velmora-gold transition-colors duration-300"
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
    <div className="flex gap-4">
      {/* Thumbnail */}
      <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden flex items-center justify-center">
        <span className="font-serif text-2xl text-velmora-gold/60 select-none">
          {product.name.charAt(0)}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-serif text-sm uppercase tracking-wider text-velmora-ink leading-tight">
              {product.name}
            </p>
            <p className="font-sans text-xs text-velmora-warm-gray mt-0.5">
              {variant}
            </p>
          </div>
          <button
            onClick={onRemove}
            className="text-velmora-mist hover:text-velmora-warm-gray transition-colors duration-300 flex-shrink-0"
            aria-label="Remove item"
          >
            <Trash2 size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-velmora-mist/60">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-ink transition-colors duration-300"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={2} />
            </button>
            <span className="w-8 text-center font-sans text-xs text-velmora-ink">
              {quantity}
            </span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-warm-gray hover:text-velmora-ink transition-colors duration-300"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={2} />
            </button>
          </div>

          <span className="font-serif text-base text-velmora-ink">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
