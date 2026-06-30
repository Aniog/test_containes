import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, itemCount } = useCart();

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
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-ivory shadow-drawer flex flex-col transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-cormorant text-lg font-medium text-obsidian">
              Your Cart
            </span>
            {itemCount > 0 && (
              <span className="font-manrope text-xs text-text-muted">({itemCount})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-muted hover:text-obsidian transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-linen" />
              <p className="font-cormorant text-xl text-text-secondary">Your cart is empty</p>
              <p className="font-manrope text-xs text-text-muted">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs tracking-[0.15em] uppercase text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-obsidian transition-all duration-300"
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
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs tracking-[0.1em] uppercase text-text-muted">Subtotal</span>
              <span className="font-cormorant text-xl font-medium text-obsidian">${total.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-text-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-ivory font-manrope text-xs tracking-[0.15em] uppercase py-4 hover:bg-espresso transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-text-secondary font-manrope text-xs tracking-[0.15em] uppercase py-3 hover:border-gold hover:text-gold transition-all duration-300"
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
    <div className="flex gap-4 py-4 border-b border-linen last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={`cart-${item.key}-img`}
          data-strk-img={`[cart-item-${item.key}-name]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="160"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span id={`cart-item-${item.key}-name`} className="sr-only">{product.name} gold jewelry</span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian leading-tight">
              {product.name}
            </p>
            <p className="font-manrope text-xs text-text-muted mt-0.5">{variant}</p>
          </div>
          <button
            onClick={onRemove}
            className="text-text-muted hover:text-obsidian transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center gap-2 border border-linen">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="font-manrope text-xs w-5 text-center text-obsidian">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>

          <span className="font-manrope text-sm font-medium text-obsidian">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
