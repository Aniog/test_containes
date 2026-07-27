import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Get a Free Sourcing Quote
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl">
            Tell us what you're looking for and we'll put together a sourcing plan tailored to your needs. No commitment required.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-brand-green mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-brand-dark mb-2">Thank You!</h2>
                  <p className="text-brand-gray">
                    We've received your inquiry and will get back to you within 24 hours with a sourcing plan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Product You're Looking For *
                      </label>
                      <input
                        type="text"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="e.g., LED panel lights, custom furniture"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        placeholder="e.g., 500 units, 1 container"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                      placeholder="Please describe your product requirements, target price, quality standards, certifications needed, and any other relevant details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors w-full md:w-auto"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Submit Inquiry
                  </button>

                  <p className="text-sm text-brand-gray">
                    We'll respond within 24 hours. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="bg-brand-light rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-brand-dark mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-orange mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-brand-dark">Email</div>
                      <div className="text-sm text-brand-gray">info@ssourcingchina.com</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-orange mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-brand-dark">Phone / WhatsApp</div>
                      <div className="text-sm text-brand-gray">+86 138 0000 0000</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-brand-dark">Office</div>
                      <div className="text-sm text-brand-gray">Guangzhou, Guangdong, China</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-orange mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-brand-dark">Working Hours</div>
                      <div className="text-sm text-brand-gray">Mon-Fri: 9:00 AM - 6:00 PM (CST)</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-light rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                    <span className="text-sm text-brand-gray">We review your requirements within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                    <span className="text-sm text-brand-gray">We send you a sourcing plan with timeline and cost estimate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-orange text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                    <span className="text-sm text-brand-gray">If you approve, we start supplier research immediately</span>
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
