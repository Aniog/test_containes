import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

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
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.product.trim()) newErrors.product = 'Product description is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
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
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="py-20 bg-primary-dark" id="inquiry">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Tell us about your product requirements and we'll provide a detailed sourcing proposal within 24 hours. No obligation, no hidden fees.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/90">Free initial consultation and assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/90">Detailed supplier recommendations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/90">Transparent pricing breakdown</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-white/90">No commitment required</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">Thank You!</h3>
                <p className="text-text-secondary mb-6">
                  We've received your inquiry. Our team will review your requirements and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-primary font-semibold hover:text-accent transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${
                        errors.name ? 'border-red-500' : 'border-border-light'
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${
                        errors.email ? 'border-red-500' : 'border-border-light'
                      }`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-text-primary mb-2">
                      Product Description *
                    </label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all ${
                        errors.product ? 'border-red-500' : 'border-border-light'
                      }`}
                      placeholder="e.g., LED light bulbs"
                    />
                    {errors.product && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.product}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-text-primary mb-2">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="e.g., 10,000 units"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Additional Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-border-light'
                    }`}
                    placeholder="Tell us about your requirements, target price, timeline, etc."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </>
                  )}
                </button>

                <p className="text-text-light text-sm text-center">
                  We typically respond within 24 hours on business days.
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
