import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

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
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button onClick={closeCart} className="p-1">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-surface-warm flex items-center justify-center mb-4">
              <span className="text-2xl">✧</span>
            </div>
            <p className="text-text-muted mb-6">Your cart is empty</p>
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
                  <div className="w-20 h-20 bg-surface-warm flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="product-name text-xs pr-2">{item.name}</h4>
                      <button 
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-text-muted hover:text-text p-1"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    
                    <p className="text-xs text-text-muted mb-2">
                      {item.variant} · ${item.price}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1.5 hover:bg-surface-warm"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1.5 hover:bg-surface-warm"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <span className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="p-6 border-t border-border bg-surface-warm">
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Shipping</span>
                  <span className="text-gold">Free</span>
                </div>
                <div className="divider my-2" />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <Button 
                variant="primary" 
                className="w-full mb-3"
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  closeCart();
                }}
              >
                Proceed to Checkout
              </Button>
              
              <p className="text-center text-xs text-text-muted">
                or 4 interest-free payments of ${(grandTotal / 4).toFixed(2)} with Shop Pay
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
