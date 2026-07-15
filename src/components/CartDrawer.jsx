import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './ui/Icon';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  const handleCheckout = () => {
    // Placeholder for checkout - in real app would navigate to checkout
    alert('Thank you for shopping with Velmora. Checkout would be implemented here.');
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#D9D0C4]">
          <div className="font-serif text-lg tracking-[0.05em]">Your Cart</div>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <Icons.Close />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="text-[#B89778] mb-4">
              <Icons.Cart size={48} strokeWidth={1} />
            </div>
            <p className="text-[#6B6058] mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="btn btn-gold"
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
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-[#F1EDE6] flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center text-[#9A8F85] text-[10px] tracking-widest">
                      IMG
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="product-name text-sm tracking-[0.08em] pr-2">{item.name}</div>
                        <div className="text-xs text-[#6B6058] mt-0.5">{item.variant.label} Tone</div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#9A8F85] hover:text-[#2C2522]"
                        aria-label="Remove item"
                      >
                        <Icons.Close size={14} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="qty-selector">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="qty-btn"
                          aria-label="Decrease quantity"
                        >
                          <Icons.Minus />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="qty-btn"
                          aria-label="Increase quantity"
                        >
                          <Icons.Plus />
                        </button>
                      </div>
                      <div className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(0)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#D9D0C4] bg-[#F1EDE6]">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-sm tracking-[0.05em] uppercase">Total</span>
                <span className="text-xl font-serif">${cartTotal.toFixed(0)}</span>
              </div>
              <p className="text-xs text-[#6B6058] mb-4">Shipping calculated at checkout</p>
              
              <button
                onClick={handleCheckout}
                className="btn btn-primary w-full mb-3"
              >
                Proceed to Checkout
              </button>
              
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-xs tracking-[0.1em] uppercase text-[#6B6058] hover:text-[#2C2522]"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
