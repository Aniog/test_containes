import React, { useState } from 'react';

const InquiryForm = ({ compact = false, title = "Request a Sourcing Quote" }) => {
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
  const [submitting, setSubmitting] = useState(false);

  const productCategories = [
    'Electronics & Components',
    'Home & Kitchen',
    'Apparel & Textiles',
    'Industrial Equipment',
    'Automotive Parts',
    'Consumer Goods',
    'Packaging Materials',
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitted(true);
    setSubmitting(false);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({
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
      setSubmitted(false);
    }, 4000);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <h3>Thank you for your inquiry.</h3>
        <p className="text-[#059669]">We will review your requirements and contact you within 1-2 business days.</p>
      </div>
    );
  }

  return (
    <div className={compact ? "inquiry-form" : "inquiry-form"}>
      <h3 className="text-xl font-semibold text-[#0A2540]">{title}</h3>
      <p className="text-sm text-[#64748B] mb-6">Fill out the form below. All fields marked with * are required.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="form-label" htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="company">Company Name *</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="form-label" htmlFor="email">Business Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="phone">Phone / WhatsApp</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="form-label" htmlFor="productCategory">Product Category *</label>
            <select
              id="productCategory"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select a category</option>
              {productCategories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
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
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="form-label" htmlFor="targetPrice">Target Unit Price (USD)</label>
            <input
              type="text"
              id="targetPrice"
              name="targetPrice"
              value={formData.targetPrice}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g., $2.50 - $4.00"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="timeline">When do you need to start?</label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select timeline</option>
              {timelines.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="form-label" htmlFor="message">Product Details / Requirements *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
            placeholder="Describe the product, specifications, certifications needed, or any other requirements..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary btn-lg w-full md:w-auto"
        >
          {submitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>

        <p className="text-xs text-[#64748B]">
          Your information is confidential. We respond to qualified inquiries within 1-2 business days.
        </p>
      </form>
    </div>
  );
};

export default InquiryForm;
