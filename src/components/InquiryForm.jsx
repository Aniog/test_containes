import React, { useState } from 'react';

const productCategories = [
  'Electronics & Components',
  'Machinery & Industrial Equipment',
  'Consumer Goods & Home Products',
  'Apparel, Textiles & Accessories',
  'Automotive Parts & Accessories',
  'Medical Devices & Supplies',
  'Building Materials & Hardware',
  'Packaging & Printing',
  'Other / Custom',
];

const InquiryForm = ({ onSuccess, compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: '',
    quantity: '',
    timeline: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your name.';
    if (!formData.company.trim()) return 'Please enter your company name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      return 'Please enter a valid email address.';
    }
    if (!formData.category) return 'Please select a product category.';
    if (!formData.message.trim()) return 'Please provide some details about your sourcing needs.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 650));

    // Log for development / CRM simulation
    console.log('New sourcing inquiry:', {
      ...formData,
      submittedAt: new Date().toISOString(),
    });

    setSubmitting(false);
    setSubmitted(true);

    if (onSuccess) {
      onSuccess(formData);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Thank you for your inquiry.</h3>
        <p className="text-slate-600 max-w-md mx-auto">
          A sourcing specialist will review your requirements and contact you within 1 business day with a preliminary assessment and next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
            placeholder="Jane Smith"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Company *</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
            placeholder="Acme Trading Ltd."
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
            placeholder="you@company.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
            placeholder="+1 415 555 0123"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white"
            required
          >
            <option value="">Select a category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Annual Quantity / Volume</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
            placeholder="e.g. 5,000 units / 20 containers"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Timeline</label>
        <input
          type="text"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
          placeholder="e.g. First order within 3 months"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Tell us about your sourcing needs *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={compact ? 4 : 5}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm resize-y"
          placeholder="Describe the product, specifications, target price range, quality requirements, or any challenges you are facing with current suppliers."
          required
        />
      </div>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto px-8 py-3 bg-green-700 hover:bg-green-800 disabled:bg-green-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        {submitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>

      <p className="text-xs text-slate-500">
        We typically respond within 1 business day. Your information is kept confidential.
      </p>
    </form>
  );
};

export default InquiryForm;
