import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-espresso/40 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-ivory z-50 flex flex-col shadow-2xl shadow-espresso/20 transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-mist">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-gold" />
            <span className="font-cormorant text-lg font-light tracking-widest2 text-charcoal">
              YOUR BAG
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-warm-gray hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-mist" />
              <p className="font-cormorant text-xl font-light text-warm-gray">Your bag is empty</p>
              <p className="font-inter text-xs text-warm-gray/70">Add something beautiful</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-widest2 text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-espresso transition-colors"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-mist">
              {items.map((item) => (
                <div key={item.key} className="py-5 flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-blush flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <span className="font-cormorant text-2xl text-gold/40 font-light">
                      {item.product.name[0]}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p
                          className="font-cormorant text-sm uppercase tracking-widest2 text-charcoal leading-tight"
                        >
                          {item.product.name}
                        </p>
                        <p className="font-inter text-xs text-warm-gray mt-0.5 capitalize">
                          {item.variant} tone
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-warm-gray/60 hover:text-charcoal transition-colors flex-shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-2 border border-mist">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="font-inter text-xs w-5 text-center text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-warm-gray hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>

                      <span className="font-inter text-sm font-medium text-charcoal">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-mist px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter text-xs uppercase tracking-widest2 text-warm-gray">
                Subtotal
              </span>
              <span className="font-cormorant text-xl font-light text-charcoal">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <p className="font-inter text-xs text-warm-gray/70 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-gold text-espresso font-inter text-xs uppercase tracking-widest2 py-4 hover:bg-gold-dark transition-colors font-medium">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full border border-mist text-warm-gray font-inter text-xs uppercase tracking-widest2 py-3 hover:border-charcoal hover:text-charcoal transition-colors"
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
