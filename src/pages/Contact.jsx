import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Send,
  Building2,
  Users,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const inquiryTypes = [
  { value: 'new-sourcing', label: 'New Sourcing Project' },
  { value: 'supplier-verification', label: 'Supplier Verification' },
  { value: 'quality-inspection', label: 'Quality Inspection' },
  { value: 'production-follow', label: 'Production Follow-up' },
  { value: 'shipping', label: 'Shipping & Logistics' },
  { value: 'other', label: 'Other Inquiry' }
];

const serviceOptions = [
  'Supplier Search & Verification',
  'Factory Audit & Compliance',
  'Quality Control & Inspection',
  'Production Follow-up',
  'Shipping & Logistics',
  'Sample Management',
  'Complete Sourcing Package'
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    inquiryType: '',
    services: [],
    product: '',
    quantity: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        inquiryType: '',
        services: [],
        product: '',
        quantity: '',
        message: ''
      });
      setErrors({});
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...prev[name], value]
          : prev[name].filter(v => v !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Tell us about your sourcing needs and we'll respond within 24 hours with a customized plan and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Information</h2>
                <p className="text-neutral-600">
                  Reach out through any of these channels. We typically respond within 24 hours during business days.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Office Address</h3>
                    <p className="text-neutral-600 text-sm">
                      Room 1208, Building A<br />
                      Shenzhen, Guangdong<br />
                      China 518000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                    <a href="tel:+8675512345678" className="text-neutral-600 hover:text-primary-800 text-sm">
                      +86 755 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-neutral-600 hover:text-primary-800 text-sm">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Business Hours</h3>
                    <p className="text-neutral-600 text-sm">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                      Saturday: By appointment<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-neutral-50 rounded-xl p-6">
                <h3 className="font-bold text-neutral-900 mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">No obligation quote</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Transparent pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-600">Professional English support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {formStatus === 'success' ? (
                <div className="bg-success-50 border border-success-200 rounded-xl p-8 lg:p-12 text-center">
                  <div className="w-20 h-20 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-success-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Thank You!</h2>
                  <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                    We've received your inquiry and will get back to you within 24 hours. Check your email for confirmation.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="text-primary-600 font-semibold hover:text-primary-800"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 rounded-xl p-6 lg:p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2">Send Us a Message</h2>
                    <p className="text-neutral-600">Fill out the form below and we'll get back to you shortly.</p>
                  </div>

                  {/* Basic Info */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">Your Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                            errors.name ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="John Smith"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                            errors.email ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sourcing Needs */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-4">Your Sourcing Needs</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-2">
                          Product to Source
                        </label>
                        <input
                          type="text"
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="e.g., LED Smart Lights"
                        />
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="e.g., 10,000 units"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-3">
                        Services You're Interested In
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {serviceOptions.map((service) => (
                          <label 
                            key={service} 
                            className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                              formData.services.includes(service)
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-neutral-200 hover:border-neutral-300'
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="services"
                              value={service}
                              checked={formData.services.includes(service)}
                              onChange={handleServiceToggle}
                              className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                            />
                            <span className="text-sm text-neutral-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-neutral-300'
                      }`}
                      placeholder="Tell us about your project, requirements, target price, timeline, or any questions you have..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-200">
                    <p className="text-sm text-neutral-500 text-center sm:text-left">
                      * Required fields. Your information is kept confidential.
                    </p>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full sm:w-auto bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600">
              Quick answers to common questions about working with us.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">How quickly do you respond?</h3>
              <p className="text-neutral-600 text-sm">We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Is the initial consultation really free?</h3>
              <p className="text-neutral-600 text-sm">Yes, the initial consultation is completely free. We'll discuss your needs, answer questions, and provide a preliminary quote at no cost.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">What information should I include in my inquiry?</h3>
              <p className="text-neutral-600 text-sm">The more details you provide, the better we can help. Include product specifications, estimated quantities, target pricing, quality requirements, and timeline if known.</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Do you work with small businesses?</h3>
              <p className="text-neutral-600 text-sm">Yes, we work with businesses of all sizes, from startups to large enterprises. Our services scale to meet your needs and budget.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
