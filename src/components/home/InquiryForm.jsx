import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.product.trim()) {
      setErrorMsg('Please fill in your name, email, and product description.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setStatus('success');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      product: '',
      quantity: '',
      message: '',
    });
  };

  return (
    <section id="inquiry-form" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3 mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Tell us what you need and we will get back to you within 24 hours with a customized sourcing plan and preliminary supplier options.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">No Obligation</h4>
                  <p className="text-slate-500 text-sm">The initial consultation and quote are completely free.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Fast Response</h4>
                  <p className="text-slate-500 text-sm">We reply to all inquiries within one business day.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Customized Plan</h4>
                  <p className="text-slate-500 text-sm">Every project is different. We tailor our approach to your needs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Quote Request Sent!</h3>
                <p className="text-slate-600 mb-6">
                  Thank you for reaching out. Our team will review your request and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="product"
                      name="product"
                      type="text"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      placeholder="e.g. Stainless steel water bottle, 500ml"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      placeholder="e.g. 5,000 units"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white resize-none"
                    placeholder="Tell us about your target price, specifications, packaging requirements, delivery timeline, etc."
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Free Quote
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;