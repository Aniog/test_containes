import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would process payment and create order
    alert('Order placed successfully! (This is a demo)');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-cormorant text-3xl mb-4">Your cart is empty</h2>
          <p className="text-charcoal/70 mb-8">Add some beautiful pieces to your cart</p>
          <button
            onClick={() => navigate('/shop')}
            className="btn-primary"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm tracking-wider uppercase hover:text-gold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>

      <div className="container-custom py-12">
        <h1 className="font-cormorant text-4xl md:text-5xl text-center mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="font-cormorant text-2xl mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm tracking-wider uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="font-cormorant text-2xl mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm tracking-wider uppercase mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm tracking-wider uppercase mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm tracking-wider uppercase mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm tracking-wider uppercase mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm tracking-wider uppercase mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zip"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="font-cormorant text-2xl mb-6">Payment Information</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm tracking-wider uppercase mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm tracking-wider uppercase mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        placeholder="MM/YY"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm tracking-wider uppercase mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="123"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Lock className="w-5 h-5" />
                Place Order - ${cartTotal.toFixed(2)}
              </button>

              <p className="text-center text-sm text-charcoal/60">
                <Lock className="w-4 h-4 inline mr-1" />
                Secure SSL encrypted checkout
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-8 border border-gray-100 sticky top-24">
              <h2 className="font-cormorant text-2xl mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-cormorant text-lg">{item.product.name}</h3>
                      <p className="text-sm text-charcoal/70">{item.variant}</p>
                      <p className="text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-cormorant text-lg">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="text-charcoal/70">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/70">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
