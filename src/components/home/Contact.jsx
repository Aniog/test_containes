import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 278-4832',
    sub: 'Mon–Fri, 8am–6pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitectmachinery.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Industrial Park, Block 7',
    sub: 'Manufacturing City, MC 10200',
  },
];

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folding Machine',
  'Not sure — need advice',
];

const Contact = () => {
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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-navy-deep py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Get in Touch</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-off-white mb-4">
            Let's Find Your Perfect Machine
          </h2>
          <p className="text-light-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your application and our engineering team will recommend the ideal folding machine solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-5 bg-steel-blue/50 rounded-2xl p-6 border border-slate-mid/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-deep flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-gold font-semibold tracking-widest uppercase mb-1">{item.label}</div>
                    <div className="text-off-white font-medium text-base">{item.value}</div>
                    <div className="text-light-gray text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );
            })}

            {/* Assurance note */}
            <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6 mt-2">
              <p className="text-off-white text-sm leading-relaxed">
                <span className="text-gold font-semibold">No obligation.</span> Our team will review your requirements and provide a detailed recommendation and quote — completely free of charge.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-steel-blue/40 rounded-2xl p-8 md:p-10 border border-slate-mid/50">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-5">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                  <CheckCircle size={32} className="text-gold" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-off-white">Message Received!</h3>
                <p className="text-light-gray text-base max-w-sm leading-relaxed">
                  Thank you for reaching out. Our engineering team will review your enquiry and get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                  className="mt-4 border border-gold/60 text-gold font-semibold px-6 py-2.5 rounded-full hover:bg-gold hover:text-navy-deep transition-all text-sm"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-light-gray tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full bg-navy-deep border border-slate-mid/60 rounded-lg px-4 py-3 text-off-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-light-gray tracking-widest uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Fabrication Ltd."
                      className="w-full bg-navy-deep border border-slate-mid/60 rounded-lg px-4 py-3 text-off-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-light-gray tracking-widest uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-navy-deep border border-slate-mid/60 rounded-lg px-4 py-3 text-off-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-light-gray tracking-widest uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full bg-navy-deep border border-slate-mid/60 rounded-lg px-4 py-3 text-off-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-light-gray tracking-widest uppercase mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-navy-deep border border-slate-mid/60 rounded-lg px-4 py-3 text-off-white text-sm focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="" className="text-slate-500">Select a machine type…</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-light-gray tracking-widest uppercase mb-2">
                    Your Requirements
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your application, material thickness, working length requirements, production volume, etc."
                    className="w-full bg-navy-deep border border-slate-mid/60 rounded-lg px-4 py-3 text-off-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gold text-navy-deep font-semibold py-4 rounded-full hover:bg-gold-light transition-all duration-200 text-base tracking-wide shadow-lg shadow-gold/20"
                >
                  <Send size={18} />
                  Send Enquiry
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
