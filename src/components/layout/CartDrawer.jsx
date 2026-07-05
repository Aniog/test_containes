import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../lib/CartContext';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 z-[60] transition-opacity duration-500',
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b">
          <h2 className="font-serif text-xl tracking-widest uppercase">Shopping Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="hover:rotate-90 transition-transform duration-300">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Contents */}
        <div className="flex-grow overflow-y-auto px-8 py-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <ShoppingBag size={48} strokeWidth={1} className="text-muted-foreground" />
              <div className="space-y-2">
                <p className="font-serif text-lg tracking-wide uppercase">Your bag is empty</p>
                <p className="text-sm text-muted-foreground">Discover pieces to treasure forever.</p>
              </div>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="bg-accent text-white px-10 py-3 uppercase tracking-widest text-xs hover:bg-accent/90 transition-colors"
              >
                Shop New Arrivals
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-6">
                  {/* Image Placeholder */}
                  <div className="w-24 h-32 bg-secondary flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-item-${item.id}-${item.variant.replace(/\s+/g, '-').toLowerCase()}`}
                      data-strk-img={`[cart-item-info-${item.id}-${item.variant.replace(/\s+/g, '-').toLowerCase()}] luxury gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col">
                    <div className="flex justify-between items-start">
                      <div id={`cart-item-info-${item.id}-${item.variant.replace(/\s+/g, '-').toLowerCase()}`} className="space-y-1">
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif text-sm tracking-widest uppercase hover:text-accent transition-colors"
                        >
                          {item.name || 'Fine Jewelry Piece'}
                        </Link>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="mt-auto flex justify-between items-center">
                      <div className="flex items-center border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1 px-2 hover:bg-secondary transition-colors"
                        >
                          <Minus size={12} strokeWidth={2} />
                        </button>
                        <span className="w-8 text-center text-xs">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1 px-2 hover:bg-secondary transition-colors"
                        >
                          <Plus size={12} strokeWidth={2} />
                        </button>
                      </div>
                      <p className="text-sm font-medium tracking-wide">
                        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-8 py-8 border-t space-y-6 bg-secondary/30">
            <div className="flex justify-between items-center">
              <span className="uppercase tracking-[0.2em] text-xs font-medium">Subtotal</span>
              <span className="text-lg font-serif tracking-widest">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-accent text-white py-4 uppercase tracking-[0.2em] text-sm hover:bg-accent/90 transition-all">
              Checkout
            </button>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-full text-center uppercase tracking-widest text-[10px] text-muted-foreground hover:text-foreground transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
