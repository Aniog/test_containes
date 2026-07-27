import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Globe, CheckCircle } from 'lucide-react';
import { siteData } from '@/data/content';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! Our team will review your requirements and respond within 24 hours.');
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-blue py-20 md:py-24">
        <div className="container-custom text-center">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Ready to start sourcing from China? Share your requirements and our 
            team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Sourcing Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below with your product requirements. The more details you provide, 
                the more accurate our quote will be.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                    placeholder="e.g., United States, Australia, UK"
                  />
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Requirements</h3>
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Description *</label>
                      <input
                        type="text"
                        required
                        value={formData.product}
                        onChange={(e) => setFormData({...formData, product: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                        placeholder="e.g., Wireless Bluetooth earbuds with charging case"
                      />
                    </div>
                    <div className="grid sm:grid-cols-3 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity</label>
                        <input
                          type="text"
                          value={formData.quantity}
                          onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                          placeholder="e.g., 5,000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Target Budget</label>
                        <input
                          type="text"
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                          placeholder="e.g., $5-8/unit"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Timeline</label>
                        <input
                          type="text"
                          value={formData.timeline}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900"
                          placeholder="e.g., 60 days"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Details</label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors text-gray-900 resize-none"
                        placeholder="Product specifications, certifications needed, packaging requirements, shipping preferences..."
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-accent-orange text-white font-bold rounded-lg hover:bg-accent-orange-hover transition-colors text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Inquiry
                </button>
                <p className="text-gray-500 text-xs text-center">
                  We respond to all inquiries within 24 business hours. Your information is kept confidential.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">Email</p>
                      <a href={`mailto:${siteData.company.email}`} className="text-gray-900 font-medium hover:text-primary-blue transition-colors">
                        {siteData.company.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">Phone</p>
                      <a href={`tel:${siteData.company.phone}`} className="text-gray-900 font-medium hover:text-primary-blue transition-colors">
                        {siteData.company.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">WeChat</p>
                      <p className="text-gray-900 font-medium">{siteData.company.wechat}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-0.5">Office</p>
                      <p className="text-gray-900 font-medium">{siteData.company.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM (CST)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900 font-medium">9:00 AM - 1:00 PM (CST)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-accent-orange" />
                    <span className="text-gray-900 font-semibold text-sm">24-Hour Response</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We respond to all sourcing inquiries within 24 business hours. 
                    For urgent matters, call or message us on WeChat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
