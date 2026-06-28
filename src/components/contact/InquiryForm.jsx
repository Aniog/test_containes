import React, { useState } from 'react';
import { toast } from 'sonner';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    quantity: '',
    timeline: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const productCategories = [
    'Electronics & Components',
    'Home & Garden',
    'Fashion & Apparel',
    'Industrial Equipment',
    'Consumer Goods',
    'Automotive Parts',
    'Other',
  ];

  const timelines = [
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    'Flexible',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.productCategory) newErrors.productCategory = 'Please select a category';
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

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success('Thank you. We will contact you within 24 hours.');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productCategory: '',
        quantity: '',
        timeline: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full h-12 px-4 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
              errors.name ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="John Smith"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full h-12 px-4 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
              errors.company ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="Your Company Ltd"
          />
          {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Business Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-12 px-4 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="you@company.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-12 px-4 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700 mb-2">
            Product Category *
          </label>
          <select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className={`w-full h-12 px-4 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white ${
              errors.productCategory ? 'border-red-500' : 'border-slate-300'
            }`}
          >
            <option value="">Select a category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.productCategory && <p className="mt-1 text-sm text-red-600">{errors.productCategory}</p>}
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-2">
            Estimated Order Quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full h-12 px-4 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="e.g., 500 units"
          />
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
          Project Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full h-12 px-4 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
        >
          <option value="">Select timeline</option>
          {timelines.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-y ${
            errors.message ? 'border-red-500' : 'border-slate-300'
          }`}
          placeholder="Please describe the products you need to source, target markets, and any specific requirements..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto h-12 px-10 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>

      <p className="text-xs text-slate-500">
        We typically respond within 24 business hours. Your information is kept confidential.
      </p>
    </form>
  );
};

export default InquiryForm;