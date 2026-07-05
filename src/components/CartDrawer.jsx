import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#E5DFD4]">
          <h3 className="heading-serif text-xl">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-[#6B665F] mb-4">Your cart is empty</p>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="btn btn-outline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F1EA] flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="product-name text-xs tracking-[0.1em] mb-1 pr-6">{item.name}</div>
                    <div className="text-xs text-[#6B665F] mb-2">{item.selectedVariant}</div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-[#E5DFD4] hover:bg-[#F5F1EA]"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-[#E5DFD4] hover:bg-[#F5F1EA]"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="text-sm">${item.price * item.quantity}</div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-xs text-[#6B665F] hover:text-[#2C2823] mt-1 underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5DFD4]">
              <div className="flex justify-between mb-6 text-sm">
                <span>Total</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <Link 
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn btn-primary w-full mb-3"
              >
                Checkout
              </Link>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline w-full"
              >
                Continue Shopping
              </button>
              <p className="text-center text-xs text-[#6B665F] mt-4">Free worldwide shipping on all orders</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;