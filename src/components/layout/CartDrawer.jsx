import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="cart-overlay" onClick={() => setIsOpen(false)} />

      {/* Drawer */}
      <aside className="fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-blush">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-champagne" />
            <span className="font-serif text-lg text-velvet">Your Cart</span>
            {count > 0 && (
              <span className="font-sans text-xs text-stone">({count} {count === 1 ? 'item' : 'items'})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-velvet transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-blush" />
              <p className="font-serif text-xl text-velvet">Your cart is empty</p>
              <p className="font-sans text-sm text-stone">Discover our curated collection</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase border border-champagne text-champagne px-6 py-3 hover:bg-champagne hover:text-velvet transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-blush last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 flex items-center justify-center">
                    <span className="font-serif text-xs text-stone text-center leading-tight px-1">
                      {item.product.name.split(' ')[0]}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-wide text-velvet uppercase leading-tight mb-1">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-stone capitalize mb-3">{item.variant} tone</p>

                    <div className="flex items-center justify-between">
                      {/* Qty controls */}
                      <div className="flex items-center border border-blush">
                        <button
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center font-sans text-xs text-velvet">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-sans text-sm font-500 text-velvet">
                          ${(item.product.price * item.qty).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-stone hover:text-velvet transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={14} />
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
          <div className="px-6 py-5 border-t border-blush bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs text-stone uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-xl text-velvet">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-velvet text-ivory font-sans text-xs tracking-widest uppercase py-4 hover:bg-champagne hover:text-velvet transition-all duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-mink text-stone font-sans text-xs tracking-widest uppercase py-3 hover:border-velvet hover:text-velvet transition-all duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
