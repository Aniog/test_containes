import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[60]"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[70] flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e0d8]">
          <h2 className="font-serif text-xl tracking-[0.08em]">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-[#b8976e] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#e5e0d8] mb-4" />
            <p className="text-[#6b6763] mb-6">Your cart is empty</p>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="btn btn-outline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4 mb-6 pb-6 border-b border-[#e5e0d8]">
                  <div className="w-20 h-20 bg-[#f5f3ef] flex-shrink-0">
                    <img 
                      src={item.images[item.selectedVariant]?.primary} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between mb-1">
                      <p className="product-name text-sm pr-2">{item.name}</p>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6b6763] hover:text-[#b8976e]"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <p className="text-xs text-[#6b6763] mb-2 tracking-[0.05em]">
                      {item.selectedVariant.toUpperCase()} · ${item.price}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[#e5e0d8] hover:border-[#b8976e]"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[#e5e0d8] hover:border-[#b8976e]"
                      >
                        <Plus size={12} />
                      </button>
                      <span className="ml-auto text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#e5e0d8] px-6 py-6">
              <div className="flex justify-between mb-6 text-sm tracking-[0.05em]">
                <span>Subtotal</span>
                <span className="font-medium">${getCartTotal().toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#6b6763] mb-4 text-center">
                Shipping calculated at checkout
              </p>
              <button className="btn w-full mb-3">
                Checkout
              </button>
              <Link 
                to="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-sm tracking-[0.05em] hover:text-[#b8976e]"
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