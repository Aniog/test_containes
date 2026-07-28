import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const InquiryForm = ({ 
  title = "Get Your Free Sourcing Quote",
  subtitle = "Tell us about your product requirements and we'll provide a customized sourcing plan within 24 hours."
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    estimatedQuantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">
              <CheckCircle size={64} className="text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Thank You for Your Inquiry!</h3>
              <p className="text-gray-300 mb-6">
                We've received your request and will get back to you within 24 hours with a customized sourcing plan.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    productType: '',
                    estimatedQuantity: '',
                    message: ''
                  });
                }}
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-bg-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <SectionHeader
              eyebrow="Contact Us"
              title={title}
              subtitle={subtitle}
              align="left"
            />
            
            {/* Trust Points */}
            <div className="mt-8 space-y-4">
              {[
                "Free consultation and supplier matching",
                "Response within 24 hours",
                "No obligation quote",
                "Flexible service packages"
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-success flex-shrink-0" />
                  <span className="text-text-secondary">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
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
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="ABC Imports Ltd."
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
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
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="john@abcimports.com"
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
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="productType" className="block text-sm font-medium text-text-primary mb-2">
                    Product Type *
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select product category</option>
                    <option value="electronics">Electronics & Components</option>
                    <option value="home-goods">Home & Garden</option>
                    <option value="furniture">Furniture</option>
                    <option value="textiles">Textiles & Apparel</option>
                    <option value="machinery">Machinery & Equipment</option>
                    <option value="packaging">Packaging Materials</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="estimatedQuantity" className="block text-sm font-medium text-text-primary mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="estimatedQuantity"
                    name="estimatedQuantity"
                    value={formData.estimatedQuantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="e.g., 5,000 units"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Describe your product requirements, target price, quality standards, or any specific questions..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 size={20} className="animate-spin mr-2" />
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send size={20} className="mr-2" />
                    Get Your Free Quote
                  </span>
                )}
              </button>

              <p className="text-xs text-text-muted text-center">
                By submitting this form, you agree to our Privacy Policy. We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
