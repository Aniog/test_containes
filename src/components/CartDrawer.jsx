import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F1] z-50 flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E4DC]">
          <h3 className="serif text-xl tracking-[0.08em]">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#E8E4DC] flex-shrink-0">
                    <img
                      src={item.images.primary}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em] pr-2">{item.name}</p>
                        <p className="text-xs text-[#9A8F7D] mt-0.5">{item.selectedVariant.toUpperCase()}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#9A8F7D] hover:text-[#2C2C2C]"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-sm mt-1">${item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[#E8E4DC] hover:border-[#2C2C2C]"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-[#E8E4DC] hover:border-[#2C2C2C]"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E8E4DC] p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <p className="text-xs text-[#9A8F7D]">Shipping calculated at checkout</p>
              <button className="btn-primary w-full">Checkout</button>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-sm tracking-[0.06em] hover:text-[#C5A26F]"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#E8E4DC] mb-4" />
            <p className="text-lg mb-2">Your cart is empty</p>
            <p className="text-sm text-[#9A8F7D] mb-8">Discover pieces that will be treasured for years.</p>
            <Link to="/shop" onClick={() => setIsCartOpen(false)} className="btn-outline">
              Shop the Collection
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
