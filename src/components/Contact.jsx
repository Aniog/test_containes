import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productInterest: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.productInterest) return 'Please select a product of interest';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    const err = validate();
    if (err) {
      setStatus('error');
      setErrorMsg(err);
      return;
    }

    setStatus('submitting');

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus('success');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      productInterest: '',
      message: '',
    });

    // Reset success after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputClass =
    'w-full px-4 py-3 bg-white border border-brand-border rounded text-brand-dark text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 transition-colors placeholder:text-brand-muted/50';

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Request a Quote
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Tell us about your production needs and our team will recommend the 
            ideal folding solution for your workshop.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-brand-dark mb-0.5">
                      Headquarters
                    </span>
                    <span className="text-sm text-brand-muted leading-relaxed">
                      ARTITECT MACHINERY GmbH
                      <br />
                      Industriestrasse 42, 40882 Ratingen
                      <br />
                      Germany
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-brand-dark mb-0.5">
                      Phone
                    </span>
                    <span className="text-sm text-brand-muted">
                      +49 2102 123 4567
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-brand-dark mb-0.5">
                      Email
                    </span>
                    <span className="text-sm text-brand-muted">
                      sales@artitectmachinery.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-brand-dark mb-0.5">
                      Business Hours
                    </span>
                    <span className="text-sm text-brand-muted">
                      Mon – Fri: 08:00 – 18:00 CET
                      <br />
                      Sat: 09:00 – 14:00 CET
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="bg-brand-dark rounded-lg p-6">
              <h4 className="text-white font-bold text-base mb-2">
                Quick Response Guarantee
              </h4>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                We respond to all quote requests within 24 hours during business 
                days. For urgent inquiries, call our sales hotline directly.
              </p>
              <div className="flex items-center gap-2 text-brand-gold text-sm font-semibold">
                <CheckCircle size={16} />
                Average response time: 4 hours
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-brand-cream border border-brand-border rounded-lg p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-brand-dark mb-1.5"
                  >
                    Full Name <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-brand-dark mb-1.5"
                  >
                    Email Address <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-brand-dark mb-1.5"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-brand-dark mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="productInterest"
                  className="block text-sm font-semibold text-brand-dark mb-1.5"
                >
                  Product of Interest <span className="text-brand-gold">*</span>
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a product</option>
                  <option value="double-folding-machine">Double Folding Machine</option>
                  <option value="double-folder">Double Folder</option>
                  <option value="sheet-metal-folder">Sheet Metal Folder</option>
                  <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                  <option value="metal-folder">Metal Folder</option>
                  <option value="metal-folder-machine">Metal Folder Machine</option>
                  <option value="metal-folding-machine">Metal Folding Machine</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-brand-dark mb-1.5"
                >
                  Your Requirements <span className="text-brand-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your production needs, sheet metal types, thickness requirements, and any questions..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded px-4 py-3">
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2 text-brand-success text-sm bg-green-50 rounded px-4 py-3">
                  <CheckCircle size={16} />
                  Thank you! We have received your inquiry and will respond within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-gold text-brand-dark px-8 py-3.5 rounded font-semibold uppercase tracking-wider hover:bg-brand-bronze transition-colors disabled:opacity-60"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
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
