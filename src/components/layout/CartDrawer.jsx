import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-velvet/40 backdrop-blur-sm transition-opacity duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-50 bg-cream flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-mink/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-champagne" />
            <span className="font-sans text-xs tracking-widest uppercase text-velvet">
              Your Cart {totalItems > 0 && `(${totalItems})`}
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
              <ShoppingBag size={40} strokeWidth={1} className="text-blush" />
              <p className="font-serif text-xl text-velvet">Your cart is empty</p>
              <p className="font-sans text-xs text-stone">Add something beautiful to get started.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-sans text-xs tracking-widest uppercase text-champagne border border-champagne px-6 py-2.5 hover:bg-champagne hover:text-velvet transition-colors duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 py-4 border-b border-mink/10">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blush/40 to-parchment flex items-center justify-center">
                      <span className="font-serif text-champagne text-lg">V</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[10px] tracking-widest uppercase text-velvet font-medium leading-tight mb-0.5">
                      {item.product.name}
                    </p>
                    {item.variant && (
                      <p className="font-sans text-[10px] text-stone mb-2">{item.variant}</p>
                    )}
                    <p className="font-serif text-base text-velvet">${item.product.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-stone hover:text-velvet transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} strokeWidth={2} />
                      </button>
                      <span className="font-sans text-xs text-velvet w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-stone hover:text-velvet transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} strokeWidth={2} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone hover:text-velvet transition-colors self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X size={14} strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-mink/20 bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-sans text-xs text-stone uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-xl text-velvet">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-sans text-[10px] text-stone mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-champagne text-velvet font-sans text-xs tracking-widest uppercase font-semibold py-4 hover:bg-gold transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 font-sans text-xs tracking-widest uppercase text-stone hover:text-velvet py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
