import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
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
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E0D8]">
          <h2 className="serif text-xl tracking-[0.1em]">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em] pr-2">{item.name}</p>
                        <p className="text-xs text-[#6B665F] mt-0.5">{item.selectedVariant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B665F] hover:text-[#2C2823]"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5E0D8]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F5F2ED]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F2ED]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#E5E0D8]">
              <div className="flex justify-between mb-6 text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-gold w-full mb-3">
                Checkout
              </button>
              <p className="text-center text-xs text-[#6B665F]">
                Shipping calculated at checkout
              </p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag size={48} className="text-[#E5E0D8] mb-4" />
            <p className="text-[#6B665F] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={() => setIsCartOpen(false)}
              className="btn btn-outline"
            >
              Browse Collection
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;