import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

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
        className="overlay open" 
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="serif text-2xl">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-6 text-center text-[var(--color-taupe)]">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1 text-sm">
                    <p className="product-name text-sm mb-1">{item.name}</p>
                    <p className="text-[var(--color-taupe)]">{item.selectedVariant}</p>
                    <p className="mt-1">${item.price}</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="p-1"
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="p-1"
                      >
                        <Plus size={14} />
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="ml-auto text-xs uppercase tracking-widest text-[var(--color-taupe)] hover:text-[var(--color-base)]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t mt-auto">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
              <button className="btn w-full mb-3">
                Proceed to Checkout
              </button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline w-full"
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