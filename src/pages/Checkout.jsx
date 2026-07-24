import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Check, Lock } from 'lucide-react';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: 'United States',
    zip: '',
    card: '',
    expiry: '',
    cvc: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="pt-[72px] min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="text-center max-w-md px-6">
          <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--color-gold)' }}>
            <Check className="w-8 h-8" style={{ color: 'var(--color-charcoal)' }} />
          </div>
          <h1 className="font-serif text-3xl mb-4">Thank You!</h1>
          <p className="font-sans text-lg mb-8" style={{ color: 'var(--color-muted)' }}>
            Your order has been placed successfully. We'll send you a confirmation email shortly.
          </p>
          <Link to="/shop" className="btn-primary inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-[72px] min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">Your cart is empty</h1>
          <Link to="/shop" className="underline">Continue shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[72px] min-h-screen" style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container mx-auto px-6 py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-center mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Contact */}
            <div className="mb-8">
              <h2 className="font-sans text-sm tracking-widest uppercase mb-4">Contact</h2>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3 border font-sans text-sm focus:outline-none"
                style={{ borderColor: 'var(--color-border-dark)', backgroundColor: 'var(--color-warm-white)' }}
              />
            </div>

            {/* Shipping */}
            <div className="mb-8">
              <h2 className="font-sans text-sm tracking-widest uppercase mb-4">Shipping</h2>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  required
                  className="px-4 py-3 border font-sans text-sm focus:outline-none"
                  style={{ borderColor: 'var(--color-border-dark)', backgroundColor: 'var(--color-warm-white)' }}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  required
                  className="px-4 py-3 border font-sans text-sm focus:outline-none"
                  style={{ borderColor: 'var(--color-border-dark)', backgroundColor: 'var(--color-warm-white)' }}
                />
              </div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
                className="w-full mt-3 px-4 py-3 border font-sans text-sm focus:outline-none"
                style={{ borderColor: 'var(--color-border-dark)', backgroundColor: 'var(--color-warm-white)' }}
              />
              <div className="grid grid-cols-3 gap-3 mt-3">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="px-4 py-3 border font-sans text-sm focus:outline-none"
                  style={{ borderColor: 'var(--color-border-dark)', backgroundColor: 'var(--color-warm-white)' }}
                />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  required
                  className="px-4 py-3 border font-sans text-sm focus:outline-none"
                  style={{ borderColor: 'var(--color-border-dark)', backgroundColor: 'var(--color-warm-white)' }}
                />
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="ZIP"
                  required
                  className="px-4 py-3 border font-sans text-sm focus:outline-none"
                  style={{ borderColor: 'var(--color-border-dark)', backgroundColor: 'var(--color-warm-white)' }}
                />
              </div>
            </div>

            {/* Payment */}
            <div className="mb-8">
              <h2 className="font-sans text-sm tracking-widest uppercase mb-4">Payment</h2>
              <div className="p-4 border" style={{ borderColor: 'var(--color-border-dark)', backgroundColor: 'var(--color-warm-white)' }}>
                <input
                  type="text"
                  name="card"
                  value={formData.card}
                  onChange={handleChange}
                  placeholder="Card number"
                  required
                  className="w-full font-sans text-sm focus:outline-none mb-3"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    required
                    className="font-sans text-sm focus:outline-none"
                  />
                  <input
                    type="text"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleChange}
                    placeholder="CVC"
                    required
                    className="font-sans text-sm focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full justify-center"
            >
              <Lock className="w-4 h-4 mr-2" />
              Pay ${(cartTotal + 5.99).toFixed(2)}
            </button>
          </form>

          {/* Order Summary */}
          <div className="lg:pl-8 lg:border-l" style={{ borderColor: 'var(--color-border)' }}>
            <h2 className="font-sans text-sm tracking-widest uppercase mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-16 h-16 flex-shrink-0" style={{ backgroundColor: 'var(--color-ivory)' }}>
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="product-name text-xs">{item.name}</p>
                    <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{item.variant} × {item.quantity}</p>
                  </div>
                  <p className="font-sans text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex justify-between font-sans text-sm">
                <span style={{ color: 'var(--color-muted)' }}>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-sans text-sm">
                <span style={{ color: 'var(--color-muted)' }}>Shipping</span>
                <span>$5.99</span>
              </div>
              <div className="flex justify-between font-sans text-lg font-medium pt-2">
                <span>Total</span>
                <span>${(cartTotal + 5.99).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}