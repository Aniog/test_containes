import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F1] z-[70] shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E4DE]">
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} className="text-[#B89778]" />
            <h2 className="font-serif text-lg tracking-[1.5px]">YOUR CART</h2>
          </div>
          <button 
            onClick={closeCart}
            className="p-2 text-[#6B665F] hover:text-[#2C2825] transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#E8E4DE] mb-4" />
            <p className="text-[#6B665F] mb-6">Your cart is empty</p>
            <Button onClick={closeCart} variant="outline">
              CONTINUE SHOPPING
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-serif text-sm tracking-[1px] text-[#2C2825] pr-2">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[#6B665F] mt-0.5">
                          {item.selectedVariant} · {item.category}
                        </p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B665F] hover:text-[#B89778] p-1"
                        aria-label="Remove item"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E8E4DE]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F5F2ED] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F2ED] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <p className="text-sm text-[#2C2825]">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E8E4DE] px-6 py-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B665F]">SUBTOTAL</span>
                <span className="font-medium text-[#2C2825]">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs text-[#6B665F]">
                Shipping calculated at checkout
              </p>
              <Link to="/checkout" onClick={closeCart}>
                <Button className="w-full" size="lg">
                  PROCEED TO CHECKOUT
                </Button>
              </Link>
              <button 
                onClick={closeCart}
                className="w-full text-xs tracking-[1px] text-[#6B665F] hover:text-[#2C2825] py-2 transition-colors"
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
