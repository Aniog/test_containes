import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Globe } from 'lucide-react';
import { submitInquiry } from '@/api/inquiry.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    if (!formData.name.trim() || !formData.email.trim() || !formData.product.trim() || !formData.message.trim()) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormStatus('submitting');
    try {
      await submitInquiry({ ...formData, source_page: 'contact' });
      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', country: '', phone: '', product: '', quantity: '', message: '' });
    } catch (err) {
      setFormError(err.message || 'Submission failed. Please try again.');
      setFormStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-navy-200 max-w-2xl">
            Ready to start sourcing from China? Get in touch for a free initial consultation. Our team responds within 24 hours on business days.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-navy-100 p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy-900">Email</div>
                      <div className="text-sm text-navy-500">info@ssourcingchina.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy-900">Phone</div>
                      <div className="text-sm text-navy-500">+86 755 8888 6666</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy-900">Address</div>
                      <div className="text-sm text-navy-500">Nanshan District, Shenzhen, Guangdong, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy-900">Business Hours</div>
                      <div className="text-sm text-navy-500">Mon-Fri: 9:00 - 18:00 (CST)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-navy-100 p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">What Happens Next?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-accent-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy-900">1. We Review Your Request</div>
                      <div className="text-xs text-navy-500">Our team assesses your product requirements and sourcing needs.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-accent-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy-900">2. Initial Consultation</div>
                      <div className="text-xs text-navy-500">We discuss your project scope, timeline, and budget expectations.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-500 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy-900">3. Proposal & Action Plan</div>
                      <div className="text-xs text-navy-500">You receive a detailed proposal with pricing and next steps.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-navy-100 shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-2">Get a Free Sourcing Quote</h2>
              <p className="text-sm text-navy-500 mb-6">Fill out the form below and our team will respond within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="business@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your country"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-900 mb-1">Product You Want to Source *</label>
                    <input
                      type="text"
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Product category or description"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Estimated Quantity</label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g., 1,000 units, 500 kg, 1 container"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Details / Requirements *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-navy-200 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    placeholder="Product specifications, quality standards, target price, timeline, certifications needed, etc."
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-accent-500 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-accent-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Your Sourcing Inquiry'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-green-600 text-sm font-medium mt-3">
                    Thank you! Your inquiry has been submitted. We will respond within 24 hours.
                  </p>
                )}
                {formError && (
                  <p className="text-red-600 text-sm font-medium mt-3">{formError}</p>
                )}
                <p className="text-xs text-navy-400 text-center">
                  We'll respond within 24 hours. Your information is kept confidential and used only for your sourcing project.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
