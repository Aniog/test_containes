import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal,
    clearCart 
  } = useCart();

  const handleCheckout = () => {
    alert('Thank you for shopping with Velmora. Checkout would connect to a payment processor in production.');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 drawer-backdrop open"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 cart-drawer shadow-2xl ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="serif text-2xl tracking-wide">Your Cart</h2>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#F5F2EB] rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-[2px] pr-2">{item.name}</p>
                          <p className="text-xs text-[#6B665C] mt-0.5">{item.selectedVariant.label} Tone</p>
                        </div>
                        <p className="text-sm font-medium whitespace-nowrap">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#D4CFC4] rounded">
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:bg-[#F5F2EB] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#F5F2EB] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-xs text-[#6B665C] hover:text-[#2C2A26] underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t px-6 py-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B665C]">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-xs text-[#6B665C]">Shipping calculated at checkout</p>
                
                <Button 
                  onClick={handleCheckout}
                  className="w-full h-12 text-sm tracking-[1.5px]"
                >
                  PROCEED TO CHECKOUT
                </Button>
                
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-sm text-[#6B665C] hover:text-[#2C2A26] py-2"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-[#D4CFC4] mb-4" />
              <p className="serif text-xl mb-2">Your cart is empty</p>
              <p className="text-sm text-[#6B665C] mb-6">Discover our collection of demi-fine jewelry</p>
              <Button 
                variant="outline" 
                onClick={() => setIsCartOpen(false)}
              >
                BROWSE COLLECTION
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
