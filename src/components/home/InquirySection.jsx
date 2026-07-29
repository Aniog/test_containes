import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { submitInquiry } from '../../api/inquiries';

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await submitInquiry({ ...form, source: 'homepage' });
      setSubmitted(true);
      setForm({ name: '', email: '', company: '', product: '', quantity: '', message: '' });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-primary-light/80 text-lg mb-6">
              Tell us what you need and we will get back to you within 24 hours with a tailored sourcing plan.
            </p>
            <ul className="space-y-3">
              {[
                'No obligation, no hidden fees',
                'Response within 24 hours',
                'Tailored supplier shortlist',
                'Transparent pricing breakdown',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Thank You!</h3>
                <p className="text-text-secondary">
                  We have received your inquiry and will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-1">Product to Source *</label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={form.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary"
                      placeholder="e.g. Bluetooth Speaker"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">Estimated Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary"
                    placeholder="e.g. 5,000 units"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-1">Additional Details</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary resize-none"
                    placeholder="Target price, quality requirements, timeline, etc."
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-3">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-secondary hover:bg-secondary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </>
                  )}
                </button>
                <p className="text-xs text-text-muted text-center">
                  By submitting, you agree to our{' '}
                  <Link to="/" className="underline hover:text-primary">privacy policy</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
