import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Contact Us</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Ready to start sourcing from China? Send us your requirements and we will respond within 24 business hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Request a Free Sourcing Quote</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your inquiry has been received. Our team will contact you within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900"
                        placeholder="United States"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                      <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900 bg-white">
                        <option value="">Select a category</option>
                        <option>Consumer Electronics</option>
                        <option>Home & Garden</option>
                        <option>Apparel & Textiles</option>
                        <option>Industrial & Hardware</option>
                        <option>Sports & Outdoors</option>
                        <option>Beauty & Personal Care</option>
                        <option>Auto Parts</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Description *</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none text-gray-900"
                      placeholder="Describe the product you want to source, including specifications, quantity, target price, and any special requirements..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Order Quantity</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-gray-900"
                      placeholder="e.g., 1,000 units"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Submit Your Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium text-sm">Office Address</p>
                      <p className="text-gray-600 text-sm">Guangzhou, Guangdong Province, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium text-sm">Email</p>
                      <p className="text-gray-600 text-sm">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium text-sm">Phone</p>
                      <p className="text-gray-600 text-sm">+86 755 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium text-sm">Business Hours</p>
                      <p className="text-gray-600 text-sm">Mon-Fri: 9:00 AM - 6:00 PM (CST, UTC+8)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A dedicated project manager is assigned',
                    'We provide a free feasibility assessment',
                    'You receive supplier recommendations with quotes',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Why Choose Us?</h3>
                <ul className="space-y-2.5">
                  {[
                    '10+ years of China sourcing experience',
                    '2,000+ verified suppliers in our network',
                    'Bilingual project managers',
                    'Transparent pricing, no hidden fees',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
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
