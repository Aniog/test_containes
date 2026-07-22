import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useEffect } from 'react';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-350 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-parchment">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="font-inter text-xs uppercase tracking-[0.12em] text-charcoal">
              Your Cart {totalItems > 0 && `(${totalItems})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-charcoal transition-colors duration-200 p-1"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-parchment" />
              <p className="font-cormorant text-2xl text-charcoal font-light">Your cart is empty</p>
              <p className="font-inter text-xs text-mist">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-gold text-gold font-inter text-xs uppercase tracking-[0.1em] px-8 py-3 hover:bg-gold hover:text-ivory transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
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
          <div className="border-t border-parchment px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs uppercase tracking-[0.1em] text-stone">Subtotal</span>
              <span className="font-cormorant text-xl text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-mist">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-ivory font-inter text-xs uppercase tracking-[0.1em] py-4 hover:bg-gold-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-parchment text-stone font-inter text-xs uppercase tracking-[0.1em] py-3 hover:border-gold hover:text-gold transition-colors duration-300"
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
  const { product, variant, quantity, key } = item;

  return (
    <div className="flex gap-4">
      <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden flex items-center justify-center border border-parchment">
        <span className="font-cormorant text-2xl text-gold font-light">
          {product.name.charAt(0)}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-cormorant text-sm uppercase tracking-[0.1em] text-charcoal leading-tight">
              {product.name}
            </p>
            {variant && (
              <p className="font-inter text-xs text-mist mt-0.5">{variant}</p>
            )}
          </div>
          <button
            onClick={() => onRemove(key)}
            className="text-mist hover:text-charcoal transition-colors duration-200 ml-2 flex-shrink-0"
            aria-label="Remove item"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-parchment">
            <button
              onClick={() => onUpdateQty(key, quantity - 1)}
              className="px-2 py-1 text-stone hover:text-charcoal transition-colors duration-200"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-3 font-inter text-xs text-charcoal">{quantity}</span>
            <button
              onClick={() => onUpdateQty(key, quantity + 1)}
              className="px-2 py-1 text-stone hover:text-charcoal transition-colors duration-200"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <span className="font-inter text-sm font-medium text-charcoal">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
