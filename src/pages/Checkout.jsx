import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
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

  const subtotal = getCartTotal();
  const shipping = 0;
  const total = subtotal + shipping;

  if (cart.length === 0 && !isComplete) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <p className="text-[#4A4640] mb-6">Your cart is empty.</p>
        <Link to="/shop">
          <Button variant="outline">BROWSE THE COLLECTION</Button>
        </Link>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#C5A46E] flex items-center justify-center mb-6">
            <span className="text-2xl text-[#0A0806]">✓</span>
          </div>
          <h1 className="font-serif text-3xl tracking-[1px] mb-3">Thank You</h1>
          <p className="text-[#4A4640]">Your order has been placed. A confirmation has been sent to {formData.email}.</p>
        </div>
        <p className="text-sm text-[#9A9590] mb-8">Order #VL{Date.now().toString().slice(-6)}</p>
        <Link to="/shop">
          <Button>CONTINUE SHOPPING</Button>
        </Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate processing
    setTimeout(() => {
      setIsComplete(true);
      clearCart();
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="font-serif text-3xl tracking-[1px] mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Contact */}
            <div>
              <h3 className="text-xs tracking-[2px] mb-4 text-[#9A9590]">CONTACT</h3>
              <input 
                type="email" 
                name="email" 
                placeholder="EMAIL ADDRESS" 
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#EDE9E3] px-4 py-3 text-sm focus:border-[#C5A46E] focus:outline-none" 
              />
            </div>

            {/* Shipping */}
            <div>
              <h3 className="text-xs tracking-[2px] mb-4 text-[#9A9590]">SHIPPING ADDRESS</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" name="firstName" placeholder="FIRST NAME" required value={formData.firstName} onChange={handleChange} className="border border-[#EDE9E3] px-4 py-3 text-sm focus:border-[#C5A46E] focus:outline-none" />
                <input type="text" name="lastName" placeholder="LAST NAME" required value={formData.lastName} onChange={handleChange} className="border border-[#EDE9E3] px-4 py-3 text-sm focus:border-[#C5A46E] focus:outline-none" />
              </div>
              <input type="text" name="address" placeholder="STREET ADDRESS" required value={formData.address} onChange={handleChange} className="w-full border border-[#EDE9E3] px-4 py-3 text-sm mb-4 focus:border-[#C5A46E] focus:outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="city" placeholder="CITY" required value={formData.city} onChange={handleChange} className="border border-[#EDE9E3] px-4 py-3 text-sm focus:border-[#C5A46E] focus:outline-none" />
                <input type="text" name="postalCode" placeholder="POSTAL CODE" required value={formData.postalCode} onChange={handleChange} className="border border-[#EDE9E3] px-4 py-3 text-sm focus:border-[#C5A46E] focus:outline-none" />
              </div>
            </div>

            {/* Payment */}
            <div>
              <h3 className="text-xs tracking-[2px] mb-4 text-[#9A9590]">PAYMENT</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  name="cardNumber" 
                  placeholder="CARD NUMBER" 
                  required
                  maxLength="19"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full border border-[#EDE9E3] px-4 py-3 text-sm focus:border-[#C5A46E] focus:outline-none" 
                />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="expiry" placeholder="MM / YY" required value={formData.expiry} onChange={handleChange} className="border border-[#EDE9E3] px-4 py-3 text-sm focus:border-[#C5A46E] focus:outline-none" />
                  <input type="text" name="cvv" placeholder="CVV" required maxLength="4" value={formData.cvv} onChange={handleChange} className="border border-[#EDE9E3] px-4 py-3 text-sm focus:border-[#C5A46E] focus:outline-none" />
                </div>
              </div>
              <p className="text-[10px] text-[#9A9590] mt-3">This is a demo checkout. No payment will be processed.</p>
            </div>

            <Button type="submit" size="lg" className="w-full">
              COMPLETE ORDER — {formatPrice(total)}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-[#EDE9E3] p-6 sticky top-24">
            <h3 className="text-xs tracking-[2px] mb-5 text-[#9A9590]">ORDER SUMMARY</h3>
            
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4 text-sm">
                  <div className="w-14 h-14 bg-[#F8F6F2] flex-shrink-0 overflow-hidden">
                    <img src={item.images[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-serif tracking-[0.5px] text-[#0A0806]">{item.name}</div>
                    <div className="text-[#9A9590] text-xs">{item.selectedVariant?.label} × {item.quantity}</div>
                  </div>
                  <div className="text-right tabular-nums">{formatPrice(item.price * item.quantity)}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#EDE9E3] pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-[#4A4640]">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#4A4640]">
                <span>Shipping</span>
                <span className="text-[#C5A46E]">FREE</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#EDE9E3] font-medium text-base">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
