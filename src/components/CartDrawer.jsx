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
    getCartTotal 
  } = useCart();

  const total = getCartTotal();
  const shipping = total > 0 ? 0 : 0; // Free shipping
  const grandTotal = total + shipping;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#D9D2C7]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} />
            <span className="font-serif text-lg tracking-[0.08em]">YOUR CART</span>
          </div>
          <button onClick={closeCart} className="p-2 -mr-2" aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag size={48} className="text-[#D9D2C7] mb-4" />
            <p className="text-[#6B635C] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={closeCart}
              className="btn btn-gold-outline"
            >
              BROWSE COLLECTION
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img 
                      src={`https://placehold.co/160x160/F5EDE3/1C1917?text=${encodeURIComponent(item.name.split(' ').slice(0, 2).join(' '))}`}
                      alt={item.name}
                    />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-variant">{item.variant} Tone</div>
                    <div className="cart-item-price">${item.price}</div>
                    
                    <div className="cart-quantity">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-xs text-[#6B635C] hover:text-[#1C1917]"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="p-6 border-t border-[#D9D2C7] bg-[#F8F5F1]">
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#6B635C]">Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B635C]">Shipping</span>
                  <span className="text-[#B89778]">FREE</span>
                </div>
                <div className="divider my-2" />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${grandTotal}</span>
                </div>
              </div>

              <button 
                className="btn btn-primary btn-full mb-3"
                onClick={() => {
                  alert('Thank you! In a real store, this would proceed to checkout.');
                  closeCart();
                }}
              >
                PROCEED TO CHECKOUT
              </button>
              
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="block text-center text-xs tracking-[0.08em] text-[#6B635C] hover:text-[#1C1917]"
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
