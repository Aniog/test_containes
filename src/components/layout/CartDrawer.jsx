import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-full max-w-md bg-white z-[101] shadow-2xl transition-transform duration-700 ease-in-out flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-border">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-serif uppercase tracking-widest">Your Cart</h2>
            <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">({cartItems.length} Items)</span>
          </div>
          <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-8 scrollbar-hide">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
               <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center text-muted-foreground">
                  <ShoppingBag size={32} />
               </div>
               <div>
                  <h3 className="text-lg font-serif mb-2 italic">Your cart is empty</h3>
                  <p className="text-xs uppercase tracking-widest-extra opacity-50">Discovery awaits in our shop</p>
               </div>
               <Link 
                  to="/shop" 
                  className="bg-[#1A1A1A] text-white px-12 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-accent transition-colors"
                  onClick={onClose}
               >
                 Shop Collections
               </Link>
            </div>
          ) : (
            <div className="space-y-10">
              {cartItems.map((item, i) => (
                <div key={`${item.id}-${item.selectedTone}-${i}`} className="flex gap-6 group">
                  <div className="w-24 aspect-[3/4] bg-muted overflow-hidden relative">
                    <img 
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img="jewelry detail shot accessory"
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      className="w-full h-full object-cover"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="text-[11px] uppercase tracking-[0.15em] font-serif pr-4 group-hover:text-accent transition-colors">{item.name}</h4>
                       <span className="text-xs font-medium">${item.price}</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest opacity-40 mb-6 font-semibold">Finish: {item.selectedTone}</p>
                    
                    <div className="flex items-center justify-between">
                       <div className="flex items-center border border-border">
                          <button 
                            className="p-2 hover:bg-muted transition-colors"
                            onClick={() => onUpdateQuantity(item, item.quantity - 1)}
                          >
                             <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-[11px] font-bold">{item.quantity}</span>
                          <button 
                            className="p-2 hover:bg-muted transition-colors"
                            onClick={() => onUpdateQuantity(item, item.quantity + 1)}
                          >
                             <Plus size={12} />
                          </button>
                       </div>
                       <button 
                        className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-destructive transition-all font-bold border-b border-transparent hover:border-destructive"
                        onClick={() => onRemove(item)}
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

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-8 border-t border-border space-y-6">
            <div className="flex items-center justify-between text-sm uppercase tracking-widest-extra font-medium">
              <span>Subtotal</span>
              <span className="text-lg font-serif italic">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest opacity-40 text-center leading-relaxed font-semibold">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-[#1A1A1A] text-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-accent transition-all duration-300 shadow-xl">
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
