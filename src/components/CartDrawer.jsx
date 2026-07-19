import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
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
        className="cart-overlay open" 
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-taupe">
            <h2 className="font-serif-custom text-xl tracking-[0.1em]">Your Cart</h2>
            <button onClick={closeCart} className="p-2 -mr-2">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.cartId} className="flex gap-4">
                      <div className="w-20 h-20 bg-velmora-surface flex-shrink-0">
                        <img 
                          src={item.images[0]} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <h4 className="product-name text-xs tracking-[0.08em] leading-tight pr-2">
                            {item.name}
                          </h4>
                          <span className="text-sm font-medium whitespace-nowrap">
                            ${item.price * item.quantity}
                          </span>
                        </div>
                        
                        <p className="text-xs text-velmora-muted mt-0.5">
                          {item.selectedVariant.label}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity */}
                          <div className="flex items-center border border-velmora-taupe">
                            <button 
                              onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                              className="px-2 py-1 hover:text-velmora-gold"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                              className="px-2 py-1 hover:text-velmora-gold"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button 
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-velmora-muted hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-velmora-taupe px-6 py-6 bg-velmora-surface">
                <div className="space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-velmora-muted">Subtotal</span>
                    <span>${total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-velmora-muted">Shipping</span>
                    <span className="text-velmora-gold">Free</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-velmora-taupe font-medium">
                    <span>Total</span>
                    <span>${grandTotal}</span>
                  </div>
                </div>

                <button 
                  className="btn btn-primary w-full mb-3"
                  onClick={() => {
                    alert('Checkout would be implemented here. Cart total: $' + grandTotal);
                    closeCart();
                  }}
                >
                  Proceed to Checkout
                </button>
                
                <Link 
                  to="/shop" 
                  onClick={closeCart}
                  className="btn btn-outline w-full text-center block"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-taupe mb-4" />
              <p className="text-lg font-serif-custom mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-muted mb-8">Discover our collection of fine jewelry.</p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn btn-primary"
              >
                Shop the Collection
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
