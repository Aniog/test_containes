import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-ivory shadow-drawer flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-obsidian" strokeWidth={1.5} />
            <span className="font-cormorant text-lg font-light tracking-wide text-obsidian">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-inter text-xs text-stone ml-1">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag className="w-10 h-10 text-linen" strokeWidth={1} />
              <p className="font-cormorant text-xl font-light text-stone">Your cart is empty</p>
              <p className="font-inter text-xs text-stone/70">
                Discover our curated collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-[0.12em] text-champagne hover:text-champagne-dark transition-colors border-b border-champagne pb-0.5"
              >
                Shop Now
              </Link>
            </div>
          ) : (
          <div className="flex flex-col divide-y divide-linen">
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
          <div className="border-t border-linen px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs uppercase tracking-[0.12em] text-stone">
                Subtotal
              </span>
              <span className="font-cormorant text-xl font-light text-obsidian">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="font-inter text-[11px] text-stone/70 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-obsidian text-ivory font-inter text-xs uppercase tracking-[0.12em] py-4 hover:bg-champagne-dark transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-linen text-obsidian font-inter text-xs uppercase tracking-[0.12em] py-3 hover:border-obsidian transition-colors duration-300"
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
    <div className="flex gap-4 py-5">
      {/* Image placeholder */}
      <div className="w-20 h-20 bg-linen flex-shrink-0 overflow-hidden">
        <img
          src={product.thumbnailUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div>
            <p className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian leading-tight">
              {product.name}
            </p>
            <p className="font-inter text-[11px] text-stone mt-0.5">{variant}</p>
          </div>
          <button
            onClick={() => onRemove(key)}
            className="text-stone/50 hover:text-obsidian transition-colors flex-shrink-0"
            aria-label="Remove item"
          >
            <X className="w-3.5 h-3.5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity */}
          <div className="flex items-center border border-linen">
            <button
              onClick={() => onUpdateQty(key, quantity - 1)}
              className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" strokeWidth={1.5} />
            </button>
            <span className="w-7 h-7 flex items-center justify-center font-inter text-xs text-obsidian">
              {quantity}
            </span>
            <button
              onClick={() => onUpdateQty(key, quantity + 1)}
              className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" strokeWidth={1.5} />
            </button>
          </div>

          <span className="font-inter text-sm font-medium text-obsidian">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
