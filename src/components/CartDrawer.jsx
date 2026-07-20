import { X, Plus, Minus, Lock, HandHeart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      
      <div className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-velmora-base shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-xl tracking-widest uppercase">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-velmora-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-velmora-gold/10 flex items-center justify-center text-velmora-gold">
                <HandHeart size={32} />
              </div>
              <div>
                <p className="font-serif text-2xl mb-2">Your cart is empty</p>
                <p className="text-velmora-muted text-sm">Discover your next treasured piece.</p>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="px-8 py-3 bg-velmora-dark text-white hover:bg-velmora-gold transition-colors uppercase tracking-widest text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {cart.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-100 flex-shrink-0 relative overflow-hidden">
                    <img 
                      src={item.image} 
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
                          className="font-serif uppercase tracking-widest text-sm hover:text-velmora-gold transition-colors line-clamp-2 pr-4"
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-velmora-muted hover:text-velmora-dark transition-colors"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      {item.variant && (
                        <p className="text-xs text-velmora-muted mt-1 uppercase tracking-wider">
                          Tone: {item.variant}
                        </p>
                      )}
                      <p className="text-sm mt-1">${item.price}</p>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border border-velmora-border h-8">
                        <button 
                          className="w-8 h-full flex items-center justify-center text-velmora-muted hover:text-velmora-dark transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          className="w-8 h-full flex items-center justify-center text-velmora-muted hover:text-velmora-dark transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-velmora-border bg-velmora-base">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif uppercase tracking-widest">Subtotal</span>
              <span className="text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted mb-6 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full py-4 bg-velmora-dark text-white hover:bg-velmora-gold transition-colors uppercase tracking-widest text-sm flex items-center justify-center gap-2">
              <Lock size={16} /> Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
