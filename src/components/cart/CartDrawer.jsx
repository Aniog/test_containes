import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';

const CartDrawer = () => {
  const { isCartOpen, closeCart, cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-stone-50 shadow-xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-stone-200">
          <h2 className="font-serif text-2xl uppercase tracking-wider">Your Cart</h2>
          <button onClick={closeCart} className="text-stone-400 hover:text-stone-900 transition-colors p-2">
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-stone-500">
              <ShoppingBag size={48} className="mb-4 text-stone-300" />
              <p className="mb-6 font-medium">Your cart is empty.</p>
              <Link to="/shop" onClick={closeCart} className="bg-stone-900 hover:bg-amber-700 text-white px-8 py-3 uppercase tracking-widest text-sm font-medium transition-colors">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-24 aspect-[3/4] bg-stone-100 flex-shrink-0 relative overflow-hidden">
                    {/* Placeholder for cart item image - we can just use the SVG to be safe without full context here */}
                     <img 
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <Link to={`/product/${item.id}`} onClick={closeCart} className="font-medium text-sm hover:text-amber-700 transition-colors uppercase tracking-wider line-clamp-2">
                          {item.title}
                        </Link>
                        <button onClick={() => removeFromCart(item.id, item.tone)} className="text-stone-400 hover:text-stone-900 px-1">
                           <X size={16} />
                        </button>
                      </div>
                      <p className="text-stone-500 text-xs mb-2 capitalize">{item.tone} Tone</p>
                      <p className="font-medium text-sm">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2">
                      <div className="border border-stone-300 flex items-center justify-between px-2 w-24">
                        <button onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)} className="p-1 text-stone-500 hover:text-foreground"><Minus size={14} /></button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)} className="p-1 text-stone-500 hover:text-foreground"><Plus size={14} /></button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-stone-200 bg-stone-50 text-stone-900">
            <div className="flex justify-between items-center mb-6 font-medium">
              <span className="uppercase tracking-widest text-sm">Subtotal</span>
              <span className="text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-stone-500 text-xs mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-4 px-6 tracking-widest uppercase transition-colors">
              Checkout
            </button>
          </div>
        )}
        
      </div>
    </>
  );
};

export default CartDrawer;