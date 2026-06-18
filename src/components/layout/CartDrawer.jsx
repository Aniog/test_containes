import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, itemCount } = useCart();

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
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-velvet/40 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-parchment z-50 flex flex-col shadow-drawer transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/20">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="font-manrope text-xs font-semibold tracking-widest uppercase text-ink">
              Your Cart {itemCount > 0 && `(${itemCount})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-mist hover:text-ink transition-colors duration-200"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-stone" />
              <p className="font-cormorant text-2xl font-light text-ink">Your cart is empty</p>
              <p className="font-manrope text-xs text-mist">Discover our collection of fine jewelry</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs font-medium tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-velvet transition-all duration-300"
              >
                Shop Now
              </button>
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
          <div className="border-t border-stone/20 px-6 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-manrope text-xs font-medium tracking-widest uppercase text-mist">Subtotal</span>
              <span className="font-cormorant text-2xl font-medium text-ink">${total.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-mist">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-velvet font-manrope text-xs font-semibold tracking-widest uppercase py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2">
              Checkout
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full font-manrope text-xs font-medium tracking-widest uppercase text-mist hover:text-gold transition-colors duration-300 py-2"
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
  return (
    <div className="flex gap-4 py-4 border-b border-stone/15">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={`cart-${item.imgId}`}
          data-strk-img={`[${item.descId}] [${item.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="160"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-cormorant text-sm font-medium tracking-widest uppercase text-ink leading-tight">
              {item.name}
            </p>
            <p className="font-manrope text-xs text-mist mt-0.5 capitalize">{item.variant} tone</p>
          </div>
          <button
            onClick={onRemove}
            className="text-stone hover:text-ink transition-colors duration-200 flex-shrink-0"
            aria-label="Remove item"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-stone/30">
            <button
              onClick={() => onUpdateQty(item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-mist hover:text-ink transition-colors duration-200"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center font-manrope text-xs font-medium text-ink">
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQty(item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-mist hover:text-ink transition-colors duration-200"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <span className="font-cormorant text-lg font-medium text-ink">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
