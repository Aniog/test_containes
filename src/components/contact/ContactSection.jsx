import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitectmachinery.com',
    href: 'mailto:info@artitectmachinery.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '1200 Industrial Parkway, Building C, Detroit, MI 48207',
    href: '#',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Name is required';
    if (!form.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email';
    if (!form.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }

    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Failed to send message');
      toast.success('Thank you! We will get back to you shortly.');
      setForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        productInterest: '',
        message: '',
      });
      setStatus('success');
    } catch (error) {
      toast.error(error.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-3">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Ready to upgrade your fabrication line? Reach out for quotes,
            product questions, or partnership inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 hover:border-brand/30 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand/10 text-brand shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-text-primary">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1.5">
                  Company
                </label>
                <input
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text-primary mb-1.5">
                  Phone
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                />
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                Product Interest
              </label>
              <select
                name="productInterest"
                value={form.productInterest}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
              >
                <option value="">Select a product</option>
                <option value="Double Folding Machine">Double Folding Machine</option>
                <option value="Double Folder">Double Folder</option>
                <option value="Sheet Metal Folder">Sheet Metal Folder</option>
                <option value="Sheet Metal Folding Machine">Sheet Metal Folding Machine</option>
                <option value="Metal Folder">Metal Folder</option>
                <option value="Metal Folder Machine">Metal Folder Machine</option>
                <option value="Metal Folding Machine">Metal Folding Machine</option>
                <option value="Other">Other / Not Sure</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-text-primary mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project, requirements, or questions..."
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-text-primary placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-brand hover:bg-brand-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
