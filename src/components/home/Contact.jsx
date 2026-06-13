import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Sales Enquiries',
    value: '+1 (800) 278-4832',
    sub: 'Mon–Fri, 8am–6pm',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'sales@artitect.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Industrial Park, Unit 12',
    sub: 'Frankfurt, Germany',
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
  'Not sure — need advice',
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
    <section id="contact" className="bg-brand-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Request a Quote or Demo
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Our engineering team is ready to help you find the right machine for your application.
            Fill in the form and we'll get back to you within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm"
                >
                  <div className="w-11 h-11 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                      {item.label}
                    </p>
                    <p className="text-slate-900 font-semibold text-sm">{item.value}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              );
            })}

            {/* Trust badges */}
            <div className="bg-brand-navy rounded-2xl p-6 text-center">
              <p className="text-brand-sky text-xs font-semibold uppercase tracking-widest mb-3">
                Our Promise
              </p>
              <p className="text-brand-white font-bold text-lg mb-2">
                No-obligation quotes
              </p>
              <p className="text-brand-silver text-sm leading-relaxed">
                Every enquiry is handled by a qualified applications engineer — not a sales script.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Received!</h3>
                <p className="text-slate-600 text-base max-w-md leading-relaxed">
                  Thank you for reaching out. One of our applications engineers will contact you
                  within one business day with a tailored recommendation.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' }); }}
                  className="mt-8 text-brand-blue hover:text-blue-700 text-sm font-semibold transition-colors"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="product" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all bg-white"
                  >
                    <option value="">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-7">
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your application, material thickness, working length requirements, or any other details..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 text-base group"
                >
                  Send Enquiry
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-slate-400 text-xs text-center mt-4">
                  By submitting this form you agree to our privacy policy. We never share your data.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
