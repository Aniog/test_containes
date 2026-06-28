import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from './ui/Button';
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

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F0] z-[70] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EDE8E0]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-4 w-4" />
            <span className="font-medium tracking-[1px] text-sm">YOUR CART</span>
          </div>
          <button onClick={closeCart} className="p-2 -mr-2 text-[#6B665F] hover:text-[#1C1C1C]">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#EDE8E0] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-serif text-sm tracking-[1px] text-[#1C1C1C]">{item.name}</p>
                        <p className="text-xs text-[#6B665F] mt-0.5">{item.variant}</p>
                      </div>
                      <p className="text-sm text-[#1C1C1C]">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#EDE8E0]">
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#EDE8E0] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#EDE8E0] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartItemId)}
                        className="text-xs text-[#6B665F] hover:text-[#B89778] transition-colors"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#EDE8E0] p-6 space-y-4 bg-white">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B665F]">Subtotal</span>
                <span className="font-medium text-[#1C1C1C]">{formatPrice(total)}</span>
              </div>
              <p className="text-xs text-[#6B665F]">Shipping calculated at checkout</p>
              
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => {
                  closeCart();
                  // In a real app, this would navigate to checkout
                  alert('Checkout would open here. Cart state is ready for integration.');
                }}
              >
                CHECKOUT
              </Button>
              
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="block text-center text-xs tracking-[1px] text-[#6B665F] hover:text-[#B89778] transition-colors"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-[#EDE8E0] mb-4" />
            <p className="text-[#1C1C1C] mb-2">Your cart is empty</p>
            <p className="text-sm text-[#6B665F] mb-6">Discover our collection of fine jewelry</p>
            <Button variant="outline" onClick={closeCart}>
              BROWSE COLLECTION
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
