import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-steel">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-3 mb-4">
            Request a Quote or Enquiry
          </h2>
          <p className="text-bodyText text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project and our team will get back to you with the right solution.
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-navy rounded-2xl p-8 text-white flex-1">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Phone', value: '+1 (800) 278-4832' },
                  { icon: Mail, label: 'Email', value: 'sales@artitectmachinery.com' },
                  { icon: MapPin, label: 'Address', value: '14 Industrial Park Drive, Manufacturing District' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-steel/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-sky" />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase tracking-wide mb-0.5">{label}</div>
                      <div className="text-white/85 text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/50 text-sm leading-relaxed">
                  Our sales engineers are available Monday–Friday, 8am–6pm. We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 shadow-md border border-surfaceMid flex flex-col items-center justify-center text-center h-full min-h-64">
                <CheckCircle size={52} className="text-steel mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
                <p className="text-bodyText">
                  Your enquiry has been received. A member of our team will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', product: '', message: '' }); }}
                  className="mt-6 text-steel hover:text-sky font-semibold text-sm transition-colors bg-transparent border-none cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-md border border-surfaceMid">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5" htmlFor="name">
                      Full Name <span className="text-steel">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-surfaceMid rounded-lg px-4 py-3 text-navy text-sm focus:outline-none focus:border-steel focus:ring-1 focus:ring-steel transition-colors bg-surface placeholder-mutedText"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5" htmlFor="email">
                      Email Address <span className="text-steel">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full border border-surfaceMid rounded-lg px-4 py-3 text-navy text-sm focus:outline-none focus:border-steel focus:ring-1 focus:ring-steel transition-colors bg-surface placeholder-mutedText"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full border border-surfaceMid rounded-lg px-4 py-3 text-navy text-sm focus:outline-none focus:border-steel focus:ring-1 focus:ring-steel transition-colors bg-surface placeholder-mutedText"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5" htmlFor="product">
                      Product of Interest
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full border border-surfaceMid rounded-lg px-4 py-3 text-navy text-sm focus:outline-none focus:border-steel focus:ring-1 focus:ring-steel transition-colors bg-surface"
                    >
                      <option value="">Select a product…</option>
                      <option>Double Folding Machine</option>
                      <option>Double Folder</option>
                      <option>Sheet Metal Folder</option>
                      <option>Sheet Metal Folding Machine</option>
                      <option>Metal Folder</option>
                      <option>Metal Folding Machine</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-1.5" htmlFor="message">
                    Message <span className="text-steel">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements — material type, thickness, production volume, etc."
                    className="w-full border border-surfaceMid rounded-lg px-4 py-3 text-navy text-sm focus:outline-none focus:border-steel focus:ring-1 focus:ring-steel transition-colors bg-surface placeholder-mutedText resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-steel hover:bg-sky disabled:opacity-60 text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors duration-200 shadow-md shadow-steel/20"
                >
                  {submitting ? 'Sending…' : (
                    <>
                      Send Enquiry
                      <Send size={17} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
