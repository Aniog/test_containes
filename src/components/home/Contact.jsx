import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 278-4832',
    href: 'tel:+18002784832',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitectmachinery.com',
    href: 'mailto:sales@artitectmachinery.com',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Industrial Park, Sector 12, Frankfurt, Germany',
    href: null,
  },
];

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folding Machine',
  'Custom / Other',
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="bg-[#0B1C2C] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase">
              Get in Touch
            </span>
            <div className="h-px w-10 bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Request a Quote
          </h2>
          <p className="text-[#8A9BB0] text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project and our team will get back to you with a
            tailored solution within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 bg-[#1A3A5C] rounded-2xl p-6 border border-[#C9A84C]/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-[#C9A84C]" size={20} />
                  </div>
                  <div>
                    <div className="text-[#8A9BB0] text-xs font-medium tracking-widest uppercase mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium text-sm hover:text-[#C9A84C] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Business hours */}
            <div className="bg-[#1A3A5C] rounded-2xl p-6 border border-[#C9A84C]/10">
              <div className="text-[#8A9BB0] text-xs font-medium tracking-widest uppercase mb-3">
                Business Hours
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-[#8A9BB0]">Mon – Fri</span>
                  <span className="text-white font-medium">8:00 – 18:00 CET</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8A9BB0]">Saturday</span>
                  <span className="text-white font-medium">9:00 – 13:00 CET</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8A9BB0]">Sunday</span>
                  <span className="text-[#8A9BB0]">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-[#1A3A5C] rounded-2xl p-8 border border-[#C9A84C]/10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="text-[#C9A84C] mb-4" size={56} />
                <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[#8A9BB0] text-base leading-relaxed max-w-sm">
                  Thank you for reaching out. Our sales team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', product: '', message: '' }); }}
                  className="mt-8 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0B1C2C] font-semibold px-8 py-3 rounded-full transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#8A9BB0] text-xs font-medium tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="John Smith"
                      className="w-full bg-[#0B1C2C] border border-[#C9A84C]/20 rounded-xl px-4 py-3 text-white placeholder-[#8A9BB0]/50 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8A9BB0] text-xs font-medium tracking-widest uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-[#0B1C2C] border border-[#C9A84C]/20 rounded-xl px-4 py-3 text-white placeholder-[#8A9BB0]/50 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#8A9BB0] text-xs font-medium tracking-widest uppercase mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Your Company Name"
                    className="w-full bg-[#0B1C2C] border border-[#C9A84C]/20 rounded-xl px-4 py-3 text-white placeholder-[#8A9BB0]/50 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#8A9BB0] text-xs font-medium tracking-widest uppercase mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={onChange}
                    className="w-full bg-[#0B1C2C] border border-[#C9A84C]/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none"
                  >
                    <option value="" className="text-[#8A9BB0]">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#8A9BB0] text-xs font-medium tracking-widest uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements, material thickness, folding length, production volume..."
                    className="w-full bg-[#0B1C2C] border border-[#C9A84C]/20 rounded-xl px-4 py-3 text-white placeholder-[#8A9BB0]/50 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full bg-[#C9A84C] hover:bg-[#E8C97A] disabled:opacity-70 text-[#0B1C2C] font-semibold py-4 rounded-full transition-all duration-200 text-base"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
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
