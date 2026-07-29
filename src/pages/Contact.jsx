import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Loader2 } from 'lucide-react';
import { submitInquiry } from '../api/inquiries';

export default function Contact() {
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
      await submitInquiry({ ...form, source: 'contact-page' });
      setSubmitted(true);
      setForm({ name: '', email: '', company: '', product: '', quantity: '', message: '' });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-custom text-center max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</p>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-text-secondary text-lg">
            Tell us about your product and we will respond within 24 hours with a tailored sourcing plan.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Contact Information</h2>
                <p className="text-text-secondary">
                  Our team is based in Shenzhen, China and serves clients across all time zones. We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm">Office Address</p>
                    <p className="text-text-secondary text-sm">
                      Room 1208, Block A, Fortune Plaza<br />
                      Shenzhen, Guangdong 518000, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-text-secondary text-sm hover:text-primary transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm">Phone / WhatsApp</p>
                    <a href="tel:+8613812345678" className="text-text-secondary text-sm hover:text-primary transition-colors">
                      +86 138 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary text-sm">Business Hours</p>
                    <p className="text-text-secondary text-sm">
                      Monday – Friday: 9:00 – 18:00 CST<br />
                      Saturday: 9:00 – 12:00 CST
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-xl p-5 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-text-primary text-sm">Prefer to chat first?</h3>
                </div>
                <p className="text-text-secondary text-sm">
                  Send us a message on WhatsApp or WeChat and we will set up a quick call to understand your needs.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-border shadow-sm p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-2">Thank You!</h3>
                    <p className="text-text-secondary">
                      We have received your inquiry and will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary bg-white"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary bg-white"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary bg-white"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Product to Source *</label>
                        <input
                          type="text"
                          name="product"
                          required
                          value={form.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary bg-white"
                          placeholder="e.g. Bluetooth Speaker"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Estimated Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary bg-white"
                        placeholder="e.g. 5,000 units"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Message / Requirements</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-text-primary bg-white resize-none"
                        placeholder="Describe your product needs, target price, quality requirements, timeline, and any other details..."
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
                      className="w-full bg-secondary hover:bg-secondary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-md transition-colors flex items-center justify-center gap-2"
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
                      We respect your privacy. Your information will only be used to respond to your inquiry.
                    </p>
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
