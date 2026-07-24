import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from './Button';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
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
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`} role="dialog" aria-label="Shopping cart">
        <div className="flex items-center justify-between p-6 border-b border-[#E8E2D9]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-serif text-lg tracking-[0.06em] uppercase">Your Cart</h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-[#6B645C] hover:text-[#2C2825] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
            <ShoppingBag className="w-12 h-12 text-[#D9D2C7] mb-4" />
            <p className="text-[#6B645C] mb-6">Your cart is empty</p>
            <Button variant="outline" onClick={closeCart}>
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
                    <img src={item.images.primary} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-variant">
                      {item.selectedVariant === 'gold' ? 'Gold Tone' : 'Silver Tone'}
                    </p>
                    <p className="cart-item-price">${item.price}</p>

                    <div className="cart-qty">
                      <button
                        className="cart-qty-btn"
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        className="cart-qty-btn"
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        className="ml-auto text-xs text-[#8A8178] hover:text-[#8B5E5E] transition-colors"
                        onClick={() => removeFromCart(item.cartId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#E8E2D9] bg-[#F8F5F1]">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-sm tracking-[0.04em] uppercase text-[#6B645C]">Total</span>
                <span className="font-serif text-xl">${total}</span>
              </div>
              <p className="text-xs text-[#8A8178] mb-4">Shipping calculated at checkout</p>
              
              <Button variant="primary" fullWidth className="mb-3">
                Proceed to Checkout
              </Button>
              
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-xs tracking-[0.06em] uppercase text-[#6B645C] hover:text-[#2C2825] transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;