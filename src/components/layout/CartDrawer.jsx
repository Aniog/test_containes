import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

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
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full md:w-[420px] bg-[#F8F5F0] z-50 flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D8]">
          <div className="text-sm tracking-[0.1em] uppercase">Your Cart</div>
          <button onClick={() => setIsCartOpen(false)} className="p-1">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-[#8B7E6B]">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#E5E0D8] flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-sm tracking-wider">{item.name}</div>
                        <div className="text-xs text-[#8B7E6B] mt-0.5">{item.selectedVariant}</div>
                      </div>
                      <button onClick={() => removeFromCart(item.cartId)} className="text-[#8B7E6B]">
                        <X size={14} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-[#E5E0D8]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#E5E0D8]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm px-1">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#E5E0D8]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-sm">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#E5E0D8] space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="text-xs text-[#8B7E6B]">
                Shipping calculated at checkout
              </div>
              <Button 
                variant="primary" 
                className="w-full"
                onClick={() => alert('Checkout would be implemented here')}
              >
                Proceed to Checkout
              </Button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full text-sm tracking-[0.08em] uppercase py-3"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;