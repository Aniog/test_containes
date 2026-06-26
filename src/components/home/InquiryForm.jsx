import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.product.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', company: '', country: '', product: '', quantity: '', message: '' });
    } catch (err) {
      setError('Failed to submit inquiry. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="py-16 md:py-24 bg-blue-700">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Inquiry Received!</h2>
          <p className="text-lg text-blue-100 mb-8">
            Thank you for your inquiry. Our team will review your requirements and respond within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 id="inquiry-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h2>
          <p id="inquiry-subtitle" className="text-lg text-blue-100">
            Tell us what you need, and we will provide a detailed sourcing plan within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-10 shadow-xl">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="inquiry-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
              />
            </div>
            <div>
              <label htmlFor="inquiry-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="inquiry-company" className="block text-sm font-medium text-slate-700 mb-1.5">
                Company
              </label>
              <input
                id="inquiry-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
              />
            </div>
            <div>
              <label htmlFor="inquiry-country" className="block text-sm font-medium text-slate-700 mb-1.5">
                Country
              </label>
              <input
                id="inquiry-country"
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                placeholder="Your country"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label htmlFor="inquiry-product" className="block text-sm font-medium text-slate-700 mb-1.5">
                Product <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-product"
                name="product"
                type="text"
                value={formData.product}
                onChange={handleChange}
                required
                placeholder="What product do you need?"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
              />
            </div>
            <div>
              <label htmlFor="inquiry-quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                Estimated Quantity
              </label>
              <input
                id="inquiry-quantity"
                name="quantity"
                type="text"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g., 1000 units"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="inquiry-message" className="block text-sm font-medium text-slate-700 mb-1.5">
              Additional Details
            </label>
            <textarea
              id="inquiry-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your requirements, quality standards, target price, timeline, etc."
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Inquiry
              </>
            )}
          </button>

          <p className="text-center text-sm text-slate-500 mt-4">
            We will respond within 24 hours. Your information is kept confidential.
          </p>
        </form>
      </div>
    </section>
  );
}
