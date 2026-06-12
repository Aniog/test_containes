import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Industriestraße 42, 70565 Stuttgart, Germany',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+49 711 123 4567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitectmachinery.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri: 8:00 AM – 6:00 PM CET',
  },
];

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
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
    <section id="contact" className="bg-[#0F1C2E] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
              Contact Us
            </span>
            <div className="w-10 h-px bg-[#C9A84C]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Let's Talk Machinery
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you need a quote, technical specifications, or expert advice —
            our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#C9A84C]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-widest mb-1">
                      {item.label}
                    </div>
                    <div className="text-white text-sm font-medium">{item.value}</div>
                  </div>
                </div>
              );
            })}

            {/* Divider */}
            <div className="border-t border-white/10 pt-6 mt-6">
              <p className="text-white/50 text-sm leading-relaxed">
                Our sales engineers typically respond within 24 hours on business days.
                For urgent inquiries, please call us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-[#1A2E45] rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <CheckCircle className="w-16 h-16 text-[#C9A84C] mb-4" />
                <h3 className="text-white text-2xl font-bold mb-2">Message Received!</h3>
                <p className="text-white/60 max-w-sm">
                  Thank you for reaching out. One of our specialists will contact you
                  within 24 business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' }); }}
                  className="mt-6 text-[#C9A84C] text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1A2E45] rounded-2xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full bg-[#0F1C2E] border border-white/10 focus:border-[#C9A84C] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-[#0F1C2E] border border-white/10 focus:border-[#C9A84C] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full bg-[#0F1C2E] border border-white/10 focus:border-[#C9A84C] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full bg-[#0F1C2E] border border-white/10 focus:border-[#C9A84C] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-[#0F1C2E] border border-white/10 focus:border-[#C9A84C] text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="text-white/50">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt} className="text-white bg-[#0F1C2E]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-widest mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements, production volume, material types..."
                    className="w-full bg-[#0F1C2E] border border-white/10 focus:border-[#C9A84C] text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#E8C96A] text-[#0F1C2E] font-semibold py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wide"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
