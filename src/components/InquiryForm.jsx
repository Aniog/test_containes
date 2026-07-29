import React, { useState } from 'react';
import { toast } from 'sonner';

const InquiryForm = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    quantity: '',
    timeline: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const productCategories = [
    'Electronics & Components',
    'Machinery & Equipment',
    'Textiles & Apparel',
    'Home & Garden',
    'Automotive Parts',
    'Medical & Healthcare',
    'Consumer Goods',
    'Industrial Materials',
    'Other',
  ];

  const timelines = [
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.productCategory) newErrors.productCategory = 'Please select a category';
    if (!formData.message.trim()) newErrors.message = 'Please describe your sourcing needs';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSubmitted(true);
    toast.success('Thank you. We will contact you within 24 hours.');

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        productCategory: '',
        quantity: '',
        timeline: '',
        message: '',
      });
      setSubmitted(false);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
        <h3 style={{ marginBottom: '0.5rem' }}>Inquiry Received</h3>
        <p className="text-muted">Our sourcing team will review your requirements and contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="grid-2" style={{ gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
          />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="company">Company *</label>
          <input
            type="text"
            id="company"
            name="company"
            className="form-input"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
          />
          {errors.company && <div className="form-error">{errors.company}</div>}
        </div>
      </div>

      <div className="grid-2" style={{ gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Business Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
          />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 555 123 4567"
          />
        </div>
      </div>

      <div className="grid-2" style={{ gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="country">Country / Region *</label>
          <input
            type="text"
            id="country"
            name="country"
            className="form-input"
            value={formData.country}
            onChange={handleChange}
            placeholder="United States"
          />
          {errors.country && <div className="form-error">{errors.country}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="productCategory">Product Category *</label>
          <select
            id="productCategory"
            name="productCategory"
            className="form-select"
            value={formData.productCategory}
            onChange={handleChange}
          >
            <option value="">Select a category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.productCategory && <div className="form-error">{errors.productCategory}</div>}
        </div>
      </div>

      <div className="grid-2" style={{ gap: '1rem' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="quantity">Estimated Order Quantity</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="form-input"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g., 5,000 units"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="timeline">Target Timeline</label>
          <select
            id="timeline"
            name="timeline"
            className="form-select"
            value={formData.timeline}
            onChange={handleChange}
          >
            <option value="">Select timeline</option>
            {timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">Sourcing Requirements *</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe the products you need to source, target specifications, quality requirements, or any other details..."
        />
        {errors.message && <div className="form-error">{errors.message}</div>}
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-lg"
        style={{ width: '100%', marginTop: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Get a Free Sourcing Quote'}
      </button>

      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', textAlign: 'center', marginTop: '1rem' }}>
        We typically respond within 24 business hours. Your information is kept confidential.
      </p>
    </form>
  );
};

export default InquiryForm;