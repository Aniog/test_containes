import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send, CheckCircle } from 'lucide-react';
import { submitSourcingInquiry } from '@/api/sourcing-inquiry.js';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    try {
      await submitSourcingInquiry({
        ...formData,
        source: 'homepage_form',
      });
      setStatus('success');
      setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' });
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-navy-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Get a Free Sourcing Quote
            </h2>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Tell us what you need to source from China. We will review your request and get back to you within 24 hours with supplier options and a detailed quote.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'No commitment required — free initial consultation',
                'Response within 24 hours on business days',
                'Detailed supplier recommendations with pricing',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Product You Need *</label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="e.g. Bluetooth speakers"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    placeholder="e.g. 5,000 units"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent resize-none"
                  placeholder="Specifications, target price, timeline, or any other requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {status === 'submitting' ? 'Submitting...' : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Your Sourcing Request
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 justify-center text-emerald-400 text-sm mt-3">
                  <CheckCircle className="w-4 h-4" />
                  Your inquiry has been submitted. We will contact you within 24 hours.
                </div>
              )}

              {status === 'error' && error && (
                <p className="text-red-400 text-sm text-center mt-3">{error}</p>
              )}

              <p className="text-xs text-slate-400 text-center">
                We respect your privacy. Your information is only used to process your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
