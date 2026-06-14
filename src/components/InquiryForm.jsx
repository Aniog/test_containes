import React, { useState } from 'react';

const InquiryForm = ({ compact = false, onSuccess }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    productDescription: '',
    estimatedQuantity: '',
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const productCategories = [
    'Consumer Electronics',
    'Home & Garden',
    'Apparel & Textiles',
    'Industrial Equipment',
    'Automotive Parts',
    'Toys & Games',
    'Beauty & Personal Care',
    'Furniture & Home Decor',
    'Kitchenware & Housewares',
    'Sports & Outdoor',
    'Packaging & Materials',
    'Other',
  ];

  const timelines = [
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring options',
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

    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.productCategory) newErrors.productCategory = 'Please select a product category';
    if (!formData.productDescription.trim()) newErrors.productDescription = 'Please describe the products you need';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    // In a real application, this would send to a backend or CRM
    console.log('Sourcing Inquiry Submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    if (onSuccess) {
      onSuccess(formData);
    }

    // Reset form after 3 seconds if not compact
    if (!compact) {
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          country: '',
          productCategory: '',
          productDescription: '',
          estimatedQuantity: '',
          timeline: '',
          message: '',
        });
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="success-banner">
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p className="font-medium">Thank you for your inquiry.</p>
          <p className="text-sm mt-0.5">Our sourcing team will contact you within 24 hours with a preliminary assessment.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="companyName" className="form-label">Company Name *</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input"
            placeholder="Your company name"
          />
          {errors.companyName && <p className="form-error">{errors.companyName}</p>}
        </div>

        <div>
          <label htmlFor="contactName" className="form-label">Contact Name *</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            className="form-input"
            placeholder="Your full name"
          />
          {errors.contactName && <p className="form-error">{errors.contactName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="form-label">Business Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="you@company.com"
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="+1 555 123 4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="country" className="form-label">Country / Region *</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-input"
            placeholder="United States"
          />
          {errors.country && <p className="form-error">{errors.country}</p>}
        </div>

        <div>
          <label htmlFor="productCategory" className="form-label">Product Category *</label>
          <select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select a category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.productCategory && <p className="form-error">{errors.productCategory}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="productDescription" className="form-label">Product Description *</label>
        <textarea
          id="productDescription"
          name="productDescription"
          value={formData.productDescription}
          onChange={handleChange}
          rows={compact ? 3 : 4}
          className="form-input resize-y min-h-[80px]"
          placeholder="Describe the products you want to source (e.g., wireless earbuds, stainless steel cookware, LED lighting fixtures...)"
        />
        {errors.productDescription && <p className="form-error">{errors.productDescription}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="estimatedQuantity" className="form-label">Estimated Order Quantity</label>
          <input
            type="text"
            id="estimatedQuantity"
            name="estimatedQuantity"
            value={formData.estimatedQuantity}
            onChange={handleChange}
            className="form-input"
            placeholder="e.g., 5,000 units, 1x40ft container"
          />
        </div>

        <div>
          <label htmlFor="timeline" className="form-label">Target Timeline</label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select timeline</option>
            {timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="form-label">Additional Requirements or Questions</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={compact ? 2 : 3}
          className="form-input resize-y min-h-[60px]"
          placeholder="Any specific certifications, quality standards, or other details we should know?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full md:w-auto px-8 py-3 disabled:opacity-70"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Sourcing Inquiry'}
      </button>

      <p className="text-xs text-slate-500">* Required fields. We typically respond within 24 business hours.</p>
    </form>
  );
};

export default InquiryForm;