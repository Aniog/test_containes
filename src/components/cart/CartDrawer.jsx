import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-velmora-obsidian/40 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-velmora-cream flex flex-col shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-velmora-stone">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-velmora-gold" strokeWidth={1.5} />
            <span className="font-cormorant text-xl font-medium text-velmora-obsidian tracking-wide">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-inter text-xs text-velmora-muted">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-muted hover:text-velmora-obsidian transition-colors duration-300"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-stone" strokeWidth={1} />
              <p className="font-cormorant text-2xl font-light text-velmora-obsidian">Your cart is empty</p>
              <p className="font-inter text-sm text-velmora-muted">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-inter text-xs font-medium uppercase tracking-widest text-velmora-gold border border-velmora-gold px-8 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
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
          <div className="px-8 py-6 border-t border-velmora-stone bg-velmora-linen">
            <div className="flex justify-between items-center mb-2">
              <span className="font-inter text-xs uppercase tracking-widest text-velmora-muted">Subtotal</span>
              <span className="font-cormorant text-2xl font-medium text-velmora-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-velmora-muted mb-6">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-obsidian text-velmora-white font-inter text-xs font-medium uppercase tracking-widest py-4 hover:bg-velmora-charcoal transition-colors duration-300 mb-3">
              Checkout
            </button>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center font-inter text-xs font-medium uppercase tracking-widest text-velmora-obsidian border border-velmora-stone py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300"
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
      <div className="w-20 h-24 bg-velmora-linen flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={`cart-${product.imgId}`}
          data-strk-img={`[${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="160"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-cormorant text-sm font-medium uppercase tracking-widest text-velmora-obsidian leading-tight">
              {product.name}
            </p>
            <p className="font-inter text-xs text-velmora-muted mt-1">{variant}</p>
          </div>
          <button
            onClick={onRemove}
            className="text-velmora-stone hover:text-velmora-obsidian transition-colors duration-300 flex-shrink-0"
            aria-label="Remove item"
          >
            <X className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-velmora-stone">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors duration-300"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center font-inter text-xs text-velmora-obsidian">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-muted hover:text-velmora-obsidian transition-colors duration-300"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" strokeWidth={1.5} />
            </button>
          </div>
          <span className="font-cormorant text-lg font-medium text-velmora-obsidian">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
