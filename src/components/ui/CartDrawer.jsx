import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} />
      <div className="cart-drawer">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-200">
          <h2 className="text-lg font-serif tracking-widest uppercase">Your Cart</h2>
          <button onClick={closeCart} className="p-2 hover:text-gold-500 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg mb-2">Your cart is empty</p>
              <p className="text-sm text-velmora-500">Discover our collection and find something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="product-name text-sm mb-1">{item.name}</h3>
                    <p className="text-xs text-velmora-500 mb-2">{item.variant}</p>
                    <p className="text-sm font-medium mb-3">${item.price}</p>
                    
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-velmora-300 flex items-center justify-center hover:border-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-velmora-300 flex items-center justify-center hover:border-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-velmora-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-velmora-200 p-6">
            <div className="flex justify-between mb-4">
              <span className="text-sm tracking-widest uppercase">Subtotal</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-500 mb-4">Shipping & taxes calculated at checkout</p>
            <button className="btn-gold w-full">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 text-xs tracking-widest uppercase text-velmora-500 hover:text-charcoal transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
