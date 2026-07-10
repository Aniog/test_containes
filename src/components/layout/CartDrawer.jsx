import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velmora-obsidian/40 z-50 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 flex flex-col shadow-2xl transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-velmora-stone" />
            <span className="font-manrope text-xs uppercase tracking-widest text-velmora-stone">
              Your Cart ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-stone hover:text-velmora-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-velmora-sand" />
              <p className="font-cormorant text-xl text-velmora-stone">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-muted">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs uppercase tracking-widest text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
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
          <div className="px-6 py-6 border-t border-velmora-sand space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-stone">Subtotal</span>
              <span className="font-cormorant text-xl text-velmora-obsidian">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-velmora-muted">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest py-4 hover:bg-velmora-gold-light transition-colors flex items-center justify-center gap-2">
              Proceed to Checkout
              <ArrowRight size={14} strokeWidth={2} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full font-manrope text-xs uppercase tracking-widest text-velmora-stone hover:text-velmora-obsidian transition-colors py-2"
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
      {/* Product thumbnail — styled placeholder, no dynamic strk-img (cart items are runtime-dynamic) */}
      <div className="w-20 h-20 bg-velmora-linen flex-shrink-0 overflow-hidden relative flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-velmora-sand/60 to-velmora-linen flex items-center justify-center">
          <span className="font-cormorant text-lg text-velmora-gold/60 select-none">✦</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian leading-tight">
              {product.name}
            </p>
            <p className="font-manrope text-xs text-velmora-muted mt-0.5 capitalize">{variant} tone</p>
          </div>
          <button
            onClick={onRemove}
            className="text-velmora-whisper hover:text-velmora-stone transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-velmora-sand">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-obsidian transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={10} strokeWidth={2} />
            </button>
            <span className="w-8 text-center font-manrope text-xs text-velmora-obsidian">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-obsidian transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={10} strokeWidth={2} />
            </button>
          </div>

          <span className="font-manrope text-sm font-semibold text-velmora-obsidian">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
