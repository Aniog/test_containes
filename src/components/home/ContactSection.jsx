import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
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
    <section id="contact" className="py-24 md:py-32 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="font-body text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase">
              Get in Touch
            </span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h2 className="font-heading text-white text-4xl md:text-5xl font-bold mb-5">
            Request a Quote
          </h2>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
            Tell us about your project and our team will respond within 24 hours with a
            tailored solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="font-heading text-white text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'sales@artitectmachinery.com',
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    value: '+1 (800) 278-4328',
                  },
                  {
                    icon: MapPin,
                    label: 'Headquarters',
                    value: '1200 Industrial Blvd, Suite 400\nDetroit, MI 48201, USA',
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <div className="font-body text-white/40 text-xs uppercase tracking-widest mb-1">
                          {item.label}
                        </div>
                        <div className="font-body text-white text-sm whitespace-pre-line leading-relaxed">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business hours */}
            <div className="bg-brand-steel/40 border border-white/10 rounded-2xl p-6">
              <h4 className="font-heading text-white text-lg font-semibold mb-4">
                Business Hours
              </h4>
              <div className="flex flex-col gap-2">
                {[
                  { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM EST' },
                  { day: 'Saturday', hours: '9:00 AM – 2:00 PM EST' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between font-body text-sm">
                    <span className="text-white/60">{row.day}</span>
                    <span className="text-white">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-brand-steel/30 border border-white/10 rounded-2xl px-8">
                <CheckCircle className="w-16 h-16 text-brand-gold mb-5" />
                <h3 className="font-heading text-white text-2xl font-bold mb-3">
                  Message Received!
                </h3>
                <p className="font-body text-white/60 text-base max-w-sm">
                  Thank you for reaching out. Our team will review your inquiry and get back
                  to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', product: '', message: '' }); }}
                  className="mt-8 bg-brand-gold text-brand-navy font-body font-semibold px-8 py-3 rounded-full hover:bg-brand-gold-light transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-steel/30 border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-white/60 text-xs uppercase tracking-widest">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-white/60 text-xs uppercase tracking-widest">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-white/60 text-xs uppercase tracking-widest">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-white/60 text-xs uppercase tracking-widest">
                      Product of Interest
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-body text-white text-sm focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                    >
                      <option value="" className="bg-brand-navy">Select a product…</option>
                      <option value="double-folding-machine" className="bg-brand-navy">Double Folding Machine</option>
                      <option value="double-folder" className="bg-brand-navy">Double Folder</option>
                      <option value="sheet-metal-folder" className="bg-brand-navy">Sheet Metal Folder</option>
                      <option value="sheet-metal-folding-machine" className="bg-brand-navy">Sheet Metal Folding Machine</option>
                      <option value="metal-folder" className="bg-brand-navy">Metal Folder</option>
                      <option value="metal-folding-machine" className="bg-brand-navy">Metal Folding Machine</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-white/60 text-xs uppercase tracking-widest">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your production requirements, material types, and any specific needs…"
                    className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-body font-semibold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-300 shadow-lg shadow-brand-gold/20 mt-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
