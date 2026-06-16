import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '14 Industrial Park Drive\nManufacturing District, 10001',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 278-4832',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitectmachinery.com',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM',
  },
];

const ContactSection = () => {
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
    <section id="contact" className="bg-brand-navy py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">Get In Touch</p>
          <h2 className="font-heading font-800 text-brand-white text-4xl md:text-5xl mb-4">
            Request a Quote
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6" />
          <p className="font-body text-brand-silver text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project and our engineering team will get back to you within 24 hours with a tailored solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-5">
                  <div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-brand-gold" />
                  </div>
                  <div>
                    <div className="font-body text-brand-gold text-xs uppercase tracking-widest font-semibold mb-1">{item.label}</div>
                    <div className="font-body text-brand-silver text-sm leading-relaxed whitespace-pre-line">{item.value}</div>
                  </div>
                </div>
              );
            })}

            {/* Certifications */}
            <div className="mt-4 border-t border-brand-steel/50 pt-8">
              <p className="font-body text-brand-silver text-xs uppercase tracking-widest mb-4">Certifications & Standards</p>
              <div className="flex flex-wrap gap-3">
                {['CE Certified', 'ISO 9001', 'Industry 4.0', 'RoHS Compliant'].map((cert) => (
                  <span key={cert} className="border border-brand-gold/40 text-brand-gold text-xs px-3 py-1.5 font-body uppercase tracking-wider">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-brand-steel/20 border border-brand-steel/50 p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle size={56} className="text-brand-gold mb-6" />
                <h3 className="font-heading font-700 text-brand-white text-2xl mb-3">Thank You!</h3>
                <p className="font-body text-brand-silver leading-relaxed max-w-sm">
                  Your enquiry has been received. Our engineering team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                  className="mt-8 border-2 border-brand-gold text-brand-gold font-heading font-semibold px-8 py-3 uppercase tracking-widest text-sm hover:bg-brand-gold hover:text-brand-navy transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-brand-silver text-xs uppercase tracking-widest">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="bg-brand-navy border border-brand-steel/70 text-brand-white placeholder-brand-silver/50 px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-brand-silver text-xs uppercase tracking-widest">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className="bg-brand-navy border border-brand-steel/70 text-brand-white placeholder-brand-silver/50 px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-brand-silver text-xs uppercase tracking-widest">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="bg-brand-navy border border-brand-steel/70 text-brand-white placeholder-brand-silver/50 px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-body text-brand-silver text-xs uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="bg-brand-navy border border-brand-steel/70 text-brand-white placeholder-brand-silver/50 px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="font-body text-brand-silver text-xs uppercase tracking-widest">Product of Interest</label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="bg-brand-navy border border-brand-steel/70 text-brand-white px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                  >
                    <option value="">Select a product...</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                    <option value="metal-folder">Metal Folder</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="font-body text-brand-silver text-xs uppercase tracking-widest">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project, material types, production volumes, and any specific requirements..."
                    className="bg-brand-navy border border-brand-steel/70 text-brand-white placeholder-brand-silver/50 px-4 py-3 text-sm font-body focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-brand-gold text-brand-navy font-heading font-semibold py-4 uppercase tracking-widest text-sm hover:bg-brand-gold-light transition-colors duration-200"
                  >
                    <Send size={16} />
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
