import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    productDescription: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const productCategories = [
    'Electronics',
    'Textiles & Apparel',
    'Machinery',
    'Furniture',
    'Packaging',
    'Health & Beauty',
    'Toys & Games',
    'Automotive',
    'Other',
  ];

  const timelines = [
    'As soon as possible',
    '1-2 months',
    '2-3 months',
    '3-6 months',
    'Not urgent',
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.productDescription.trim()) newErrors.productDescription = 'Product description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, this would send data to a server
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/90">
              Get a free sourcing quote tailored to your specific requirements. We'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-[var(--border)] p-6">
                <h2 className="text-xl mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-sm text-[var(--text-secondary)]">info@ssourcing-china.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-sm text-[var(--text-secondary)]">+86 123 4567 8900</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-sm text-[var(--text-secondary)]">Shanghai, China</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)]">
                  <h3 className="font-medium mb-3">Office Hours</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Monday - Friday: 9:00 AM - 6:00 PM (China Standard Time)
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-[var(--border)] p-6">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[var(--success)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[var(--success)]" />
                    </div>
                    <h2 className="text-2xl mb-2">Thank You!</h2>
                    <p className="text-[var(--text-secondary)] mb-6">
                      Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors"
                    >
                      Return to Home
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl mb-6">Request a Sourcing Quote</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Basic Info */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-[var(--primary)] ${
                              errors.name ? 'border-red-500' : 'border-[var(--border)]'
                            }`}
                            placeholder="John Smith"
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)]"
                            placeholder="Your Company Ltd."
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-[var(--primary)] ${
                              errors.email ? 'border-red-500' : 'border-[var(--border)]'
                            }`}
                            placeholder="john@company.com"
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)]"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>

                      {/* Product Info */}
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Product Category
                        </label>
                        <select
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)]"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Product Description *
                        </label>
                        <textarea
                          name="productDescription"
                          value={formData.productDescription}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-[var(--primary)] ${
                            errors.productDescription ? 'border-red-500' : 'border-[var(--border)]'
                          }`}
                          placeholder="Please describe the product you want to source, including specifications, materials, dimensions, etc."
                        />
                        {errors.productDescription && <p className="text-red-500 text-sm mt-1">{errors.productDescription}</p>}
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Quantity Needed
                          </label>
                          <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)]"
                            placeholder="e.g., 5000 units"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Target Price
                          </label>
                          <input
                            type="text"
                            name="targetPrice"
                            value={formData.targetPrice}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)]"
                            placeholder="e.g., $5-7 per unit"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)]"
                          >
                            <option value="">Select timeline</option>
                            {timelines.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Additional Information
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-[var(--border)] rounded focus:outline-none focus:border-[var(--primary)]"
                          placeholder="Any other details that might help us understand your requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded font-semibold hover:bg-[var(--accent-hover)] transition-colors"
                      >
                        <Send size={20} />
                        Submit Inquiry
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-[var(--text-secondary)] mb-6">
              Have questions? Check our FAQ section or contact us directly.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors"
            >
              View FAQ
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;