import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const total = getCartTotal();

  const handleCheckout = () => {
    // Placeholder for future checkout integration
    toast.info('Checkout coming soon', {
      description: 'This is a frontend preview. In production, this would redirect to checkout.',
    });
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
        <div className="flex items-center justify-between p-6 border-b border-[#E8E2D9]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-[0.1em] text-sm uppercase">Your Cart</span>
          </div>
          <button onClick={closeCart} className="close-btn" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag size={48} className="text-[#D9D2C7] mb-4" />
            <p className="text-lg mb-2">Your cart is empty</p>
            <p className="text-sm text-[#6B6560] mb-6">Discover our collection of fine jewelry</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-primary"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F1EDE6] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em] leading-tight">{item.name}</p>
                        <p className="text-xs text-[#6B6560] mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="close-btn p-1 -mr-1 -mt-1"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <p className="text-sm font-medium mb-3">${item.price}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[#D9D2C7]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F8F5F1] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F8F5F1] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E8E2D9] p-6 space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm tracking-[0.1em] uppercase">Total</span>
                <span className="text-xl font-medium">${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#6B6560]">Shipping calculated at checkout</p>
              
              <button
                onClick={handleCheckout}
                className="btn btn-primary btn-full"
              >
                Proceed to Checkout
              </button>
              
              <button
                onClick={closeCart}
                className="btn btn-outline btn-full"
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
