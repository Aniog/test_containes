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

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+49 711 123 4567',
    href: 'tel:+497111234567',
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
    value: 'Stuttgart, Germany',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-[#C9A84C] font-semibold">
            Get in Touch
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Request a Quote or{' '}
            <span className="text-[#C9A84C]">Consultation</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and our engineering team will recommend the
            ideal folding machine solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 tracking-widest uppercase mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-[#C9A84C] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Assurance block */}
            <div className="mt-4 p-6 rounded-2xl bg-[#1C3A5E]/50 border border-white/10">
              <h4
                className="text-white font-bold mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What to Expect
              </h4>
              <ul className="space-y-2">
                {[
                  'Response within 24 hours',
                  'Free technical consultation',
                  'Detailed machine specifications',
                  'Competitive pricing & lead times',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl bg-[#1C3A5E]/40 border border-[#C9A84C]/30">
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-[#C9A84C]" />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Thank You!
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Your enquiry has been received. Our team will be in touch within
                  24 hours with a tailored recommendation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1C3A5E]/30 rounded-2xl p-8 border border-white/10 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/50 tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 tracking-widest uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/50 tracking-widest uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 tracking-widest uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/50 tracking-widest uppercase mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-[#0D1B2A] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors"
                  >
                    <option value="" className="text-white/40">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-white bg-[#0D1B2A]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-white/50 tracking-widest uppercase mb-2">
                    Message / Requirements *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your application, material thickness, working length requirements, production volume..."
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-[#C9A84C] text-[#0D1B2A] font-bold text-sm tracking-widest uppercase hover:bg-[#E8C96A] transition-all duration-200 disabled:opacity-60"
                >
                  {submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="w-4 h-4" />
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
}
