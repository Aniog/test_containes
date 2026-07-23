import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} strokeWidth={1.5} className="text-charcoal" />
            <span className="font-inter text-xs uppercase tracking-widest text-charcoal">
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
              <ShoppingBag size={40} strokeWidth={1} className="text-light-gray" />
              <p className="font-cormorant text-2xl text-charcoal">Your bag is empty</p>
              <p className="font-inter text-sm text-warm-gray">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 font-inter text-xs uppercase tracking-widest border border-charcoal text-charcoal px-8 py-3 hover:bg-charcoal hover:text-cream transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map(({ key, product, variant, quantity }) => (
                <div key={key} className="flex gap-4">
                  {/* Product image — styled monogram thumbnail */}
                  <div className="w-20 h-20 bg-ivory flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-cormorant text-2xl text-gold/60 select-none">
                      {product.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <span id={`cart-title-${key}`} className="font-cormorant text-sm uppercase tracking-widest text-charcoal block truncate">
                      {product.name}
                    </span>
                    {variant && (
                      <span className="font-inter text-xs text-warm-gray mt-0.5 block">{variant}</span>
                    )}
                    <span className="font-inter text-sm text-charcoal mt-1 block">${product.price}</span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(key, quantity - 1)}
                        className="text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} strokeWidth={1.5} />
                      </button>
                      <span className="font-inter text-sm text-charcoal w-4 text-center">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(key, quantity + 1)}
                        className="text-warm-gray hover:text-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(key)}
                    className="text-light-gray hover:text-charcoal transition-colors self-start mt-0.5"
                    aria-label="Remove item"
                  >
                    <X size={16} strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-border">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-widest text-warm-gray">Subtotal</span>
              <span className="font-cormorant text-xl text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-light-gray mb-5">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-charcoal text-cream font-inter text-xs uppercase tracking-widest py-4 hover:bg-gold transition-colors duration-200">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 font-inter text-xs uppercase tracking-widest text-warm-gray hover:text-charcoal transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
