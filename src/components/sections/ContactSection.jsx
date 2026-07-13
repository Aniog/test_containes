import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+49 (0) 89 1234 5678',
    href: 'tel:+4989123456789',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitect-machinery.com',
    href: 'mailto:sales@artitect-machinery.com',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Munich, Germany',
    href: null,
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
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
    <section id="contact" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-gold font-heading font-semibold text-xs tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-heading font-extrabold text-brand-navy text-4xl lg:text-5xl mb-5">
            Let's Talk About Your Project
          </h2>
          <p className="font-body text-brand-steel/80 text-lg max-w-xl mx-auto">
            Our engineering team is ready to help you find the perfect folding machine solution.
            Fill in the form and we'll respond within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-brand-white rounded-2xl p-7 border border-brand-silver/20 shadow-sm flex items-start gap-5"
                >
                  <div className="w-11 h-11 bg-brand-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brand-silver text-xs tracking-widest uppercase mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-brand-navy font-medium text-sm hover:text-brand-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-brand-navy font-medium text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Office hours */}
            <div className="bg-brand-navy rounded-2xl p-7 border border-brand-silver/10">
              <p className="font-heading font-bold text-brand-white text-base mb-3">Office Hours</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-body text-brand-silver text-sm">Mon – Fri</span>
                  <span className="font-body text-brand-white text-sm font-medium">08:00 – 18:00 CET</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-brand-silver text-sm">Saturday</span>
                  <span className="font-body text-brand-white text-sm font-medium">09:00 – 13:00 CET</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-brand-silver text-sm">Sunday</span>
                  <span className="font-body text-brand-silver text-sm">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-brand-white rounded-2xl p-8 lg:p-10 border border-brand-silver/20 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-brand-navy text-2xl mb-3">
                  Message Received!
                </h3>
                <p className="font-body text-brand-steel/80 text-base max-w-sm">
                  Thank you for reaching out. One of our engineers will contact you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                  className="mt-8 border border-brand-navy text-brand-navy font-heading font-semibold text-sm rounded-full px-7 py-3 hover:bg-brand-navy hover:text-brand-white transition-all duration-200 bg-transparent cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-semibold text-brand-navy text-xs tracking-wide uppercase mb-2">
                      Full Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 font-body text-brand-navy text-sm placeholder:text-brand-silver/60 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors bg-brand-light"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-brand-navy text-xs tracking-wide uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 font-body text-brand-navy text-sm placeholder:text-brand-silver/60 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors bg-brand-light"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading font-semibold text-brand-navy text-xs tracking-wide uppercase mb-2">
                      Email <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 font-body text-brand-navy text-sm placeholder:text-brand-silver/60 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors bg-brand-light"
                    />
                  </div>
                  <div>
                    <label className="block font-heading font-semibold text-brand-navy text-xs tracking-wide uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 font-body text-brand-navy text-sm placeholder:text-brand-silver/60 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors bg-brand-light"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading font-semibold text-brand-navy text-xs tracking-wide uppercase mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 font-body text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors bg-brand-light"
                  >
                    <option value="">Select a product...</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                    <option value="metal-folder">Metal Folder</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="other">Other / General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-heading font-semibold text-brand-navy text-xs tracking-wide uppercase mb-2">
                    Message <span className="text-brand-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your application, material type, bending length requirements, or any other details..."
                    className="w-full border border-brand-silver/40 rounded-xl px-4 py-3 font-body text-brand-navy text-sm placeholder:text-brand-silver/60 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors bg-brand-light resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-gold text-brand-navy font-heading font-bold text-sm rounded-full py-4 hover:bg-brand-gold-light transition-colors duration-200 border-none cursor-pointer flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={15} />
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
