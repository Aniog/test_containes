import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 278-4832',
    href: 'tel:+18002784832',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitectmachinery.com',
    href: 'mailto:sales@artitectmachinery.com',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Stuttgart, Germany',
    href: '#',
  },
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
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="font-heading font-bold text-brand-white text-4xl md:text-5xl mt-3 mb-5">
            Request a Quote
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project and our engineering team will respond within
            one business day with a tailored solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-silver text-xs tracking-widest uppercase mb-1">
                      {item.label}
                    </div>
                    <div className="text-brand-white font-medium group-hover:text-brand-gold transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              );
            })}

            {/* CTA block */}
            <div className="mt-4 p-6 rounded-2xl border border-brand-gold/20 bg-brand-steel/20">
              <h4 className="font-heading font-semibold text-brand-white text-lg mb-2">
                Need a Demo?
              </h4>
              <p className="text-brand-silver text-sm leading-relaxed">
                Visit our showroom in Stuttgart or request a live virtual demonstration
                of any machine in our range.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 rounded-2xl border border-brand-gold/20 bg-brand-steel/20">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="font-heading font-bold text-brand-white text-2xl mb-3">
                  Message Received!
                </h3>
                <p className="text-brand-silver text-base max-w-sm">
                  Thank you for reaching out. Our team will contact you within one
                  business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-steel/20 border border-brand-silver/10 rounded-2xl p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-brand-silver text-xs tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-brand-navy/60 border border-brand-silver/20 rounded-xl px-4 py-3 text-brand-white placeholder-brand-silver/40 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-silver text-xs tracking-widest uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full bg-brand-navy/60 border border-brand-silver/20 rounded-xl px-4 py-3 text-brand-white placeholder-brand-silver/40 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-brand-silver text-xs tracking-widest uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-brand-navy/60 border border-brand-silver/20 rounded-xl px-4 py-3 text-brand-white placeholder-brand-silver/40 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-silver text-xs tracking-widest uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-brand-navy/60 border border-brand-silver/20 rounded-xl px-4 py-3 text-brand-white placeholder-brand-silver/40 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-brand-silver text-xs tracking-widest uppercase mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-brand-navy/60 border border-brand-silver/20 rounded-xl px-4 py-3 text-brand-white text-sm focus:outline-none focus:border-brand-gold/60 transition-colors"
                  >
                    <option value="" className="bg-brand-navy">Select a product...</option>
                    <option value="double-folding-machine" className="bg-brand-navy">Double Folding Machine</option>
                    <option value="double-folder" className="bg-brand-navy">Double Folder</option>
                    <option value="sheet-metal-folder" className="bg-brand-navy">Sheet Metal Folder</option>
                    <option value="sheet-metal-folding-machine" className="bg-brand-navy">Sheet Metal Folding Machine</option>
                    <option value="metal-folder" className="bg-brand-navy">Metal Folder</option>
                    <option value="metal-folder-machine" className="bg-brand-navy">Metal Folder Machine</option>
                    <option value="metal-folding-machine" className="bg-brand-navy">Metal Folding Machine</option>
                  </select>
                </div>

                <div>
                  <label className="block text-brand-silver text-xs tracking-widest uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your application, material thickness, bending length requirements..."
                    className="w-full bg-brand-navy/60 border border-brand-silver/20 rounded-xl px-4 py-3 text-brand-white placeholder-brand-silver/40 text-sm focus:outline-none focus:border-brand-gold/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-gold text-brand-navy font-semibold py-4 rounded-xl hover:bg-brand-gold-light transition-all duration-200 flex items-center justify-center gap-2 text-base tracking-wide"
                >
                  Send Enquiry
                  <Send className="w-4 h-4" />
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
