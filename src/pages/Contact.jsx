import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Clock, Send,
  MessageSquare, Globe, CheckCircle
} from 'lucide-react';

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
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tell us what you're looking for and our team will respond with a detailed sourcing proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-brand-navy mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-navy">Email</p>
                    <p className="text-sm text-brand-muted">info@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-navy">Phone / WhatsApp</p>
                    <p className="text-sm text-brand-muted">+86 138 0000 0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-navy">Office</p>
                    <p className="text-sm text-brand-muted">Guangzhou, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-navy">Response Time</p>
                    <p className="text-sm text-brand-muted">Within 24 hours (Mon-Sat)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-navy">Languages</p>
                    <p className="text-sm text-brand-muted">English, Mandarin, Cantonese</p>
                  </div>
                </div>
              </div>

              {/* Trust Points */}
              <div className="mt-10 p-6 bg-brand-light rounded-xl border border-brand-border">
                <h3 className="text-sm font-semibold text-brand-navy mb-4">Why Work With Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="text-sm text-brand-dark">No upfront fees for initial consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="text-sm text-brand-dark">Transparent pricing, no hidden costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="text-sm text-brand-dark">10+ years of sourcing experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="text-sm text-brand-dark">500+ verified supplier network</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-brand-navy mb-2">Thank You!</h2>
                  <p className="text-brand-muted">
                    We've received your inquiry and will respond with a detailed sourcing proposal within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="bg-brand-light rounded-xl border border-brand-border p-6 md:p-8">
                  <h2 className="text-xl font-bold text-brand-navy mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-sm text-brand-muted mb-6">
                    Fill in the details below and we'll get back to you with a free sourcing proposal.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">
                          Country *
                        </label>
                        <input
                          type="text"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="United States"
                          className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">
                          Product Description *
                        </label>
                        <input
                          type="text"
                          name="product"
                          required
                          value={formData.product}
                          onChange={handleChange}
                          placeholder="e.g., Custom LED panel lights"
                          className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1.5">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g., 1,000 units"
                          className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1.5">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your requirements — specifications, target price, timeline, certifications needed, etc."
                        className="w-full px-4 py-3 rounded-lg border border-brand-border text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full md:w-auto inline-flex items-center justify-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition border-none cursor-pointer text-sm"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit Sourcing Inquiry
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
