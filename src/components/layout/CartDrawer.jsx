import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

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
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-parchment z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-stone/40">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <span className="font-cormorant text-xl font-medium tracking-wide text-ink">
              Your Cart
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-mist hover:text-ink transition-colors duration-200"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone" />
              <p className="font-cormorant text-2xl text-mist font-light">Your cart is empty</p>
              <p className="font-inter text-xs text-mist/70 tracking-wide">
                Discover our curated collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-block bg-gold text-obsidian font-inter text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold-light transition-colors duration-200"
              >
                Shop Now
              </Link>
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
          <div className="px-8 py-6 border-t border-stone/40 bg-linen">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs tracking-widest uppercase text-mist">Subtotal</span>
              <span className="font-cormorant text-2xl font-medium text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-mist/70 mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-obsidian font-inter text-xs tracking-widest uppercase py-4 hover:bg-gold-light transition-colors duration-200 mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-stone text-mist font-inter text-xs tracking-widest uppercase py-3.5 hover:border-gold hover:text-gold transition-colors duration-200"
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
    <div className="flex gap-4">
      <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden flex items-center justify-center">
        {/* Styled placeholder — real product photo swapped in at integration time */}
        <span className="font-cormorant text-2xl font-light text-gold select-none">
          {item.name.charAt(0)}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-cormorant text-sm font-medium tracking-widest uppercase text-ink leading-tight">
              {item.name}
            </p>
            {item.variant && (
              <p className="font-inter text-xs text-mist mt-0.5">{item.variant}</p>
            )}
          </div>
          <button
            onClick={() => onRemove(item.key)}
            className="text-stone hover:text-mist transition-colors duration-200 flex-shrink-0"
            aria-label="Remove item"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-stone/60">
            <button
              onClick={() => onUpdateQty(item.key, item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-mist hover:text-gold transition-colors duration-200"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center font-inter text-xs text-ink">{item.quantity}</span>
            <button
              onClick={() => onUpdateQty(item.key, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-mist hover:text-gold transition-colors duration-200"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>
          <span className="font-inter text-sm font-medium text-ink">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
