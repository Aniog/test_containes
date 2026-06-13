import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 278-4832',
    sub: 'Mon–Fri, 8am–6pm EST',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitectmachinery.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Industrial Park, Suite 400',
    sub: 'Detroit, MI 48201, USA',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Fri: 8:00 – 18:00',
    sub: 'Sat: 9:00 – 13:00',
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
  'Custom / Other',
];

const ContactSection = () => {
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
    <section id="contact" className="bg-[#F7F8FA] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C8922A]" />
            <span className="text-[#C8922A] text-xs tracking-[0.4em] uppercase font-inter font-medium">
              Get in Touch
            </span>
            <div className="w-8 h-px bg-[#C8922A]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Request a Quote or Consultation
          </h2>
          <p className="text-slate-500 font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and our engineering team will recommend the right folding machine solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#0D1B2A] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#C8922A]" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-inter uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-[#0D1B2A] font-inter font-medium text-sm">{item.value}</div>
                    <div className="text-slate-400 font-inter text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );
            })}

            {/* Dark callout */}
            <div className="bg-[#0D1B2A] p-6 mt-8">
              <h4
                className="text-white font-semibold text-lg mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Need a Custom Solution?
              </h4>
              <p className="text-white/60 text-sm font-inter leading-relaxed">
                Our engineers can design and build custom folding machines tailored to your exact specifications and production requirements.
              </p>
              <div className="mt-4 text-[#C8922A] text-xs font-inter tracking-widest uppercase font-medium">
                Custom Engineering Available →
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white border border-slate-200 p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle2 className="w-16 h-16 text-[#C8922A] mb-6" />
                <h3
                  className="text-2xl font-bold text-[#0D1B2A] mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Message Received
                </h3>
                <p className="text-slate-500 font-inter text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. Our engineering team will review your inquiry and respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-inter font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-slate-200 px-4 py-3 text-sm font-inter text-slate-700 placeholder-slate-300 focus:outline-none focus:border-[#C8922A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full border border-slate-200 px-4 py-3 text-sm font-inter text-slate-700 placeholder-slate-300 focus:outline-none focus:border-[#C8922A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-inter font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full border border-slate-200 px-4 py-3 text-sm font-inter text-slate-700 placeholder-slate-300 focus:outline-none focus:border-[#C8922A] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-inter font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full border border-slate-200 px-4 py-3 text-sm font-inter text-slate-700 placeholder-slate-300 focus:outline-none focus:border-[#C8922A] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-inter font-medium text-slate-500 uppercase tracking-wider mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full border border-slate-200 px-4 py-3 text-sm font-inter text-slate-700 focus:outline-none focus:border-[#C8922A] transition-colors bg-white"
                  >
                    <option value="">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-inter font-medium text-slate-500 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your project requirements, material thickness, working length, production volume..."
                    className="w-full border border-slate-200 px-4 py-3 text-sm font-inter text-slate-700 placeholder-slate-300 focus:outline-none focus:border-[#C8922A] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#C8922A] hover:bg-[#E8B04A] text-white font-semibold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-200 font-inter group"
                >
                  Send Inquiry
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
