import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Industriestraße 42, 70565 Stuttgart, Germany',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+49 711 123 4567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitect-machinery.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri: 08:00–18:00 CET',
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
  'Other / Not Sure',
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
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
    console.log('Quote request submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-semibold text-gold tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-navy mb-4">
            Request a Quote
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-sans text-steel text-base lg:text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project and our specialists will provide a tailored solution and competitive quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-navy mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-sans text-xs font-semibold text-steel-light tracking-widest uppercase mb-1">
                          {item.label}
                        </p>
                        <p className="font-sans text-sm text-navy">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div className="border-t border-border-subtle pt-8">
              <p className="font-sans text-xs font-semibold text-steel-light tracking-widest uppercase mb-4">
                Certifications
              </p>
              <div className="flex flex-wrap gap-3">
                {['ISO 9001:2015', 'CE Certified', 'TÜV Approved'].map((cert) => (
                  <span
                    key={cert}
                    className="font-sans text-xs font-semibold text-navy border border-border-subtle px-3 py-1.5 tracking-wide"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-border-subtle bg-surface">
                <div className="w-16 h-16 bg-gold/15 flex items-center justify-center mb-6">
                  <span className="text-gold text-3xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                  Thank You!
                </h3>
                <p className="font-sans text-steel max-w-sm leading-relaxed">
                  Your quote request has been received. Our team will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-sans text-sm font-semibold text-gold border border-gold px-8 py-3 hover:bg-gold hover:text-navy transition-colors duration-200 tracking-wide"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-navy tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-border-subtle bg-surface px-4 py-3 font-sans text-sm text-navy placeholder-steel-light focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-navy tracking-widest uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full border border-border-subtle bg-surface px-4 py-3 font-sans text-sm text-navy placeholder-steel-light focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-sans text-xs font-semibold text-navy tracking-widest uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full border border-border-subtle bg-surface px-4 py-3 font-sans text-sm text-navy placeholder-steel-light focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-semibold text-navy tracking-widest uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 555 000 0000"
                      className="w-full border border-border-subtle bg-surface px-4 py-3 font-sans text-sm text-navy placeholder-steel-light focus:outline-none focus:border-gold transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-navy tracking-widest uppercase mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full border border-border-subtle bg-surface px-4 py-3 font-sans text-sm text-navy focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
                  >
                    <option value="">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-xs font-semibold text-navy tracking-widest uppercase mb-2">
                    Message / Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your production requirements, material types, sheet dimensions, or any specific needs..."
                    className="w-full border border-border-subtle bg-surface px-4 py-3 font-sans text-sm text-navy placeholder-steel-light focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-sans font-semibold text-sm bg-gold text-navy py-4 hover:bg-gold-dark transition-colors duration-200 tracking-widest uppercase"
                >
                  Send Quote Request
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
