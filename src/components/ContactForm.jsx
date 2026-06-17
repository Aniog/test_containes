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
  const [error, setError] = useState('');

  const products = [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
    'General Inquiry',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
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
    }, 2500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-3">Thank You</h3>
        <p className="text-slate-600 max-w-sm mx-auto">
          Your inquiry has been received. Our team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-slate-500 transition-colors"
            placeholder="John Smith"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-slate-500 transition-colors"
            placeholder="Your Company"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-slate-500 transition-colors"
            placeholder="you@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-slate-500 transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
          Product of Interest
        </label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-slate-500 transition-colors bg-white"
        >
          <option value="">Select a product (optional)</option>
          {products.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-slate-500 transition-colors resize-y"
          placeholder="Tell us about your project requirements, material types, production volume, or any specific questions..."
          required
        />
      </div>

      {error && (
        <div className="mb-6 px-4 py-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? (
          'Sending Inquiry...'
        ) : (
          <>
            Send Inquiry
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-500 mt-4">
        We typically respond within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
};

export default ContactForm;
