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
    label: 'Address',
    value: 'Industriestraße 42, 80939 Munich, Germany',
    href: '#',
  },
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
    <section id="contact" className="py-24 md:py-32 bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span
              className="text-xs font-semibold tracking-[0.3em] text-gold uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Get in Touch
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-off-white mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Request a Quote or Demo
          </h2>
          <p
            className="text-slate-cool text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our team of experts is ready to help you find the right folding machine for your application. Fill in the form and we'll respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 bg-navy-mid border border-navy-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold tracking-widest text-gold uppercase mb-1"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-off-white text-sm leading-relaxed"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}

            {/* CTA Banner */}
            <div className="mt-4 bg-navy-mid border border-gold/20 rounded-2xl p-6">
              <div
                className="text-gold font-bold text-lg mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Schedule a Live Demo
              </div>
              <p
                className="text-slate-cool text-sm leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                See our machines in action at our Munich showroom or request a virtual demonstration with our engineering team.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-navy-mid border border-navy-light rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={56} className="text-gold mb-5" />
                <h3
                  className="text-2xl font-bold text-off-white mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Message Received!
                </h3>
                <p
                  className="text-slate-cool text-sm max-w-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Thank you for reaching out. A member of our team will contact you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-cool mb-2 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-navy-deep border border-navy-light rounded-lg px-4 py-3 text-off-white text-sm placeholder-slate-cool/50 focus:outline-none focus:border-gold/60 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-cool mb-2 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd"
                      className="w-full bg-navy-deep border border-navy-light rounded-lg px-4 py-3 text-off-white text-sm placeholder-slate-cool/50 focus:outline-none focus:border-gold/60 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-cool mb-2 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-navy-deep border border-navy-light rounded-lg px-4 py-3 text-off-white text-sm placeholder-slate-cool/50 focus:outline-none focus:border-gold/60 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-cool mb-2 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full bg-navy-deep border border-navy-light rounded-lg px-4 py-3 text-off-white text-sm placeholder-slate-cool/50 focus:outline-none focus:border-gold/60 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-cool mb-2 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-navy-deep border border-navy-light rounded-lg px-4 py-3 text-off-white text-sm focus:outline-none focus:border-gold/60 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="" className="bg-navy-deep">Select a product...</option>
                    <option value="double-folding" className="bg-navy-deep">Double Folding Machine</option>
                    <option value="double-folder" className="bg-navy-deep">Double Folder</option>
                    <option value="sheet-metal-folder" className="bg-navy-deep">Sheet Metal Folder</option>
                    <option value="sheet-metal-folding" className="bg-navy-deep">Sheet Metal Folding Machine</option>
                    <option value="metal-folder" className="bg-navy-deep">Metal Folder</option>
                    <option value="metal-folding" className="bg-navy-deep">Metal Folding Machine</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-cool mb-2 tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your application, material thickness, folding length requirements..."
                    className="w-full bg-navy-deep border border-navy-light rounded-lg px-4 py-3 text-off-white text-sm placeholder-slate-cool/50 focus:outline-none focus:border-gold/60 transition-colors resize-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gold text-navy-deep font-semibold rounded-lg hover:bg-gold-light transition-all duration-200 text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Send Enquiry
                  <Send size={16} />
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
