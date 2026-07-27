import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', product: '', quantity: '', timeline: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your inquiry! Our team will respond within 24 hours.');
    setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', timeline: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Tell us what you need and our sourcing team will provide supplier options, pricing estimates, and a project timeline within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-navy mb-6">Submit Your Sourcing Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Product / Category *</label>
                    <input
                      type="text"
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      placeholder="e.g. LED panel lights, office furniture"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Estimated Quantity</label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                      placeholder="e.g. 5,000 units"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Timeline</label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                    placeholder="e.g. Need delivery by October 2026"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-gray-900 mb-1.5">Project Details *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-none"
                    placeholder="Please describe your product requirements, specifications, target price, certifications needed, and any other relevant details."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand-orange text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors border-none cursor-pointer text-base"
                >
                  Submit Inquiry
                </button>
                <p className="text-xs text-brand-gray-400 mt-2 m-0">
                  We respond to all inquiries within 24 hours during business days.
                </p>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-brand-gray-50 rounded-xl p-6 md:p-8 sticky top-24">
                <h3 className="text-lg font-semibold text-brand-navy mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-gray-900 m-0">Email</p>
                      <p className="text-sm text-brand-gray-600 m-0">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-gray-900 m-0">Phone / WhatsApp</p>
                      <p className="text-sm text-brand-gray-600 m-0">+86 138 0000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-gray-900 m-0">Office</p>
                      <p className="text-sm text-brand-gray-600 m-0">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-gray-900 m-0">Business Hours</p>
                      <p className="text-sm text-brand-gray-600 m-0">Mon-Fri: 9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-gray-900 m-0">Response Time</p>
                      <p className="text-sm text-brand-gray-600 m-0">Within 24 hours on business days</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-gray-200">
                  <h4 className="text-sm font-semibold text-brand-navy mb-3">Why Contact Us?</h4>
                  <ul className="space-y-2 list-none p-0 m-0">
                    <li className="text-sm text-brand-gray-600">• Free initial consultation</li>
                    <li className="text-sm text-brand-gray-600">• No obligation quote</li>
                    <li className="text-sm text-brand-gray-600">• Confidential handling of your requirements</li>
                    <li className="text-sm text-brand-gray-600">• Direct access to our sourcing team</li>
                  </ul>
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
