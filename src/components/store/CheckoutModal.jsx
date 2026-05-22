import { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { useCart } from '@/context/CartContext';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const DELIVERY_FEE = 3.99;

const CheckoutModal = ({ isOpen, onClose }) => {
  const { items, totalAmount, clearCart } = useCart();
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    delivery_address: '',
    notes: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.customer_name.trim()) return 'Full name is required.';
    if (!form.customer_email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(form.customer_email)) return 'Please enter a valid email.';
    if (!form.delivery_address.trim()) return 'Delivery address is required.';
    if (items.length === 0) return 'Your cart is empty.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');

    const orderItems = items.map((i) => ({
      fruit_id: i.id,
      name: i.name,
      emoji: i.emoji,
      price: i.price,
      unit: i.unit,
      quantity: i.quantity,
    }));

    const { data: response, error } = await client
      .from('Orders')
      .insert({
        data: {
          customer_name: form.customer_name.trim(),
          customer_email: form.customer_email.trim(),
          customer_phone: form.customer_phone.trim(),
          delivery_address: form.delivery_address.trim(),
          notes: form.notes.trim(),
          items: orderItems,
          total_amount: parseFloat((totalAmount + DELIVERY_FEE).toFixed(2)),
          status: 'pending',
        },
      })
      .select()
      .single();

    if (error || response?.success === false) {
      const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : (error?.message || 'Order failed. Please try again.');
      setErrorMsg(msgs);
      setStatus('error');
      return;
    }

    setOrderId(response?.data?.id);
    clearCart();
    setStatus('success');
  };

  const handleClose = () => {
    setStatus('idle');
    setErrorMsg('');
    setOrderId(null);
    setForm({ customer_name: '', customer_email: '', customer_phone: '', delivery_address: '', notes: '' });
    onClose();
  };

  if (!isOpen) return null;

  const grandTotal = totalAmount + DELIVERY_FEE;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
          {status === 'success' ? (
            /* Success state */
            <div className="flex flex-col items-center justify-center gap-5 p-10 text-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Order Placed!</h2>
              <p className="text-gray-500">
                Thank you for your order. We'll send a confirmation to <strong>{form.customer_email}</strong>.
              </p>
              {orderId && (
                <p className="text-xs text-gray-400">Order #{orderId}</p>
              )}
              <button
                onClick={handleClose}
                className="bg-green-700 hover:bg-green-800 text-white font-bold rounded-full px-8 py-3 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Checkout</h2>
                <button onClick={handleClose} className="text-gray-400 hover:text-gray-700 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-5">
                {/* Order summary */}
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-3">Order Summary</p>
                  <ul className="flex flex-col gap-2">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-center justify-between text-sm">
                        <span className="text-gray-700">
                          {item.emoji} {item.name} × {item.quantity}
                        </span>
                        <span className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200 mt-3 pt-3 flex flex-col gap-1.5">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Subtotal</span>
                      <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Delivery</span>
                      <span>${DELIVERY_FEE.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-gray-900 text-base mt-1">
                      <span>Total</span>
                      <span className="text-green-700">${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Customer details */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm font-semibold text-gray-700">Your Details</p>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-600" htmlFor="customer_name">Full Name *</label>
                    <input
                      id="customer_name"
                      name="customer_name"
                      type="text"
                      value={form.customer_name}
                      onChange={onChange}
                      placeholder="Jane Smith"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-600" htmlFor="customer_email">Email *</label>
                    <input
                      id="customer_email"
                      name="customer_email"
                      type="email"
                      value={form.customer_email}
                      onChange={onChange}
                      placeholder="jane@example.com"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-600" htmlFor="customer_phone">Phone (optional)</label>
                    <input
                      id="customer_phone"
                      name="customer_phone"
                      type="tel"
                      value={form.customer_phone}
                      onChange={onChange}
                      placeholder="+1 555 000 0000"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-600" htmlFor="delivery_address">Delivery Address *</label>
                    <textarea
                      id="delivery_address"
                      name="delivery_address"
                      rows={2}
                      value={form.delivery_address}
                      onChange={onChange}
                      placeholder="123 Main St, City, State, ZIP"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-gray-600" htmlFor="notes">Delivery Notes (optional)</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={2}
                      value={form.notes}
                      onChange={onChange}
                      placeholder="Leave at door, ring bell, etc."
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                {errorMsg && (
                  <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-60 text-white font-bold rounded-full py-3.5 transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Placing Order…
                    </>
                  ) : (
                    `Place Order · $${grandTotal.toFixed(2)}`
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
