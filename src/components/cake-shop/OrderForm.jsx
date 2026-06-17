import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

const cakeOptions = [
  'Classic Vanilla Dream',
  'Dark Chocolate Fudge',
  'Strawberry Bliss',
  'Lemon Lavender',
  'Red Velvet Romance',
  'Caramel Pecan Torte',
  'Custom Design',
];

const OrderForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    cake: '',
    size: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="order" className="py-24 px-6 bg-[#fffaf5]">
        <div className="max-w-xl mx-auto text-center">
          <CheckCircle className="w-16 h-16 text-rose-400 mx-auto mb-6" />
          <h2 className="font-playfair text-3xl font-bold text-[#3d2b1f] mb-4">Order Received!</h2>
          <p className="text-[#7a5c4a] text-lg mb-8">
            Thank you, <strong>{form.name}</strong>! We've received your order request and will be in touch within 24 hours to confirm the details.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', cake: '', size: '', date: '', message: '' }); }}
            className="bg-rose-400 hover:bg-rose-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200"
          >
            Place Another Order
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-24 px-6 bg-[#fffaf5]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Order
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#3d2b1f] mb-4">
            Place Your Order
          </h2>
          <p className="text-[#7a5c4a] text-lg">
            Fill in the form below and we'll get back to you within 24 hours to confirm your order.
          </p>
        </div>

        <form onSubmit={onSubmit} className="bg-[#fdf6ee] rounded-2xl border border-[#f0dcc8] p-8 shadow-md space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#3d2b1f] mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="Your name"
                className="w-full border border-[#f0dcc8] rounded-xl px-4 py-3 text-[#3d2b1f] bg-white placeholder-[#c4a898] focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#3d2b1f] mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="you@example.com"
                className="w-full border border-[#f0dcc8] rounded-xl px-4 py-3 text-[#3d2b1f] bg-white placeholder-[#c4a898] focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#3d2b1f] mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="+1 (555) 000-0000"
                className="w-full border border-[#f0dcc8] rounded-xl px-4 py-3 text-[#3d2b1f] bg-white placeholder-[#c4a898] focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#3d2b1f] mb-2">Pickup / Delivery Date *</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={onChange}
                required
                className="w-full border border-[#f0dcc8] rounded-xl px-4 py-3 text-[#3d2b1f] bg-white focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-[#3d2b1f] mb-2">Cake Selection *</label>
              <select
                name="cake"
                value={form.cake}
                onChange={onChange}
                required
                className="w-full border border-[#f0dcc8] rounded-xl px-4 py-3 text-[#3d2b1f] bg-white focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
              >
                <option value="">Select a cake...</option>
                {cakeOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#3d2b1f] mb-2">Cake Size *</label>
              <select
                name="size"
                value={form.size}
                onChange={onChange}
                required
                className="w-full border border-[#f0dcc8] rounded-xl px-4 py-3 text-[#3d2b1f] bg-white focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
              >
                <option value="">Select size...</option>
                <option value="6-inch">6" — Serves 8–10</option>
                <option value="8-inch">8" — Serves 12–16</option>
                <option value="10-inch">10" — Serves 20–25</option>
                <option value="tiered">2-Tier — Serves 30+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#3d2b1f] mb-2">Special Requests</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={4}
              placeholder="Tell us about any dietary requirements, custom decorations, or special messages..."
              className="w-full border border-[#f0dcc8] rounded-xl px-4 py-3 text-[#3d2b1f] bg-white placeholder-[#c4a898] focus:outline-none focus:ring-2 focus:ring-rose-300 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-rose-400 hover:bg-rose-500 disabled:opacity-70 text-white font-semibold py-4 px-8 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {loading ? (
              <span className="animate-pulse">Sending your order...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Order Request
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
