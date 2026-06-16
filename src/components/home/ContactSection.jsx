import { useState, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitectmachinery.com',
    href: 'mailto:sales@artitectmachinery.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 512 6818 9200',
    href: 'tel:+8651268189200',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'No. 88 Industrial Road, Suzhou, Jiangsu, China',
    href: null,
  },
];

export default function ContactSection() {
  const containerRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

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
    setError(null);
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setStatus('submitting');

    try {
      const { data: response, error: submitError } = await client
        .from('ContactInquiry')
        .insert({
          data: {
            name: form.name,
            company: form.company,
            email: form.email,
            phone: form.phone,
            product_interest: form.productInterest,
            message: form.message,
          },
        })
        .select()
        .single();

      if (submitError || response?.success === false) {
        const msg =
          response?.errors?.join(', ') || submitError?.message || 'Submission failed';
        throw new Error(msg);
      }

      setStatus('success');
      setForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        productInterest: '',
        message: '',
      });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" ref={containerRef} className="relative py-20 md:py-28 bg-am-bg">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-am-gold mb-4">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-am-text tracking-[-0.01em] leading-tight mb-5">
            Request a Quote or Consultation
          </h2>
          <p className="text-am-text-secondary max-w-2xl mx-auto leading-relaxed">
            Our team is ready to help you select the right folding machine for your
            application. Tell us about your project and we will respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-am-surface border border-am-border flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-am-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.08em] text-am-text-muted mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm text-am-text">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Map placeholder with stock image */}
            <div className="relative rounded-lg overflow-hidden border border-am-border h-48">
              <img
                alt="ARTITECT MACHINERY location"
                className="w-full h-full object-cover"
                data-strk-img-id="contact-map-4b7d2e"
                data-strk-img="[contact-address] industrial district aerial view city"
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-am-bg/30" />
              <span
                id="contact-address"
                className="absolute bottom-3 left-3 text-xs text-am-text bg-am-bg/70 px-2 py-1 rounded"
              >
                Suzhou Industrial Park, China
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-am-bg-secondary border border-am-border rounded-lg p-6 md:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium uppercase tracking-[0.08em] text-am-text-muted mb-2"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-am-surface border border-am-border rounded px-4 py-3 text-sm text-am-text placeholder-am-text-muted focus:outline-none focus:border-am-gold/60 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-medium uppercase tracking-[0.08em] text-am-text-muted mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-am-surface border border-am-border rounded px-4 py-3 text-sm text-am-text placeholder-am-text-muted focus:outline-none focus:border-am-gold/60 transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium uppercase tracking-[0.08em] text-am-text-muted mb-2"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-am-surface border border-am-border rounded px-4 py-3 text-sm text-am-text placeholder-am-text-muted focus:outline-none focus:border-am-gold/60 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium uppercase tracking-[0.08em] text-am-text-muted mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-am-surface border border-am-border rounded px-4 py-3 text-sm text-am-text placeholder-am-text-muted focus:outline-none focus:border-am-gold/60 transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="productInterest"
                  className="block text-xs font-medium uppercase tracking-[0.08em] text-am-text-muted mb-2"
                >
                  Product of Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={form.productInterest}
                  onChange={handleChange}
                  className="w-full bg-am-surface border border-am-border rounded px-4 py-3 text-sm text-am-text focus:outline-none focus:border-am-gold/60 transition-colors appearance-none"
                >
                  <option value="">Select a product...</option>
                  <option value="Double Folding Machine">Double Folding Machine</option>
                  <option value="Double Folder">Double Folder</option>
                  <option value="Sheet Metal Folder">Sheet Metal Folder</option>
                  <option value="Sheet Metal Folding Machine">Sheet Metal Folding Machine</option>
                  <option value="Metal Folder">Metal Folder</option>
                  <option value="Metal Folder Machine">Metal Folder Machine</option>
                  <option value="Metal Folding Machine">Metal Folding Machine</option>
                  <option value="Other">Other / Custom</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-[0.08em] text-am-text-muted mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-am-surface border border-am-border rounded px-4 py-3 text-sm text-am-text placeholder-am-text-muted focus:outline-none focus:border-am-gold/60 transition-colors resize-none"
                  placeholder="Tell us about your project, material types, thickness requirements, and any questions you have..."
                />
              </div>

              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you! We have received your inquiry and will be in touch shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-am-gold text-am-bg font-semibold uppercase tracking-[0.06em] px-8 py-3.5 rounded hover:bg-am-gold-hover disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
