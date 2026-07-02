import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { Link } from 'react-router-dom';

function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[60] backdrop" 
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-base-50 z-[70] flex flex-col shadow-2xl ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold-400">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-[0.05em]">YOUR CART</span>
          </div>
          <button onClick={closeCart} className="p-1 text-muted hover:text-base-900">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-base-100 flex-shrink-0 overflow-hidden rounded">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-sm tracking-[0.08em] leading-tight pr-2">{item.name}</div>
                        <div className="text-xs text-muted mt-0.5">{item.selectedVariant.label}</div>
                      </div>
                      <div className="text-sm font-medium whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gold-400 rounded">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-base-100"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-base-100"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xs text-muted hover:text-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gold-400 px-6 py-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
              </div>
              <div className="text-xs text-muted">
                Shipping calculated at checkout. Free worldwide shipping on orders over $75.
              </div>
              <button 
                onClick={() => {
                  alert('Checkout would open here. This is a demo storefront.');
                  closeCart();
                }}
                className="btn-premium btn-premium-solid w-full py-3.5 text-sm tracking-[0.08em]"
              >
                PROCEED TO CHECKOUT
              </button>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn-premium btn-premium-outline w-full py-3.5 text-sm tracking-[0.08em] text-center block"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-gold-400 mb-4" />
            <p className="text-lg font-serif mb-2">Your cart is empty</p>
            <p className="text-sm text-muted mb-6">Discover our collection of demi-fine jewelry.</p>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn-premium btn-premium-solid px-8 py-3 text-sm tracking-[0.08em]"
            >
              SHOP THE COLLECTION
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;