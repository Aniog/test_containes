import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const products = [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder / Metal Folding Machine',
    'Custom / Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-3">Thank You</h3>
        <p className="text-slate-600 max-w-sm mx-auto">
          Your inquiry has been received. A member of our team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 focus:ring-0 text-sm placeholder:text-slate-400"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 focus:ring-0 text-sm placeholder:text-slate-400"
            placeholder="Your Company"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 focus:ring-0 text-sm placeholder:text-slate-400"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 focus:ring-0 text-sm placeholder:text-slate-400"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">Product of Interest</label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 focus:ring-0 text-sm text-slate-700 bg-white"
        >
          <option value="">Select a product...</option>
          {products.map((p, i) => (
            <option key={i} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-slate-400 focus:ring-0 text-sm placeholder:text-slate-400 resize-y"
          placeholder="Tell us about your project requirements, material types, production volume, or any specific questions..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-medium rounded-lg transition-colors text-sm tracking-wide"
      >
        {isSubmitting ? 'SENDING...' : 'SEND INQUIRY'}
        {!isSubmitting && <Send size={16} />}
      </button>

      <p className="mt-4 text-xs text-slate-500">We typically respond within one business day.</p>
    </form>
  );
};

export default ContactForm;
