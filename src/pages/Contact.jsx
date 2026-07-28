import React, { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <section className="bg-navy-800 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We typically respond within 1-2 business days.
            </p>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Inquiry Received</h2>
            <p className="text-lg text-slate-600 mb-8">
              Thank you for reaching out. Our team will review your request and get back to you within 1-2 business days with a free sourcing assessment.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', product: '', quantity: '', message: '' }); }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-md transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-800 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to start sourcing from China? Fill out the form below and our team will get back to you within 1-2 business days.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-800">Email</span>
                    <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-800">Phone</span>
                    <p className="text-sm text-slate-600">+86 755 XXXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-800">Address</span>
                    <p className="text-sm text-slate-600">Shenzhen, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-800">Response Time</span>
                    <p className="text-sm text-slate-600">1-2 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-slate-800">Languages</span>
                    <p className="text-sm text-slate-600">English, Chinese</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-800 mb-2">What happens next?</h3>
                <ol className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-teal-600">1.</span>
                    <span>We review your inquiry within 24 hours.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-teal-600">2.</span>
                    <span>We send a free feasibility assessment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-teal-600">3.</span>
                    <span>We schedule a call to discuss next steps.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 p-6 lg:p-8">
                <h2 className="text-xl font-bold text-slate-800 mb-6">Send Us an Inquiry</h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Product to Source *</label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="e.g., USB cables"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="e.g., 5,000 units"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    placeholder="Describe specifications, target price, certifications needed, shipping destination, etc."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Get a Free Sourcing Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
