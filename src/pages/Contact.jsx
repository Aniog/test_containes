import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, CheckCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    volume: '',
    timeline: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            Ready to start sourcing from China? Submit your requirements and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-xl md:text-2xl font-bold text-neutral-800 mb-6">Get a Free Sourcing Quote</h2>

              {submitted ? (
                <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Thank You!</h3>
                  <p className="text-neutral-500 text-sm mb-4">We've received your inquiry and will respond within 24 hours with an initial assessment.</p>
                  <p className="text-neutral-400 text-sm">Check your email for a confirmation message.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-700 text-sm font-medium mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 text-sm font-medium mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-700 text-sm font-medium mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 text-sm font-medium mb-1">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-700 text-sm font-medium mb-1">Product You Want to Source *</label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="e.g., stainless steel kitchen utensils"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-700 text-sm font-medium mb-1">Estimated Order Volume</label>
                      <input
                        type="text"
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="e.g., 500 units, 1 container"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 text-sm font-medium mb-1">Target Timeline</label>
                      <input
                        type="text"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="e.g., delivery within 3 months"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-700 text-sm font-medium mb-1">Additional Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-neutral-300 rounded-md px-3 py-2 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                      placeholder="Specifications, quality requirements, target price, current supplier issues..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md text-sm font-semibold transition-colors inline-flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Your Inquiry
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-neutral-800 mb-6">Our Information</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-800">Location</h3>
                    <p className="text-neutral-500 text-sm">Guangzhou, Guangdong, China</p>
                    <p className="text-neutral-400 text-xs mt-1">Coverage across major manufacturing regions</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-800">Email</h3>
                    <p className="text-neutral-500 text-sm">info@ssourcingchina.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-800">Phone</h3>
                    <p className="text-neutral-500 text-sm">+86 xxx xxxx xxxx</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-800">Response Time</h3>
                    <p className="text-neutral-500 text-sm">Within 24 hours</p>
                    <p className="text-neutral-400 text-xs mt-1">Business days, China time (GMT+8)</p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mt-8">
                <h3 className="text-sm font-semibold text-neutral-800 mb-3">What Happens Next?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-500 text-sm">We review your requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-500 text-sm">We assess feasibility and provide initial feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-500 text-sm">We propose a service plan with clear pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-500 text-sm">No commitment required until you approve</span>
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
