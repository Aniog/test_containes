import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  const total = getCartTotal();
  const shipping = total > 0 ? 0 : 0; // Free shipping
  const grandTotal = total + shipping;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F6F2] z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#EDE9E3]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-4 w-4 text-[#C5A46E]" />
            <span className="font-serif tracking-[2px] text-lg">YOUR CART</span>
          </div>
          <button onClick={closeCart} className="text-[#4A4640] hover:text-[#0A0806]">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="h-12 w-12 text-[#EDE9E3] mb-4" />
            <p className="text-[#4A4640] mb-6">Your cart is empty</p>
            <Button onClick={closeCart} variant="outline">CONTINUE SHOPPING</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#EDE9E3] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-serif text-sm tracking-[1px] text-[#0A0806] pr-4">{item.name}</h4>
                        <p className="text-xs text-[#9A9590] mt-0.5">{item.selectedVariant?.label}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#9A9590] hover:text-[#C5A46E] text-xs"
                      >
                        REMOVE
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#EDE9E3]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#EDE9E3] transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#EDE9E3] transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#EDE9E3] px-6 py-6 bg-white">
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between text-[#4A4640]">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-[#4A4640]">
                  <span>Shipping</span>
                  <span className="text-[#C5A46E]">FREE</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#EDE9E3] font-medium text-[#0A0806]">
                  <span>Total</span>
                  <span>{formatPrice(grandTotal)}</span>
                </div>
              </div>

              <Link to="/checkout" onClick={closeCart}>
                <Button className="w-full mb-3" size="lg">
                  CHECKOUT
                </Button>
              </Link>
              
              <button 
                onClick={closeCart}
                className="w-full text-center text-xs tracking-[1px] text-[#4A4640] hover:text-[#0A0806] py-2"
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
