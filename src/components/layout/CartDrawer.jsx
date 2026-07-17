import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-obsidian/40 z-50 cart-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 shadow-2xl flex flex-col transition-transform duration-400 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-mist">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-champagne" />
            <span className="font-sans text-xs uppercase tracking-widest font-semibold text-charcoal">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-mist" />
              <p className="font-serif text-xl text-charcoal">Your cart is empty</p>
              <p className="font-sans text-sm text-stone">Discover our collection of fine jewelry.</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-champagne text-obsidian font-sans text-xs uppercase tracking-widest font-semibold px-8 py-3 hover:bg-champagne-dark transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-mist">
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
          <div className="border-t border-mist px-6 py-6 bg-parchment">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-champagne text-obsidian font-sans text-xs uppercase tracking-widest font-semibold py-4 hover:bg-champagne-dark transition-colors duration-300 mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-mist text-stone font-sans text-xs uppercase tracking-widest font-semibold py-3 hover:border-champagne hover:text-champagne transition-colors duration-300"
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
    <div className="flex gap-4 py-5">
      <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-parchment to-mist flex items-center justify-center">
          <span className="font-serif text-xs text-stone italic">✦</span>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-serif text-sm uppercase tracking-wider text-charcoal leading-tight">{item.product.name}</p>
            <p className="font-sans text-xs text-stone mt-0.5">{item.variant}</p>
          </div>
          <button onClick={onRemove} className="text-mist hover:text-stone transition-colors flex-shrink-0">
            <X size={14} />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-mist">
            <button
              onClick={() => onUpdateQty(item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
            >
              <Minus size={12} />
            </button>
            <span className="w-8 text-center font-sans text-xs text-charcoal">{item.quantity}</span>
            <button
              onClick={() => onUpdateQty(item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-stone hover:text-charcoal transition-colors"
            >
              <Plus size={12} />
            </button>
          </div>
          <span className="font-serif text-base text-charcoal">${(item.product.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
