import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-[#1A1A1A]/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DED5]">
          <h2 className="font-serif text-xl tracking-[0.2em] uppercase text-[#1A1A1A]">Your Cart</h2>
          <button onClick={() => setIsOpen(false)} className="p-1 text-[#1A1A1A] hover:text-[#C5A572] transition-colors" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[#9B958E] mb-4" />
              <p className="font-serif text-lg text-[#1A1A1A] mb-2">Your cart is empty</p>
              <p className="text-sm text-[#6B6560] mb-6">Discover our curated collection</p>
              <Link to="/shop" onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center bg-[#1A1A1A] text-[#FAF8F5] font-sans text-sm font-medium tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-[#A88B5A] transition-colors">
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4 py-4 border-b border-[#E5DED5]/50 last:border-0">
                  <div className="w-20 h-20 bg-[#F2EDE7] rounded overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-[#1A1A1A] truncate">{item.name}</h3>
                    <p className="text-xs text-[#6B6560] mt-0.5">{item.variant}</p>
                    <p className="text-sm text-[#1A1A1A] mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center border border-[#E5DED5] text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors" aria-label="Decrease">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-[#1A1A1A] w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center border border-[#E5DED5] text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors" aria-label="Increase">
                        <Plus className="w-3 h-3" />
                      </button>
                      <button onClick={() => removeItem(item.id, item.variant)} className="ml-auto text-xs text-[#6B6560] underline hover:text-[#1A1A1A] transition-colors">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#E5DED5] px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-sans text-sm text-[#6B6560]">Subtotal</span>
              <span className="font-serif text-lg text-[#1A1A1A]">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#9B958E]">Shipping & taxes calculated at checkout</p>
            <button className="w-full inline-flex items-center justify-center bg-[#C5A572] text-[#FAF8F5] font-sans text-sm font-medium tracking-[0.2em] uppercase px-8 py-3.5 hover:bg-[#A88B5A] transition-colors">
              Proceed to Checkout
            </button>
            <button onClick={() => setIsOpen(false)} className="w-full text-center text-xs text-[#6B6560] underline hover:text-[#1A1A1A] transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
