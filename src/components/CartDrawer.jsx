import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';

const CartDrawer = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] transition-opacity duration-500',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'absolute right-0 top-0 bottom-0 w-full max-w-md bg-velmora-alabaster shadow-2xl transition-transform duration-500 ease-in-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-velmora-charcoal/10">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="text-sm uppercase tracking-widest font-sans font-semibold">Shopping Bag</h2>
            <span className="text-xs text-velmora-grey font-sans">({items.length})</span>
          </div>
          <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag className="w-12 h-12 text-velmora-charcoal/20" />
              <p className="font-serif text-xl">Your bag is empty</p>
              <button
                onClick={onClose}
                className="text-xs uppercase tracking-widest border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex space-x-4">
                  <div className="w-24 h-32 bg-velmora-charcoal/5 flex-shrink-0 relative group overflow-hidden">
                     <img
                      data-strk-img-id={`cart-item-${item.id}`}
                      data-strk-img={`[cart-item-title-${item.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between">
                        <h3 id={`cart-item-title-${item.id}`} className="text-xs uppercase tracking-widest font-serif font-medium pr-4">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-velmora-grey hover:text-velmora-charcoal transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-velmora-grey mt-1 font-sans">{formatPrice(item.price)}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-velmora-charcoal/10 px-2 py-1 space-x-4">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-sans w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:text-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-xs font-sans font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-velmora-charcoal/10 space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-velmora-grey font-sans mb-1">Subtotal</p>
                <p className="text-lg font-serif">{formatPrice(subtotal)}</p>
              </div>
              <p className="text-[10px] text-velmora-grey font-sans">Shipping & taxes calculated at checkout</p>
            </div>
            <button className="w-full bg-velmora-charcoal text-velmora-alabaster py-4 text-xs uppercase tracking-widest hover:bg-velmora-charcoal/90 transition-colors font-sans font-bold">
              Secure Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
