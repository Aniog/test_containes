import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send, MessageSquare } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    timeline: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.product.trim()) newErrors.product = 'Product interest is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'info@ssourcingchina.com',
      link: 'mailto:info@ssourcingchina.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+86 21 1234 5678',
      link: 'tel:+862112345678'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Office',
      value: 'Shanghai, China',
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  const serviceOptions = [
    'Supplier Verification',
    'Quality Inspection',
    'Production Follow-up',
    'Shipping Coordination',
    'Complete Sourcing Package',
    'Other'
  ];

  const timelineOptions = [
    'Urgent (within 1 month)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6+ months)',
    'Ongoing project'
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300">
              Ready to start sourcing from China? Contact us for a free consultation and customized quote tailored to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white border-b border-neutral-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-3">
                  {info.icon}
                </div>
                <p className="text-sm text-neutral-500 mb-1">{info.title}</p>
                {info.link ? (
                  <a href={info.link} className="font-medium text-neutral-900 hover:text-primary-600 transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <p className="font-medium text-neutral-900">{info.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-8 lg:p-10 shadow-sm border border-neutral-100">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">Request a Sourcing Quote</h2>
                <p className="text-neutral-600 mb-8">Fill out the form below and we will respond within 24 hours.</p>

                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">Thank You!</h3>
                    <p className="text-lg text-neutral-600 mb-6">
                      Your inquiry has been received. Our team will review your requirements and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="text-primary-600 font-medium hover:text-primary-700"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                            errors.name ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="John Smith"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                            errors.email ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-neutral-700 mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="United States"
                        />
                      </div>
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-2">
                          Product Interest <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                            errors.product ? 'border-red-500' : 'border-neutral-300'
                          }`}
                          placeholder="Electronics, Textiles, etc."
                        />
                        {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="e.g., 1,000 units"
                        />
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-2">
                          Project Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                        >
                          <option value="">Select timeline</option>
                          {timelineOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                        placeholder="Tell us about your sourcing requirements, specifications, quality standards, or any specific needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 px-6 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 disabled:bg-primary-400 transition-colors flex items-center justify-center gap-2"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Get a Free Sourcing Quote
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-xl p-8 mb-8">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Free Consultation</p>
                      <p className="text-sm text-neutral-600">No obligation quote tailored to your needs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">24-Hour Response</p>
                      <p className="text-sm text-neutral-600">Quick turnaround on all inquiries</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Transparent Pricing</p>
                      <p className="text-sm text-neutral-600">No hidden fees or surprises</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Proven Track Record</p>
                      <p className="text-sm text-neutral-600">500+ clients served across 50+ countries</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-primary-600" />
                  <h3 className="text-lg font-bold text-neutral-900">Need Immediate Help?</h3>
                </div>
                <p className="text-neutral-600 mb-4">
                  For urgent inquiries, contact us directly via email or phone.
                </p>
                <a
                  href="mailto:info@ssourcingchina.com"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@ssourcingchina.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-neutral-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-200 rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <p className="text-neutral-500">Shanghai, China</p>
              <p className="text-sm text-neutral-400">Serving clients worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
