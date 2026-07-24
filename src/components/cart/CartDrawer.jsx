import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, cartTotal, updateQuantity, removeFromCart, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[100] transition-opacity duration-300',
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-[101] shadow-2xl transition-transform duration-500 ease-in-out',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-serif text-xl uppercase tracking-widest">Your Cart</h2>
            <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-40 text-muted-foreground space-y-4">
                <ShoppingBag size={48} strokeWidth={1} />
                <p className="uppercase tracking-widest text-sm text-center px-4">Your cart is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-primary text-primary-foreground px-8 py-3 text-xs uppercase tracking-widest hover:bg-black transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex space-x-4">
                  <div className="w-24 h-32 bg-muted overflow-hidden">
                    <img
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={`[cart-title-${item.id}] [cart-variant-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link
                          to={`/product/${item.id}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif uppercase text-sm tracking-widest hover:text-accent transition-colors"
                          id={`cart-title-${item.id}`}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider" id={`cart-variant-${item.id}`}>
                        Color: {item.variant}
                      </p>
                      <p className="text-sm mt-2 font-medium">${item.price}</p>
                    </div>

                    <div className="flex items-center border border-border w-24">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="p-1 hover:bg-muted transition-colors flex-1"
                      >
                        <Minus size={14} className="mx-auto" />
                      </button>
                      <span className="text-xs font-medium w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="p-1 hover:bg-muted transition-colors flex-1"
                      >
                        <Plus size={14} className="mx-auto" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Subtotal</span>
                <span className="font-serif text-2xl font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-muted-foreground text-center uppercase tracking-widest">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full bg-primary text-primary-foreground py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-black transition-all hover:tracking-[0.25em]">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
