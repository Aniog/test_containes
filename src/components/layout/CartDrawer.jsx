import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300",
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-[101] transform transition-transform duration-300 ease-in-out flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <h2 className="font-serif text-2xl tracking-wide">Your Cart ({cartCount})</h2>
          <button onClick={closeCart} className="p-2 hover:opacity-70 transition-opacity">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-stone-500">
              <ShoppingBag size={48} className="mb-4 opacity-50" />
              <p className="text-lg font-serif mb-6">Your cart is currently empty.</p>
              <button onClick={closeCart} className="btn-primary w-full max-w-[200px]">
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.tone}`} className="flex gap-4 border-b border-stone-100 pb-6 last:border-0 last:pb-0">
                <div className="w-24 h-24 bg-stone-100 flex-shrink-0">
                  {/* Normally real image here, but we use a placeholder */}
                  <img
                    alt={item.title}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <Link to={`/product/${item.id}`} onClick={closeCart} className="font-serif text-lg leading-tight hover:text-gold-500 transition-colors">
                        {item.title}
                      </Link>
                      <span className="font-medium">${item.price * item.quantity}</span>
                    </div>
                    <p className="text-sm text-stone-500 mb-2">Tone: {item.tone}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-stone-300 rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="p-1 hover:bg-stone-100 text-stone-500 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="p-1 hover:bg-stone-100 text-stone-500 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.tone)}
                      className="text-xs text-stone-500 hover:text-red-500 underline uppercase tracking-wider"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-stone-200 bg-white">
            <div className="flex justify-between items-center mb-6 font-medium text-lg border-b border-stone-100 pb-4">
              <span>Subtotal</span>
              <span>${cartTotal}</span>
            </div>
            <p className="text-xs text-stone-500 mb-6 text-center uppercase tracking-widest">
              Shipping & taxes calculated at checkout
            </p>
            <button className="btn-primary w-full bg-gold-600 border-transparent hover:bg-gold-500 py-4 text-base">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;