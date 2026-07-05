import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    alert('Thank you for your interest in Velmora. Checkout would connect to a payment processor in production.');
    closeCart();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="cart-overlay open" 
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="cart-drawer open">
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-velmora-border">
            <h2 className="serif text-xl tracking-[0.1em]">Your Cart</h2>
            <button onClick={closeCart} className="text-velmora-muted hover:text-velmora-base">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <p className="text-velmora-text-secondary mb-6">Your cart is empty</p>
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
              <div className="flex-1 overflow-y-auto py-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-velmora-surface flex-shrink-0">
                      <img 
                        src={item.images?.[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-widest">{item.name}</p>
                          <p className="text-xs text-velmora-muted mt-0.5">{item.selectedVariant}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-velmora-muted hover:text-red-600"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <p className="text-sm mt-1">${item.price}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:border-velmora-gold"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:border-velmora-gold"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-velmora-border pt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="uppercase tracking-[0.1em]">Total</span>
                  <span className="font-medium">${getCartTotal()}</span>
                </div>
                <p className="text-xs text-velmora-muted">Shipping calculated at checkout</p>
                
                <button 
                  onClick={handleCheckout}
                  className="btn btn-primary w-full"
                >
                  Proceed to Checkout
                </button>
                
                <Link 
                  to="/shop" 
                  onClick={closeCart}
                  className="block text-center text-xs uppercase tracking-[0.1em] text-velmora-muted hover:text-velmora-base"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;