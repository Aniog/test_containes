import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
          <span className="font-inter text-xs tracking-widest uppercase text-charcoal">
            Your Cart {items.length > 0 && `(${items.length})`}
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-charcoal hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-stone" />
              <p className="font-cormorant text-2xl text-charcoal">Your cart is empty</p>
              <p className="font-inter text-xs text-warm-gray tracking-wide">
                Discover our curated collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs tracking-widest uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-stone">
              {items.map((item) => (
                <li key={item.key} className="py-5 flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cream to-stone/40 flex items-center justify-center">
                      <span className="font-cormorant text-xs text-warm-gray italic">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-inter text-xs tracking-widest uppercase text-charcoal truncate">
                      {item.product.name}
                    </p>
                    <p className="font-inter text-xs text-warm-gray mt-0.5">{item.variant}</p>
                    <p className="font-inter text-sm text-charcoal mt-1 font-medium">
                      ${item.product.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-inter text-xs text-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-stone hover:text-charcoal transition-colors self-start mt-0.5"
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
          <div className="px-6 py-6 border-t border-stone space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs tracking-widest uppercase text-warm-gray">Subtotal</span>
              <span className="font-cormorant text-xl text-charcoal">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-warm-gray">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-charcoal text-ivory font-inter text-xs tracking-widest uppercase py-4 hover:bg-gold transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-stone text-charcoal font-inter text-xs tracking-widest uppercase py-3 hover:border-charcoal transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
