import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-parchment z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-divider">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="font-manrope text-xs uppercase tracking-widest text-ink">
              Your Cart ({items.length})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-mist hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-whisper" />
              <p className="font-cormorant text-2xl text-mist font-light">Your cart is empty</p>
              <p className="font-manrope text-xs text-whisper">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-manrope text-xs uppercase tracking-widest text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-cream transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
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
          <div className="px-8 py-6 border-t border-divider bg-linen">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs uppercase tracking-widest text-mist">Subtotal</span>
              <span className="font-cormorant text-2xl text-ink font-light">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-whisper mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-cream font-manrope text-xs uppercase tracking-widest py-4 hover:bg-gold-dark transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-stone text-mist font-manrope text-xs uppercase tracking-widest py-3 hover:border-gold hover:text-gold transition-colors"
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
  const { product, variant, quantity, key } = item;

  return (
    <div className="flex gap-4">
      {/* Thumbnail placeholder — warm linen swatch */}
      <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gold/30" />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-cormorant text-sm uppercase tracking-widest text-ink leading-tight">
              {product.name}
            </p>
            <p className="font-manrope text-xs text-mist mt-0.5">{variant}</p>
          </div>
          <button
            onClick={() => onRemove(key)}
            className="text-whisper hover:text-ink transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-divider">
            <button
              onClick={() => onUpdateQty(key, quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-mist hover:text-ink transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center font-manrope text-xs text-ink">{quantity}</span>
            <button
              onClick={() => onUpdateQty(key, quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-mist hover:text-ink transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <span className="font-manrope text-sm font-medium text-ink">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
