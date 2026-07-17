import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-velvet/50 z-50 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-500 ease-luxury ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-mink/30">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-champagne" />
            <span className="font-sans text-xs tracking-widest2 uppercase text-velvet">
              Your Cart {count > 0 && `(${count})`}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-velvet transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-mink" />
              <p className="font-serif text-xl text-stone italic">Your cart is empty</p>
              <p className="font-sans text-xs text-stone/70">Discover our collection and add something beautiful.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-outline mt-2"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-mink/20 last:border-0">
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-serif text-2xl text-champagne select-none">
                      {item.product.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span id={`cart-item-${item.key}-name`} className="product-name text-xs block mb-1 truncate">
                      {item.product.name}
                    </span>
                    {item.variant && (
                      <p className="font-sans text-xs text-stone mb-2">{item.variant}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 border border-mink/40">
                        <button
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-sans text-xs w-5 text-center text-velvet">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-7 h-7 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-sans text-sm font-semibold text-velvet">
                        ${(item.product.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone/50 hover:text-stone transition-colors self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X size={14} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-mink/30 bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs tracking-widest2 uppercase text-stone">Subtotal</span>
              <span className="font-serif text-xl text-velvet">${total.toFixed(2)}</span>
            </div>
            <p className="font-sans text-xs text-stone/60 mb-5">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full text-center block">
              Proceed to Checkout
            </button>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="block text-center font-sans text-xs tracking-widest2 uppercase text-stone hover:text-champagne transition-colors mt-4"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
