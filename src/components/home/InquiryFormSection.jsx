import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const InquiryFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const { data: response, error: insertError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            product: formData.product,
            message: formData.message,
            source: 'homepage_form',
            status: 'new',
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : insertError?.message || 'Submission failed';
        throw new Error(msgs);
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="inquiry-title" className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p id="inquiry-subtitle" className="text-primary-200 text-lg leading-relaxed mb-6">
              Tell us about the product you want to source from China. We'll get back to you within 24 hours with an initial assessment and proposal.
            </p>
            <ul className="space-y-3 text-primary-200">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-sm">No commitment required — initial consultation is free</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-sm">Response within 24 hours</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span className="text-sm">Clear pricing, no hidden fees</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">Thank You!</h3>
                <p className="text-neutral-500 text-sm">We've received your inquiry and will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}
                <div>
                  <label className="block text-neutral-700 text-sm font-medium mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={submitting}
                    className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-neutral-100 disabled:text-neutral-400"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 text-sm font-medium mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={submitting}
                    className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-neutral-100 disabled:text-neutral-400"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 text-sm font-medium mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={submitting}
                    className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-neutral-100 disabled:text-neutral-400"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 text-sm font-medium mb-1">Product You Want to Source *</label>
                  <input
                    type="text"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    disabled={submitting}
                    className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-neutral-100 disabled:text-neutral-400"
                    placeholder="e.g., stainless steel kitchen utensils"
                  />
                </div>
                <div>
                  <label className="block text-neutral-700 text-sm font-medium mb-1">Additional Details</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={submitting}
                    className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none disabled:bg-neutral-100 disabled:text-neutral-400"
                    placeholder="Quantity, specifications, target price, timeline..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? 'Submitting...' : 'Submit Your Inquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryFormSection;
