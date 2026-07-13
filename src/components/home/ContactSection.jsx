import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const INQUIRY_TYPES = [
  'Product Inquiry',
  'Request a Quote',
  'Technical Support',
  'Spare Parts',
  'Partnership',
  'Other',
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitectmachinery.com',
    href: 'mailto:info@artitectmachinery.com',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Industrial Zone, Manufacturing District, Global Operations',
    href: null,
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
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
    <section id="contact" className="bg-brand-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-accent" />
            <span className="font-sans text-brand-accent text-xs uppercase tracking-[0.3em] font-medium">
              Get In Touch
            </span>
            <div className="w-8 h-px bg-brand-accent" />
          </div>
          <h2 className="font-serif font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4">
            Let's Talk About<br className="hidden md:block" /> Your Requirements
          </h2>
          <p className="font-sans text-brand-mid text-lg max-w-2xl mx-auto">
            Our engineering team is ready to help you find the perfect folding machine solution for your production needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {CONTACT_INFO.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4 p-6 bg-brand-steel/40 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/15 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-brand-accent" />
                  </div>
                  <div>
                    <div className="font-sans text-brand-mid text-xs uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-sans text-white text-sm font-medium hover:text-brand-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-sans text-white text-sm font-medium leading-relaxed">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Response time note */}
            <div className="p-6 bg-brand-accent/10 rounded-2xl border border-brand-accent/20">
              <div className="font-sans font-semibold text-brand-accent text-sm mb-2">
                Fast Response Guaranteed
              </div>
              <p className="font-sans text-brand-mid text-sm leading-relaxed">
                Our technical sales team responds to all inquiries within 24 business hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-brand-steel/30 rounded-3xl border border-white/10">
                <div className="w-16 h-16 rounded-full bg-brand-accent/15 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-brand-accent" />
                </div>
                <h3 className="font-serif font-bold text-white text-2xl mb-3">
                  Message Received
                </h3>
                <p className="font-sans text-brand-mid text-base leading-relaxed max-w-sm">
                  Thank you for reaching out. Our team will review your inquiry and get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-sans text-brand-accent text-sm font-medium hover:text-brand-accent-light transition-colors bg-transparent border-none cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-steel/30 rounded-3xl border border-white/10 p-8 lg:p-10 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-brand-mid text-xs uppercase tracking-wider block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-white text-sm placeholder:text-brand-mid/50 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-brand-mid text-xs uppercase tracking-wider block mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-white text-sm placeholder:text-brand-mid/50 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-brand-mid text-xs uppercase tracking-wider block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-white text-sm placeholder:text-brand-mid/50 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-brand-mid text-xs uppercase tracking-wider block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-white text-sm placeholder:text-brand-mid/50 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-sans text-brand-mid text-xs uppercase tracking-wider block mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-white text-sm focus:outline-none focus:border-brand-accent transition-colors appearance-none cursor-pointer"
                    style={{ backgroundColor: 'rgba(28, 58, 94, 0.6)' }}
                  >
                    <option value="" className="bg-brand-navy text-brand-mid">Select inquiry type...</option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-brand-navy text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-sans text-brand-mid text-xs uppercase tracking-wider block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Please describe your requirements, production volume, material types, and any specific questions..."
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-white text-sm placeholder:text-brand-mid/50 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-navy font-sans font-semibold px-8 py-4 rounded-full hover:bg-brand-accent-light transition-all duration-200 cursor-pointer border-none text-base"
                >
                  Send Inquiry
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
