import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    requirements: '',
    timeline: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log('Form submitted:', formData);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your inquiry has been received. Our team will review your requirements and get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                product: '',
                quantity: '',
                requirements: '',
                timeline: '',
              });
            }}
            className="btn-primary"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Get a free sourcing quote or ask us anything about sourcing products from China.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Sourcing Quote</h2>
                <p className="text-gray-600 mb-8">
                  Tell us about the products you need and our team will provide a detailed proposal within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product You Need *
                      </label>
                      <input
                        type="text"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="e.g., LED lights, furniture, clothing"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="e.g., 1000 units, 20ft container"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (within 2 weeks)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-months">Within 2 months</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="flexible">Flexible / Planning stage</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Requirements & Specifications *
                    </label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="Please describe your product requirements, specifications, target price, certifications needed, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="card mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:info@ssourcingchina.com" className="flex items-start gap-3 text-gray-600 hover:text-brand-600 transition-colors">
                    <Mail className="w-5 h-5 text-brand-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-sm">info@ssourcingchina.com</p>
                    </div>
                  </a>
                  <a href="tel:+8613800138000" className="flex items-start gap-3 text-gray-600 hover:text-brand-600 transition-colors">
                    <Phone className="w-5 h-5 text-brand-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-sm">+86 138-0013-8000</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Office</p>
                      <p className="text-sm text-gray-600">Tianhe District, Guangzhou<br />Guangdong, China 510620</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Response Time</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent-500" />
                    <div>
                      <p className="font-medium text-gray-900">24 Hours</p>
                      <p className="text-sm text-gray-600">Standard inquiry response</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-accent-500" />
                    <div>
                      <p className="font-medium text-gray-900">Same Day</p>
                      <p className="text-sm text-gray-600">Urgent requests</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-accent-500" />
                    <div>
                      <p className="font-medium text-gray-900">Time Zone</p>
                      <p className="text-sm text-gray-600">GMT+8 (China Standard Time)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-brand-50 border-brand-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Need an urgent response? Send us a message with your requirements and we will prioritize your inquiry.
                </p>
                <a href="mailto:info@ssourcingchina.com?subject=Urgent Sourcing Inquiry" className="btn-primary w-full justify-center text-sm">
                  Email Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50" id="faq">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Common Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'How quickly will I receive a response?',
                a: 'We respond to all inquiries within 24 hours during business days. For urgent requests, we aim to respond within a few hours.',
              },
              {
                q: 'Is the initial consultation free?',
                a: 'Yes, initial consultations and sourcing quotes are completely free. We only charge fees when you proceed with an order.',
              },
              {
                q: 'What information should I include in my inquiry?',
                a: 'Include product specifications, target quantity, quality requirements, target price, and your timeline. The more details you provide, the more accurate our quote will be.',
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
