import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  if (cart.length === 0 && !isComplete) {
    return (
      <div className="min-h-screen bg-[#F8F5F1] pt-20 flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-[#6B665F] mb-6">Your cart is empty.</p>
          <Link to="/shop">
            <Button variant="outline">BROWSE THE COLLECTION</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-[#F8F5F1] pt-20 flex items-center justify-center">
        <div className="text-center px-6 max-w-md">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto border-2 border-[#B89778] rounded-full flex items-center justify-center">
              <span className="text-[#B89778] text-2xl">✓</span>
            </div>
          </div>
          <h1 className="font-serif text-3xl tracking-[1px] text-[#2C2825] mb-4">Thank You</h1>
          <p className="text-[#6B665F] mb-8">
            Your order has been placed. A confirmation has been sent to {formData.email || 'your email'}.
          </p>
          <p className="text-sm tracking-[1px] text-[#B89778] mb-8">
            EXPECT DELIVERY IN 3–7 BUSINESS DAYS
          </p>
          <Link to="/shop">
            <Button>CONTINUE SHOPPING</Button>
          </Link>
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
    }, 600);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1] pt-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="font-serif text-3xl tracking-[1px] text-[#2C2825] mb-10">Checkout</h1>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact */}
              <div>
                <h2 className="text-sm tracking-[2px] mb-4">CONTACT</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#E8E4DE] px-4 py-3 text-sm focus:outline-none focus:border-[#B89778]"
                />
              </div>

              {/* Shipping */}
              <div>
                <h2 className="text-sm tracking-[2px] mb-4">SHIPPING ADDRESS</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="FIRST NAME"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="border border-[#E8E4DE] px-4 py-3 text-sm focus:outline-none focus:border-[#B89778]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="LAST NAME"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="border border-[#E8E4DE] px-4 py-3 text-sm focus:outline-none focus:border-[#B89778]"
                  />
                </div>
                <input
                  type="text"
                  name="address"
                  placeholder="STREET ADDRESS"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#E8E4DE] px-4 py-3 text-sm mb-4 focus:outline-none focus:border-[#B89778]"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="city"
                    placeholder="CITY"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="border border-[#E8E4DE] px-4 py-3 text-sm focus:outline-none focus:border-[#B89778]"
                  />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="border border-[#E8E4DE] px-4 py-3 text-sm focus:outline-none focus:border-[#B89778] bg-white"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </div>
              </div>

              {/* Payment */}
              <div>
                <h2 className="text-sm tracking-[2px] mb-4">PAYMENT</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="CARD NUMBER"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    maxLength={19}
                    className="w-full border border-[#E8E4DE] px-4 py-3 text-sm focus:outline-none focus:border-[#B89778]"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM / YY"
                      value={formData.expiry}
                      onChange={handleChange}
                      required
                      className="border border-[#E8E4DE] px-4 py-3 text-sm focus:outline-none focus:border-[#B89778]"
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      maxLength={4}
                      className="border border-[#E8E4DE] px-4 py-3 text-sm focus:outline-none focus:border-[#B89778]"
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full mt-4 tracking-[2px]">
                COMPLETE ORDER — {formatPrice(cartTotal)}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-[#E8E4DE] p-6 sticky top-24">
              <h2 className="text-sm tracking-[2px] mb-6">ORDER SUMMARY</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4 text-sm">
                    <div className="w-14 h-14 bg-[#F5F2ED] flex-shrink-0 overflow-hidden">
                      <img src={item.images[0]} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif tracking-[0.5px] text-[#2C2825]">{item.name}</p>
                      <p className="text-xs text-[#6B665F]">{item.selectedVariant} · Qty {item.quantity}</p>
                    </div>
                    <p className="text-[#2C2825]">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E8E4DE] pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-[#6B665F]">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between text-[#6B665F]">
                  <span>Shipping</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#E8E4DE] text-[#2C2825] font-medium">
                  <span>Total</span>
                  <span>{formatPrice(cartTotal)}</span>
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
