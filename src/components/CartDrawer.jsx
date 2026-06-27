import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  const total = getCartTotal();
  const shipping = total > 0 ? 0 : 0; // Free shipping
  const grandTotal = total + shipping;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#E5E0D8]">
          <h2 className="font-serif text-xl tracking-[0.05em]">Your Cart</h2>
          <button 
            onClick={closeCart} 
            className="p-2 text-[#5C5752] hover:text-[#1C1917]"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-[#5C5752] mb-6">Your cart is empty</p>
            <Button variant="outline" onClick={closeCart}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="product-name-text text-xs pr-4">{item.name}</p>
                        <p className="text-xs text-[#8A8178] mt-0.5">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-[#8A8178] hover:text-[#1C1917] p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-sm text-[#5C5752] mb-3">${item.price}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[#E5E0D8] hover:border-[#B89778] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center font-mono">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[#E5E0D8] hover:border-[#B89778] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right text-sm font-medium">
                    ${(item.price * item.quantity).toFixed(0)}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E5E0D8] p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#5C5752]">Subtotal</span>
                <span className="font-medium">${total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#5C5752]">Shipping</span>
                <span className="text-[#B89778]">Free</span>
              </div>
              <div className="divider my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${grandTotal}</span>
              </div>
              
              <Button 
                variant="primary" 
                className="w-full mt-2"
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  closeCart();
                }}
              >
                Proceed to Checkout
              </Button>
              
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="block text-center text-xs tracking-[0.1em] text-[#5C5752] hover:text-[#1C1917] mt-2"
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