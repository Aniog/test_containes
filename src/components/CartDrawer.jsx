import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] overlay"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-velmora-surface z-[70] shadow-2xl flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="serif text-xl tracking-[0.1em]">YOUR CART</h2>
          <button onClick={closeCart} className="text-velmora-text-muted hover:text-velmora-text">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-velmora-text-muted mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-outline btn-sm"
            >
              BROWSE COLLECTION
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-bg flex-shrink-0 overflow-hidden">
                    <img
                      src={item.images?.[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-widest pr-4">{item.name}</p>
                        <p className="text-xs text-velmora-text-muted mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-velmora-text-muted hover:text-red-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-sm mt-1">${item.price}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:bg-velmora-bg"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-border hover:bg-velmora-bg"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    ${(item.price * item.quantity).toFixed(0)}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-border px-6 py-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-velmora-text-muted">SUBTOTAL</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <p className="text-xs text-velmora-text-muted">
                Shipping calculated at checkout
              </p>
              <button
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  closeCart();
                }}
                className="btn btn-primary w-full"
              >
                PROCEED TO CHECKOUT
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-sm text-velmora-text-muted hover:text-velmora-text underline"
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
