import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mail, Phone, MapPin, Clock, Send, Globe, MessageSquare } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company || undefined,
            country: formData.country,
            product: formData.product,
            quantity: formData.quantity || undefined,
            message: formData.message || undefined,
            status: 'new',
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const errMsg = Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed';
        throw new Error(errMsg);
      }

      console.log('Inquiry submitted successfully:', response);
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Tell us what you're looking for and our team will respond with a sourcing plan within 24 hours. No commitment required.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-xl border border-brand-border p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-text mb-3">Inquiry Received!</h2>
                  <p className="text-brand-muted max-w-md mx-auto">
                    Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours with a preliminary sourcing plan.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-brand-border p-6 md:p-8">
                  <h2 className="text-xl font-bold text-brand-text mb-6">Sourcing Inquiry Form</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-text mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-text mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-text mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-text mb-1.5">Country *</label>
                        <input
                          type="text"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="United States"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-brand-text mb-1.5">Product Description *</label>
                        <input
                          type="text"
                          name="product"
                          required
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="e.g., LED panel lights, 600x600mm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-text mb-1.5">Estimated Quantity</label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          placeholder="e.g., 1,000 units/month"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-brand-text mb-1.5">Additional Details</label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-brand-text text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                        placeholder="Tell us more about your requirements — target price, certifications needed, timeline, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full md:w-auto px-8 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors border-none cursor-pointer text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                    </button>

                    {error && (
                      <p className="text-red-600 text-sm mt-2" role="alert">{error}</p>
                    )}
                  </form>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-brand-border p-6">
                <h3 className="text-lg font-semibold text-brand-text mb-4">Contact Information</h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-text">Email</p>
                      <p className="text-sm text-brand-muted">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-text">Phone / WhatsApp</p>
                      <p className="text-sm text-brand-muted">+86 755 8888 6666</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-text">Office</p>
                      <p className="text-sm text-brand-muted">Shenzhen, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-brand-text">Business Hours</p>
                      <p className="text-sm text-brand-muted">Mon-Fri, 9:00-18:00 (GMT+8)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-5 h-5 text-brand-blue" />
                  <h3 className="text-base font-semibold text-brand-text">Quick Response</h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed">
                  We respond to all inquiries within 24 hours. For urgent matters, reach us directly via WhatsApp or phone.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-brand-border p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-brand-blue" />
                  <h3 className="text-base font-semibold text-brand-text">We Serve Globally</h3>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Our clients are based in North America, Europe, Australia, the Middle East, and Southeast Asia. We communicate in English and can arrange translation support.
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
