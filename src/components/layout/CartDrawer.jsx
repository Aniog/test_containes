import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-obsidian/40 z-50 animate-fadeInOverlay"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-ivory z-50 flex flex-col animate-slideInRight shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-charcoal" />
            <span className="font-cormorant text-lg tracking-widest2 text-obsidian">
              Your Bag ({totalItems})
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-warm-gray hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-gold/40" />
              <p className="font-cormorant text-xl text-charcoal">Your bag is empty</p>
              <p className="font-inter text-xs text-warm-gray tracking-wide">
                Discover our curated collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs tracking-[0.12em] uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-gold/15">
              {items.map(item => (
                <div key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-cream flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-cream to-gold/20 flex items-center justify-center">
                      <span className="font-cormorant text-xs text-warm-gray italic">
                        {item.product.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={() => setIsOpen(false)}
                      className="font-cormorant text-sm uppercase tracking-widest2 text-obsidian hover:text-gold transition-colors block truncate"
                    >
                      {item.product.name}
                    </Link>
                    <p className="font-inter text-xs text-warm-gray mt-0.5">{item.variant}</p>
                    <p className="font-inter text-sm text-charcoal mt-1 font-medium">
                      ${item.product.price}
                    </p>

                    {/* Quantity + Remove */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-gold/30">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center font-inter text-xs text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold/20 px-6 py-6 bg-ivory">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs text-warm-gray tracking-wide uppercase">Subtotal</span>
              <span className="font-cormorant text-xl text-obsidian">${subtotal.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-warm-gray mb-5">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-obsidian text-ivory font-inter text-xs tracking-[0.12em] uppercase py-4 hover:bg-charcoal transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 border border-gold/40 text-charcoal font-inter text-xs tracking-[0.12em] uppercase py-3 hover:border-gold transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
