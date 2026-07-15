import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['Industrial Zone, Manufacturing District', 'Your City, Country'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+1 (234) 567-890', '+1 (234) 567-891'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@artitect.com', 'sales@artitect.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Fri: 8:00 AM – 6:00 PM', 'Sat: 9:00 AM – 1:00 PM'],
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
  'General Inquiry',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* Page Header */}
      <section className="bg-brand-navy py-20 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Get in Touch</span>
          </div>
          <h1 className="text-5xl font-bold text-brand-white mb-4">Contact Us</h1>
          <p className="text-brand-gray text-lg max-w-xl">
            Have a question or ready to request a quote? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-brand-offwhite py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-2">Let's Talk</h2>
              <p className="text-brand-gray text-sm leading-relaxed">
                Whether you need a quote, technical information, or just want to learn more about our machines — we're ready to assist.
              </p>
            </div>

            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4 p-5 bg-brand-white rounded-xl border border-brand-light">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-navy font-semibold text-sm mb-1">{item.title}</div>
                    {item.lines.map((line) => (
                      <div key={line} className="text-brand-gray text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-brand-white rounded-2xl border border-brand-light shadow-sm p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="w-16 h-16 text-brand-gold mb-5" />
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Message Sent!</h3>
                  <p className="text-brand-gray max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 1–2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' }); }}
                    className="mt-8 bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-full hover:bg-brand-gold-light transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-brand-navy mb-2">Request a Quote</h2>
                  <p className="text-brand-gray text-sm mb-8">Fill in the form below and we'll respond promptly.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wide mb-1.5">
                          Full Name <span className="text-brand-gold">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-offwhite text-brand-navy placeholder-brand-gray/60 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wide mb-1.5">
                          Email Address <span className="text-brand-gold">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-offwhite text-brand-navy placeholder-brand-gray/60 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wide mb-1.5">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-offwhite text-brand-navy placeholder-brand-gray/60 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wide mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-890"
                          className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-offwhite text-brand-navy placeholder-brand-gray/60 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wide mb-1.5">
                        Product of Interest
                      </label>
                      <select
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-offwhite text-brand-navy text-sm focus:outline-none focus:border-brand-gold transition-colors"
                      >
                        <option value="">Select a product...</option>
                        {productOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-navy uppercase tracking-wide mb-1.5">
                        Message <span className="text-brand-gold">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your requirements, production volume, material specifications..."
                        className="w-full px-4 py-3 rounded-xl border border-brand-light bg-brand-offwhite text-brand-navy placeholder-brand-gray/60 text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-semibold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-200 text-base"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
