import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[60] transition-opacity"
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F5F2ED] z-[70] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E4DC]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-medium tracking-[1px] text-sm">YOUR CART</span>
          </div>
          <button onClick={closeCart} className="text-[#6B665F] hover:text-[#2C2823]">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#E8E4DC] flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.images[0]} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-serif text-sm tracking-[1px] text-[#2C2823]">{item.name}</h4>
                        <p className="text-xs text-[#6B665F] mt-0.5">{item.selectedVariant.label} Tone</p>
                      </div>
                      <p className="text-sm font-medium">${item.price * item.quantity}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E8E4DC]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#E8E4DC] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#E8E4DC] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xs text-[#6B665F] hover:text-[#C5A46E] tracking-widest"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E8E4DC] p-6 space-y-4 bg-white">
              <div className="flex justify-between text-sm">
                <span className="text-[#6B665F]">Subtotal</span>
                <span className="font-medium tabular-nums">${cartTotal}</span>
              </div>
              <p className="text-xs text-[#6B665F]">Shipping calculated at checkout</p>
              
              <Button 
                variant="solid" 
                size="lg" 
                className="w-full tracking-[2px]"
                onClick={() => {
                  alert('Checkout would open here. This is a demo storefront.');
                  closeCart();
                }}
              >
                CHECKOUT
              </Button>
              
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="block text-center text-xs tracking-[1.5px] text-[#6B665F] hover:text-[#C5A46E] transition-colors"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#C5A46E] mb-4 opacity-50" />
            <p className="text-[#2C2823] mb-2">Your cart is empty</p>
            <p className="text-sm text-[#6B665F] mb-6">Discover our collection of demi-fine jewelry</p>
            <Link to="/shop" onClick={closeCart}>
              <Button variant="outline">BROWSE COLLECTION</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;