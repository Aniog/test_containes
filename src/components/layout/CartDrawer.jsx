import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-velmora-obsidian/40 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-ivory z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-gold/20">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-velmora-gold" />
            <span className="font-cormorant text-xl tracking-wide text-velmora-obsidian">
              Your Cart
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-velmora-stone hover:text-velmora-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-gold/30" />
              <p className="font-cormorant text-2xl text-velmora-stone">Your cart is empty</p>
              <p className="font-manrope text-xs text-velmora-stone/70 uppercase tracking-widest">
                Discover our collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-velmora-gold-dark transition-colors duration-200"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
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
          <div className="border-t border-velmora-gold/20 px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-manrope text-xs uppercase tracking-widest text-velmora-stone">
                Subtotal
              </span>
              <span className="font-cormorant text-2xl text-velmora-obsidian">
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="font-manrope text-xs text-velmora-stone/70 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-velmora-obsidian text-velmora-ivory font-manrope text-xs uppercase tracking-widest py-4 hover:bg-velmora-charcoal transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-velmora-gold/40 text-velmora-charcoal font-manrope text-xs uppercase tracking-widest py-3.5 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-200"
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
    <div className="flex gap-4 py-4 border-b border-velmora-gold/10 last:border-0">
      {/* Product image placeholder */}
      <div className="w-20 h-20 bg-velmora-cream flex-shrink-0 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-cormorant text-3xl text-velmora-gold/40">V</span>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian leading-tight">
              {product.name}
            </p>
            <p className="font-manrope text-xs text-velmora-stone mt-0.5 capitalize">
              {variant} tone
            </p>
          </div>
          <button
            onClick={onRemove}
            className="text-velmora-stone/50 hover:text-velmora-charcoal transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-velmora-gold/20">
            <button
              onClick={() => onUpdateQty(quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal hover:bg-velmora-cream transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center font-manrope text-xs text-velmora-charcoal">
              {quantity}
            </span>
            <button
              onClick={() => onUpdateQty(quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-velmora-stone hover:text-velmora-charcoal hover:bg-velmora-cream transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <span className="font-manrope text-sm font-medium text-velmora-charcoal">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
