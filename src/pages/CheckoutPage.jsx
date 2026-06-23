import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { ChevronDown } from 'lucide-react';

function FormField({ label, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="label-caps text-ink block mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input-underline"
      />
    </div>
  );
}

export default function CheckoutPage() {
  const { items, subtotal, setIsOpen } = useCart();
  const [step, setStep] = useState('contact');
  const [form, setForm] = useState({
    email: '', firstName: '', lastName: '',
    address: '', city: '', state: '', zip: '', country: 'United States',
    cardNumber: '', expiry: '', cvv: '', cardName: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-cream pt-16 md:pt-20 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
          <h1
            className="font-serif text-4xl md:text-5xl text-ink font-light mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Order Placed
          </h1>
          <p className="text-muted text-sm font-light leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Thank you. Your pieces are being prepared. You will receive a confirmation at {form.email}.
          </p>
          <p className="font-serif text-lg text-gold italic mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            "Made slowly. Worn often."
          </p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
          <div className="w-12 h-px bg-gold mx-auto mt-10" />
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream pt-16 md:pt-20 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-serif text-2xl text-ink/40 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Your bag is empty
          </p>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const shipping = subtotal >= 150 ? 0 : 12;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="font-serif text-2xl tracking-widest text-ink hover:text-gold transition-colors duration-300"
            style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.2em' }}
          >
            Small Hours
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact */}
              <div>
                <h2
                  className="font-serif text-2xl text-ink font-light mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Contact
                </h2>
                <FormField label="Email" type="email" placeholder="you@example.com" value={form.email} onChange={update('email')} required />
                <p className="label-caps text-muted mt-3" style={{ fontSize: '9px' }}>
                  Guest checkout — no account required
                </p>
              </div>

              {/* Shipping */}
              <div>
                <h2
                  className="font-serif text-2xl text-ink font-light mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Shipping
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <FormField label="First Name" placeholder="First name" value={form.firstName} onChange={update('firstName')} required />
                  <FormField label="Last Name" placeholder="Last name" value={form.lastName} onChange={update('lastName')} required />
                </div>
                <div className="mt-4">
                  <FormField label="Address" placeholder="Street address" value={form.address} onChange={update('address')} required />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <FormField label="City" placeholder="City" value={form.city} onChange={update('city')} required />
                  <FormField label="State" placeholder="State" value={form.state} onChange={update('state')} required />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <FormField label="ZIP Code" placeholder="ZIP" value={form.zip} onChange={update('zip')} required />
                  <div>
                    <label className="label-caps text-ink block mb-2">Country</label>
                    <select
                      value={form.country}
                      onChange={update('country')}
                      className="input-underline"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div>
                <h2
                  className="font-serif text-2xl text-ink font-light mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Payment
                </h2>
                <div className="flex gap-3 mb-6">
                  {['Card', 'Apple Pay', 'Shop Pay'].map(method => (
                    <button
                      key={method}
                      type="button"
                      className="label-caps px-4 py-2 border border-ink/30 text-ink hover:border-gold hover:text-gold transition-colors duration-300"
                      style={{ fontSize: '9px' }}
                    >
                      {method}
                    </button>
                  ))}
                </div>
                <FormField label="Card Number" placeholder="1234 5678 9012 3456" value={form.cardNumber} onChange={update('cardNumber')} required />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <FormField label="Expiry" placeholder="MM / YY" value={form.expiry} onChange={update('expiry')} required />
                  <FormField label="CVV" placeholder="CVV" value={form.cvv} onChange={update('cvv')} required />
                </div>
                <div className="mt-4">
                  <FormField label="Name on Card" placeholder="Full name" value={form.cardName} onChange={update('cardName')} required />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full">
                Place Order — ${total.toFixed(2)}
              </button>

              <p className="label-caps text-muted text-center" style={{ fontSize: '9px' }}>
                Secured by Stripe. Your payment information is encrypted.
              </p>
            </form>
          </div>

          {/* Order summary */}
          <div className="lg:pl-8 lg:border-l lg:border-cream-dark">
            <h2
              className="font-serif text-2xl text-ink font-light mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Your Bag
            </h2>
            <div className="space-y-5 mb-8">
              {items.map(item => (
                <div key={item.key} className="flex items-center gap-4">
                  <div className="w-16 h-20 bg-cream-dark flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-serif text-base text-ink" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {item.name}
                    </p>
                    {item.size && item.size !== 'One size' && (
                      <p className="label-caps text-muted mt-0.5" style={{ fontSize: '9px' }}>Size {item.size}</p>
                    )}
                    <p className="label-caps text-muted mt-0.5" style={{ fontSize: '9px' }}>Qty {item.quantity}</p>
                  </div>
                  <p className="text-ink text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-cream-dark pt-6 space-y-3">
              <div className="flex justify-between">
                <p className="label-caps text-muted">Subtotal</p>
                <p className="text-ink text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="label-caps text-muted">Shipping</p>
                <p className="text-ink text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </p>
              </div>
              <div className="flex justify-between pt-3 border-t border-cream-dark">
                <p className="label-caps text-ink">Total</p>
                <p className="font-serif text-xl text-ink" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>
            {shipping > 0 && (
              <p className="label-caps text-gold mt-4" style={{ fontSize: '9px' }}>
                Free shipping on orders over $150
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
