import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-cream shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-[0.15em] uppercase text-velmora-charcoal">
            Your Cart
          </h2>
          <button onClick={() => setIsOpen(false)} className="text-velmora-warmGray hover:text-velmora-charcoal transition-colors">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <ShoppingBag size={48} strokeWidth={1} className="text-velmora-borderDark mb-4" />
            <p className="font-serif text-lg text-velmora-warmGray mb-2">Your cart is empty</p>
            <p className="font-sans text-xs text-velmora-warmGrayLight mb-6">Discover something beautiful</p>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="bg-velmora-charcoal text-white text-xs font-sans tracking-[0.15em] uppercase px-8 py-3 hover:bg-velmora-gold transition-colors"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <Link to={`/product/${item.id}`} onClick={() => setIsOpen(false)}>
                    <img src={item.images[0]} alt={item.name} className="w-20 h-24 object-cover bg-velmora-creamDark" />
                  </Link>
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`} onClick={() => setIsOpen(false)}>
                      <h4 className="font-serif text-xs tracking-[0.12em] uppercase text-velmora-charcoal">
                        {item.name}
                      </h4>
                    </Link>
                    <p className="font-sans text-[11px] text-velmora-warmGrayLight capitalize mt-0.5">
                      {item.variant}
                    </p>
                    <p className="font-sans text-sm font-medium text-velmora-charcoal mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center text-velmora-warmGray hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="font-sans text-xs text-velmora-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-border flex items-center justify-center text-velmora-warmGray hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="ml-auto text-[10px] text-velmora-warmGrayLight underline hover:text-velmora-charcoal transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-border p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-velmora-warmGray">Subtotal</span>
                <span className="font-sans text-lg font-medium text-velmora-charcoal">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="font-sans text-[11px] text-velmora-warmGrayLight">Shipping and taxes calculated at checkout</p>
              <button className="w-full bg-velmora-charcoal text-white text-xs font-sans tracking-[0.15em] uppercase py-4 hover:bg-velmora-gold transition-colors">
                Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-center font-sans text-xs tracking-[0.12em] uppercase text-velmora-warmGray hover:text-velmora-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
