import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal,
    clearCart 
  } = useCart();

  const handleCheckout = () => {
    // Placeholder for future checkout integration
    alert('Thank you for your interest in Velmora. Checkout will be available soon. Your cart has been noted.');
    clearCart();
    closeCart();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#D9D2C8]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} />
            <span className="font-medium tracking-[0.06em] uppercase text-sm">Your Cart</span>
          </div>
          <button onClick={closeCart} className="p-1" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag size={48} className="text-[#D9D2C8] mb-4" />
            <p className="text-[#6B635C] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F1EDE6] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images?.[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="product-name text-xs tracking-[0.04em] leading-tight pr-2">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[#6B635C] mt-0.5">{item.selectedVariant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B635C] hover:text-[#1A1816] p-1"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#D9D2C8]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F8F5F1] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F8F5F1] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-[#B89778]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#D9D2C8] bg-[#F8F5F1]">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-sm tracking-[0.06em] uppercase">Total</span>
                <span className="text-xl font-medium tabular-nums">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#6B635C] mb-4">Shipping calculated at checkout</p>
              
              <button 
                onClick={handleCheckout}
                className="btn btn-primary w-full mb-3"
              >
                Proceed to Checkout
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
