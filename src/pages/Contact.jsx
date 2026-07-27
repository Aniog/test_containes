import React, { useState } from 'react';
import { MapPin, Mail, Clock, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    timeline: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-navy-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to start sourcing from China? Get in touch for a free consultation and quote. We respond within 24 hours on business days.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">Email</h3>
                    <p className="text-slate-600 text-sm">info@ssourcingchina.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">Location</h3>
                    <p className="text-slate-600 text-sm">Shenzhen, Guangdong, China</p>
                    <p className="text-slate-500 text-xs mt-1">In China's manufacturing hub, with direct access to factories</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">Business Hours</h3>
                    <p className="text-slate-600 text-sm">Mon – Fri, 9:00 – 18:00 (CST)</p>
                    <p className="text-slate-500 text-xs mt-1">We respond within 24 hours on business days</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-navy-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">Phone / WeChat</h3>
                    <p className="text-slate-600 text-sm">Available upon request</p>
                    <p className="text-slate-500 text-xs mt-1">WeChat ID provided after initial contact</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-navy-50 rounded-lg">
                <h3 className="font-semibold text-navy-700 text-sm mb-2">What Happens Next?</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">1.</span>
                    We review your request within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">2.</span>
                    We confirm feasibility and discuss details
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">3.</span>
                    We provide supplier options and a quote
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">4.</span>
                    You decide — no commitment required
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Sourcing Inquiry Form</h2>
                <p className="text-slate-600 text-sm mb-6">Fill out the form below and we will get back to you with supplier recommendations and a detailed quote.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="e.g. United States"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Product You Need *</label>
                      <input
                        type="text"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="e.g. Bluetooth speakers"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                        placeholder="e.g. 5,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Target Timeline</label>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                      placeholder="e.g. Need delivery within 8 weeks"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent resize-none"
                      placeholder="Product specifications, target price, quality requirements, certifications needed, or any other details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Submit Your Sourcing Inquiry
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    We respect your privacy. Your information is only used to process your inquiry and will not be shared with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
