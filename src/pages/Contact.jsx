import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { contactInfo, productInterestOptions } from '../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: '',
    quantity: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productInterest: '',
        quantity: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Tell us about your product needs. Our team will respond within 24 hours with supplier options and a customized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-[#6B7280] mb-8">
                Have questions? We are here to help. Reach out through any of these channels or fill out the form.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E67E22]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#E67E22]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-[#6B7280] hover:text-[#E67E22] transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E67E22]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#E67E22]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-[#6B7280] hover:text-[#E67E22] transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E67E22]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#E67E22]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <span className="text-[#6B7280]">{contactInfo.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E67E22]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#E67E22]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <span className="text-[#6B7280]">{contactInfo.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="mt-8 p-6 bg-[#F8FAFC] rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-[#E67E22]" />
                  <span className="font-semibold">Quick Response</span>
                </div>
                <p className="text-sm text-[#6B7280]">
                  We typically respond to inquiries within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#F8FAFC] rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#059669]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-[#6B7280] mb-8 max-w-md mx-auto">
                      Your inquiry has been received. Our team will review your requirements and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-3 bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-colors ${
                            errors.name ? 'border-red-500' : 'border-[#E5E7EB]'
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-colors ${
                            errors.company ? 'border-red-500' : 'border-[#E5E7EB]'
                          }`}
                          placeholder="Your company name"
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.company}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-colors ${
                            errors.email ? 'border-red-500' : 'border-[#E5E7EB]'
                          }`}
                          placeholder="you@company.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Product Interest */}
                      <div>
                        <label htmlFor="productInterest" className="block text-sm font-medium mb-2">
                          Product Interest
                        </label>
                        <select
                          id="productInterest"
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-colors bg-white"
                        >
                          <option value="">Select a category</option>
                          {productInterestOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Quantity */}
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-colors"
                          placeholder="e.g., 1,000 units"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E67E22] focus:border-transparent transition-colors resize-none ${
                          errors.message ? 'border-red-500' : 'border-[#E5E7EB]'
                        }`}
                        placeholder="Tell us about your product requirements, specifications, timeline, and any other details that would help us understand your needs."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#E67E22] hover:bg-[#D35400] disabled:bg-[#E67E22]/50 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02]"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-[#6B7280] text-center">
                      By submitting this form, you agree to be contacted regarding your inquiry. We respect your privacy and will not share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#6B7280]">
              Quick answers to common questions about working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How quickly can you find suppliers?',
                a: 'For standard products, we can typically identify and verify suitable suppliers within 1-2 weeks. Complex requirements may take longer.',
              },
              {
                q: 'What information do you need to start?',
                a: 'Product specifications, estimated quantity, target price range, and your timeline. The more details you provide, the better we can match you with suitable suppliers.',
              },
              {
                q: 'Do you charge for the initial consultation?',
                a: 'No, the initial consultation is completely free. We will discuss your requirements and provide a customized quote for our services.',
              },
              {
                q: 'What are your payment terms?',
                a: 'Payment terms vary based on the services and order value. We discuss and agree on payment terms during the project planning phase.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-[#6B7280]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;