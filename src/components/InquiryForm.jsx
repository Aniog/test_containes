import React, { useState } from 'react';
import { Button } from './ui/button';

const InquiryForm = ({ compact = false }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', email: '', company: '', country: '', product: '', message: '',
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 text-center">
        <div className="w-12 h-12 bg-brand-teal rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-brand-navy mb-2">Thank you for your inquiry</h3>
        <p className="text-slate-600">We will contact you within 24 hours with a preliminary sourcing assessment.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
          <input
            type="text" name="name" value={formData.name} onChange={handleChange} required
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
          <input
            type="email" name="email" value={formData.email} onChange={handleChange} required
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name *</label>
          <input
            type="text" name="company" value={formData.company} onChange={handleChange} required
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            placeholder="Your Company Ltd"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Country *</label>
          <input
            type="text" name="country" value={formData.country} onChange={handleChange} required
            className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
            placeholder="United States"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Product or Category of Interest</label>
        <input
          type="text" name="product" value={formData.product} onChange={handleChange}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
          placeholder="e.g., LED lighting components, automotive parts"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Project Details *</label>
        <textarea
          name="message" value={formData.message} onChange={handleChange} required rows={compact ? 3 : 5}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent resize-y"
          placeholder="Please describe your sourcing requirements, target quantities, timeline, and any specific quality standards..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full md:w-auto">
        Submit Inquiry
      </Button>
      <p className="text-xs text-slate-500">We typically respond within one business day.</p>
    </form>
  );
};

export default InquiryForm;
