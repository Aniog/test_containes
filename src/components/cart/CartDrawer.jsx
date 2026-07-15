import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { 
    isCartOpen, 
    closeCart, 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    cartTotal,
    clearCart 
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 cart-overlay"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 transform transition-transform duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-xl tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Your Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
            </h2>
            <button 
              onClick={closeCart}
              className="text-charcoal hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-charcoal/20 mb-4" />
                <p className="text-charcoal/60 mb-2">Your cart is empty</p>
                <Link 
                  to="/shop" 
                  onClick={closeCart}
                  className="text-gold hover:text-gold-dark transition-colors text-sm uppercase tracking-wider"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.cartItemId} className="flex space-x-4 pb-6 border-b border-cream">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-cream flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="product-name text-sm">{item.name}</h3>
                          {item.variant && (
                            <p className="text-xs text-charcoal/60 mt-1">{item.variant}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-charcoal/40 hover:text-charcoal transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      
                      <p className="text-sm font-medium">${item.price.toFixed(2)}</p>

                      {/* Quantity */}
                      <div className="quantity-input">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t bg-cream/30">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm uppercase tracking-wider">Subtotal</span>
                <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal/60 mb-4">Shipping & taxes calculated at checkout</p>
              
              <Link
                to="/checkout"
                onClick={closeCart}
                className="block w-full btn-primary text-center mb-3"
              >
                Checkout
              </Link>
              
              <button
                onClick={() => {
                  clearCart();
                  closeCart();
                }}
                className="w-full text-sm text-charcoal/60 hover:text-charcoal transition-colors uppercase tracking-wider"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
