import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-warm-lg transition-transform duration-500 ease-luxury ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gold/15">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-gold" />
            <h2 className="font-serif text-xl text-charcoal tracking-wide">
              Your Cart
              {totalItems > 0 && (
                <span className="font-sans text-sm text-stone ml-2 font-normal">({totalItems})</span>
              )}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-stone hover:text-charcoal bg-transparent border-none transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-gold/40" />
              <p className="font-serif text-xl text-charcoal">Your cart is empty</p>
              <p className="text-sm text-stone">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-charcoal text-cream text-xs tracking-widest uppercase px-8 py-3 hover:bg-gold transition-colors duration-300"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map(item => (
                <li key={item.key} className="flex gap-4 pb-6 border-b border-gold/10 last:border-0">
                  {/* Product thumbnail — styled initial placeholder */}
                  <div className="w-20 h-20 bg-parchment flex-shrink-0 overflow-hidden flex items-center justify-center border border-gold/10">
                    <span className="font-serif text-2xl text-gold/40 select-none">
                      {item.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <p
                      className="font-serif text-sm uppercase tracking-widest text-charcoal leading-tight"
                    >
                      {item.name}
                    </p>
                    {item.variant && (
                      <p className="text-xs text-stone mt-1">{item.variant}</p>
                    )}
                    <p className="text-sm text-gold font-medium mt-1">${item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-gold/30 text-stone hover:border-gold hover:text-charcoal bg-transparent transition-colors p-0"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-sm text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-gold/30 text-stone hover:border-gold hover:text-charcoal bg-transparent transition-colors p-0"
                        aria-label="Increase quantity"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.key)}
                    className="p-1 text-stone/50 hover:text-charcoal bg-transparent border-none transition-colors self-start"
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
          <div className="px-8 py-6 border-t border-gold/15 bg-parchment/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs tracking-widest uppercase text-stone">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-charcoal text-cream text-xs tracking-widest uppercase py-4 hover:bg-gold transition-colors duration-300 font-medium">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 bg-transparent border border-charcoal/30 text-charcoal text-xs tracking-widest uppercase py-3 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
