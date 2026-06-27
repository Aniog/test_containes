import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Button from './Button';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-[#F8F5F0] z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#D4C9B8]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#BFA46F]" />
            <h2 className="font-serif text-xl tracking-[1px] text-[#1C1B18]">Your Cart</h2>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 hover:bg-[#EDE8DF] rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5 text-[#4A463F]" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="h-12 w-12 text-[#D4C9B8] mb-4" />
            <p className="text-[#4A463F] mb-2">Your cart is empty</p>
            <p className="text-sm text-[#8A8175]">Discover our collection and find something beautiful.</p>
            <Button 
              variant="outline" 
              className="mt-6"
              onClick={closeCart}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#EDE8DF] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images?.[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-serif text-sm tracking-[1.5px] text-[#1C1B18] uppercase pr-2">{item.name}</p>
                        <p className="text-xs text-[#8A8175] mt-0.5">{item.selectedVariant?.toUpperCase()} TONE</p>
                      </div>
                      <p className="text-sm text-[#1C1B18] whitespace-nowrap">{formatPrice(item.price)}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#D4C9B8]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#EDE8DF] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#EDE8DF] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xs text-[#8A8175] hover:text-[#BFA46F] transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#D4C9B8] px-6 py-6 bg-[#F8F5F0]">
              <div className="flex justify-between text-sm mb-4">
                <span className="text-[#4A463F]">Subtotal</span>
                <span className="font-medium text-[#1C1B18] tabular-nums">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-[#8A8175] mb-4">Shipping calculated at checkout</p>
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => {
                  alert('Thank you! This is a demo storefront. In production, this would proceed to checkout.');
                  closeCart();
                }}
              >
                PROCEED TO CHECKOUT
              </Button>
              <button 
                onClick={closeCart}
                className="w-full text-center text-xs tracking-[1px] text-[#8A8175] mt-4 hover:text-[#BFA46F] transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
