import React from 'react'
import { X, Plus, Minus } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div 
        className={`overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-[#D4CFC4] flex items-center justify-between">
          <h2 className="serif text-xl tracking-[0.1em]">YOUR CART</h2>
          <button onClick={onClose} className="p-2">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
            <p className="text-[#8B7E6B] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={onClose}
              className="btn btn-primary"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#E8E4DE] flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em] pr-2">{item.name}</p>
                        <p className="text-xs text-[#8B7E6B] mt-1">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="text-[#8B7E6B] hover:text-[#1C1C1C]"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#D4CFC4]">
                        <button 
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#E8E4DE]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#E8E4DE]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#D4CFC4] bg-[#F5F2ED]">
              <div className="flex justify-between mb-6 text-sm">
                <span>TOTAL</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-full mb-3">
                CHECKOUT
              </button>
              <p className="text-center text-xs text-[#8B7E6B]">
                Shipping calculated at checkout
              </p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default CartDrawer