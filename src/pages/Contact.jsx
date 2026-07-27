import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  MessageCircle,
  Linkedin,
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-surface border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Ready to source from China? Get in touch and our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Email</p>
                      <a href="mailto:contact@ssourcingchina.com" className="text-sm text-text-secondary hover:text-primary transition-colors">
                        contact@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Phone</p>
                      <a href="tel:+86138xxxx8888" className="text-sm text-text-secondary hover:text-primary transition-colors">
                        +86 138-xxxx-8888
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Office</p>
                      <p className="text-sm text-text-secondary">
                        Shenzhen, Guangdong, China
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">Response Time</p>
                      <p className="text-sm text-text-secondary">
                        Within 24 hours on business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-3">Prefer a Call?</h3>
                <p className="text-sm text-white/70 mb-4">
                  Schedule a free 15-minute consultation to discuss your sourcing needs.
                </p>
                <a
                  href="mailto:contact@ssourcingchina.com?subject=Schedule%20a%20Call"
                  className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Request a Call
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-3">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface rounded-xl p-8 border border-border">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-success" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Inquiry Submitted</h3>
                    <p className="text-text-secondary text-sm mb-6">
                      Thank you. Our team will review your request and contact you within 24 hours.
                    </p>
                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
                    >
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
                        <input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Email *</label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Company</label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Product Name</label>
                        <input
                          name="product"
                          value={form.product}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="e.g. Bluetooth Speaker"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Estimated Quantity</label>
                      <input
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="e.g. 5,000 units"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">Message / Requirements *</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                        placeholder="Describe your product requirements, specifications, target price, and any other details..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Inquiry
                        </>
                      )}
                    </button>
                    <p className="text-xs text-text-muted text-center">
                      By submitting, you agree to our privacy policy. We never share your information.
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
