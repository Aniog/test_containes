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
    getCartTotal 
  } = useCart();

  const total = getCartTotal();
  const shipping = total > 0 ? 0 : 0; // Free shipping
  const grandTotal = total + shipping;

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[60] modal-overlay"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#F8F5F1] z-[70] flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#D4C9B8]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-serif text-xl tracking-[0.1em]">Your Cart</span>
          </div>
          <button onClick={closeCart} className="text-[#6B6058] hover:text-[#2C2522]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-[#D4C9B8] mb-4" />
            <p className="text-[#6B6058] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn btn-primary text-sm"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-[#F1EDE6] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="product-name text-xs tracking-[0.1em] pr-2">{item.name}</h4>
                        <p className="text-xs text-[#6B6058] mt-0.5">{item.variant} Tone</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-[#6B6058] hover:text-[#2C2522] text-xs"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#D4C9B8]">
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-[#F1EDE6] transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-[#F1EDE6] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-sm font-medium tabular-nums">
                        ${(item.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Totals */}
            <div className="border-t border-[#D4C9B8] px-6 py-6 bg-white">
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between text-[#6B6058]">
                  <span>Subtotal</span>
                  <span className="tabular-nums">${total}</span>
                </div>
                <div className="flex justify-between text-[#6B6058]">
                  <span>Shipping</span>
                  <span className="text-[#8B7355]">Free</span>
                </div>
                <div className="divider pt-2" />
                <div className="flex justify-between font-medium pt-1">
                  <span>Total</span>
                  <span className="tabular-nums">${grandTotal}</span>
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
                className="block text-center text-xs tracking-[0.1em] text-[#6B6058] hover:text-[#2C2522] transition-colors"
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
