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
    label: 'Headquarters',
    value: '142 Industrial Parkway, Manufacturing District',
    href: null,
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
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-steel-800 py-24 md:py-32 border-t border-steel-600/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-steel-100 mb-4">
            Request a Quote
          </h2>
          <p className="text-steel-400 text-lg max-w-xl leading-relaxed">
            Tell us about your project and our engineering team will provide a tailored
            recommendation and competitive quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <div className="text-steel-400 text-xs tracking-widest uppercase mb-1">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-steel-200 hover:text-gold-500 font-medium text-sm transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-steel-200 font-medium text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Business Hours */}
            <div className="border-t border-steel-600/40 pt-8">
              <div className="text-steel-400 text-xs tracking-widest uppercase mb-3">Business Hours</div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-steel-400">Monday – Friday</span>
                  <span className="text-steel-200">8:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-steel-400">Saturday</span>
                  <span className="text-steel-200">9:00 – 14:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-steel-400">Sunday</span>
                  <span className="text-steel-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center py-16 bg-steel-900 border border-steel-600">
                <CheckCircle className="w-16 h-16 text-gold-500 mb-6" />
                <h3 className="text-steel-100 font-bold text-2xl mb-3">Thank You!</h3>
                <p className="text-steel-400 text-base max-w-sm leading-relaxed">
                  Your quote request has been received. Our engineering team will contact you
                  within 24 hours with a tailored recommendation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 border border-steel-600 hover:border-gold-500 text-steel-200 hover:text-gold-500 font-medium px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-200"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-steel-400 text-xs tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full bg-steel-900 border border-steel-600 focus:border-gold-500 text-steel-100 placeholder-steel-600 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-steel-400 text-xs tracking-widest uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full bg-steel-900 border border-steel-600 focus:border-gold-500 text-steel-100 placeholder-steel-600 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-steel-400 text-xs tracking-widest uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-steel-900 border border-steel-600 focus:border-gold-500 text-steel-100 placeholder-steel-600 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-steel-400 text-xs tracking-widest uppercase mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-steel-900 border border-steel-600 focus:border-gold-500 text-steel-100 placeholder-steel-600 px-4 py-3 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-steel-400 text-xs tracking-widest uppercase mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-steel-900 border border-steel-600 focus:border-gold-500 text-steel-100 px-4 py-3 text-sm outline-none transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" className="text-steel-400">Select a product...</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="metal-folder">Metal Folder</option>
                    <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-steel-400 text-xs tracking-widest uppercase mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your application, material types, sheet sizes, production volume, and any specific requirements..."
                    className="w-full bg-steel-900 border border-steel-600 focus:border-gold-500 text-steel-100 placeholder-steel-600 px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-steel-900 font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200 group w-full sm:w-auto"
                >
                  Send Quote Request
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
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
