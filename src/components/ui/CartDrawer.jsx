import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
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
        className="cart-overlay open" 
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="cart-drawer open">
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E8E4DE]">
            <h2 className="font-serif-custom text-xl tracking-[0.08em]">YOUR CART</h2>
            <button 
              onClick={closeCart} 
              className="p-2 hover:text-[#C5A46E] transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <p className="text-[#6B665F] mb-6">Your cart is empty</p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn-outline"
              >
                BROWSE COLLECTION
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-[#F8F5F1] flex-shrink-0 overflow-hidden border border-[#E8E4DE]">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="product-name text-sm tracking-[0.06em] leading-tight">{item.name}</p>
                          <p className="text-xs text-[#6B665F] mt-1">{item.variant}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-[#6B665F] hover:text-[#1A1816] p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity */}
                        <div className="qty-selector text-sm">
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="qty-btn"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="qty-value text-xs">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="qty-btn"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-[#E8E4DE]">
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#6B665F]">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B665F]">Shipping</span>
                    <span className="text-[#C5A46E]">Free</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#E8E4DE] font-medium">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  className="btn-gold w-full mb-3"
                  onClick={() => {
                    alert('Checkout would be implemented here. Cart is ready for backend integration.');
                  }}
                >
                  CHECKOUT
                </button>
                
                <Link 
                  to="/shop" 
                  onClick={closeCart}
                  className="block text-center text-sm text-[#6B665F] hover:text-[#1A1816] transition-colors"
                >
                  Continue Shopping
                </Link>

                <p className="text-[10px] text-center text-[#6B665F] mt-4 tracking-[0.05em]">
                  Free worldwide shipping • 30-day returns
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
