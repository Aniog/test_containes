import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/40 z-50" 
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="serif text-xl">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)} className="p-2">
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-[#8B7E74] mb-4">Your cart is empty</p>
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
                  <div className="w-20 h-20 bg-[#FAF8F4] flex-shrink-0">
                    <img 
                      src={item.images.primary} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-wider">{item.name}</p>
                        <p className="text-xs text-[#8B7E74] mt-1">{item.selectedVariant}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.cartId)} className="text-[#8B7E74]">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5E0D8]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity - 1)}
                          className="p-1.5 hover:bg-[#FAF8F4]"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.cartQuantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity + 1)}
                          className="p-1.5 hover:bg-[#FAF8F4]"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-medium">${item.price * item.cartQuantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t bg-[#FAF8F4]">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <button className="btn btn-primary w-full mb-3">
                Checkout
              </button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn btn-ghost w-full text-sm"
              >
                Continue Shopping
              </button>
              <p className="text-center text-xs text-[#8B7E74] mt-4">
                Free worldwide shipping on orders over $75
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;