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
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#E5DFD6]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-[0.1em] text-sm uppercase">Your Cart</span>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 -mr-2 text-[#6B6560] hover:text-[#2C2825]"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag size={48} className="text-[#E5DFD6] mb-4" />
            <p className="text-[#6B6560] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn btn-outline"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0">
                    <img 
                      src={`https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <div className="product-name text-sm pr-4">{item.name}</div>
                        <div className="text-xs text-[#9A9289] mt-0.5">{item.selectedVariant}</div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#9A9289] hover:text-[#2C2825] p-1 -mr-1"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="qty-selector">
                        <button 
                          onClick={() => updateQuantity(item.cartId, (item.quantity || 1) - 1)}
                          className="qty-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{item.quantity || 1}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, (item.quantity || 1) + 1)}
                          className="qty-btn"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <span className="font-medium">${item.price * (item.quantity || 1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="border-t border-[#E5DFD6] p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B6560]">Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#6B6560]">Shipping</span>
                <span className="text-[#5C6B5E]">Free</span>
              </div>
              <div className="divider my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${grandTotal}</span>
              </div>

              <button 
                className="btn btn-primary btn-full mt-4"
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  closeCart();
                }}
              >
                Proceed to Checkout
              </button>
              
              <p className="text-center text-xs text-[#9A9289] pt-2">
                or 4 interest-free payments of ${(grandTotal / 4).toFixed(0)} with
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
