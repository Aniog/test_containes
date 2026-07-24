import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from './Button';
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

  const total = getCartTotal();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-40 backdrop" 
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 h-full w-full max-w-md bg-[#F8F5F1] z-50 shadow-2xl flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#D4CFC6]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-lg font-medium tracking-wide">Your Cart</h2>
          </div>
          <button 
            onClick={closeCart} 
            className="p-2 hover:bg-[#F1EDE6] rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-[#D4CFC6] mb-4" />
            <p className="text-[#6B645C] mb-6">Your cart is empty</p>
            <Button variant="outline" onClick={closeCart}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F1EDE6] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images?.[0]?.url} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="product-name text-sm tracking-widest text-[#2C2825]">{item.name}</p>
                        <p className="text-xs text-[#6B645C] mt-0.5">{item.selectedVariant === 'gold' ? 'Gold Tone' : 'Silver Tone'}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B645C] hover:text-[#2C2825] p-1"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm font-medium mb-3">${item.price}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[#D4CFC6]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F1EDE6] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F1EDE6] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium tabular-nums">
                        ${(item.price * item.quantity).toFixed(0)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#D4CFC6] px-6 py-6 space-y-4">
              <div className="flex justify-between items-baseline text-lg">
                <span className="font-medium">Total</span>
                <span className="font-medium tabular-nums">${total}</span>
              </div>
              <p className="text-xs text-[#6B645C]">Shipping calculated at checkout</p>
              
              <Button 
                variant="accent" 
                className="w-full"
                onClick={() => {
                  alert('Thank you for your interest! In a real store, this would proceed to checkout.');
                  closeCart();
                }}
              >
                Proceed to Checkout
              </Button>
              
              <button 
                onClick={closeCart}
                className="w-full text-sm text-[#6B645C] hover:text-[#2C2825] py-2 transition-colors"
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
