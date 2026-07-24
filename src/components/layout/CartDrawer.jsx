import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-parchment-dark">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-champagne" />
            <span className="font-serif text-lg text-obsidian">
              Your Cart {totalItems > 0 && <span className="text-warm-gray text-base">({totalItems})</span>}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-warm-gray hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-parchment-dark" />
              <p className="font-serif text-xl text-obsidian">Your cart is empty</p>
              <p className="text-sm text-warm-gray">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs tracking-widest uppercase text-champagne border border-champagne px-6 py-3 hover:bg-champagne hover:text-ivory transition-all duration-300"
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
                  onUpdateQty={(q) => updateQuantity(item.key, q)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-parchment-dark px-6 py-6 bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-warm-gray font-sans">Subtotal</span>
              <span className="font-serif text-xl text-obsidian">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-warm-gray mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4 hover:bg-obsidian-light transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 text-xs tracking-widest uppercase text-warm-gray hover:text-obsidian transition-colors py-2"
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
    <div className="flex gap-4 py-4 border-b border-parchment-dark last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
        <div className="w-full h-full shimmer" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-serif text-sm tracking-wider uppercase text-obsidian leading-tight">
              {product.name}
            </p>
            <p className="text-xs text-warm-gray mt-0.5">{variant}</p>
          </div>
          <button
            onClick={onRemove}
            className="text-warm-gray hover:text-obsidian transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <Trash2 size={14} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-parchment-dark">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-warm-gray hover:text-obsidian transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="w-8 text-center text-sm text-obsidian font-sans">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-warm-gray hover:text-obsidian transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
          <span className="font-serif text-base text-obsidian">
            {formatPrice(product.price * quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
