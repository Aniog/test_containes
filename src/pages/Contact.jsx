import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', country: '',
    product: '', quantity: '', timeline: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your inquiry! We will respond within 24 hours.');
    setFormData({
      name: '', email: '', phone: '', company: '', country: '',
      product: '', quantity: '', timeline: '', message: ''
    });
  };

  return (
    <div>
      <section className="bg-primary-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Contact Us</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Get a Free Sourcing Quote
          </h1>
          <p className="mt-4 text-neutral-500 max-w-2xl mx-auto text-lg">
            Tell us about your sourcing needs and receive a tailored plan within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Submit Your Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone / WhatsApp</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (within 2 weeks)</option>
                      <option value="1month">Within 1 month</option>
                      <option value="2-3months">2-3 months</option>
                      <option value="flexible">Flexible / Just researching</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Product Description *</label>
                    <input
                      type="text"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g. LED panel lights, 600x600mm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g. 1,000 units"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us more about your requirements — specifications, target price, certifications needed, etc."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-accent-dark transition-colors text-sm"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Email</p>
                      <p className="text-sm text-neutral-500">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Phone / WhatsApp</p>
                      <p className="text-sm text-neutral-500">+86 138 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Office</p>
                      <p className="text-sm text-neutral-500">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Working Hours</p>
                      <p className="text-sm text-neutral-500">Mon-Fri: 9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">What Happens Next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">We review your requirements within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">A sourcing specialist contacts you to discuss details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">We provide a sourcing plan with cost estimate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">No commitment — decide if you want to proceed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary rounded-xl p-6">
                <MessageSquare className="w-8 h-8 text-white mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Quick Response</h3>
                <p className="text-primary-light text-sm leading-relaxed">
                  We respond to all inquiries within 24 hours during business days. For urgent matters, reach us directly via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
