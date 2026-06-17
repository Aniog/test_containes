import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const CONTACT_INFO = [
  { icon: MapPin, label: 'Address', value: 'Industriestrasse 42, 89081 Ulm, Germany' },
  { icon: Phone, label: 'Phone', value: '+49 731 1234 5678' },
  { icon: Mail, label: 'Email', value: 'info@artitect-machinery.com' },
  { icon: Clock, label: 'Business Hours', value: 'Mon - Fri: 8:00 AM - 6:00 PM CET' },
];

export default function ContactSection() {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-sm font-semibold tracking-[0.2em] uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mt-3 mb-4">
            Let's Discuss Your Requirements
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">
            Whether you need a custom configuration, a quote, or technical advice,
            our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="bg-brand-cream rounded-lg p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">Thank You</h3>
                <p className="text-gray-500">
                  Your message has been received. Our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', company: '', message: '' }); }}
                  className="mt-6 text-brand-gold hover:text-brand-gold-light font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all duration-200 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all duration-200 text-sm"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all duration-200 text-sm"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all duration-200 text-sm resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-brand-gold hover:bg-brand-gold-light text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-brand-gold/25 w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-brand-cream rounded-lg p-8">
              <h3 className="text-xl font-bold text-brand-navy mb-6">Contact Information</h3>
              <div className="space-y-5">
                {CONTACT_INFO.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-gray-700 text-sm">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-brand-navy rounded-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Need a Custom Solution?</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We specialize in custom-engineered folding machines tailored to your
                specific production requirements. Our engineering team will work with
                you to design the perfect solution.
              </p>
              <a
                href="tel:+4973112345678"
                className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light font-medium transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Call our sales team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}