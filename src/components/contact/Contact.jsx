import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: Mail, label: 'Email', value: 'sales@artitectmachinery.com' },
  { icon: MapPin, label: 'Headquarters', value: 'Düsseldorf, Germany' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3 mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Tell us about your metal folding requirements and our team will provide a tailored solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-border">
                <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">{item.label}</p>
                  <p className="text-brand-navy font-semibold text-sm mt-0.5">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="p-5 bg-brand-navy rounded-xl">
              <p className="text-white/80 text-sm mb-2">Available Hours</p>
              <p className="text-white font-semibold">Mon–Fri: 8:00 – 18:00 CET</p>
              <p className="text-white/60 text-sm">24/7 emergency support available</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">Thank You!</h3>
                  <p className="text-text-secondary">We've received your inquiry and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-text-primary mb-1.5">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-text-primary mb-1.5">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-text-primary mb-1.5">Company Name</label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-text-primary mb-1.5">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your machinery needs, production requirements, or any questions..."
                      className="w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-brand-gold text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-brand-gold-light transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Inquiry
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}