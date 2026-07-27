import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  category: '',
  volume: '',
  markets: '',
  timeline: '',
  message: '',
  source: '',
};

const categories = [
  'Electronics & Components',
  'Home & Garden',
  'Apparel & Textiles',
  'Industrial Equipment',
  'Automotive Parts',
  'Packaging & Materials',
  'Consumer Goods',
  'Other',
];

const timelines = [
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Just exploring',
];

const InquiryForm = ({ compact = false }) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.company.trim()) newErrors.company = 'Company is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.product.trim()) newErrors.product = 'Product description is required';
    if (!form.category) newErrors.category = 'Please select a category';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    // Simulate API call for lead capture
    await new Promise((resolve) => setTimeout(resolve, 650));

    // Log qualified lead (in production this would POST to CRM/API)
    console.log('Qualified Sourcing Inquiry:', {
      ...form,
      submittedAt: new Date().toISOString(),
    });

    setSubmitting(false);
    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-8 text-center">
        <div className="mx-auto w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank you. Your inquiry has been received.</h3>
        <p className="text-slate-600 max-w-md mx-auto">
          A sourcing specialist will contact you within 1 business day with a preliminary assessment and next steps.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-slate-600 hover:text-slate-900 underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 ${errors.name ? 'border-red-400' : 'border-slate-300'}`}
            placeholder="Jane Smith"
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Company *</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 ${errors.company ? 'border-red-400' : 'border-slate-300'}`}
            placeholder="Acme Trading Ltd"
          />
          {errors.company && <p className="text-xs text-red-600 mt-1">{errors.company}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 ${errors.email ? 'border-red-400' : 'border-slate-300'}`}
            placeholder="you@company.com"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
            placeholder="+1 415 555 0123"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description *</label>
          <input
            type="text"
            name="product"
            value={form.product}
            onChange={handleChange}
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 ${errors.product ? 'border-red-400' : 'border-slate-300'}`}
            placeholder="E.g., Wireless Bluetooth earbuds, custom packaging, 5000 units"
          />
          {errors.product && <p className="text-xs text-red-600 mt-1">{errors.product}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category *</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className={`w-full rounded-md border px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-sky-500 ${errors.category ? 'border-red-400' : 'border-slate-300'}`}
          >
            <option value="">Select category</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.category && <p className="text-xs text-red-600 mt-1">{errors.category}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Annual Volume</label>
          <input
            type="text"
            name="volume"
            value={form.volume}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
            placeholder="E.g., 10,000 units / year"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Markets</label>
          <input
            type="text"
            name="markets"
            value={form.markets}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
            placeholder="USA, EU, Australia"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Project Timeline</label>
          <select
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-sky-500"
          >
            <option value="">Select timeline</option>
            {timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500 resize-y"
            placeholder="Specific requirements, certifications needed, target price range, or any other details..."
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-700 mb-1.5">How did you hear about us?</label>
          <input
            type="text"
            name="source"
            value={form.source}
            onChange={handleChange}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
            placeholder="Google, referral, trade show, etc."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>
        <p className="text-xs text-slate-500">We typically respond within 1 business day.</p>
      </div>
    </form>
  );
};

export default InquiryForm;
