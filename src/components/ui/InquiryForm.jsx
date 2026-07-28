import React, { useState } from 'react';
import { Check } from 'lucide-react';

const InquiryForm = ({ compact = false }) => {
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

  // Placeholder values for display only (not pre-filled)
  const placeholders = {
    name: 'John Smith',
    company: 'Your Company Ltd',
    email: 'you@company.com',
    phone: '+1 (555) 000-0000',
    quantity: 'e.g., 5,000 units',
    message: 'Please describe the products you need to source, target specifications, and any other relevant details...',
  };
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const productCategories = [
    'Electronics & Components',
    'Home & Garden',
    'Apparel & Textiles',
    'Industrial Equipment',
    'Consumer Goods',
    'Automotive Parts',
    'Medical & Health',
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
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.productCategory) newErrors.productCategory = 'Please select a category';
    if (!formData.message.trim()) newErrors.message = 'Please describe your sourcing needs';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission (frontend only)
    console.log('Sourcing inquiry submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', company: '', email: '', phone: '',
        productCategory: '', quantity: '', timeline: '', message: '',
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-[#059669]" />
        </div>
        <h3 className="text-xl font-semibold text-[#0A2540] mb-2">Thank You</h3>
        <p className="text-[#4B5563]">
          Your inquiry has been received. A sourcing specialist will contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-[#0A2540] mb-2">
          {compact ? 'Request a Sourcing Quote' : 'Get a Free Sourcing Quote'}
        </h3>
        <p className="text-sm text-[#4B5563]">
          Fill out the form below and our team will respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-[#4B5563] mb-1.5">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full h-11 px-4 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/10 focus:border-[#1E40AF] ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="John Smith"
            autoComplete="name"
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#4B5563] mb-1.5">Company *</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full h-11 px-4 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/10 focus:border-[#1E40AF] ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your Company Ltd"
          />
          {errors.company && <p className="text-xs text-red-600 mt-1">{errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-[#4B5563] mb-1.5">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full h-11 px-4 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/10 focus:border-[#1E40AF] ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="you@company.com"
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#4B5563] mb-1.5">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-11 px-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/10 focus:border-[#1E40AF]"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-[#4B5563] mb-1.5">Product Category *</label>
          <select
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            className={`w-full h-11 px-4 border rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/10 focus:border-[#1E40AF] ${errors.productCategory ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select a category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.productCategory && <p className="text-xs text-red-600 mt-1">{errors.productCategory}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#4B5563] mb-1.5">Estimated Quantity</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full h-11 px-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/10 focus:border-[#1E40AF]"
            placeholder="e.g., 5,000 units"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-[#4B5563] mb-1.5">Target Timeline</label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full h-11 px-4 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/10 focus:border-[#1E40AF]"
        >
          <option value="">Select timeline</option>
          {timelines.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-[#4B5563] mb-1.5">Sourcing Requirements *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={compact ? 3 : 5}
          className={`w-full px-4 py-3 border rounded-md text-sm resize-y min-h-[80px] focus:outline-none focus:ring-2 focus:ring-[#1E40AF]/10 focus:border-[#1E40AF] ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="Please describe the products you need to source, target specifications, and any other relevant details..."
        />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full h-12 bg-[#1E40AF] text-white font-semibold rounded-md hover:bg-[#1E3A8A] transition-colors"
      >
        Submit Inquiry
      </button>

      <p className="text-xs text-center text-[#6B7280] mt-4">
        Your information is kept confidential. We respond to all inquiries within 24 hours.
      </p>
    </form>
  );
};

export default InquiryForm;
