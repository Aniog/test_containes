import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, Mail, Phone, MapPin, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { submitInquiry } from '@/api/inquiries.js';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await submitInquiry(form);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your product and requirements. We will respond within 24 hours with a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Thank You for Your Inquiry!</h2>
                    <p className="mt-2 text-slate-600 max-w-md mx-auto">
                      We have received your message and will review your requirements. Our team will respond within 24 hours with a tailored proposal.
                    </p>
                    <Link
                      to="/"
                      className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-brand-navy hover:bg-brand-navy-light transition-colors"
                    >
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-colors"
                          placeholder="+1 555 123 4567"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Product Description *
                        </label>
                        <input
                          type="text"
                          id="product"
                          name="product"
                          required
                          value={form.product}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-colors"
                          placeholder="e.g., Stainless steel water bottles"
                        />
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={form.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-colors"
                          placeholder="e.g., 5,000 units"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Additional Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy outline-none transition-colors resize-none"
                        placeholder="Tell us about your target price, quality standards, certifications needed, timeline, or any other requirements..."
                      />
                    </div>
                    {error && (
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        {error}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-brand-orange hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/25 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    <p className="text-xs text-slate-500 text-center">
                      By submitting, you agree to our privacy policy. Your information is confidential and will not be shared.
                    </p>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Office Address</p>
                      <p className="text-sm text-slate-600">Nanshan District, Shenzhen, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Email</p>
                      <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Phone</p>
                      <p className="text-sm text-slate-600">+86 755 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">Business Hours</p>
                      <p className="text-sm text-slate-600">Mon - Fri, 9:00 AM - 6:00 PM (CST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">Why Work With Us</h3>
                <ul className="space-y-3">
                  {[
                    '12+ years of sourcing experience',
                    '500+ verified factories in network',
                    'Bilingual English-Mandarin team',
                    'ISO-standard QC processes',
                    'Transparent pricing, no hidden fees',
                    'Dedicated account manager',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-blue-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}