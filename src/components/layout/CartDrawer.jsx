import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    totalItems, 
    totalPrice 
  } = useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 transform transition-transform duration-300 flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-[#E7E5E4]">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-[#57534E] hover:text-[#1C1917] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#F5F3EF] flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-[#A8A29E]" />
            </div>
            <p className="font-serif text-lg text-[#1C1917] mb-2">Your bag is empty</p>
            <p className="text-sm text-[#57534E] mb-6">
              Discover our collection of demi-fine jewelry
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div 
                    key={`${item.id}-${item.variant}-${index}`}
                    className="flex gap-4"
                  >
                    {/* Image */}
                    <div className="w-24 h-28 bg-[#F5F3EF] rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <h3 className="font-serif text-sm tracking-[0.1em] text-[#1C1917] leading-tight">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-[#A8A29E] hover:text-[#1C1917] transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {item.variant && (
                        <p className="text-xs text-[#57534E] mt-1">{item.variant}</p>
                      )}
                      
                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity */}
                        <div className="flex items-center border border-[#E7E5E4] rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 text-[#57534E] hover:text-[#1C1917] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 text-[#57534E] hover:text-[#1C1917] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-medium text-[#1C1917]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[#E7E5E4] p-4 md:p-6 bg-[#FAFAF8]">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#57534E]">Subtotal</span>
                <span className="font-medium text-[#1C1917]">${totalPrice.toFixed(2)}</span>
              </div>
              
              <p className="text-xs text-[#A8A29E] mb-4">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button className="w-full btn-gold mb-3">
                Checkout
              </button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-[#57534E] hover:text-[#1C1917] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
