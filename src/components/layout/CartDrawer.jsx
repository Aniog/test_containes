import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300',
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-serif tracking-widest uppercase">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform duration-300">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4">
              <p className="text-gray-500 font-serif">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-accent hover:border-accent transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex space-x-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="w-24 h-32 bg-gray-100 flex-shrink-0">
                  <img
                    data-strk-img-id="cart-thumb-static"
                    data-strk-img="luxury gold jewelry product item"
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 id={`cart-item-title-${item.id}`} className="text-sm font-serif uppercase tracking-wider pr-4">
                        {item.name}
                      </h3>
                      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3 border w-fit px-2 py-1">
                    <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-accent">
                      <Minus size={14} />
                    </button>
                    <span className="text-xs w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-accent">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t space-y-4 bg-gray-50/50">
            <div className="flex justify-between items-center text-sm uppercase tracking-widest font-bold">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full bg-primary text-white py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-neutral-800 transition-luxury">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
