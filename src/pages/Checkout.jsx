import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { createOrder } from '../api/products.js';

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    shipping_address: '',
    notes: '',
  });

  const shipping = subtotal >= 100 ? 0 : 19.99;
  const total = subtotal + shipping;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.customer_name.trim()) return 'Name is required';
    if (!form.customer_email.trim() || !/^\S+@\S+\.\S+$/.test(form.customer_email)) return 'Valid email is required';
    if (!form.shipping_address.trim()) return 'Shipping address is required';
    if (items.length === 0) return 'Your cart is empty';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) { setError(err); return; }

    setStatus('submitting');
    try {
      const itemsJson = JSON.stringify(
        items.map((i) => ({
          id: i.id,
          name: i.data.name,
          price: i.data.price,
          qty: i.qty,
        }))
      );

      const order = await createOrder({
        ...form,
        items_json: itemsJson,
        subtotal: parseFloat(subtotal.toFixed(2)),
        shipping_cost: parseFloat(shipping.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
        status: 'pending',
      });

      setOrderId(order?.id);
      clearCart();
      setStatus('success');
    } catch (err) {
      console.error('[checkout] error', err);
      setError(err.message || 'Order failed. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-seafoam min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl p-12 max-w-md w-full text-center shadow-lg">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-extrabold text-navy mb-3">Order Placed!</h2>
          <p className="text-slate-text mb-2">
            Thank you for your order{orderId ? ` #${orderId}` : ''}!
          </p>
          <p className="text-slate-text text-sm mb-8">
            You'll receive a confirmation email shortly. Your sea slugs will be shipped overnight in insulated packaging.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-teal-ocean text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-ocean-dark transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0 && status !== 'success') {
    return (
      <div className="bg-seafoam min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-navy mb-2">Your cart is empty</h2>
          <Link to="/shop" className="text-teal-ocean hover:underline font-semibold">Browse the shop</Link>
        </div>
      </div>
    );
  }

  const inputClass = "w-full border border-border-ocean rounded-xl px-4 py-3 text-navy placeholder-muted-text focus:outline-none focus:ring-2 focus:ring-teal-ocean/30 text-sm bg-white";
  const labelClass = "block text-sm font-semibold text-navy mb-1.5";

  return (
    <div className="bg-seafoam min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-slate-text hover:text-teal-ocean transition-colors text-sm mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <h1 className="text-3xl font-extrabold text-navy mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-border-ocean">
              <h2 className="text-lg font-bold text-navy mb-5">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>Full Name *</label>
                  <input name="customer_name" value={form.customer_name} onChange={onChange} placeholder="Jane Doe" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input name="customer_email" type="email" value={form.customer_email} onChange={onChange} placeholder="jane@example.com" className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input name="customer_phone" value={form.customer_phone} onChange={onChange} placeholder="+1 (555) 000-0000" className={inputClass} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border-ocean">
              <h2 className="text-lg font-bold text-navy mb-5">Shipping Address</h2>
              <div>
                <label className={labelClass}>Full Address *</label>
                <textarea
                  name="shipping_address"
                  value={form.shipping_address}
                  onChange={onChange}
                  placeholder="123 Ocean Drive, Coral Bay, CA 90210"
                  rows={3}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border-ocean">
              <h2 className="text-lg font-bold text-navy mb-5">Special Instructions</h2>
              <textarea
                name="notes"
                value={form.notes}
                onChange={onChange}
                placeholder="Any special care instructions or delivery notes..."
                rows={3}
                className={inputClass}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-coral text-white py-4 rounded-xl font-bold text-lg hover:bg-coral-light transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Placing Order...</>
              ) : (
                `Place Order — $${total.toFixed(2)}`
              )}
            </button>
          </form>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 border border-border-ocean sticky top-24">
              <h2 className="text-lg font-bold text-navy mb-5">Order Summary</h2>
              <ul className="space-y-3 mb-5">
                {items.map((item) => (
                  <li key={item.id} className="flex justify-between items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-navy truncate">{item.data.name}</p>
                      <p className="text-xs text-muted-text">Qty: {item.qty}</p>
                    </div>
                    <span className="text-sm font-bold text-navy flex-shrink-0">${(item.data.price * item.qty).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border-ocean pt-4 space-y-2">
                <div className="flex justify-between text-sm text-slate-text">
                  <span>Subtotal</span>
                  <span className="font-medium text-navy">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-text">
                  <span>Shipping</span>
                  <span className="font-medium text-navy">
                    {shipping === 0 ? <span className="text-teal-ocean font-semibold">Free</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-navy text-base border-t border-border-ocean pt-2 mt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <p className="text-xs text-muted-text mt-4 text-center">
                🐌 48-hour live arrival guarantee included
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
