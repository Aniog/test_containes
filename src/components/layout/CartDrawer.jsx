import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeItem, updateQty, totalItems, totalPrice, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-obsidian/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-champagne" />
            <span className="font-cormorant text-xl font-light tracking-wide text-obsidian">
              Your Cart
            </span>
            {totalItems > 0 && (
              <span className="font-manrope text-xs text-stone ml-1">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-obsidian transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-divider" />
              <p className="font-cormorant text-2xl font-light text-stone">Your cart is empty</p>
              <p className="font-manrope text-xs text-stone/70">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-manrope text-xs uppercase tracking-widest text-champagne border border-champagne px-6 py-3 hover:bg-champagne hover:text-obsidian transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-divider last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-champagne-light/30 to-parchment flex items-center justify-center">
                      <span className="font-cormorant text-xs text-stone/50 text-center px-1">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian leading-tight mb-1">
                      {item.product.name}
                    </p>
                    <p className="font-manrope text-xs text-stone mb-3">{item.variant}</p>

                    <div className="flex items-center justify-between">
                      {/* Qty controls */}
                      <div className="flex items-center border border-divider">
                        <button
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-manrope text-xs text-obsidian">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-obsidian transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-manrope text-sm font-medium text-obsidian">
                          ${(item.product.price * item.qty).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-stone/50 hover:text-red-400 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-divider bg-ivory">
            {/* Free shipping note */}
            <p className="font-manrope text-xs text-stone text-center mb-4">
              ✦ Free worldwide shipping on all orders
            </p>

            <div className="flex items-center justify-between mb-5">
              <span className="font-manrope text-xs uppercase tracking-widest text-stone">Subtotal</span>
              <span className="font-cormorant text-2xl font-light text-obsidian">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-champagne text-obsidian font-manrope text-xs uppercase tracking-widest py-4 hover:bg-champagne-dark transition-all duration-300 mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-divider text-stone font-manrope text-xs uppercase tracking-widest py-3 hover:border-champagne hover:text-champagne transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
