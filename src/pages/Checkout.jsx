import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Check } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: 'United States',
    postalCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  if (cart.length === 0 && !isComplete) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#8A8178] mb-6">Your cart is empty</p>
          <Link to="/shop" className="btn btn-outline">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="pt-20 min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-[#B89778] mx-auto mb-8 flex items-center justify-center">
            <Check className="text-white" size={32} />
          </div>
          <h1 className="heading-serif text-4xl tracking-[0.04em] mb-4">Thank You</h1>
          <p className="text-[#5C5651] mb-8">Your order has been placed. You will receive a confirmation email shortly.</p>
          <Link to="/" className="btn btn-accent">Return to Homepage</Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order processing
    setTimeout(() => {
      setIsComplete(true);
      clearCart();
      toast.success('Order placed successfully!');
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm tracking-[0.05em] mb-10 hover:text-[#B89778]">
          <ArrowLeft size={16} /> BACK TO SHOP
        </Link>

        <h1 className="heading-serif text-4xl tracking-[0.04em] mb-12">Checkout</h1>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Contact */}
              <div>
                <h3 className="text-sm tracking-[0.1em] mb-6 pb-3 border-b border-[#E5E0D8]">CONTACT INFORMATION</h3>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email address" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-[#E5E0D8] px-5 py-3.5 text-sm focus:outline-none focus:border-[#B89778]"
                />
              </div>

              {/* Shipping */}
              <div>
                <h3 className="text-sm tracking-[0.1em] mb-6 pb-3 border-b border-[#E5E0D8]">SHIPPING ADDRESS</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input type="text" name="firstName" placeholder="First name" required value={formData.firstName} onChange={handleChange} className="border border-[#E5E0D8] px-5 py-3.5 text-sm focus:outline-none focus:border-[#B89778]" />
                  <input type="text" name="lastName" placeholder="Last name" required value={formData.lastName} onChange={handleChange} className="border border-[#E5E0D8] px-5 py-3.5 text-sm focus:outline-none focus:border-[#B89778]" />
                </div>
                <input type="text" name="address" placeholder="Street address" required value={formData.address} onChange={handleChange} className="w-full border border-[#E5E0D8] px-5 py-3.5 text-sm mb-4 focus:outline-none focus:border-[#B89778]" />
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input type="text" name="city" placeholder="City" required value={formData.city} onChange={handleChange} className="border border-[#E5E0D8] px-5 py-3.5 text-sm focus:outline-none focus:border-[#B89778]" />
                  <input type="text" name="postalCode" placeholder="Postal code" required value={formData.postalCode} onChange={handleChange} className="border border-[#E5E0D8] px-5 py-3.5 text-sm focus:outline-none focus:border-[#B89778]" />
                </div>
                <select name="country" value={formData.country} onChange={handleChange} className="w-full border border-[#E5E0D8] px-5 py-3.5 text-sm focus:outline-none focus:border-[#B89778]">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>

              {/* Payment */}
              <div>
                <h3 className="text-sm tracking-[0.1em] mb-6 pb-3 border-b border-[#E5E0D8]">PAYMENT</h3>
                <div className="space-y-4">
                  <input type="text" name="cardNumber" placeholder="Card number" required value={formData.cardNumber} onChange={handleChange} className="w-full border border-[#E5E0D8] px-5 py-3.5 text-sm focus:outline-none focus:border-[#B89778]" maxLength="19" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="expiry" placeholder="MM / YY" required value={formData.expiry} onChange={handleChange} className="border border-[#E5E0D8] px-5 py-3.5 text-sm focus:outline-none focus:border-[#B89778]" maxLength="5" />
                    <input type="text" name="cvv" placeholder="CVV" required value={formData.cvv} onChange={handleChange} className="border border-[#E5E0D8] px-5 py-3.5 text-sm focus:outline-none focus:border-[#B89778]" maxLength="4" />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-accent w-full py-4 text-base">
                PLACE ORDER — ${cartTotal.toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-[#E5E0D8] p-8 sticky top-24">
              <h3 className="text-sm tracking-[0.1em] mb-6 pb-3 border-b border-[#E5E0D8]">ORDER SUMMARY</h3>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4 text-sm">
                    <div className="w-16 h-16 bg-[#F8F6F3] flex-shrink-0">
                      <img src={item.images[0]} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="product-name tracking-[0.08em] text-xs pr-2">{item.name}</p>
                      <p className="text-[#8A8178] text-xs mt-0.5">{item.selectedVariant} · Qty {item.quantity}</p>
                    </div>
                    <p className="font-medium whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E5E0D8] pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#8A8178]">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-[#E5E0D8] font-medium text-base">
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

export default Checkout;