import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '14 Industriestrasse, Stuttgart, Germany 70565',
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
    value: 'Mon–Fri: 08:00–18:00 CET',
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
  'Other / General Inquiry',
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
    <section id="contact" className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-brand-accent" />
            <span className="font-inter font-semibold text-brand-accent text-xs tracking-[0.25em] uppercase">
              Get in Touch
            </span>
            <div className="h-px w-10 bg-brand-accent" />
          </div>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-brand-navy mb-4">
            Let's Talk Machinery
          </h2>
          <p className="font-inter text-brand-mid text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a quote, technical specifications, or a live demo,
            our team of experts is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-brand-navy rounded-2xl p-8 flex-1">
              <h3 className="font-playfair font-bold text-2xl text-white mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-brand-accent" />
                      </div>
                      <div>
                        <div className="font-inter text-xs text-brand-mid mb-0.5 uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="font-inter text-sm text-white leading-relaxed">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 mt-8 pt-8">
                <p className="font-inter text-xs text-brand-mid leading-relaxed">
                  Our sales engineers typically respond within 24 business hours.
                  For urgent inquiries, please call us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-playfair font-bold text-2xl text-brand-navy mb-3">
                  Message Received!
                </h3>
                <p className="font-inter text-brand-mid text-base max-w-sm">
                  Thank you for reaching out. A member of our team will contact
                  you within 24 business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                  className="mt-8 font-inter font-semibold text-sm text-brand-accent hover:text-brand-accent-light transition-colors bg-transparent border-none cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-playfair font-bold text-2xl text-brand-navy mb-6">
                  Request a Quote
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-inter text-xs font-semibold text-brand-dark uppercase tracking-wider block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full font-inter text-sm text-brand-dark bg-brand-light border border-brand-mid/30 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors placeholder:text-brand-mid/60"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs font-semibold text-brand-dark uppercase tracking-wider block mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full font-inter text-sm text-brand-dark bg-brand-light border border-brand-mid/30 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors placeholder:text-brand-mid/60"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-inter text-xs font-semibold text-brand-dark uppercase tracking-wider block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full font-inter text-sm text-brand-dark bg-brand-light border border-brand-mid/30 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors placeholder:text-brand-mid/60"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs font-semibold text-brand-dark uppercase tracking-wider block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full font-inter text-sm text-brand-dark bg-brand-light border border-brand-mid/30 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors placeholder:text-brand-mid/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-inter text-xs font-semibold text-brand-dark uppercase tracking-wider block mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full font-inter text-sm text-brand-dark bg-brand-light border border-brand-mid/30 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                  >
                    <option value="">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-inter text-xs font-semibold text-brand-dark uppercase tracking-wider block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, material thickness, bending length, production volume..."
                    className="w-full font-inter text-sm text-brand-dark bg-brand-light border border-brand-mid/30 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-none placeholder:text-brand-mid/60"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 font-inter font-semibold text-base bg-brand-accent text-white px-8 py-4 rounded-full hover:bg-brand-accent-light transition-all duration-200 shadow-md"
                >
                  <Send size={18} />
                  Send Message
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
