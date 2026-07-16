import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora. Checkout would connect to a payment processor in production.');
    closeCart();
  };

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div className={`cart-drawer fixed top-0 right-0 h-full w-full max-w-md bg-[#F8F5F1] z-50 flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5DDD1]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-lg font-medium tracking-wider">YOUR CART</h2>
          </div>
          <button onClick={closeCart} className="p-2 hover:bg-[#E5DDD1] transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag className="w-12 h-12 text-[#B8A48F] mb-4" />
            <p className="text-[#5C4E42] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn btn-outline"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#EDE6DC] flex-shrink-0 overflow-hidden flex items-center justify-center">
                    <div className="text-[#B89778] text-xs tracking-[0.15em] text-center px-1">
                      {item.name.split(' ').slice(0, 2).join(' ').toUpperCase()}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-widest">{item.name}</p>
                        <p className="text-xs text-[#8C7660] mt-0.5">{item.selectedVariant} Tone</p>
                      </div>
                      <p className="text-sm font-medium">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DDD1]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#E5DDD1] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#E5DDD1] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xs text-[#8C7660] hover:text-[#1C1917] underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#E5DDD1] space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#5C4E42]">SUBTOTAL</span>
                <span className="font-medium">${getCartTotal()}</span>
              </div>
              <p className="text-xs text-[#8C7660]">Shipping calculated at checkout</p>
              <button 
                onClick={handleCheckout}
                className="btn btn-primary w-full"
              >
                PROCEED TO CHECKOUT
              </button>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn btn-outline w-full text-center block"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
