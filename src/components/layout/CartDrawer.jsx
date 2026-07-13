import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, itemCount } = useCart();

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
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-linen z-50 flex flex-col shadow-drawer transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-serif text-lg font-light tracking-wide text-velmora-ink">
              Your Cart
            </span>
            {itemCount > 0 && (
              <span className="text-xs text-velmora-mist font-sans">({itemCount})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-mist hover:text-velmora-ink transition-colors duration-200"
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
              <p className="font-serif text-xl font-light text-velmora-ink">Your cart is empty</p>
              <p className="text-xs text-velmora-mist tracking-wide">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-xs tracking-widest uppercase font-medium text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
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
          <div className="border-t border-velmora-stone/20 px-6 py-6 bg-velmora-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs tracking-widest uppercase text-velmora-mist font-medium">Subtotal</span>
              <span className="font-serif text-xl font-light text-velmora-ink">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-mist mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian text-xs tracking-widest uppercase font-semibold py-4 hover:bg-velmora-gold-light transition-all duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 text-xs tracking-widest uppercase font-medium text-velmora-mist hover:text-velmora-ink transition-colors duration-200 py-2"
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
    <div className="flex gap-4 py-4 border-b border-velmora-stone/15">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-velmora-cream to-velmora-sand flex items-center justify-center">
          <span className="font-serif text-2xl text-velmora-gold/40 font-light select-none">V</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <Link
            to={`/product/${product.slug}`}
            className="font-serif text-sm font-medium tracking-wider uppercase text-velmora-ink hover:text-velmora-gold transition-colors duration-200 leading-tight"
          >
            {product.name}
          </Link>
          <button
            onClick={onRemove}
            className="text-velmora-sand hover:text-velmora-ink transition-colors duration-200 flex-shrink-0"
            aria-label="Remove item"
          >
            <Trash2 size={14} strokeWidth={1.5} />
          </button>
        </div>

        <p className="text-xs text-velmora-mist mt-1 capitalize">{variant} tone</p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2 border border-velmora-stone/30">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-mist hover:text-velmora-ink transition-colors duration-200"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={2} />
            </button>
            <span className="text-xs font-medium text-velmora-ink w-4 text-center">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-mist hover:text-velmora-ink transition-colors duration-200"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={2} />
            </button>
          </div>
          <span className="font-sans text-sm font-medium text-velmora-ink">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
