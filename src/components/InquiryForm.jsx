import React, { useState } from 'react';
import { toast } from 'sonner';

const InquiryForm = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    country: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.product) {
      toast.error('Please fill in your name, email, and product requirements.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);

    // Simulate API call - no backend, just frontend
    setTimeout(() => {
      toast.success('Thank you. Your inquiry has been received. We will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        country: '',
        message: '',
      });
      setSubmitting(false);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Ltd"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Business Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            required
          />
        </div>
        <div className="form-group">
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

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="product">Product / Category *</label>
          <input
            type="text"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="e.g. LED lighting, kitchenware, electronics"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Estimated Quantity</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g. 5,000 units / month"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="country">Your Country / Region</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="United States, Germany, Australia..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Additional Details</label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements, target price range, timeline, or any specific certifications needed."
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-lg w-full"
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : 'Get a Free Sourcing Quote'}
      </button>

      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.75rem', textAlign: 'center' }}>
        We typically respond within 24 business hours. Your information is kept confidential.
      </p>
    </form>
  );
};

export default InquiryForm;