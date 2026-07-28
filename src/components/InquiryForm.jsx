import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const InquiryForm = ({ embedded = false }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only demo submission.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl border border-border p-8 md:p-12 text-center shadow-card">
        <div className="w-16 h-16 rounded-full bg-success/10 text-success flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-3">Thank you for your inquiry</h3>
        <p className="text-slate-muted max-w-md mx-auto">
          We have received your request and will get back to you within one business day to discuss your sourcing needs.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-card">
      {!embedded && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-navy mb-2">Request a Free Sourcing Quote</h3>
          <p className="text-slate-muted">Tell us what you need and we will respond within 24 hours.</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate mb-1.5">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-3 text-slate focus:border-amber focus:ring-1 focus:ring-amber outline-none"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate mb-1.5">Business email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-3 text-slate focus:border-amber focus:ring-1 focus:ring-amber outline-none"
            placeholder="john@company.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate mb-1.5">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-3 text-slate focus:border-amber focus:ring-1 focus:ring-amber outline-none"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-slate mb-1.5">Product category</label>
          <input
            id="product"
            name="product"
            type="text"
            required
            value={form.product}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-3 text-slate focus:border-amber focus:ring-1 focus:ring-amber outline-none"
            placeholder="e.g. Industrial valves"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="quantity" className="block text-sm font-medium text-slate mb-1.5">Estimated quantity or order value</label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={form.quantity}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-3 text-slate focus:border-amber focus:ring-1 focus:ring-amber outline-none"
            placeholder="e.g. 2,000 units / $50,000"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-slate mb-1.5">Project details</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-border px-4 py-3 text-slate focus:border-amber focus:ring-1 focus:ring-amber outline-none"
            placeholder="Describe the product, specifications, target price, timeline, or any special requirements."
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-amber text-white font-semibold px-8 py-3 rounded-lg hover:bg-amber-hover transition-colors"
      >
        <Send className="w-5 h-5" />
        Get a Free Sourcing Quote
      </button>
    </form>
  );
};

export default InquiryForm;
