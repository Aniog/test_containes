import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from './ui/Button';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // Simulate checkout - in a real app this would navigate to checkout
    alert(
      `Thank you for your order!\n\nTotal: $${cartTotal}\n\nThis is a demo. In production, this would redirect to a secure checkout.`
    );
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
        <div className="flex items-center justify-between p-6 border-b border-velmora-border-subtle">
          <h3 className="font-serif text-xl">Your Cart</h3>
          <button onClick={closeCart} className="p-2" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-velmora-surface-warm flex items-center justify-center mb-4">
              <Trash2 size={28} className="text-velmora-text-muted" />
            </div>
            <h4 className="font-serif text-lg mb-2">Your cart is empty</h4>
            <p className="body-text mb-6">Discover our collection of demi-fine jewelry.</p>
            <Button variant="outline-gold" onClick={closeCart}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.map((item) => (
                <div key={item.cartId} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-variant">
                      {item.selectedVariant} • {item.category}
                    </div>
                    <div className="cart-item-price">${item.price}</div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="quantity-control">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-velmora-text-muted hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right font-medium">
                    ${(item.price * item.quantity).toFixed(0)}
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer */}
            <div className="p-6 border-t border-velmora-border-subtle bg-velmora-surface">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-sm uppercase tracking-widest">Total</span>
                <span className="font-serif text-2xl">${cartTotal}</span>
              </div>
              <p className="text-xs text-velmora-text-muted mb-4">
                Shipping calculated at checkout. Free worldwide shipping on orders over $75.
              </p>
              <Button variant="primary" fullWidth onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
              <button
                onClick={closeCart}
                className="w-full text-center text-sm uppercase tracking-widest mt-3 text-velmora-text-muted hover:text-velmora-text"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;