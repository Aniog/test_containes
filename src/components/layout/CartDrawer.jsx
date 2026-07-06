import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-350 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-charcoal" />
            <span className="font-cormorant text-lg font-light tracking-widest uppercase text-charcoal">
              Your Bag
            </span>
            {totalItems > 0 && (
              <span className="font-inter text-xs text-taupe">({totalItems})</span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-taupe hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-divider" />
              <p className="font-cormorant text-xl font-light text-taupe">Your bag is empty</p>
              <p className="font-inter text-xs text-taupe/70 tracking-wide">
                Discover our curated collection
              </p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 font-inter text-xs uppercase tracking-widest border border-charcoal text-charcoal px-6 py-3 hover:bg-charcoal hover:text-cream transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-4 border-b border-divider last:border-0">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-sand flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-sand to-gold-light flex items-center justify-center">
                      <span className="font-cormorant text-xs text-taupe italic">
                        {item.product.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm font-medium uppercase tracking-widest text-charcoal leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-inter text-xs text-taupe mt-0.5">{item.variant}</p>
                    <p className="font-inter text-sm font-medium text-charcoal mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity + Remove */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-divider">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-inter text-xs text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-taupe hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-taupe hover:text-charcoal transition-colors"
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
          <div className="px-6 py-5 border-t border-divider bg-cream">
            <div className="flex justify-between items-center mb-1">
              <span className="font-inter text-xs uppercase tracking-widest text-taupe">Subtotal</span>
              <span className="font-cormorant text-xl font-light text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="font-inter text-xs text-taupe/70 mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-charcoal text-cream font-inter text-xs uppercase tracking-widest py-4 hover:bg-gold-dark transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 border border-divider text-taupe font-inter text-xs uppercase tracking-widest py-3 hover:border-charcoal hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
