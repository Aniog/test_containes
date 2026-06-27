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
    getCartTotal,
    clearCart 
  } = useCart();

  const total = getCartTotal();

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
      <div className="cart-drawer open" role="dialog" aria-label="Shopping cart">
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button 
            onClick={closeCart} 
            className="text-velmora-text-muted hover:text-velmora-text"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <p className="text-velmora-text-muted mb-6">Your cart is empty</p>
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
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-bg-alt flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="product-name text-sm tracking-wider pr-2">{item.name}</h4>
                        <p className="text-xs text-velmora-text-muted mt-0.5">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-velmora-text-muted hover:text-red-600"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="qty-selector">
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="qty-btn"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="qty-btn"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <span className="font-sans text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-velmora-border bg-velmora-bg">
              <div className="flex justify-between items-baseline mb-6">
                <span className="font-sans text-sm tracking-widest uppercase">Total</span>
                <span className="font-serif text-2xl">${total.toFixed(2)}</span>
              </div>
              
              <button 
                className="btn btn-primary w-full mb-3"
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  clearCart();
                  closeCart();
                }}
              >
                Proceed to Checkout
              </button>
              
              <button 
                onClick={closeCart}
                className="btn btn-outline w-full"
              >
                Continue Shopping
              </button>
              
              <p className="text-center text-[10px] text-velmora-text-muted mt-4 tracking-widest">
                FREE WORLDWIDE SHIPPING ON ORDERS OVER $75
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
