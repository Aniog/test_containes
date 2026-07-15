import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  // Listen for open-cart event from toast
  React.useEffect(() => {
    const handleOpenCart = () => onClose && window.dispatchEvent(new CustomEvent('cart-open'));
    window.addEventListener('open-cart', handleOpenCart);
    return () => window.removeEventListener('open-cart', handleOpenCart);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#E5E0D8]">
          <p className="tracking-[0.15em] text-lg">YOUR CART</p>
          <button onClick={onClose} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <p className="text-[#6B6763] mb-6">Your cart is empty</p>
            <Link to="/shop" onClick={onClose} className="btn-outline text-sm">
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1 overflow-auto">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F0EDE8] flex-shrink-0 rounded-sm overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="product-name text-sm tracking-[0.1em] pr-6">{item.name}</p>
                    <p className="text-xs text-[#6B6763] mt-0.5">{item.variant}</p>
                    <p className="mt-1">${item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5E0D8]">
                        <button onClick={() => updateQuantity(index, item.quantity - 1)} className="px-2 py-1 hover:bg-[#F8F6F3]">
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)} className="px-2 py-1 hover:bg-[#F8F6F3]">
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-xs tracking-wide text-[#8B7355] hover:underline"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5E0D8] bg-white">
              <div className="flex justify-between mb-6 text-lg">
                <span>TOTAL</span>
                <span>${cartTotal}</span>
              </div>
              <button
                onClick={() => alert('Thank you! This is a demo storefront. Checkout would connect to a payment processor.')}
                className="btn-primary w-full mb-3"
              >
                CHECKOUT
              </button>
              <p className="text-center text-xs text-[#6B6763]">or 4 interest-free payments of ${(cartTotal / 4).toFixed(0)} with Shop Pay</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;