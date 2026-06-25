import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (234) 567-890',
    sub: 'Mon–Fri, 8am–6pm',
    href: 'tel:+1234567890',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@artitectmachinery.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@artitectmachinery.com',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Industrial Zone, Block 7',
    sub: 'Manufacturing City, MC 10001',
    href: '#',
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

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="bg-brand-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-medium">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-white mt-3 mb-4">
            Let's Talk About Your Project
          </h2>
          <div className="h-1 w-16 bg-brand-gold mx-auto mb-6" />
          <p className="text-brand-silver text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need a quote, technical specifications, or expert advice — our team is ready to help you find the perfect folding solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group bg-brand-dark-card border border-brand-steel/40 rounded-2xl p-6 flex items-start gap-5 hover:border-brand-gold/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-silver text-xs uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-brand-white font-semibold text-sm">{item.value}</div>
                    <div className="text-brand-silver text-xs mt-0.5">{item.sub}</div>
                  </div>
                </a>
              );
            })}

            {/* CTA Banner */}
            <div className="bg-gradient-to-br from-brand-gold/20 to-brand-steel/20 border border-brand-gold/30 rounded-2xl p-6 mt-2">
              <h4 className="text-brand-white font-semibold text-base mb-2">Need a Custom Solution?</h4>
              <p className="text-brand-silver text-sm leading-relaxed">
                Our engineers can design bespoke folding machines tailored to your exact production requirements and material specifications.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-brand-dark-card border border-brand-steel/40 rounded-2xl p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="w-16 h-16 text-brand-gold mb-6" />
                <h3 className="text-brand-white text-2xl font-bold mb-3">Message Received!</h3>
                <p className="text-brand-silver leading-relaxed max-w-sm">
                  Thank you for reaching out. One of our specialists will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' }); }}
                  className="mt-8 border border-brand-gold text-brand-gold rounded-full px-8 py-3 text-sm font-medium hover:bg-brand-gold hover:text-brand-navy transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-brand-white text-xl font-semibold mb-2">Request a Quote</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-brand-navy border border-brand-steel/60 rounded-xl px-4 py-3 text-brand-white placeholder-brand-silver/50 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-brand-navy border border-brand-steel/60 rounded-xl px-4 py-3 text-brand-white placeholder-brand-silver/50 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full bg-brand-navy border border-brand-steel/60 rounded-xl px-4 py-3 text-brand-white placeholder-brand-silver/50 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="w-full bg-brand-navy border border-brand-steel/60 rounded-xl px-4 py-3 text-brand-white placeholder-brand-silver/50 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2">Product of Interest</label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-brand-navy border border-brand-steel/60 rounded-xl px-4 py-3 text-brand-white text-sm focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                  >
                    <option value="" className="bg-brand-navy text-brand-silver">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-brand-navy text-brand-white">{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-brand-silver text-xs uppercase tracking-widest mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, material thickness, production volume, or any specific requirements..."
                    className="w-full bg-brand-navy border border-brand-steel/60 rounded-xl px-4 py-3 text-brand-white placeholder-brand-silver/50 text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-3 bg-brand-gold text-brand-navy font-semibold rounded-full px-8 py-4 text-sm hover:bg-brand-gold-light transition-colors duration-200 uppercase tracking-wide disabled:opacity-70 mt-2"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
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
};

export default Contact;
