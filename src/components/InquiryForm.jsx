import React, { useState } from 'react';
import { toast } from 'sonner';

const InquiryForm = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    quantity: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.productCategory.trim()) newErrors.productCategory = 'Product category is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast.success('Inquiry received. We will contact you within 24 hours.');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      productCategory: '',
      quantity: '',
      message: '',
    });
    setErrors({});
    setSubmitting(false);
  };

  const inputClass = "w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm focus:border-[#1E40AF] focus:ring-1 focus:ring-[#1E40AF] outline-none transition-colors";
  const labelClass = "block text-sm font-medium text-[#475569] mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="John Smith"
          />
          {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="company">Company *</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your Company Ltd"
          />
          {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="email">Business Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@company.com"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="productCategory">Product Category *</label>
          <input
            type="text"
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g., Electronics, Textiles"
          />
          {errors.productCategory && <p className="text-red-600 text-xs mt-1">{errors.productCategory}</p>}
        </div>
        <div>
          <label className={labelClass} htmlFor="quantity">Estimated Quantity</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g., 500 units"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">Project Details *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={compact ? 4 : 5}
          className={inputClass}
          placeholder="Describe your sourcing requirements, target price range, timeline, and any specific certifications needed."
        />
        {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto bg-[#1E40AF] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#1E3A8A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>

      <p className="text-xs text-[#64748B]">We typically respond within 24 business hours.</p>
    </form>
  );
};

export default InquiryForm;
