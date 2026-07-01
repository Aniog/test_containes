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
    getCartTotal,
    clearCart 
  } = useCart();

  const total = getCartTotal();

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora. Checkout would connect to a payment processor in production.');
    closeCart();
  };

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
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} />
              <span className="text-sm tracking-[0.1em] uppercase">Your Cart</span>
            </div>
            <button onClick={closeCart} className="p-2 -mr-2" aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-20 bg-velmora-ivory flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <h4 className="product-name text-xs leading-tight pr-2">{item.name}</h4>
                            <p className="text-xs text-velmora-muted mt-0.5">{item.variant}</p>
                          </div>
                          <span className="text-sm whitespace-nowrap">${item.price}</span>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-velmora-border">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 hover:bg-velmora-ivory transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-3 text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-velmora-ivory transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-velmora-muted hover:text-velmora-text underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-velmora-border px-6 py-6 bg-white/50">
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-sm tracking-[0.05em]">Total</span>
                  <span className="text-xl heading-serif">${total}</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="btn btn-primary w-full mb-3"
                >
                  Proceed to Checkout
                </button>
                
                <button 
                  onClick={closeCart}
                  className="btn btn-outline w-full text-sm"
                >
                  Continue Shopping
                </button>
                
                <p className="text-center text-[10px] text-velmora-muted mt-4 tracking-widest">
                  FREE WORLDWIDE SHIPPING ON ORDERS OVER $75
                </p>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="text-velmora-border mb-4" />
              <p className="text-lg heading-serif mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-muted mb-8">Discover pieces crafted to be treasured.</p>
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
