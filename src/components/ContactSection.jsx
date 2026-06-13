import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const productOptions = [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
    'Other / Not Sure',
  ];

  if (submitted) {
    return (
      <section id="contact" className="relative py-20 md:py-28 lg:py-32 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center py-16">
            <div className="w-16 h-16 rounded-full bg-bronze/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-off-white mb-4">
              Thank You for Reaching Out
            </h2>
            <p className="text-muted-gray text-lg leading-relaxed mb-8">
              Our team will review your inquiry and respond within 24 business hours. We look forward to discussing how ARTITECT MACHINERY can support your production goals.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', company: '', product: '', message: '' });
              }}
              className="inline-flex items-center px-6 py-3 rounded-md border border-off-white/20 text-off-white text-sm font-semibold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors duration-200"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 md:py-28 lg:py-32 bg-charcoal">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-bronze/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-bronze text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-off-white mb-6">
            Request a <span className="text-gold">Quote</span>
          </h2>
          <p className="text-muted-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions or need a custom solution? Our team is ready to help you find the right machine for your operation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading text-xl font-semibold text-off-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-bronze/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-bronze" />
                  </div>
                  <div>
                    <p className="text-off-white text-sm font-medium mb-1">Email</p>
                    <a href="mailto:sales@artitectmachinery.com" className="text-muted-gray text-sm hover:text-gold transition-colors">
                      sales@artitectmachinery.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-bronze/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-bronze" />
                  </div>
                  <div>
                    <p className="text-off-white text-sm font-medium mb-1">Phone</p>
                    <a href="tel:+1-800-555-0199" className="text-muted-gray text-sm hover:text-gold transition-colors">
                      +1 (800) 555-0199
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-bronze/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-bronze" />
                  </div>
                  <div>
                    <p className="text-off-white text-sm font-medium mb-1">Headquarters</p>
                    <p className="text-muted-gray text-sm">
                      1280 Industrial Parkway<br />
                      Cleveland, OH 44114, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate border border-white/[0.06]">
              <h4 className="font-heading text-lg font-semibold text-off-white mb-2">
                Technical Support
              </h4>
              <p className="text-muted-gray text-sm leading-relaxed mb-4">
                Need help with an existing machine? Our support team is available Monday through Friday, 8 AM – 6 PM EST.
              </p>
              <a href="mailto:support@artitectmachinery.com" className="text-bronze text-sm font-medium hover:text-gold transition-colors">
                support@artitectmachinery.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-off-white text-sm font-medium mb-2">
                    Full Name <span className="text-bronze">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={`w-full px-4 py-3 rounded-lg bg-slate border text-off-white text-sm placeholder-muted-gray focus:outline-none focus:border-bronze transition-colors ${
                      errors.name ? 'border-red-500/50' : 'border-white/[0.06]'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-off-white text-sm font-medium mb-2">
                    Email Address <span className="text-bronze">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={`w-full px-4 py-3 rounded-lg bg-slate border text-off-white text-sm placeholder-muted-gray focus:outline-none focus:border-bronze transition-colors ${
                      errors.email ? 'border-red-500/50' : 'border-white/[0.06]'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-off-white text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Manufacturing"
                    className="w-full px-4 py-3 rounded-lg bg-slate border border-white/[0.06] text-off-white text-sm placeholder-muted-gray focus:outline-none focus:border-bronze transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-off-white text-sm font-medium mb-2">
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate border border-white/[0.06] text-off-white text-sm focus:outline-none focus:border-bronze transition-colors appearance-none"
                    style={{ backgroundImage: 'none' }}
                  >
                    <option value="" className="bg-slate">Select a product</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-off-white text-sm font-medium mb-2">
                  Message <span className="text-bronze">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements, material types, production volume, and any custom needs..."
                  className={`w-full px-4 py-3 rounded-lg bg-slate border text-off-white text-sm placeholder-muted-gray focus:outline-none focus:border-bronze transition-colors resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/[0.06]'
                  }`}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-bronze text-white text-sm font-semibold uppercase tracking-wider hover:bg-gold transition-colors duration-200"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
