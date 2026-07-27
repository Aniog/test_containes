import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Machinery & Industrial',
  'Plastics & Packaging',
  'Health & Beauty',
  'Toys & Games',
  'Sports & Outdoor',
  'Automotive Parts',
  'Other',
];

const EMPTY_FORM = { name: '', email: '', company: '', country: '', category: '', message: '' };

export default function InquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    console.log('Submitting sourcing inquiry:', form);

    const { data: response, error: insertError } = await client
      .from('Sourcing Inquiries')
      .insert({
        data: {
          name: form.name,
          email: form.email,
          ...(form.company && { company: form.company }),
          ...(form.country && { country: form.country }),
          ...(form.category && { category: form.category }),
          message: form.message,
          status: 'new',
        },
      })
      .select()
      .single();

    setSubmitting(false);

    if (insertError || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length
        ? response.errors.join(', ')
        : insertError?.message || 'Submission failed. Please try again.';
      console.error('Inquiry submission error:', msg);
      setError(msg);
      return;
    }

    console.log('Inquiry saved successfully:', response?.data);
    setSubmitted(true);
    setForm(EMPTY_FORM);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 border border-brand-border text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-brand-text mb-2">Inquiry Received</h3>
        <p className="text-brand-muted text-sm max-w-sm mx-auto">
          Thank you for reaching out. Our team will review your request and get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-10 border border-brand-border shadow-sm">
      {!compact && (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-brand-text mb-2">Get a Free Sourcing Quote</h3>
          <p className="text-brand-muted text-sm">
            Tell us what you need and we'll get back to you within 1 business day.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1.5">Business Email *</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1.5">Company Name</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company"
            className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-text mb-1.5">Country</label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Your country"
            className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-brand-text mb-1.5">Product Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
          >
            <option value="">Select a category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-brand-text mb-1.5">Describe Your Sourcing Need *</label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Describe the product you need, estimated quantity, target price, and any specific requirements..."
            className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Submit Sourcing Request
          </>
        )}
      </button>
      {error && (
        <p className="text-red-600 text-xs text-center mt-3" role="alert">{error}</p>
      )}
      <p className="text-brand-muted text-xs text-center mt-3">
        We respond within 1 business day. No spam, no obligation.
      </p>
    </form>
  );
}
