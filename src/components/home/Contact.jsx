import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (800) 278-4832' },
  { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com' },
  { icon: MapPin, label: 'Address', value: 'Industrial Zone, Manufacturing District' },
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
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-surface py-24 md:py-32 border-t border-border-steel">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Get in Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
            Request a Quote
          </h2>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            Tell us about your requirements and our team will provide a tailored solution and competitive quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase text-gold/70 mb-1">{label}</div>
                  <div className="text-text-primary text-sm font-medium">{value}</div>
                </div>
              </div>
            ))}

            {/* Assurance block */}
            <div className="mt-4 p-6 bg-navy border border-border-steel rounded-sm">
              <h4 className="text-sm font-bold text-text-primary mb-3">What to expect:</h4>
              <ul className="space-y-2">
                {[
                  'Response within 24 hours',
                  'Detailed technical specification',
                  'Competitive pricing',
                  'Free consultation call',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-text-secondary">
                    <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">Thank You!</h3>
                <p className="text-text-secondary max-w-sm leading-relaxed">
                  Your enquiry has been received. Our team will be in touch within 24 hours with a tailored quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-wide text-text-secondary uppercase mb-2">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-navy border border-border-steel rounded-sm px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wide text-text-secondary uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Fabrication Ltd."
                      className="w-full bg-navy border border-border-steel rounded-sm px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-wide text-text-secondary uppercase mb-2">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-navy border border-border-steel rounded-sm px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wide text-text-secondary uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full bg-navy border border-border-steel rounded-sm px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide text-text-secondary uppercase mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-navy border border-border-steel rounded-sm px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="" className="bg-navy">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-navy">{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wide text-text-secondary uppercase mb-2">
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your requirements, material thickness, working length, production volume..."
                    className="w-full bg-navy border border-border-steel rounded-sm px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full bg-gold text-navy font-semibold px-8 py-4 rounded-sm hover:bg-gold-light transition-colors duration-200 text-sm tracking-wide"
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
