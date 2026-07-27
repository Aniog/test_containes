import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { submitInquiry } from '@/api/inquiries';

const productTypes = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Machinery',
  'Packaging & Printing',
  'Health & Beauty',
  'Toys & Gifts',
  'Automotive Parts',
  'Other',
];

export default function HomeInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '',
    product: '', quantity: '', budget: '', message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await submitInquiry({
        name: form.name,
        company: form.company,
        email: form.email,
        country: form.country,
        product_category: form.product,
        quantity: form.quantity,
        budget: form.budget,
        message: form.message,
        source_page: 'home',
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Inquiry Received</h2>
          <p className="text-slate-600">
            Thank you for reaching out. Our team will review your inquiry and respond
            within 1 business day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-brand-accent text-sm font-semibold uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Request a Free Sourcing Quote
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Tell us what you're looking for and we'll get back to you within 24 hours
            with a tailored sourcing plan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-card space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your Company Ltd."
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="United States"
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category *</label>
              <select
                name="product"
                required
                value={form.product}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent bg-white"
              >
                <option value="">Select a category</option>
                {productTypes.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Order Quantity</label>
              <input
                type="text"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                placeholder="e.g. 500 units"
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Budget (USD)</label>
            <input
              type="text"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              placeholder="e.g. $5,000 – $10,000"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description & Requirements *</label>
            <textarea
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Describe the product you need, key specifications, certifications required, and any other relevant details..."
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-lg text-base transition-colors"
          >
            <Send className="w-4 h-4" />
            {submitting ? 'Sending…' : 'Send Sourcing Inquiry'}
          </button>

          {error && (
            <p className="text-center text-sm text-red-600">{error}</p>
          )}

          <p className="text-center text-xs text-slate-400">
            We respond within 1 business day. Your information is kept confidential.
          </p>
        </form>
      </div>
    </section>
  );
}
