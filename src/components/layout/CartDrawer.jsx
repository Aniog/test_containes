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
          className="fixed inset-0 bg-velmora-obsidian/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-ivory z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-velmora-gold" />
            <span className="font-serif text-lg font-light tracking-wide text-velmora-obsidian">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-xs text-velmora-muted font-medium">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-muted hover:text-velmora-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-subtle" />
              <p className="font-serif text-xl font-light text-velmora-muted">Your cart is empty</p>
              <p className="text-xs text-velmora-subtle tracking-wide">
                Discover our curated collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block bg-velmora-gold text-velmora-obsidian px-8 py-3 text-xs font-medium tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors duration-200"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CartItem
                  key={item.key}
                  item={item}
                  onRemove={removeItem}
                  onUpdateQty={updateQuantity}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-border px-6 py-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium tracking-widest uppercase text-velmora-muted">
                Subtotal
              </span>
              <span className="font-serif text-xl font-light text-velmora-obsidian">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-subtle text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian py-4 text-xs font-semibold tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-border text-velmora-muted py-3 text-xs font-medium tracking-widest uppercase hover:border-velmora-gold hover:text-velmora-gold transition-all duration-200"
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
    <div className="flex gap-4 py-4 border-b border-velmora-border last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-velmora-subtle text-xs font-medium tracking-wide text-center px-1">
            {product.name.split(' ')[0]}
          </span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-medium tracking-[0.1em] uppercase text-velmora-obsidian leading-tight">
              {product.name}
            </p>
            <p className="text-xs text-velmora-muted mt-0.5">{variant}</p>
          </div>
          <button
            onClick={() => onRemove(item.key)}
            className="text-velmora-subtle hover:text-velmora-muted transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <Trash2 size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-velmora-border">
            <button
              onClick={() => onUpdateQty(item.key, quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={2} />
            </button>
            <span className="w-8 text-center text-xs font-medium text-velmora-obsidian">
              {quantity}
            </span>
            <button
              onClick={() => onUpdateQty(item.key, quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={2} />
            </button>
          </div>
          <span className="font-serif text-base font-light text-velmora-obsidian">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
