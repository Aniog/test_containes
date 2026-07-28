import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed. Please try again.';
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const { data: response, error: insertError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: formData.name,
            email: formData.email,
            company: formData.company || '',
            phone: formData.phone || '',
            product: formData.product,
            quantity: formData.quantity || '',
            message: formData.message || '',
            status: 'new',
            source: 'website',
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        setError(getErrorMessage(response, insertError));
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Contact Us</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Ready to start sourcing from China? Get a free quote or schedule a consultation with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">Thank You!</h3>
                  <p className="text-slate-600">
                    We have received your inquiry and will respond within 24 hours with a sourcing plan tailored to your needs.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-2">Get a Free Sourcing Quote</h2>
                  <p className="text-slate-600 mb-8">
                    Fill out the form below and our team will respond within 24 hours with a sourcing plan and quotation.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">Product Description *</label>
                        <input
                          type="text"
                          name="product"
                          required
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                          placeholder="What product are you looking to source?"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">Estimated Quantity</label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                          placeholder="e.g., 1,000 units"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-900 mb-1.5">Additional Details</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors resize-none"
                        placeholder="Tell us more about your requirements, specifications, timeline, etc."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 bg-brand-600 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-brand-700 transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Inquiry
                        </>
                      )}
                    </button>
                    {error && (
                      <div className="flex items-start gap-2 text-red-600 text-sm mt-4">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100">
                <h3 className="text-lg font-semibold text-navy-900 mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy-900">Email</div>
                      <div className="text-sm text-slate-600">info@ssourcingchina.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy-900">Phone</div>
                      <div className="text-sm text-slate-600">+86 755 8888 8888</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy-900">Office</div>
                      <div className="text-sm text-slate-600">Nanshan District, Shenzhen, Guangdong, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-navy-900">Business Hours</div>
                      <div className="text-sm text-slate-600">Mon-Fri: 9:00 AM - 6:00 PM (CST/UTC+8)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 rounded-xl p-6 md:p-8 mt-6">
                <h3 className="text-lg font-semibold text-white mb-3">What Happens Next?</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'We review your requirements within 24 hours' },
                    { step: '2', text: 'A dedicated account manager is assigned to your project' },
                    { step: '3', text: 'You receive a sourcing plan with supplier options and pricing' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-brand-500 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                        {item.step}
                      </div>
                      <span className="text-sm text-slate-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
