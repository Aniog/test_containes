import { useState } from 'react';
import { MapPin, Mail, Clock, Globe, Send, CheckCircle } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { submitInquiry } from '@/api/inquiries';

const productTypes = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Machinery',
  'Packaging & Printing',
  'Health & Beauty',
  'Toys & Gifts',
  'Automotive Parts',
  'Construction & Hardware',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification / Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Compliance & Certification',
  'Full Sourcing Service',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '',
    service: '', product: '', quantity: '', budget: '', message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);
    try {
      await submitInquiry({
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        country: form.country,
        service: form.service,
        product_category: form.product,
        quantity: form.quantity,
        budget: form.budget,
        message: form.message,
        source_page: 'contact',
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Submission failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Get a Free Sourcing Quote"
        subtitle="Tell us about your project and we'll respond within 1 business day with a tailored sourcing plan and quote."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Office Location</p>
                    <p className="text-slate-500 text-sm">Shenzhen, Guangdong, China</p>
                    <p className="text-slate-400 text-xs mt-0.5">Also covering Guangzhou, Yiwu, Dongguan</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-brand-accent text-sm hover:text-blue-700">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Response Time</p>
                    <p className="text-slate-500 text-sm">Within 1 business day</p>
                    <p className="text-slate-400 text-xs mt-0.5">Mon–Fri, 9:00–18:00 CST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Languages</p>
                    <p className="text-slate-500 text-sm">English · Français · Español · Deutsch</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                <h4 className="font-semibold text-slate-900 text-sm mb-3">What Happens Next?</h4>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing manager contacts you to discuss your needs',
                    'We provide a tailored sourcing plan and quote',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 bg-brand-blue text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-slate-600 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Inquiry Received</h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Thank you for contacting SSourcing China. Our team will review your
                    inquiry and respond within 1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8 space-y-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Sourcing Inquiry Form</h3>
                  <p className="text-slate-500 text-sm mb-4">Fields marked * are required.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
                      <input type="text" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Country *</label>
                      <input type="text" name="country" required value={form.country} onChange={handleChange}
                        placeholder="United States"
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Service Needed *</label>
                      <select name="service" required value={form.service} onChange={handleChange}
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent bg-white">
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category *</label>
                      <select name="product" required value={form.product} onChange={handleChange}
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent bg-white">
                        <option value="">Select a category</option>
                        {productTypes.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Order Quantity</label>
                      <input type="text" name="quantity" value={form.quantity} onChange={handleChange}
                        placeholder="e.g. 500 units"
                        className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Budget (USD)</label>
                    <input type="text" name="budget" value={form.budget} onChange={handleChange}
                      placeholder="e.g. $5,000 – $10,000"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Description & Requirements *</label>
                    <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
                      placeholder="Describe the product you need, key specifications, certifications required, target market, and any other relevant details..."
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none" />
                  </div>

                  <button type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-lg text-base transition-colors">
                    <Send className="w-4 h-4" />
                    {submitting ? 'Sending…' : 'Send Sourcing Inquiry'}
                  </button>

                  {submitError && (
                    <p className="text-center text-sm text-red-600">{submitError}</p>
                  )}

                  <p className="text-center text-xs text-slate-400">
                    We respond within 1 business day. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
