import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, CheckCircle, Send, 
  MessageSquare, FileCheck, Shield, ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    timeline: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.product.trim()) newErrors.product = 'Product description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ssourcingchina.com',
      href: 'mailto:info@ssourcingchina.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+86 755 8123 4567',
      href: 'tel:+8675581234567',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Room 1208, Building A, Century Center, Shenzhen, China',
      href: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 9:00 AM - 6:00 PM (GMT+8)',
      href: null,
    },
  ];

  const benefits = [
    {
      icon: MessageSquare,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours during business days.',
    },
    {
      icon: FileCheck,
      title: 'Free Consultation',
      description: 'Our initial consultation and quote are completely free with no strings attached.',
    },
    {
      icon: Shield,
      title: 'Confidential',
      description: 'All project details are kept strictly confidential. We sign NDAs upon request.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg lg:text-xl text-blue-100">
              Ready to start your China sourcing journey? Get in touch and we'll help you find the right solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-slate-600 hover:text-blue-700 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-semibold mb-4">Why Work With Us?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <benefit.icon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm">{benefit.title}</h4>
                        <p className="text-xs text-slate-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm border border-slate-100">
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-6 max-w-md mx-auto">
                      We've received your inquiry and will get back to you within 24 hours. Our team is excited to help with your China sourcing needs.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="text-blue-700 font-medium hover:text-blue-800 transition-colors"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-2">Request a Quote</h2>
                    <p className="text-slate-600 mb-8">
                      Fill out the form below and we'll get back to you within 24 hours with a customized sourcing plan.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 ${
                              errors.name ? 'border-red-500' : 'border-slate-300'
                            }`}
                            placeholder="John Smith"
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 ${
                              errors.email ? 'border-red-500' : 'border-slate-300'
                            }`}
                            placeholder="john@company.com"
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                            placeholder="Your Company Ltd."
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                            placeholder="+1 555 123 4567"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 bg-white"
                          >
                            <option value="">Select country</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="AU">Australia</option>
                            <option value="CA">Canada</option>
                            <option value="JP">Japan</option>
                            <option value="OTHER">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">
                            Estimated Quantity
                          </label>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800"
                            placeholder="e.g., 10,000 units"
                          />
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1">
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 bg-white"
                          >
                            <option value="">Select timeline</option>
                            <option value="URGENT">Urgent (less than 1 month)</option>
                            <option value="SOON">Soon (1-3 months)</option>
                            <option value="PLANNING">Planning (3-6 months)</option>
                            <option value="FUTURE">Future (6+ months)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">
                          Product to Source <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="product"
                          name="product"
                          rows={3}
                          value={formData.product}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 resize-none ${
                            errors.product ? 'border-red-500' : 'border-slate-300'
                          }`}
                          placeholder="Describe the product you need to source, including specifications, materials, or any other relevant details."
                        />
                        {errors.product && <p className="text-red-500 text-sm mt-1">{errors.product}</p>}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                          Additional Details
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-800 resize-none"
                          placeholder="Any additional information about your requirements, budget, special needs, or questions."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <span className="animate-spin">⟳</span>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Submit Inquiry
                          </>
                        )}
                      </button>
                      <p className="text-xs text-slate-500 text-center">
                        By submitting this form, you agree to our Privacy Policy. We'll never share your information.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
              <p className="text-slate-600">
                Quick answers to help you get started.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: 'How quickly can you find suppliers for my product?',
                  a: 'For common product categories, we can typically present supplier options within 3-7 days. Complex or specialized products may take longer.',
                },
                {
                  q: 'What information do you need to start?',
                  a: 'The more detail you provide, the better. At minimum, we need a description of your product, estimated quantity, and target price range.',
                },
                {
                  q: 'Do you charge for the initial consultation?',
                  a: 'No, our initial consultation and quote are completely free with no obligation.',
                },
                {
                  q: 'Can you help with small orders?',
                  a: 'Yes, we work with businesses of all sizes, from startups to large enterprises.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
