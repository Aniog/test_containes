import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';

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
    console.log('Contact inquiry submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl">
            Get a free sourcing quote. Tell us about the product you want to source from China and we will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Get in Touch</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Office Location</p>
                    <p className="text-sm text-neutral-600">Shanghai, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Email</p>
                    <p className="text-sm text-neutral-600">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Phone</p>
                    <p className="text-sm text-neutral-600">+86 21 5XXX XXXX</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-primary-50 border border-primary-100 rounded-xl">
                <h3 className="text-sm font-semibold text-primary-700 mb-2">What to Expect</h3>
                <ul className="space-y-2">
                  {[
                    'Response within 24 hours',
                    'Free initial consultation',
                    'Supplier recommendations included',
                    'No commitment required',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-primary-700">
                      <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Thank You for Your Inquiry</h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    We have received your message and will respond within 24 hours with supplier recommendations and a preliminary assessment.
                  </p>
                  <Link
                    to="/"
                    className="text-primary-500 hover:text-primary-600 font-semibold text-sm no-underline"
                  >
                    Return to homepage →
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 md:p-8">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Sourcing Inquiry Form</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="e.g. United States"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Product You Want to Source *</label>
                      <input
                        type="text"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="e.g. stainless steel kitchen utensils"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Estimated Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="e.g. 5,000 units"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Additional Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                      placeholder="Target price, quality requirements, timeline, special specifications..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 border-0"
                  >
                    <Send className="w-4 h-4" />
                    Submit Your Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
