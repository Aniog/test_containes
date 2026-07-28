import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { createInquiry } from '../../api/inquiries';

const InquirySection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createInquiry({
        ...formData,
        source: 'homepage',
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Inquiry Received</h2>
          <p className="text-lg text-slate-600 mb-8">
            Thank you for reaching out. Our team will review your request and get back to you within 1-2 business days with a free sourcing assessment.
          </p>
          <button
            onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' }); }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-md transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">Get a Free Sourcing Quote</h2>
            <p className="text-lg text-slate-600 mb-6">
              Tell us what you need to source. We will assess feasibility and provide a no-obligation quote within 48 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-800">No upfront fees</span>
                  <p className="text-sm text-slate-600">Only pay when you decide to proceed with sourcing.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-800">48-hour response</span>
                  <p className="text-sm text-slate-600">We respond to all inquiries within two business days.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-800">Confidential</span>
                  <p className="text-sm text-slate-600">Your product ideas and supplier details stay private.</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your Company Ltd"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Product to Source *</label>
                <input
                  type="text"
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="e.g., USB cables"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="e.g., 5,000 units"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                placeholder="Describe specifications, target price, certifications needed, etc."
              />
            </div>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 disabled:bg-teal-400 text-white font-semibold rounded-md transition-colors"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Inquiry
                </>
              )}
            </button>
            <p className="text-xs text-slate-500 mt-3 text-center">
              By submitting, you agree to our <Link to="/" className="text-teal-700 hover:underline">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
