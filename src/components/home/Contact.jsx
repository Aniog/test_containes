import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (800) 278-4832',
    sub: 'Mon–Fri, 8am–6pm',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'sales@artitect.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Industrial Park, Block 7',
    sub: 'Frankfurt, Germany',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
            Get in Touch
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Let's Build Something
            <span className="text-gold"> Exceptional</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Tell us about your project and our engineering team will recommend the perfect machine for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-gold/80 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white font-medium">{item.value}</p>
                    <p className="text-white/50 text-sm">{item.sub}</p>
                  </div>
                </div>
              );
            })}

            {/* Certifications */}
            <div className="mt-4 pt-8 border-t border-white/10">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
                Certifications
              </p>
              <div className="flex flex-wrap gap-3">
                {['ISO 9001', 'CE Marked', 'TÜV Certified', 'OSHA Compliant'].map((cert) => (
                  <span
                    key={cert}
                    className="bg-white/10 border border-white/20 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-5">
                  <Send className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  Message Received!
                </h3>
                <p className="text-white/60 max-w-sm">
                  Thank you for reaching out. Our team will contact you within 24 hours with a tailored recommendation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white/15 transition-all appearance-none"
                  >
                    <option value="" className="bg-navy text-white">Select a machine...</option>
                    <option value="double-folding-machine" className="bg-navy text-white">Double Folding Machine</option>
                    <option value="double-folder" className="bg-navy text-white">Double Folder</option>
                    <option value="sheet-metal-folder" className="bg-navy text-white">Sheet Metal Folder</option>
                    <option value="metal-folding-machine" className="bg-navy text-white">Metal Folding Machine</option>
                    <option value="other" className="bg-navy text-white">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your production requirements, material types, volumes..."
                    className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white/15 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-navy font-semibold py-4 rounded-xl hover:bg-gold-light transition-all duration-200 flex items-center justify-center gap-2 text-base"
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
