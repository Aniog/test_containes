import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm animate-in fade-in duration-300"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-velmora-cream z-[70] shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 ease-out">
        <div className="flex items-center justify-between p-8 border-b border-velmora-black/5">
          <h2 className="text-xl font-serif tracking-widest uppercase">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:text-velmora-gold transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 thin-scrollbar">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-6">
              <ShoppingBag size={48} className="text-muted-foreground stroke-1" />
              <p className="text-muted-foreground tracking-widest uppercase text-xs">Your bag is empty</p>
              <Button onClick={() => setIsCartOpen(false)} variant="outline">
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-6">
                  <div className="w-24 aspect-[3/4] overflow-hidden bg-velmora-stone flex-shrink-0">
                    <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E" 
                      data-strk-img={`[cart-item-${item.id}]`}
                      data-strk-img-id={`cart-${item.id}`}
                      className="w-full h-full object-cover" 
                      alt={item.name} 
                    />
                  </div>
                  <div className="flex flex-col justify-between py-1 flex-grow">
                    <div>
                      <h3 id={`cart-item-${item.id}`} className="text-sm font-sans uppercase tracking-widest font-semibold">{item.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{item.variant}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-velmora-black/10 px-2 py-1">
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)} className="p-1 hover:text-velmora-gold">
                          <Minus size={12} />
                        </button>
                        <span className="text-xs px-2 min-w-[24px] text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="p-1 hover:text-velmora-gold">
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm text-muted-foreground">${item.price * item.quantity}</span>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-red-500 transition-colors w-fit underline mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-8 bg-velmora-stone space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em]">Subtotal</span>
            <span className="text-lg font-serif">${cartTotal}</span>
          </div>
          <p className="text-[10px] text-muted-foreground tracking-widest uppercase">Shipping and taxes calculated at checkout.</p>
          <Button className="w-full">Checkout</Button>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="w-full text-center text-[10px] uppercase tracking-[0.2em] hover:text-velmora-gold transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;