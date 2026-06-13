import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed. Please try again.';
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_interest: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    const { data: response, error: submitError } = await client
      .from('SourcingInquiries')
      .insert({
        data: {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          phone: formData.phone || null,
          product_interest: formData.product_interest || null,
          quantity: formData.quantity || null,
          budget: formData.budget || null,
          timeline: formData.timeline || null,
          message: formData.message || null,
        },
      })
      .select()
      .single();

    if (submitError || response?.success === false) {
      setError(getErrorMessage(response, submitError));
      setStatus('error');
      return;
    }

    setStatus('success');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      product_interest: '',
      quantity: '',
      budget: '',
      timeline: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg lg:text-xl text-primary-100">
              Ready to start sourcing from China? Fill out the form and we will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-neutral-200">
                  <h2 className="text-lg font-semibold text-neutral-900 mb-4">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-neutral-900">Email</p>
                        <a href="mailto:info@ssourcingchina.com" className="text-sm text-neutral-600 hover:text-primary-600">
                          info@ssourcingchina.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-neutral-900">Phone</p>
                        <a href="tel:+861234567890" className="text-sm text-neutral-600 hover:text-primary-600">
                          +86 123 4567 890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-neutral-900">Office</p>
                        <p className="text-sm text-neutral-600">Guangzhou, Guangdong, China</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-neutral-900">Working Hours</p>
                        <p className="text-sm text-neutral-600">Monday - Friday, 9:00 - 18:00 (CST)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
                  <h2 className="text-lg font-semibold text-neutral-900 mb-2">Prefer to Chat?</h2>
                  <p className="text-sm text-neutral-600 mb-4">
                    We typically respond within 2-4 hours during business hours. For urgent inquiries, please indicate in your message.
                  </p>
                  <p className="text-sm text-neutral-600">
                    First consultation is always <strong className="text-primary-600">free</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 lg:p-8 rounded-2xl border border-neutral-200">
                <h2 className="text-2xl font-bold text-neutral-900 mb-1">Request a Sourcing Quote</h2>
                <p className="text-sm text-neutral-600 mb-6">
                  Tell us about your sourcing needs and we will get back to you with a personalized proposal.
                </p>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                    <p className="text-green-700">
                      Your inquiry has been submitted successfully. We will review your requirements and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Full Name <span className="text-accent-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email <span className="text-accent-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 890"
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product_interest" className="block text-sm font-medium text-neutral-700 mb-1">
                        Product(s) of Interest
                      </label>
                      <input
                        id="product_interest"
                        name="product_interest"
                        type="text"
                        value={formData.product_interest}
                        onChange={handleChange}
                        placeholder="e.g. Smart home devices, children's clothing, industrial valves"
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1">
                          Estimated Quantity
                        </label>
                        <input
                          id="quantity"
                          name="quantity"
                          type="text"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 5,000 units"
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-1">
                          Budget Range
                        </label>
                        <input
                          id="budget"
                          name="budget"
                          type="text"
                          value={formData.budget}
                          onChange={handleChange}
                          placeholder="e.g. $10,000 - $50,000"
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700 mb-1">
                          Target Timeline
                        </label>
                        <input
                          id="timeline"
                          name="timeline"
                          type="text"
                          value={formData.timeline}
                          onChange={handleChange}
                          placeholder="e.g. 3 months"
                          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                        Detailed Requirements <span className="text-accent-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your product requirements, quality standards, certifications needed, and any other details that will help us understand your needs..."
                        className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-y"
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold rounded-lg transition-colors"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Sourcing Inquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}