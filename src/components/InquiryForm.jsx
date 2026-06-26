import React, { useState } from 'react';

const InquiryForm = ({ compact = false, title = "Request a Sourcing Quote" }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productType: '',
    quantity: '',
    timeline: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
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
    if (!formData.productType.trim()) newErrors.productType = 'Product type is required';
    if (!formData.message.trim()) newErrors.message = 'Please describe your sourcing needs';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '', company: '', email: '', phone: '', country: '',
        productType: '', quantity: '', timeline: '', message: '',
      });
      setErrors({});
      
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }, 800);
  };

  if (status === 'success') {
    return (
      <div className="form-success">
        <p className="font-medium mb-1">Thank you for your inquiry.</p>
        <p className="text-sm">We will review your requirements and respond within 1-2 business days.</p>
      </div>
    );
  }

  return (
    <div className={compact ? '' : 'card'}>
      {!compact && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-slate-600">Fill out the form below and our sourcing team will contact you shortly.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'border-red-400' : ''}`}
              placeholder="John Smith"
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="company">Company *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`form-input ${errors.company ? 'border-red-400' : ''}`}
              placeholder="Your Company Ltd"
            />
            {errors.company && <p className="text-xs text-red-600 mt-1">{errors.company}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="email">Business Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'border-red-400' : ''}`}
              placeholder="you@company.com"
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="+1 555 000 0000"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="country">Country / Region</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="form-input"
              placeholder="United States"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="productType">Product Type *</label>
            <input
              type="text"
              id="productType"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className={`form-input ${errors.productType ? 'border-red-400' : ''}`}
              placeholder="e.g., Electronics components, Textiles"
            />
            {errors.productType && <p className="text-xs text-red-600 mt-1">{errors.productType}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="quantity">Estimated Annual Quantity</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g., 5,000 units"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="timeline">Target Timeline</label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select timeline</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months</option>
            </select>
          </div>
        </div>

        <div>
          <label className="form-label" htmlFor="message">Sourcing Requirements *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form-input form-textarea ${errors.message ? 'border-red-400' : ''}`}
            placeholder="Please describe the products you need to source, target specifications, quality requirements, and any other relevant details."
          />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary w-full md:w-auto"
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
        </button>

        <p className="text-xs text-slate-500">We typically respond within 1-2 business days.</p>
      </form>
    </div>
  );
};

export default InquiryForm;
