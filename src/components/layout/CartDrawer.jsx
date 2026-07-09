import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import useCartStore from '../../store/useCartStore';

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, cartTotal } = useCartStore();

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50 transition-opacity" 
        onClick={closeCart}
      />
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-velmora-base z-50 flex flex-col shadow-2xl transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-2xl">Your Cart</h2>
          <button onClick={closeCart} className="text-velmora-muted hover:text-velmora-dark transition-colors">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <ShoppingBag size={48} strokeWidth={1} className="text-velmora-muted" />
              <p className="text-velmora-muted">Your cart is currently empty.</p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="mt-4 px-8 py-3 bg-velmora-dark text-velmora-base uppercase text-xs tracking-widest font-medium hover:bg-velmora-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={`${item.product.id}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-24 h-32 bg-velmora-light flex-shrink-0">
                    <img 
                      src={item.product.image1} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link 
                          to={`/product/${item.product.id}`}
                          onClick={closeCart} 
                          className="font-serif text-lg tracking-wide uppercase hover:text-velmora-gold transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <button 
                          onClick={() => removeItem(item.product.id, item.variant)}
                          className="text-velmora-muted hover:text-velmora-dark"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-velmora-muted mt-1">{item.variant}</p>
                      <p className="text-sm font-medium mt-2">${item.product.price}</p>
                    </div>
                    
                    <div className="flex items-center border border-velmora-border w-fit">
                      <button 
                        className="px-3 py-1 text-velmora-muted hover:text-velmora-dark transition-colors"
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button 
                        className="px-3 py-1 text-velmora-muted hover:text-velmora-dark transition-colors"
                        onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-velmora-border bg-velmora-base">
            <div className="flex justify-between items-center mb-6">
              <span className="font-medium">Subtotal</span>
              <span className="font-medium">${cartTotal()}</span>
            </div>
            <p className="text-xs text-velmora-muted mb-6">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-velmora-dark text-velmora-base py-4 uppercase text-sm tracking-widest font-medium hover:bg-velmora-gold transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;