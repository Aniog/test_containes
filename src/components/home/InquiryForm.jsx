import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const InquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-neutral-300 text-lg">
            We've received your inquiry. Our team will review your requirements and get back to you within 24 hours with a free sourcing assessment.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inquiry-form" className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Tell us what you're looking for and we'll provide a free assessment with supplier options, pricing estimates, and timeline.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                placeholder="Your Company Ltd."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country *</label>
              <input
                type="text"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                placeholder="United States"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product You Need *</label>
              <input
                type="text"
                name="product"
                required
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                placeholder="e.g., LED panel lights, yoga mats"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                placeholder="e.g., 1,000 units"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Details</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition resize-none"
              placeholder="Tell us about your requirements: specs, certifications needed, target price, timeline, etc."
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition text-base border-none cursor-pointer"
          >
            <Send className="w-5 h-5" />
            Submit Inquiry
          </button>

          <p className="text-neutral-500 text-xs mt-4">
            We'll respond within 24 hours. No spam, no obligations.
          </p>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
