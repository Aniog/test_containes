import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, subtotal, itemCount, updateQuantity, removeFromCart } = useCart();
  
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-serif text-xl font-semibold">
              Your Cart ({itemCount})
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
                <Link 
                  to="/shop" 
                  onClick={onClose}
                  className="inline-block mt-4 text-accent hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    {/* Product Image */}
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    
                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-serif text-sm font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">${item.price}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Remove Button */}
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500">Shipping calculated at checkout</p>
              <button className="w-full btn-accent">
                Checkout
              </button>
              <button 
                onClick={onClose}
                className="w-full text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
