import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

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
    value: '+1 (555) 842-3900',
    href: 'tel:+15558423900',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '4820 Industrial Drive, Suite 1200, Chicago, IL 60609',
    href: '#',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    // Simulate form submission
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', product: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg('Please fill in all required fields.');
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg relative">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-xs uppercase tracking-extra-wide font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-text-primary mb-5">
            Request a Quote
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Interested in our folding machines? Tell us about your project and we will
            get back to you with a tailored solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-6">
              Contact Information
            </h3>
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-accent/50 transition-colors duration-200">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-text-muted text-xs uppercase tracking-wide font-medium mb-1">
                      {item.label}
                    </div>
                    <div className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary transition-colors duration-200">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Business Hours */}
            <div className="pt-6 border-t border-border">
              <h4 className="text-text-primary text-sm font-semibold mb-3">
                Business Hours
              </h4>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Monday – Friday</span>
                  <span className="text-text-secondary">8:00 AM – 6:00 PM CST</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Saturday</span>
                  <span className="text-text-secondary">9:00 AM – 1:00 PM CST</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Sunday</span>
                  <span className="text-text-secondary">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-border rounded-lg p-6 md:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-text-muted text-xs uppercase tracking-wide font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-bg border border-border rounded px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-text-muted text-xs uppercase tracking-wide font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-bg border border-border rounded px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-text-muted text-xs uppercase tracking-wide font-medium mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-bg border border-border rounded px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="product"
                    className="block text-text-muted text-xs uppercase tracking-wide font-medium mb-2"
                  >
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full bg-bg border border-border rounded px-4 py-2.5 text-text-primary text-sm focus:border-accent focus:outline-none transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select a product</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                    <option value="metal-folder">Metal Folder</option>
                    <option value="metal-folder-machine">Metal Folder Machine</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="other">Other / Custom</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-text-muted text-xs uppercase tracking-wide font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-bg border border-border rounded px-4 py-2.5 text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell us about your requirements, production volume, material types, and any questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-accent text-bg text-sm font-semibold uppercase tracking-wide-btn px-6 py-3.5 rounded hover:bg-accent-hover transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </>
                )}
              </button>

              {/* Error Message */}
              {status === 'error' && (
                <div className="mt-4 flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              {/* Success Message */}
              {status === 'success' && (
                <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Thank you. We will be in touch within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
