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
  } = useCart();

  if (!isCartOpen) return null;

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 0 : 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[60] overlay"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F1] z-[70] flex flex-col ${isCartOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD6]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-[0.05em]">YOUR CART</span>
          </div>
          <button onClick={closeCart} className="p-1 text-[#6B6359] hover:text-[#2C2823]">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#E5DFD6] mb-4" />
            <p className="text-[#6B6359] mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-premium btn-premium-outline px-8 py-3 text-sm"
            >
              BROWSE COLLECTION
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.images.primary}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-xs tracking-[0.1em] leading-tight pr-2">
                          {item.name}
                        </div>
                        <div className="text-xs text-[#6B6359] mt-0.5">{item.variant}</div>
                      </div>
                      <div className="text-sm font-medium whitespace-nowrap">
                        ${item.price * item.quantity}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD6] rounded">
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F5F2ED] text-[#6B6359]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F2ED] text-[#6B6359]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-xs text-[#6B6359] hover:text-[#B8976A] tracking-widest"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E5DFD6] px-6 py-6 bg-[#F8F5F1]">
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between text-[#6B6359]">
                  <span>Subtotal</span>
                  <span className="tabular-nums">${subtotal}</span>
                </div>
                <div className="flex justify-between text-[#6B6359]">
                  <span>Shipping</span>
                  <span className="text-[#B8976A]">FREE</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E5DFD6] font-medium text-base">
                  <span>Total</span>
                  <span className="tabular-nums">${total}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  closeCart();
                }}
                className="btn-premium btn-premium-solid w-full py-4 text-sm tracking-[0.1em]"
              >
                PROCEED TO CHECKOUT
              </button>

              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-xs tracking-[0.1em] text-[#6B6359] mt-4 hover:text-[#B8976A]"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
