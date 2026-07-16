import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
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
        className="fixed inset-0 bg-black/40 z-[60]"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#F8F6F3] z-[70] flex flex-col cart-drawer open">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E0D8]">
          <div className="text-lg tracking-[0.1em]">YOUR BAG</div>
          <button onClick={() => setIsCartOpen(false)} className="p-2">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-24 h-24 bg-[#E5E0D8] flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-sm tracking-wider pr-2">{item.name}</div>
                        <div className="text-xs text-[#6B665F] mt-1">{item.selectedVariant} • ${item.price}</div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B665F] hover:text-[#2C2825]"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-[#E5E0D8]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity - 1)}
                          className="p-2 hover:bg-[#E5E0D8]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-4 text-sm">{item.cartQuantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity + 1)}
                          className="p-2 hover:bg-[#E5E0D8]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="font-medium">${(item.price * item.cartQuantity).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E5E0D8] p-6 space-y-4">
              <div className="flex justify-between text-lg">
                <span>TOTAL</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#6B665F]">Shipping calculated at checkout</p>
              <button className="btn btn-primary w-full">
                CHECKOUT
              </button>
              <Link 
                to="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-sm tracking-[0.05em] hover:text-[#8B7355]"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#E5E0D8] mb-4" />
            <div className="text-lg mb-2">Your bag is empty</div>
            <p className="text-sm text-[#6B665F] mb-8">Discover our collection of fine jewelry</p>
            <Link 
              to="/shop" 
              onClick={() => setIsCartOpen(false)}
              className="btn btn-primary"
            >
              SHOP NOW
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;