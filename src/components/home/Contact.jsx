import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (800) 278-4832', href: 'tel:+18002784832' },
  { icon: Mail, label: 'Email', value: 'sales@artitectmachinery.com', href: 'mailto:sales@artitectmachinery.com' },
  { icon: MapPin, label: 'Headquarters', value: 'Industrial Park, Precision Ave, Suite 100', href: '#' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs font-body font-semibold tracking-widest uppercase">
              Get in Touch
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-heading font-bold text-white text-4xl lg:text-5xl tracking-tight mb-4">
            Request a Quote or Demo
          </h2>
          <p className="font-body text-silver text-lg max-w-xl mx-auto">
            Our application engineers are ready to help you find the right folding machine for your production needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/25 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-body text-silver text-xs tracking-widest uppercase mb-1">{label}</div>
                  <div className="font-body text-white text-sm font-medium group-hover:text-gold transition-colors">{value}</div>
                </div>
              </a>
            ))}

            {/* Divider */}
            <div className="border-t border-white/10 pt-8">
              <p className="font-body text-silver text-sm leading-relaxed">
                Available Monday – Friday, 8:00 AM – 6:00 PM (CET). We typically respond within one business day.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-steel/50 border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <CheckCircle className="w-14 h-14 text-gold" />
                <h3 className="font-heading font-bold text-white text-2xl">Thank You!</h3>
                <p className="font-body text-silver text-base max-w-sm">
                  Your enquiry has been received. One of our engineers will be in touch shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                  className="mt-4 text-gold font-body text-sm hover:text-gold-light transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-silver text-xs tracking-widest uppercase">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="bg-navy/60 border border-white/15 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-silver/50 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-silver text-xs tracking-widest uppercase">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className="bg-navy/60 border border-white/15 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-silver/50 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-silver text-xs tracking-widest uppercase">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="bg-navy/60 border border-white/15 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-silver/50 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-silver text-xs tracking-widest uppercase">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 555 000 0000"
                    className="bg-navy/60 border border-white/15 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-silver/50 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Product Interest */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="font-body text-silver text-xs tracking-widest uppercase">Product of Interest</label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="bg-navy/60 border border-white/15 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="" className="bg-navy">Select a product…</option>
                    <option value="double-folding-machine" className="bg-navy">Double Folding Machine</option>
                    <option value="double-folder" className="bg-navy">Double Folder</option>
                    <option value="sheet-metal-folder" className="bg-navy">Sheet Metal Folder</option>
                    <option value="sheet-metal-folding-machine" className="bg-navy">Sheet Metal Folding Machine</option>
                    <option value="metal-folder" className="bg-navy">Metal Folder</option>
                    <option value="metal-folding-machine" className="bg-navy">Metal Folding Machine</option>
                    <option value="general" className="bg-navy">General Enquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="font-body text-silver text-xs tracking-widest uppercase">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your application, material thickness, production volume…"
                    className="bg-navy/60 border border-white/15 rounded-xl px-4 py-3 text-white font-body text-sm placeholder-silver/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gold text-navy font-heading font-semibold text-sm px-8 py-4 rounded-full hover:bg-gold-light transition-colors duration-200 tracking-wide"
                  >
                    Send Enquiry
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
