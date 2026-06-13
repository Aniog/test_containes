import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', company: '', phone: '', product: '', message: '' });
  };

  return (
    <section id="contact" className="bg-brand-gray-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mt-4 leading-tight">
            Request a Quote or Demo
          </h2>
          <p className="text-brand-gray-dark text-lg mt-4 leading-relaxed">
            Tell us about your project requirements and our team will get back to you within 24 hours.
          </p>
          <div className="w-16 h-[3px] bg-brand-gold mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-brand-navy rounded-2xl p-8 space-y-6">
              <h3 className="text-brand-white font-bold text-xl mb-2">
                Contact Information
              </h3>
              <p className="text-brand-white/50 text-sm leading-relaxed">
                Reach out to us directly or fill out the form and we will get back to you promptly.
              </p>

              <div className="space-y-5 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-white/50 text-xs">Phone</p>
                    <p className="text-brand-white font-medium">+1 (800) 555-0199</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-white/50 text-xs">Email</p>
                    <p className="text-brand-white font-medium">sales@artitectmachinery.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="text-brand-white/50 text-xs">Headquarters</p>
                    <p className="text-brand-white font-medium">
                      1200 Industrial Parkway<br />
                      Detroit, MI 48201, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-brand-white rounded-2xl shadow-sm border border-brand-gray-medium/50 p-8 space-y-5">
              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800 text-sm font-medium">
                  Thank you! Your inquiry has been submitted. We will contact you shortly.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-brand-steel text-sm font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full bg-brand-gray-light border border-brand-gray-medium rounded-lg px-4 py-3 text-brand-navy text-sm placeholder:text-brand-gray-dark/50 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-brand-steel text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full bg-brand-gray-light border border-brand-gray-medium rounded-lg px-4 py-3 text-brand-navy text-sm placeholder:text-brand-gray-dark/50 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-brand-steel text-sm font-semibold mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full bg-brand-gray-light border border-brand-gray-medium rounded-lg px-4 py-3 text-brand-navy text-sm placeholder:text-brand-gray-dark/50 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-brand-steel text-sm font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-brand-gray-light border border-brand-gray-medium rounded-lg px-4 py-3 text-brand-navy text-sm placeholder:text-brand-gray-dark/50 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="product" className="block text-brand-steel text-sm font-semibold mb-2">
                  Product Interest
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full bg-brand-gray-light border border-brand-gray-medium rounded-lg px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all appearance-none"
                >
                  <option value="">Select a product</option>
                  <option value="double-folder-pro">Double Folder Pro</option>
                  <option value="sheet-metal-folder-x">Sheet Metal Folder X</option>
                  <option value="metal-folder-compact">Metal Folder Compact</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-brand-steel text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-brand-gray-light border border-brand-gray-medium rounded-lg px-4 py-3 text-brand-navy text-sm placeholder:text-brand-gray-dark/50 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-navy py-4 rounded-lg text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/25 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
