import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['123 Industrial Parkway', 'Manufacturing District, OH 44101'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+1 (555) 234-5678', 'Mon-Fri: 8:00 AM - 6:00 PM'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@artitectmachinery.com', 'sales@artitectmachinery.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday - Friday: 8:00 - 18:00', 'Saturday: 9:00 - 14:00'],
  },
];

const productOptions = [
  'Double Folding Machine',
  'Sheet Metal Folder',
  'Metal Folding Machine',
  'Custom Solution',
  'Spare Parts / Accessories',
];

const Contact = () => {
  const [formData, setFormData] = useState({
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-6">
            Ready to{' '}
            <span className="text-brand-gold">Get Started?</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Contact our team for product inquiries, custom solutions, or to
            schedule a demonstration at your facility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-surface-100">
                <div className="w-12 h-12 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm mb-1">{item.title}</h4>
                  {item.lines.map((line) => (
                    <p key={line} className="text-sm text-slate-500">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-surface-50 p-8 rounded-2xl border border-surface-200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-brand-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-surface-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-brand-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-lg border border-surface-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-semibold text-brand-navy mb-2">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="w-full px-4 py-3 rounded-lg border border-surface-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-brand-navy mb-2">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-surface-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="contact-product" className="block text-sm font-semibold text-brand-navy mb-2">
                  Product of Interest
                </label>
                <select
                  id="contact-product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-surface-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors"
                >
                  <option value="">Select a product...</option>
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-sm font-semibold text-brand-navy mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, material specifications, or any questions..."
                  className="w-full px-4 py-3 rounded-lg border border-surface-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-colors resize-none"
                />
              </div>

              {status === 'success' ? (
                <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium text-sm">
                    Thank you! We have received your message and will get back to you shortly.
                  </span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-secondary w-full text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
