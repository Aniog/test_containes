import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (800) 278-4832', href: 'tel:+18002784832' },
  { icon: Mail, label: 'Email', value: 'sales@artitectmachinery.com', href: 'mailto:sales@artitectmachinery.com' },
  { icon: MapPin, label: 'Address', value: '14 Industrial Park Drive, Stuttgart, Germany', href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', product: '', message: '' });
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
    <section id="contact" className="py-24 md:py-32 bg-steel">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-xs text-gold tracking-[0.35em] uppercase mb-4">Get In Touch</p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-chalk mb-5">
            Let's Talk About Your Project
          </h2>
          <p className="font-inter text-base text-silver max-w-2xl mx-auto">
            Whether you need a standard machine or a fully customised folding solution, our team is ready to help. Request a quote or ask us anything.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-iron flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <div className="font-inter text-xs text-silver uppercase tracking-widest mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="font-inter text-sm text-chalk hover:text-gold transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="font-inter text-sm text-chalk">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Divider */}
            <div className="border-t border-iron pt-8">
              <p className="font-inter text-xs text-silver uppercase tracking-widest mb-3">Business Hours</p>
              <p className="font-inter text-sm text-chalk">Monday – Friday: 8:00 AM – 6:00 PM (CET)</p>
              <p className="font-inter text-sm text-chalk mt-1">Saturday: 9:00 AM – 1:00 PM (CET)</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-iron rounded-2xl p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={52} className="text-gold mb-5" />
                <h3 className="font-playfair font-semibold text-2xl text-chalk mb-3">Thank You!</h3>
                <p className="font-inter text-sm text-silver max-w-sm">
                  Your enquiry has been received. A member of our team will be in touch within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                  className="mt-8 font-inter text-sm font-semibold bg-gold text-steel px-8 py-3 rounded-full hover:bg-gold-light transition-all border-none cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-inter text-xs text-silver uppercase tracking-widest block mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-steel border border-silver/20 rounded-xl px-4 py-3 font-inter text-sm text-chalk placeholder-silver/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs text-silver uppercase tracking-widest block mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full bg-steel border border-silver/20 rounded-xl px-4 py-3 font-inter text-sm text-chalk placeholder-silver/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-inter text-xs text-silver uppercase tracking-widest block mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-steel border border-silver/20 rounded-xl px-4 py-3 font-inter text-sm text-chalk placeholder-silver/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-xs text-silver uppercase tracking-widest block mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="w-full bg-steel border border-silver/20 rounded-xl px-4 py-3 font-inter text-sm text-chalk placeholder-silver/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-inter text-xs text-silver uppercase tracking-widest block mb-2">Product of Interest</label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-steel border border-silver/20 rounded-xl px-4 py-3 font-inter text-sm text-chalk focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Select a product...</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
                <div>
                  <label className="font-inter text-xs text-silver uppercase tracking-widest block mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, material thickness, fold length, production volume..."
                    className="w-full bg-steel border border-silver/20 rounded-xl px-4 py-3 font-inter text-sm text-chalk placeholder-silver/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 font-inter font-semibold bg-gold text-steel px-8 py-4 rounded-full hover:bg-gold-light transition-all duration-200 text-base border-none cursor-pointer"
                >
                  <Send size={16} />
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
