import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle } from 'lucide-react';

const InquirySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section className="bg-primary-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Info */}
          <div>
            <h2 id="inquiry-title" className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p id="inquiry-subtitle" className="text-primary-200 text-lg leading-relaxed mb-8">
              Tell us about the product you want to source from China. We will respond within 24 hours with a preliminary assessment and supplier recommendations.
            </p>
            <div className="space-y-4 text-primary-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400 mt-0.5" />
                <p className="text-sm">No commitment required — free initial consultation</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400 mt-0.5" />
                <p className="text-sm">We respond to every inquiry within 24 hours</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400 mt-0.5" />
                <p className="text-sm">Detailed supplier report with pricing included</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-400 mt-0.5" />
                <p className="text-sm">Confidential — your information is never shared with suppliers without your approval</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Thank You!</h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Your inquiry has been received. We will respond within 24 hours with supplier recommendations.
                </p>
                <Link
                  to="/"
                  className="text-primary-500 hover:text-primary-600 font-semibold text-sm no-underline"
                >
                  Return to homepage →
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Product You Want to Source *</label>
                  <input
                    type="text"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g. stainless steel kitchen utensils"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Additional Details</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    placeholder="Quantity, target price, quality requirements, timeline..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 border-0"
                >
                  <Send className="w-4 h-4" />
                  Submit Your Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
