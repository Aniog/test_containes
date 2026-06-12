import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 278-4832',
    sub: 'Mon–Fri, 8am–6pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitect-machinery.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '14 Industrial Park Drive',
    sub: 'Manufacturing District, CA 90210',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Monday – Friday',
    sub: '8:00 AM – 6:00 PM (PST)',
  },
];

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folding Machine',
  'Custom / Not Sure',
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
    <section id="contact" className="py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-surface tracking-tight mb-5">
            Request a Quote or<br className="hidden lg:block" /> Ask Our Engineers
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-surface/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and our team will get back to you with the right
            machine recommendation and a competitive quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-surface/50 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-surface font-medium text-sm">{item.value}</div>
                    <div className="text-surface/50 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );
            })}

            {/* Trust badges */}
            <div className="mt-10 pt-8 border-t border-surface/15">
              <p className="text-surface/50 text-xs uppercase tracking-wider mb-4">Trusted by</p>
              <div className="flex flex-wrap gap-3">
                {['ISO 9001', 'CE Certified', '25+ Years', '500+ Clients'].map((badge) => (
                  <span
                    key={badge}
                    className="border border-gold/30 text-gold text-xs font-medium px-3 py-1.5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-surface-dark rounded-lg p-12 text-center border border-gold/20">
                <CheckCircle className="w-16 h-16 text-gold mx-auto mb-5" />
                <h3 className="text-surface text-2xl font-bold mb-3">Message Received!</h3>
                <p className="text-surface/65 leading-relaxed">
                  Thank you for reaching out. One of our engineers will review your enquiry
                  and get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' }); }}
                  className="mt-8 border border-gold/40 text-gold px-6 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-gold/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-surface-dark rounded-lg p-8 border border-surface/10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-surface/70 text-xs uppercase tracking-wider mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-navy border border-surface/20 text-surface placeholder-surface/30 px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-surface/70 text-xs uppercase tracking-wider mb-2" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-navy border border-surface/20 text-surface placeholder-surface/30 px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-surface/70 text-xs uppercase tracking-wider mb-2" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full bg-navy border border-surface/20 text-surface placeholder-surface/30 px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-surface/70 text-xs uppercase tracking-wider mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-navy border border-surface/20 text-surface placeholder-surface/30 px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-surface/70 text-xs uppercase tracking-wider mb-2" htmlFor="product">
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-navy border border-surface/20 text-surface px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors rounded appearance-none"
                  >
                    <option value="" className="bg-navy">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-navy">{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-surface/70 text-xs uppercase tracking-wider mb-2" htmlFor="message">
                    Message / Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, material types, production volumes, or any specific requirements..."
                    className="w-full bg-navy border border-surface/20 text-surface placeholder-surface/30 px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors rounded resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-navy py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold/90 transition-colors duration-200 flex items-center justify-center gap-2 group"
                >
                  Send Enquiry
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-surface/40 text-xs text-center">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
