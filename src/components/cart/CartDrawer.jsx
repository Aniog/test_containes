import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

function CartItem({ item }) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="flex gap-4 py-5 border-b border-linen">
      {/* Product image placeholder */}
      <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={`cart-${item.key}-img`}
          data-strk-img={`[cart-item-${item.key}-name]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="80"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <span id={`cart-item-${item.key}-name`} className="font-cormorant text-sm uppercase tracking-widest text-espresso block truncate">
          {item.product.name}
        </span>
        <span className="font-manrope text-xs text-stone mt-0.5 block">{item.variant}</span>
        <span className="font-manrope text-sm text-espresso font-medium mt-1 block">
          ${item.product.price}
        </span>

        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => updateQuantity(item.key, item.quantity - 1)}
            className="w-6 h-6 border border-linen flex items-center justify-center text-bark hover:border-gold hover:text-gold transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="font-manrope text-sm text-espresso w-4 text-center">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.key, item.quantity + 1)}
            className="w-6 h-6 border border-linen flex items-center justify-center text-bark hover:border-gold hover:text-gold transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>

      <button
        onClick={() => removeItem(item.key)}
        className="text-stone hover:text-espresso transition-colors self-start mt-0.5"
        aria-label="Remove item"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function CartDrawer() {
  const { items, total, itemCount, isOpen, setIsOpen } = useCart();

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
      <div
        className={`fixed inset-0 bg-espresso/40 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="font-cormorant text-lg uppercase tracking-widest text-espresso">
              Your Cart
            </span>
            {itemCount > 0 && (
              <span className="font-manrope text-xs text-stone">({itemCount})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-espresso transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-linen" />
              <p className="font-cormorant text-xl text-bark">Your cart is empty</p>
              <p className="font-manrope text-xs text-stone">Discover our collection of fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-manrope text-xs uppercase tracking-widest text-espresso border border-espresso px-6 py-3 hover:bg-espresso hover:text-cream transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div>
              {items.map(item => (
                <CartItem key={item.key} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-linen space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs uppercase tracking-widest text-bark">Subtotal</span>
              <span className="font-cormorant text-xl text-espresso">${total.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-stone">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-gold text-cream font-manrope text-xs uppercase tracking-widest py-4 hover:bg-gold-light transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-bark font-manrope text-xs uppercase tracking-widest py-3 hover:border-espresso hover:text-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
