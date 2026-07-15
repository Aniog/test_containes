import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { cn } from '../lib/utils.js';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      <div 
        className={cn(
          'fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300',
          isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={() => setIsCartOpen(false)}
      />
      <div 
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-[101] transition-transform duration-300 ease-in-out transform flex flex-col shadow-2xl',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className='flex items-center justify-between p-6 border-b border-brand-dark/5'>
          <h2 className='font-serif text-2xl'>Shopping Bag</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className='w-6 h-6' />
          </button>
        </div>

        <div className='flex-grow overflow-y-auto p-6'>
          {cart.length === 0 ? (
            <div className='h-full flex flex-col items-center justify-center space-y-4 opacity-50'>
              <ShoppingBag className='w-12 h-12' />
              <p className='font-serif text-xl'>Your bag is empty</p>
            </div>
          ) : (
            <div className='space-y-8'>
              {cart.map((item) => (
                <div key={item.id} className='flex space-x-4'>
                  <div className='w-24 h-32 bg-brand-stone/20 flex-shrink-0'>
                    <img
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={`[${item.titleId}] [cart-drawer-title]`}
                      data-strk-img-ratio='3x4'
                      data-strk-img-width='200'
                      src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'
                      alt={item.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='flex-grow flex flex-col'>
                    <div className='flex justify-between items-start'>
                      <h3 className='font-serif text-lg leading-tight uppercase tracking-wider'>{item.name}</h3>
                      <button onClick={() => removeFromCart(item.id)} className='text-brand-muted hover:text-brand-dark transition-colors'>
                        <X className='w-4 h-4' />
                      </button>
                    </div>
                    <p className='text-xs text-brand-muted mt-1'>{item.category}</p>
                    <div className='mt-auto flex items-center justify-between'>
                      <div className='flex items-center border border-brand-dark/5 px-2 py-1 space-x-3'>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className='w-3 h-3' />
                        </button>
                        <span className='text-sm w-4 text-center'>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className='w-3 h-3' />
                        </button>
                      </div>
                      <span className='font-serif text-lg'>${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className='p-6 border-t border-brand-dark/10 bg-brand-stone/10'>
            <div className='flex justify-between items-center mb-6'>
              <span className='uppercase tracking-widest text-sm text-brand-muted'>Subtotal</span>
              <span className='font-serif text-2xl'>${cartTotal}</span>
            </div>
            <button className='w-full bg-brand-dark text-white py-4 uppercase tracking-[0.2em] text-sm hover:bg-brand-gold transition-colors duration-300'>
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
