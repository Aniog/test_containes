import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle } from 'lucide-react';

export default function InquiryFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '', product: '', quantity: '', message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inquiry submitted:', form);
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Copy */}
          <div>
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-brand-body text-lg leading-relaxed mb-8">
              Tell us what you need and we'll get back to you within 24 hours with a
              clear plan and transparent pricing.
            </p>

            <div className="flex flex-col gap-4">
              {[
                'No obligation — free initial consultation',
                'Response within 24 business hours',
                'Confidential — your product details are protected',
                'Available in English, French, Spanish, and German',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span className="text-brand-body text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-brand-light-blue rounded-2xl p-8 border border-brand-border">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">Inquiry Received!</h3>
                <p className="text-brand-body text-sm mb-6">
                  Thank you for reaching out. Our team will review your request and
                  respond within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-navy text-sm font-medium hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">Country *</label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Germany"
                      className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">Product / Category *</label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={form.product}
                      onChange={handleChange}
                      placeholder="e.g. LED lights, furniture"
                      className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 500 units"
                      className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-1">Additional Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your product requirements, target price, certifications needed, etc."
                    className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center gap-2 w-full py-3"
                >
                  <Send className="w-4 h-4" />
                  Send Sourcing Inquiry
                </button>
                <p className="text-xs text-brand-muted text-center">
                  By submitting, you agree to our privacy policy. We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
