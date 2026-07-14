import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { isCartOpen, closeCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-velmora-bg z-[70] transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-velmora-accent/10">
          <h2 className="font-serif text-2xl uppercase tracking-widest">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="font-serif text-xl italic text-velmora-dark/60">Your cart is empty.</p>
              <button 
                onClick={closeCart}
                className="px-8 py-3 bg-velmora-accent text-white uppercase tracking-widest text-sm hover:bg-velmora-accent-hover transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-32 bg-[#EBE8E3] bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-serif uppercase tracking-widest text-sm">{item.name}</h3>
                        <p className="text-xs text-velmora-dark/60 mt-1">{item.variant}</p>
                      </div>
                      <p className="font-medium">${item.price}</p>
                    </div>
                    
                    <div className="mt-auto flex justify-between items-end">
                      <div className="flex items-center border border-velmora-accent/20">
                        <button 
                          className="px-3 py-1 hover:bg-black/5 transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          className="px-3 py-1 hover:bg-black/5 transition-colors"
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs uppercase tracking-widest text-velmora-dark/50 hover:text-velmora-dark transition-colors border-b border-transparent hover:border-velmora-dark pb-0.5"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-velmora-accent/10 bg-white">
            <div className="flex justify-between items-center mb-6 font-medium text-lg">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-dark/60 mb-6 text-center italic">
              Shipping & taxes calculated at checkout
            </p>
            <Link 
              to="/checkout"
              onClick={closeCart}
              className="w-full block text-center px-8 py-4 bg-velmora-dark text-white uppercase tracking-[0.2em] text-sm hover:bg-black transition-colors"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;