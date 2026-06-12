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
    value: '14 Industrial Park Drive, Sheffield, S1 2AB, United Kingdom',
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
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
    console.log('Contact form submitted:', form);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-brand-accent text-xs font-semibold tracking-[0.25em] uppercase">
            Get in Touch
          </span>
          <h2 className="font-serif text-brand-dark text-3xl md:text-5xl font-bold mt-3 mb-4">
            Request a Quote
          </h2>
          <div className="w-16 h-1 bg-brand-accent rounded-full mx-auto mb-5" />
          <p className="text-brand-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your project and our engineering team will get back to you within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-brand-navy rounded-2xl p-8 text-white flex-1">
              <h3 className="font-serif text-xl font-bold mb-2">Contact Information</h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                Our sales and technical teams are ready to help you find the right machine for your application.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-brand-accent" />
                      </div>
                      <div>
                        <div className="text-white/50 text-xs font-medium tracking-wide uppercase mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white text-sm hover:text-brand-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-white text-sm">{item.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Business Hours */}
              <div className="mt-10 pt-8 border-t border-white/15">
                <div className="text-white/50 text-xs font-medium tracking-wide uppercase mb-3">
                  Business Hours
                </div>
                <div className="text-white text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="text-brand-accent">8:00 – 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-brand-accent">9:00 – 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white/40">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md border border-brand-light p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="w-16 h-16 text-brand-accent mb-4" />
                <h3 className="font-serif text-brand-dark text-2xl font-bold mb-2">
                  Thank You!
                </h3>
                <p className="text-brand-muted text-base max-w-sm">
                  Your enquiry has been received. A member of our team will be in touch within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                  className="mt-6 text-brand-accent text-sm font-semibold hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-1.5" htmlFor="name">
                      Full Name <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full border border-brand-light rounded-lg px-4 py-2.5 text-brand-dark text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-1.5" htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full border border-brand-light rounded-lg px-4 py-2.5 text-brand-dark text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-1.5" htmlFor="email">
                      Email Address <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full border border-brand-light rounded-lg px-4 py-2.5 text-brand-dark text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-1.5" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="w-full border border-brand-light rounded-lg px-4 py-2.5 text-brand-dark text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-brand-dark text-sm font-medium mb-1.5" htmlFor="product">
                    Product of Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full border border-brand-light rounded-lg px-4 py-2.5 text-brand-dark text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors bg-white"
                  >
                    <option value="">Select a product...</option>
                    <option>Double Folding Machine</option>
                    <option>Double Folder</option>
                    <option>Sheet Metal Folder</option>
                    <option>Metal Folder Machine</option>
                    <option>Metal Folding Machine</option>
                    <option>Metal Folder</option>
                    <option>Not sure — need advice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-brand-dark text-sm font-medium mb-1.5" htmlFor="message">
                    Message <span className="text-brand-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your application, material thickness, required width, production volume..."
                    className="w-full border border-brand-light rounded-lg px-4 py-2.5 text-brand-dark text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 w-full bg-brand-accent text-white py-3 rounded-lg font-semibold text-base hover:bg-brand-accent-light transition-colors duration-200 disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : (
                    <>
                      Send Enquiry <Send className="w-4 h-4" />
                    </>
                  )}
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
