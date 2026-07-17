import { useCart } from '../../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      <div className={cn(
        "fixed inset-y-0 right-0 z-50 w-full md:w-[400px] bg-background shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-serif">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500 hover:text-stone-900">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-500 space-y-4">
              <ShoppingBag className="w-12 h-12 text-stone-300" />
              <p className="font-serif text-xl text-stone-900">Your cart is empty</p>
              <p className="text-sm">Discover our signature pieces</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-4 border border-stone-200 px-6 py-3 hover:bg-stone-50 uppercase tracking-widest text-xs font-semibold text-stone-900 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-4 group">
                <div className="relative w-24 h-24 bg-stone-100 overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-serif text-lg leading-tight text-stone-900"><Link to={`/product/${item.id}`} onClick={() => setIsOpen(false)} className="hover:underline">{item.name}</Link></h3>
                      {item.options?.tone && <p className="text-sm text-stone-500 mt-1 capitalize">{item.options.tone} Tone</p>}
                    </div>
                    <p className="font-medium text-stone-900">${item.price}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-stone-200 rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, item.options, item.quantity - 1)}
                        className="p-1 px-2 text-stone-500 hover:text-stone-900 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm px-2 tabular-nums">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.options, item.quantity + 1)}
                        className="p-1 px-2 text-stone-500 hover:text-stone-900 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id, item.options)}
                      className="text-xs text-stone-400 hover:text-stone-900 uppercase tracking-wider underline underline-offset-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-stone-50 border-t space-y-4">
            <div className="flex justify-between items-center text-lg font-serif">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-sm text-stone-500">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-6 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
