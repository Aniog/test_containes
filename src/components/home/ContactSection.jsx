import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

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
    label: 'Address',
    value: '1200 Industrial Blvd, Suite 400\nDetroit, MI 48201, USA',
    href: null,
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
    <section id="contact" className="bg-brand-navy py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-inter text-brand-gold text-xs uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="font-playfair font-bold text-brand-white text-4xl md:text-5xl mb-4">
            Request a Quote or
            <span className="block text-brand-gold">Product Information</span>
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-5" />
          <p className="font-inter text-brand-silver text-base max-w-xl mx-auto leading-relaxed">
            Our team of specialists is ready to help you find the right folding machine
            for your application. Fill out the form and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair font-bold text-brand-white text-2xl mb-6">
                Contact Details
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/30 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={18} className="text-brand-gold" />
                      </div>
                      <div>
                        <p className="font-inter text-brand-silver text-xs uppercase tracking-widest mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-inter text-brand-white text-sm hover:text-brand-gold transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-inter text-brand-white text-sm whitespace-pre-line">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="border-t border-brand-steel pt-8">
              <h4 className="font-playfair font-bold text-brand-white text-lg mb-4">
                Business Hours
              </h4>
              <div className="space-y-2">
                {[
                  { day: 'Monday – Friday', hours: '8:00 AM – 6:00 PM EST' },
                  { day: 'Saturday', hours: '9:00 AM – 2:00 PM EST' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between">
                    <span className="font-inter text-brand-silver text-sm">{item.day}</span>
                    <span className="font-inter text-brand-white text-sm">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-brand-steel/30 border border-brand-gold/30 rounded-sm p-12 flex flex-col items-center justify-center text-center h-full min-h-64">
                <CheckCircle size={48} className="text-brand-gold mb-4" />
                <h3 className="font-playfair font-bold text-brand-white text-2xl mb-3">
                  Thank You!
                </h3>
                <p className="font-inter text-brand-silver text-base leading-relaxed max-w-md">
                  Your inquiry has been received. A member of our sales team will
                  contact you within 24 business hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                  className="mt-6 border border-brand-gold text-brand-gold font-inter font-semibold text-sm uppercase tracking-widest px-8 py-3 rounded-sm hover:bg-brand-gold hover:text-brand-navy transition-all duration-300"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-inter text-brand-silver text-xs uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full bg-brand-steel/30 border border-brand-steel text-brand-white placeholder-brand-silver/50 font-inter text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-brand-silver text-xs uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full bg-brand-steel/30 border border-brand-steel text-brand-white placeholder-brand-silver/50 font-inter text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-inter text-brand-silver text-xs uppercase tracking-widest mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-brand-steel/30 border border-brand-steel text-brand-white placeholder-brand-silver/50 font-inter text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-brand-silver text-xs uppercase tracking-widest mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-brand-steel/30 border border-brand-steel text-brand-white placeholder-brand-silver/50 font-inter text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter text-brand-silver text-xs uppercase tracking-widest mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-brand-steel/30 border border-brand-steel text-brand-white font-inter text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors duration-200 appearance-none"
                  >
                    <option value="" className="bg-brand-navy">Select a product...</option>
                    <option value="double-folding-machine" className="bg-brand-navy">Double Folding Machine</option>
                    <option value="double-folder" className="bg-brand-navy">Double Folder</option>
                    <option value="sheet-metal-folder" className="bg-brand-navy">Sheet Metal Folder</option>
                    <option value="sheet-metal-folding-machine" className="bg-brand-navy">Sheet Metal Folding Machine</option>
                    <option value="metal-folder" className="bg-brand-navy">Metal Folder</option>
                    <option value="metal-folding-machine" className="bg-brand-navy">Metal Folding Machine</option>
                    <option value="general" className="bg-brand-navy">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter text-brand-silver text-xs uppercase tracking-widest mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your application, required specifications, or any questions you have..."
                    className="w-full bg-brand-steel/30 border border-brand-steel text-brand-white placeholder-brand-silver/50 font-inter text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-brand-gold transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-3 bg-brand-gold text-brand-navy font-inter font-semibold text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-brand-gold-light transition-colors duration-300 w-full sm:w-auto justify-center"
                >
                  <Send size={16} />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
