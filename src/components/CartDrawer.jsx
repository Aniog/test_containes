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
      {/* Overlay */}
      <div 
        className="cart-overlay open" 
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="cart-drawer open">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD3]">
          <span className="text-sm tracking-[0.1em]">YOUR CART</span>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[#6B665F] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={() => setIsCartOpen(false)}
              className="btn btn-primary"
            >
              Shop Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-auto px-6 py-4">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4 py-4 border-b border-[#E5DFD3]">
                  <div className="w-20 h-20 bg-[#F5F2EB] flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm pr-2">{item.name}</p>
                        <p className="text-xs text-[#6B665F] mt-0.5">{item.selectedVariant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B665F] hover:text-[#2C2823]"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F8F5F1]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F8F5F1]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#E5DFD3]">
              <div className="flex justify-between mb-6 text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-full mb-3">
                CHECKOUT
              </button>
              <p className="text-center text-xs text-[#6B665F]">
                Shipping calculated at checkout
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;