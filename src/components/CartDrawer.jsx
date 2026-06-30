import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
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
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-[#E5DFD4] flex items-center justify-between">
          <div>
            <div className="font-serif text-xl tracking-[0.1em]">Your Cart</div>
            <div className="text-xs text-[#6B665E] mt-0.5">{cart.length} items</div>
          </div>
          <button onClick={closeCart} className="text-[#6B665E] hover:text-[#2C2823]">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <div className="text-[#6B665E] mb-4">Your cart is empty</div>
            <button 
              onClick={closeCart}
              className="btn btn-outline text-sm"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="divide-y divide-[#E5DFD4]">
              {cart.map((item) => (
                <div key={item.cartId} className="p-6 flex gap-4">
                  <div className="w-20 h-20 bg-[#F1EDE6] flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="product-name text-sm tracking-[0.08em] pr-6">{item.name}</div>
                    <div className="text-xs text-[#6B665E] mt-0.5">{item.selectedVariant}</div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 border border-[#E5DFD4]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity - 1)}
                          className="p-1.5 hover:bg-[#F8F5F1]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm px-1">{item.cartQuantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity + 1)}
                          className="p-1.5 hover:bg-[#F8F5F1]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="text-sm font-medium">${item.price * item.cartQuantity}</div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-xs text-[#6B665E] hover:text-[#8B7355] mt-2 underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-[#E5DFD4] p-6 mt-auto">
              <div className="flex justify-between mb-4 text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <p className="text-xs text-[#6B665E] mb-4">Shipping calculated at checkout</p>
              <button className="btn btn-primary w-full mb-3">
                Checkout
              </button>
              <button 
                onClick={closeCart}
                className="btn btn-outline w-full text-sm"
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