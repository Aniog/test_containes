import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
  'Other / Not Sure',
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Get in Touch
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-4">
            Request a Quote
          </h2>
          <p className="text-muted-text text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project and our engineering team will provide a tailored solution and competitive quote within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-steel/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-sky-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Email</p>
                    <p className="text-white font-medium">sales@artitectmachinery.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-steel/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-sky-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Phone</p>
                    <p className="text-white font-medium">+1 (800) 278-4832</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-steel/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-sky-accent" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Headquarters</p>
                    <p className="text-white font-medium">Industrial Park, Sector 12<br />Manufacturing District</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/50 text-xs uppercase tracking-wide mb-3">Business Hours</p>
                <p className="text-white/80 text-sm">Monday – Friday: 8:00 AM – 6:00 PM</p>
                <p className="text-white/80 text-sm">Saturday: 9:00 AM – 1:00 PM</p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '24h', label: 'Quote Response' },
                { value: 'CE', label: 'Certified' },
                { value: '5yr', label: 'Warranty' },
                { value: '24/7', label: 'Support' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="bg-white border border-border rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-steel">{badge.value}</div>
                  <div className="text-xs text-muted-text font-medium tracking-wide mt-1">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 bg-white rounded-2xl border border-border shadow-sm p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-16 h-16 text-steel mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-2">Thank You!</h3>
                <p className="text-muted-text max-w-sm">
                  Your quote request has been received. Our engineering team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-steel font-semibold text-sm hover:text-sky-accent transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-semibold mb-2" htmlFor="name">
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
                      className="w-full border border-border rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel transition-colors placeholder:text-muted-text/60"
                    />
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-semibold mb-2" htmlFor="email">
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
                      className="w-full border border-border rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel transition-colors placeholder:text-muted-text/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-semibold mb-2" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full border border-border rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel transition-colors placeholder:text-muted-text/60"
                    />
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-semibold mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full border border-border rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel transition-colors placeholder:text-muted-text/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy text-sm font-semibold mb-2" htmlFor="product">
                    Product of Interest <span className="text-steel">*</span>
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    value={form.product}
                    onChange={handleChange}
                    className="w-full border border-border rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel transition-colors bg-white"
                  >
                    <option value="" disabled>Select a machine type…</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-navy text-sm font-semibold mb-2" htmlFor="message">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your application, material thickness, working length requirements, production volume…"
                    className="w-full border border-border rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-steel/30 focus:border-steel transition-colors resize-none placeholder:text-muted-text/60"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-steel hover:bg-sky-accent text-white font-semibold py-4 rounded-full transition-colors duration-200 group"
                >
                  Send Quote Request
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
