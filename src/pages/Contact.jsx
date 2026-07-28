import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    services: [],
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
  };

  const serviceOptions = [
    'Supplier Sourcing',
    'Factory Verification',
    'Quality Inspection',
    'Production Follow-up',
    'Shipping Coordination',
    'Full-Service Package',
  ];

  if (submitted) {
    return (
      <div>
        <section className="bg-brand-navy py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Contact Us
            </h1>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Inquiry Received!</h2>
            <p className="text-neutral-600 text-lg">
              Thank you for reaching out. Our sourcing team will review your requirements and respond within 24 hours with a free assessment and next steps.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Tell us what you need and our team will provide a free sourcing assessment within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Submit Your Sourcing Inquiry</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country *</label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product You Need *</label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="e.g., LED panel lights, yoga mats"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                      placeholder="e.g., 1,000 units"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-3">Services Needed</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {serviceOptions.map((service) => (
                      <label
                        key={service}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer transition text-sm ${
                          formData.services.includes(service)
                            ? 'border-brand-blue bg-blue-50 text-brand-blue'
                            : 'border-neutral-300 text-neutral-700 hover:border-neutral-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceToggle(service)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          formData.services.includes(service)
                            ? 'bg-brand-blue border-brand-blue'
                            : 'border-neutral-400'
                        }`}>
                          {formData.services.includes(service) && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Details</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg text-neutral-900 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition resize-none"
                    placeholder="Tell us about your requirements: specs, certifications needed, target price, timeline, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition text-base border-none cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  Submit Inquiry
                </button>

                <p className="text-neutral-500 text-xs">
                  We'll respond within 24 hours. No spam, no obligations.
                </p>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Email</p>
                      <p className="text-sm text-neutral-600">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Phone / WhatsApp</p>
                      <p className="text-sm text-neutral-600">+86 130 1234 5678</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Office</p>
                      <p className="text-sm text-neutral-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Business Hours</p>
                      <p className="text-sm text-neutral-600">Mon–Fri, 9:00–18:00 (GMT+8)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-navy rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">1</span>
                    <p className="text-neutral-300 text-sm">We review your requirements within 24 hours</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">2</span>
                    <p className="text-neutral-300 text-sm">We provide a free sourcing assessment and quote</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">3</span>
                    <p className="text-neutral-300 text-sm">Once approved, we begin supplier research</p>
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
