import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[60] overlay" 
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F1] z-[70] flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD6]">
          <div className="font-serif text-xl tracking-[0.08em]">Your Cart</div>
          <button onClick={closeCart} className="p-2 -mr-2">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="text-[#6B6058] mb-4">Your cart is empty</div>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn btn-outline text-sm"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#E5DFD6] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-sm tracking-[0.1em] leading-tight pr-2">{item.name}</div>
                        <div className="text-xs text-[#6B6058] mt-0.5">{item.variant.toUpperCase()} TONE</div>
                      </div>
                      <div className="text-sm font-medium whitespace-nowrap">${item.price}</div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD6]">
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#E5DFD6] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#E5DFD6] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-[#6B6058] hover:text-[#2C2522] p-1"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E5DFD6] px-6 py-6 bg-white">
              <div className="space-y-2 text-sm mb-5">
                <div className="flex justify-between">
                  <span className="text-[#6B6058]">Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B6058]">Shipping</span>
                  <span className="text-[#B89778]">Free</span>
                </div>
                <div className="divider pt-2" />
                <div className="flex justify-between font-medium pt-1">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  closeCart();
                }}
                className="btn btn-primary w-full mb-3"
              >
                Proceed to Checkout
              </button>
              
              <Link 
                to="/shop" 
                onClick={closeCart}
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
}

export default CartDrawer;
