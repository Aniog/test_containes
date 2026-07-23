import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-light z-50 shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-brand-DEFAULT/30">
          <h2 className="font-serif text-2xl text-brand-dark">Your Bag</h2>
          <button onClick={closeCart} className="text-brand-muted hover:text-brand-dark transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-brand-muted">
              <ShoppingBag size={48} strokeWidth={1} />
              <p>Your bag is currently empty.</p>
              <button 
                onClick={closeCart}
                className="mt-4 border border-brand-dark text-brand-dark px-6 py-2 uppercase text-sm tracking-widest hover:bg-brand-dark hover:text-white transition-colors block"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-24 h-32 object-cover bg-white" />
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <h3 className="font-serif text-lg text-brand-dark uppercase tracking-wide">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-brand-muted hover:text-brand-dark"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-brand-muted text-sm capitalize mt-1 border border-brand-DEFAULT/50 px-2 py-0.5 inline-block w-max rounded-sm">{item.variant}</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-brand-DEFAULT/50">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="px-2 py-1 text-brand-muted hover:text-brand-dark"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-2 py-1 text-sm w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="px-2 py-1 text-brand-muted hover:text-brand-dark"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-brand-dark">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-brand-DEFAULT/30 p-6 bg-brand-light">
            <div className="flex justify-between items-center mb-6 text-brand-dark">
              <span className="uppercase tracking-widest text-sm">Subtotal</span>
              <span className="font-medium text-lg">${cartTotal}</span>
            </div>
            <p className="text-brand-muted text-xs text-center mb-4">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-brand-dark text-white uppercase tracking-widest text-sm font-medium py-4 hover:bg-brand-dark/90 transition-colors rounded-sm">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}