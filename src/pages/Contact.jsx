import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tell us about your sourcing needs and our team will respond with a customized plan within 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Inquiry Submitted Successfully</h3>
                  <p className="text-slate-600">
                    Thank you for your inquiry. Our sourcing team will review your requirements and respond within 48 hours with a customized sourcing plan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-slate-50 rounded-xl border border-slate-100 p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-slate-900 mb-6">Sourcing Inquiry Form</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Country *</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description *</label>
                      <input
                        type="text"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="e.g., Bluetooth speakers, custom packaging"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none"
                      placeholder="Tell us more about your requirements — specifications, certifications needed, target price, timeline, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full bg-orange text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-orange-dark transition-colors border-none cursor-pointer text-base"
                  >
                    Submit Sourcing Inquiry
                  </button>
                  <p className="text-xs text-slate-400 mt-3 text-center">
                    We'll respond within 48 hours with a customized sourcing plan. No commitment required.
                  </p>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-6">
                <h4 className="font-semibold text-slate-900 mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-slate-600 hover:text-navy">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Phone / WhatsApp</p>
                      <a href="tel:+8613800138000" className="text-sm text-slate-600 hover:text-navy">
                        +86 138 0013 8000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Office</p>
                      <p className="text-sm text-slate-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Working Hours</p>
                      <p className="text-sm text-slate-600">Mon-Fri: 9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">Why Work With Us?</h4>
                <ul className="space-y-2.5 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-1.5 flex-shrink-0" />
                    10+ years sourcing experience in China
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-1.5 flex-shrink-0" />
                    Bilingual team (English & Chinese)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-1.5 flex-shrink-0" />
                    On-the-ground presence in major manufacturing hubs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-1.5 flex-shrink-0" />
                    Transparent pricing with no hidden fees
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-1.5 flex-shrink-0" />
                    500+ satisfied clients across 35+ countries
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
