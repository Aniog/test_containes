import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (234) 567-890',
    sub: 'Mon–Fri, 8am–6pm',
    href: 'tel:+1234567890',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitect.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@artitect.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Industrial Zone, Manufacturing District',
    sub: 'Visit by appointment',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Friday',
    sub: '8:00 AM – 6:00 PM',
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
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' });
    }, 1200);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-copper-gold text-xs font-semibold tracking-widest uppercase">Get in Touch</span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Contact Us
          </h1>
          <p className="text-mid-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Have a question about our machines or need a custom quote? Our team of experts is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-cloud-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-steel-navy mb-3">
                  Let's Talk
                </h2>
                <p className="text-slate-gray text-sm leading-relaxed">
                  Whether you need a quote, technical advice, or want to schedule a machine demonstration, we're here for you.
                </p>
              </div>

              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="w-11 h-11 bg-copper-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-copper-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-mid-gray font-semibold tracking-widest uppercase mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-steel-navy font-semibold text-sm hover:text-copper-gold transition-colors block">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-steel-navy font-semibold text-sm">{item.value}</div>
                    )}
                    <div className="text-mid-gray text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-steel-navy mb-3">Message Sent!</h3>
                    <p className="text-slate-gray text-base leading-relaxed max-w-sm">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 bg-copper-gold hover:bg-light-gold text-white font-semibold px-8 py-3 rounded-full transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-serif text-2xl font-bold text-steel-navy mb-8">Request a Quote</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-semibold text-slate-gray tracking-widest uppercase mb-2">
                            Full Name <span className="text-copper-gold">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="John Smith"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-steel-navy text-sm focus:outline-none focus:border-copper-gold focus:ring-2 focus:ring-copper-gold/20 transition-all placeholder:text-mid-gray"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-gray tracking-widest uppercase mb-2">
                            Email Address <span className="text-copper-gold">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-steel-navy text-sm focus:outline-none focus:border-copper-gold focus:ring-2 focus:ring-copper-gold/20 transition-all placeholder:text-mid-gray"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-gray tracking-widest uppercase mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your Company Ltd."
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-steel-navy text-sm focus:outline-none focus:border-copper-gold focus:ring-2 focus:ring-copper-gold/20 transition-all placeholder:text-mid-gray"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-gray tracking-widest uppercase mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+1 (234) 567-890"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-steel-navy text-sm focus:outline-none focus:border-copper-gold focus:ring-2 focus:ring-copper-gold/20 transition-all placeholder:text-mid-gray"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-gray tracking-widest uppercase mb-2">
                          Product of Interest
                        </label>
                        <select
                          name="product"
                          value={form.product}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-steel-navy text-sm focus:outline-none focus:border-copper-gold focus:ring-2 focus:ring-copper-gold/20 transition-all bg-white"
                        >
                          <option value="">Select a product...</option>
                          {productOptions.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-gray tracking-widest uppercase mb-2">
                          Message <span className="text-copper-gold">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your production requirements, material types, sheet dimensions, or any specific questions..."
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-steel-navy text-sm focus:outline-none focus:border-copper-gold focus:ring-2 focus:ring-copper-gold/20 transition-all placeholder:text-mid-gray resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full flex items-center justify-center gap-2 bg-copper-gold hover:bg-light-gold disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 tracking-wide"
                      >
                        {status === 'submitting' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
