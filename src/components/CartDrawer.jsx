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

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="text-lg font-medium tracking-widest">YOUR CART</h2>
            </div>
            <button 
              onClick={closeCart}
              className="p-2 hover:bg-velmora-bg rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-velmora-bg flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-widest">{item.name}</p>
                          <p className="text-xs text-velmora-text-light mt-1">{item.selectedVariant} Tone</p>
                        </div>
                        <p className="text-sm font-medium">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-border">
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:bg-velmora-bg transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:bg-velmora-bg transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-xs text-velmora-text-light hover:text-velmora-text underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-velmora-border bg-velmora-bg">
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${total}</span>
                  </div>
                  <div className="flex justify-between text-velmora-text-light">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="divider my-2" />
                  <div className="flex justify-between font-medium text-base">
                    <span>Total</span>
                    <span>${grandTotal}</span>
                  </div>
                </div>

                <button className="btn btn-primary w-full mb-3">
                  PROCEED TO CHECKOUT
                </button>
                <p className="text-center text-xs text-velmora-text-light">
                  or 4 interest-free payments of ${(grandTotal / 4).toFixed(0)} with
                </p>
                <button 
                  onClick={closeCart}
                  className="btn btn-outline w-full mt-3 text-sm"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
              <p className="text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-text-light mb-6">
                Discover our collection of demi-fine jewelry
              </p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn btn-primary"
              >
                SHOP THE COLLECTION
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;