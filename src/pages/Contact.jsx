import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Contact Us</h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Ready to start sourcing from China? Tell us about your project and receive a free sourcing quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-neutral-800 mb-2">Thank You!</h2>
                  <p className="text-neutral-600">
                    Your inquiry has been received. Our team will review your requirements and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-neutral-800 mb-2">Get a Free Sourcing Quote</h2>
                  <p className="text-neutral-500 mb-8">
                    Fill out the form below with your product requirements. The more detail you provide, the faster we can help.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Country *
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="Your country"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Product Description *
                        </label>
                        <input
                          type="text"
                          name="product"
                          value={form.product}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="What product are you looking to source?"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                          Estimated Order Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={form.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                          placeholder="e.g., 1,000 units"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
                        placeholder="Tell us more about your requirements: specifications, target price, timeline, certifications needed, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors"
                    >
                      Submit Inquiry
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h3 className="font-bold text-neutral-800 text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-neutral-800 text-sm">Office Address</div>
                      <div className="text-neutral-600 text-sm">Guangzhou, Guangdong Province, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-neutral-800 text-sm">Email</div>
                      <div className="text-neutral-600 text-sm">info@ssourcingchina.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-neutral-800 text-sm">Phone</div>
                      <div className="text-neutral-600 text-sm">+86 755 1234 5678</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-neutral-800 text-sm">Business Hours</div>
                      <div className="text-neutral-600 text-sm">Mon-Fri: 9:00 AM - 6:00 PM (CST)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
                <h3 className="font-bold text-neutral-800 text-lg mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-neutral-700">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <span>We review your requirements within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <span>A dedicated account manager is assigned to your project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <span>We propose a sourcing plan with timeline and pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                    <span>You decide how to proceed — no obligation</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
