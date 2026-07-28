import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, MessageSquare, FileCheck, Clock, Shield } from 'lucide-react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product_type: '',
    estimated_quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Submit inquiry data
      const inquiryData = {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        product_type: formData.product_type,
        estimated_quantity: formData.estimated_quantity,
        message: formData.message,
        status: 'new'
      };

      console.log('Inquiry submitted:', inquiryData);
      
      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting inquiry:', err);
      setError('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError(null);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      product_type: '',
      estimated_quantity: '',
      message: ''
    });
  };

  if (isSubmitted) {
    return (
      <section className="section-padding bg-bg-alt">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-success" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
              <p className="text-text-secondary mb-8 max-w-md mx-auto">
                Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
              </p>
              <button onClick={resetForm} className="btn-secondary">
                Submit Another Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-bg-alt" id="inquiry-form">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <p className="section-eyebrow">Contact Us</p>
            <h2 className="section-title">Get Your Free Sourcing Quote</h2>
            <p className="text-text-secondary mb-8">
              Tell us about your product requirements and we'll provide a customized sourcing plan within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={20} className="text-accent" />
                </div>
                <span className="text-text-secondary">Free consultation and supplier matching</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-accent" />
                </div>
                <span className="text-text-secondary">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck size={20} className="text-accent" />
                </div>
                <span className="text-text-secondary">No obligation quote</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield size={20} className="text-accent" />
                </div>
                <span className="text-text-secondary">Flexible service packages</span>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="john@example.com"
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
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="product_type" className="block text-sm font-medium text-text-primary mb-2">
                    Product Type *
                  </label>
                  <select
                    id="product_type"
                    name="product_type"
                    value={formData.product_type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent bg-white"
                  >
                    <option value="">Select product category</option>
                    <option value="Electronics & Components">Electronics & Components</option>
                    <option value="Home & Garden">Home & Garden</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Textiles & Apparel">Textiles & Apparel</option>
                    <option value="Machinery & Equipment">Machinery & Equipment</option>
                    <option value="Packaging Materials">Packaging Materials</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="estimated_quantity" className="block text-sm font-medium text-text-primary mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="estimated_quantity"
                    name="estimated_quantity"
                    value={formData.estimated_quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="e.g., 5000 units"
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
                  className="w-full px-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Describe your project requirements, target price, quality standards, or any specific questions..."
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
                    Get Your Free Quote
                    <Send size={18} className="ml-2" />
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
