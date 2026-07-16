import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    alert('Checkout would be implemented here. Cart total: $' + getCartTotal());
    closeCart();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="cart-overlay open" 
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#E5DFD4]">
          <h2 className="font-serif text-xl tracking-[0.1em]">Your Cart</h2>
          <button onClick={closeCart} className="text-[#6B665F] hover:text-[#2C2823]">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-[#6B665F] mb-4">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn btn-outline text-sm"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F1EA] flex-shrink-0">
                    <img 
                      src={item.images.primary} 
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
                        className="text-[#6B665F] hover:text-[#B8976F]"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD4]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity - 1)}
                          className="p-1.5 hover:bg-[#F5F1EA]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.cartQuantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity + 1)}
                          className="p-1.5 hover:bg-[#F5F1EA]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-medium">${item.price * item.cartQuantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5DFD4] space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${getCartTotal()}</span>
              </div>
              <p className="text-xs text-[#6B665F]">Shipping calculated at checkout</p>
              <button 
                onClick={handleCheckout}
                className="btn btn-gold w-full"
              >
                Proceed to Checkout
              </button>
              <button 
                onClick={closeCart}
                className="w-full text-sm tracking-[0.05em] uppercase py-3 hover:text-[#B8976F] transition-colors"
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