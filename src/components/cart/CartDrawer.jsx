import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-obsidian/40 backdrop-blur-sm z-50 animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl animate-drawer-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-obsidian-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-gold" />
            <span className="font-serif text-lg text-obsidian tracking-wide">
              Your Cart {totalItems > 0 && <span className="text-gold">({totalItems})</span>}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-obsidian-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4 text-obsidian-600" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag className="w-12 h-12 text-obsidian-200 mb-4" />
              <p className="font-serif text-xl text-obsidian-400 mb-2">Your cart is empty</p>
              <p className="text-sm text-obsidian-400 font-sans">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 text-sm font-sans font-medium text-gold border-b border-gold pb-0.5 hover:text-gold-muted transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-5">
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
          <div className="border-t border-obsidian-100 px-6 py-6 space-y-4 bg-cream">
            <div className="flex justify-between items-center">
              <span className="text-sm font-sans text-obsidian-500 uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-xl text-obsidian font-medium">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-obsidian-400 font-sans">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-obsidian text-cream-warm py-4 font-sans text-sm font-medium tracking-widest uppercase hover:bg-obsidian-700 transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-obsidian-200 text-obsidian py-3 font-sans text-sm font-medium tracking-widest uppercase hover:border-obsidian transition-colors"
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
    <div className="flex gap-4 py-4 border-b border-obsidian-100 last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-cream-deep rounded flex-shrink-0 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-2xl">✦</span>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <p className="product-name text-xs text-obsidian leading-tight">{product.name}</p>
          <button
            onClick={onRemove}
            className="text-obsidian-300 hover:text-obsidian transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        {variant && (
          <p className="text-xs text-obsidian-400 font-sans mt-0.5">{variant}</p>
        )}
        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center gap-2 border border-obsidian-200 rounded">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center hover:bg-obsidian-50 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3 text-obsidian" />
            </button>
            <span className="text-sm font-sans text-obsidian w-5 text-center">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center hover:bg-obsidian-50 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3 text-obsidian" />
            </button>
          </div>
          <span className="font-serif text-base text-obsidian font-medium">
            {formatPrice(product.price * quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
