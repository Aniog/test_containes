import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col animate-in slide-in-from-right duration-500">
          <div className="px-6 py-6 border-b border-border flex items-center justify-between">
            <h2 className="font-serif text-xl uppercase tracking-widest">Your Bag ({cart.length})</h2>
            <button onClick={() => setIsCartOpen(false)} className="hover:text-accent transition-colors">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6 no-scrollbar">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-6">
                <ShoppingBag size={48} strokeWidth={1} className="text-muted-foreground opacity-50" />
                <p className="font-sans text-sm text-muted-foreground uppercase tracking-widest leading-loose">
                  Your bag is currently empty
                </p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="bg-primary text-white px-8 py-3 font-serif uppercase tracking-widest text-xs hover:bg-accent transition-all"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.details}`} className="flex gap-4">
                    <div className="w-24 aspect-[3/4] bg-muted overflow-hidden flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=200&auto=format&fit=crop"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-serif uppercase tracking-widest text-xs">{item.name}</h3>
                          <span className="font-sans text-xs">${item.price}</span>
                        </div>
                        <p className="font-sans text-[10px] text-muted-foreground uppercase mb-4">{item.details}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-border">
                          <button
                            className="p-1.5 hover:text-accent transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center font-sans text-xs">{item.quantity}</span>
                          <button
                            className="p-1.5 hover:text-accent transition-colors"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {cart.length > 0 && (
            <div className="px-6 py-8 border-t border-border bg-muted/30">
              <div className="flex justify-between items-baseline mb-6">
                <span className="font-serif uppercase tracking-widest text-sm">Subtotal</span>
                <span className="font-sans text-lg">${cartTotal}</span>
              </div>
              <p className="font-sans text-[10px] text-muted-foreground uppercase tracking-widest mb-8">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full bg-primary text-white py-5 font-serif uppercase tracking-[0.2em] text-sm hover:bg-accent transition-all">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
