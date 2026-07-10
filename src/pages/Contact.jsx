import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
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
    label: 'Address',
    value: 'Industrial Zone, Manufacturing District',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri: 8:00 AM – 6:00 PM',
    href: null,
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
  'Custom Solution',
  'General Inquiry',
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
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full bg-brand-navy border rounded-xl px-4 py-3 text-brand-white text-sm placeholder-brand-muted/60 focus:outline-none focus:border-brand-gold transition-colors ${
      errors[field] ? 'border-red-500/60' : 'border-brand-gold/20 hover:border-brand-gold/40'
    }`;

  return (
    <div className="bg-brand-navy min-h-screen">
      {/* Page Header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-navy" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Reach Out</span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-white mb-4">
            Contact Us
          </h1>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Ready to discuss your sheet metal folding requirements? Our team is here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-white mb-2">Get in Touch</h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                Whether you need a quote, technical specifications, or just want to learn more about our machines — we're ready to help.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-brand-steel rounded-xl border border-brand-gold/10">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-brand-white/50 text-xs uppercase tracking-widest mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-brand-white text-sm hover:text-brand-gold transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-brand-white text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick note */}
            <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-xl p-5">
              <p className="text-brand-gold text-sm font-semibold mb-1">Fast Response Guarantee</p>
              <p className="text-brand-muted text-xs leading-relaxed">
                We respond to all inquiries within 24 business hours. For urgent requests, please call us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-brand-steel rounded-2xl border border-brand-gold/20 p-12 flex flex-col items-center justify-center text-center min-h-[500px]">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-brand-white mb-3">
                  Message Received!
                </h3>
                <p className="text-brand-muted text-sm max-w-sm leading-relaxed mb-8">
                  Thank you for reaching out. Our team will review your inquiry and get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' }); }}
                  className="bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-full hover:bg-brand-gold-light transition-all text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-steel rounded-2xl border border-brand-gold/15 p-8 md:p-10"
              >
                <h3 className="font-serif text-xl font-bold text-brand-white mb-7">Send Us a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-brand-white/70 text-xs uppercase tracking-widest mb-2">
                      Full Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-brand-white/70 text-xs uppercase tracking-widest mb-2">
                      Email Address <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-brand-white/70 text-xs uppercase tracking-widest mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className={inputClass('company')}
                    />
                  </div>
                  <div>
                    <label className="block text-brand-white/70 text-xs uppercase tracking-widest mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className={inputClass('phone')}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-brand-white/70 text-xs uppercase tracking-widest mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className={`${inputClass('product')} appearance-none cursor-pointer`}
                  >
                    <option value="" className="bg-brand-navy">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-brand-navy">{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-7">
                  <label className="block text-brand-white/70 text-xs uppercase tracking-widest mb-2">
                    Message <span className="text-brand-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your requirements, production volume, material types, or any specific questions..."
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-semibold px-10 py-4 rounded-full hover:bg-brand-gold-light transition-all text-sm tracking-wide"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
