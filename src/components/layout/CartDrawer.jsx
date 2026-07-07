import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-ivory flex flex-col shadow-[-8px_0_40px_rgba(28,25,23,0.15)] transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-charcoal" />
            <span className="font-serif text-lg tracking-wide text-charcoal">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="text-xs font-sans text-stone ml-1">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-gold/40" />
              <p className="font-serif text-xl text-charcoal-soft font-light">Your cart is empty</p>
              <p className="text-xs font-sans text-stone uppercase tracking-widest">
                Discover our collection
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-charcoal text-ivory px-8 py-3 text-xs uppercase tracking-widest font-sans hover:bg-gold-dark transition-colors duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="space-y-6">
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
          <div className="border-t border-gold/20 px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-sans uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs font-sans text-stone text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-charcoal text-ivory py-4 text-xs uppercase tracking-widest font-sans hover:bg-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-charcoal/30 text-charcoal py-3 text-xs uppercase tracking-widest font-sans hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

const CartItem = ({ item, onRemove, onUpdateQty }) => {
  const { product, variant, quantity } = item;

  return (
    <div className="flex gap-4">
      {/* Image thumbnail */}
      <div className="w-20 h-20 bg-cream flex-shrink-0 flex items-center justify-center border border-gold/15">
        <span className="font-serif text-xs text-stone/60 uppercase tracking-widest text-center leading-tight px-1">
          {product.name.split(' ').slice(0, 2).join('\n')}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-serif text-sm uppercase tracking-widest text-charcoal leading-tight">
              {product.name}
            </p>
            {variant && (
              <p className="text-xs font-sans text-stone mt-0.5">{variant}</p>
            )}
          </div>
          <button
            onClick={onRemove}
            className="text-stone hover:text-charcoal transition-colors ml-2 flex-shrink-0"
            aria-label="Remove item"
          >
            <Trash2 size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-gold/30">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-cream transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} strokeWidth={1.5} />
            </button>
            <span className="w-8 text-center text-xs font-sans text-charcoal">{quantity}</span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-charcoal hover:bg-cream transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} strokeWidth={1.5} />
            </button>
          </div>

          <span className="font-sans text-sm font-medium text-charcoal">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
