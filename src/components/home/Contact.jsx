import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+49 (0) 123 456 7890',
    href: 'tel:+491234567890',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitectmachinery.com',
    href: 'mailto:sales@artitectmachinery.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Industriestraße 42, 70565 Stuttgart, Germany',
    href: null,
  },
];

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

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-white tracking-tight">
            Request a Quote
          </h2>
          <p className="mt-4 text-brand-silver text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project and our team will respond with a tailored
            solution within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-brand-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-brand-white font-medium hover:text-brand-gold transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-brand-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Business Hours */}
            <div className="mt-4 bg-brand-steel/30 border border-brand-silver/10 rounded-2xl p-6">
              <h4 className="text-brand-gold text-xs font-semibold tracking-widest uppercase mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-brand-silver">Monday – Friday</span>
                  <span className="text-brand-white font-medium">08:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-silver">Saturday</span>
                  <span className="text-brand-white font-medium">09:00 – 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-silver">Sunday</span>
                  <span className="text-brand-silver">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-brand-white rounded-2xl p-8 md:p-10 shadow-2xl">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-brand-navy font-bold text-2xl mb-2">Message Sent!</h3>
                  <p className="text-brand-silver leading-relaxed">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' }); }}
                    className="mt-6 text-brand-gold font-semibold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-navy text-sm font-semibold mb-1.5">
                        Full Name <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        placeholder="John Smith"
                        className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all placeholder:text-brand-silver/60"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-navy text-sm font-semibold mb-1.5">
                        Email Address <span className="text-brand-gold">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        required
                        placeholder="john@company.com"
                        className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all placeholder:text-brand-silver/60"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-navy text-sm font-semibold mb-1.5">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={onChange}
                        placeholder="Your Company Ltd."
                        className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all placeholder:text-brand-silver/60"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-navy text-sm font-semibold mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        placeholder="+1 234 567 8900"
                        className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all placeholder:text-brand-silver/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-navy text-sm font-semibold mb-1.5">
                      Product of Interest
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={onChange}
                      className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all bg-white"
                    >
                      <option value="">Select a machine...</option>
                      {productOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-brand-navy text-sm font-semibold mb-1.5">
                      Message <span className="text-brand-gold">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      required
                      rows={4}
                      placeholder="Tell us about your requirements — material thickness, working length, production volume..."
                      className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all resize-none placeholder:text-brand-silver/60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold rounded-full py-4 hover:bg-brand-gold-light transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
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
  );
}
