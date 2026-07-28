import React, { useState } from 'react';
import { Send } from 'lucide-react';

const InquiryForm = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setFormData({
          name: '', company: '', email: '', phone: '',
          productCategory: '', quantity: '', targetPrice: '', timeline: '', message: '',
        });
        setSubmitted(false);
      }, 3000);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="form-success text-center py-8">
        <div className="w-12 h-12 bg-[#059669] rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="text-white" size={20} />
        </div>
        <h3 className="font-semibold text-lg mb-2">Thank you for your inquiry.</h3>
        <p>Our sourcing team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="company">Company Name *</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder="Your Company Ltd."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email">Business Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 555 123 4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="productCategory">Product Category *</label>
          <select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Electronics & Components">Electronics & Components</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Apparel & Textiles">Apparel & Textiles</option>
            <option value="Industrial Equipment">Industrial Equipment</option>
            <option value="Automotive Parts">Automotive Parts</option>
            <option value="Consumer Goods">Consumer Goods</option>
            <option value="Packaging & Materials">Packaging & Materials</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity">Estimated Order Quantity</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g., 5,000 units"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="targetPrice">Target Unit Price (USD)</label>
          <input
            type="text"
            id="targetPrice"
            name="targetPrice"
            value={formData.targetPrice}
            onChange={handleChange}
            placeholder="e.g., $2.50"
          />
        </div>
        <div>
          <label htmlFor="timeline">Required Timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
          >
            <option value="">Select timeline</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message">Project Details *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={compact ? 3 : 5}
          placeholder="Please describe the product you need to source, specifications, target market, or any other relevant details."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full md:w-auto px-8 disabled:opacity-70"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>

      <p className="text-xs text-[#64748B]">
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  );
};

export default InquiryForm;
