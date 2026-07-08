import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

const CartDrawer = () => {
  const {
    items,
    isOpen,
    totalItems,
    totalPrice,
    removeItem,
    updateQuantity,
    closeCart,
    clearCart
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="font-serif text-xl">
            Shopping Bag ({totalItems})
          </h2>
          <button
            onClick={closeCart}
            className="hover:opacity-60 transition-opacity"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-grow overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-sm tracking-widest underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  {/* Product Image */}
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="flex-shrink-0"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-grow">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="text-sm tracking-wider uppercase hover:opacity-60"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">${item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:opacity-60"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:opacity-60"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex-shrink-0 hover:opacity-60"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="text-sm tracking-wider">SUBTOTAL</span>
              <span className="text-lg font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500">
              Shipping & taxes calculated at checkout
            </p>

            {/* Checkout Button */}
            <button className="w-full bg-black text-white py-4 text-sm tracking-widest hover:bg-gray-800 transition-colors">
              CHECKOUT
            </button>

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="w-full text-sm text-gray-500 hover:text-black transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;