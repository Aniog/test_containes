import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

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
          className="fixed inset-0 bg-velvet/40 backdrop-blur-sm z-50 transition-opacity"
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
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/30">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold" />
            <span className="font-cormorant text-xl font-medium text-ink">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-manrope text-xs text-muted ml-1">
                ({totalItems} {totalItems === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted hover:text-ink transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-stone" />
              <p className="font-cormorant text-2xl text-ink">Your cart is empty</p>
              <p className="font-manrope text-sm text-muted">
                Discover our curated collection of fine jewelry.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-block bg-gold text-velvet font-manrope text-xs tracking-[0.15em] uppercase px-8 py-3 hover:bg-gold-light transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
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
          <div className="border-t border-stone/30 px-6 py-5 bg-linen">
            <div className="flex justify-between items-center mb-1">
              <span className="font-manrope text-xs tracking-[0.1em] uppercase text-muted">Subtotal</span>
              <span className="font-cormorant text-2xl text-ink">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-manrope text-xs text-muted mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-velvet font-manrope text-xs tracking-[0.15em] uppercase py-4 hover:bg-gold-light transition-colors mb-2">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-stone text-muted font-manrope text-xs tracking-[0.15em] uppercase py-3 hover:border-ink hover:text-ink transition-colors"
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
    <div className="flex gap-4 py-4 border-b border-stone/20 last:border-0">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
        <img
          data-strk-img-id={`cart-${key}-img`}
          data-strk-img="gold jewelry fine earrings necklace"
          data-strk-img-ratio="1x1"
          data-strk-img-width="160"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <Link
            to={`/product/${product.slug}`}
            className="font-cormorant text-sm uppercase tracking-[0.1em] text-ink hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </Link>
          <button
            onClick={() => onRemove(key)}
            className="text-stone hover:text-muted transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X size={14} />
          </button>
        </div>
        <p className="font-manrope text-xs text-muted mt-0.5 capitalize">{variant} tone</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 border border-stone/40">
            <button
              onClick={() => onUpdateQty(key, quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus size={12} />
            </button>
            <span className="font-manrope text-xs w-4 text-center text-ink">{quantity}</span>
            <button
              onClick={() => onUpdateQty(key, quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-muted hover:text-ink transition-colors"
              aria-label="Increase quantity"
            >
              <Plus size={12} />
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
