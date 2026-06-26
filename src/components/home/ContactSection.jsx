import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Headquarters',
    value: 'Industriestraße 42, 53113 Bonn, Germany',
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+49 228 123 4567',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'info@artitect-machinery.com',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Business Hours',
    value: 'Mon-Fri: 8:00 AM - 6:00 PM CET',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-warm-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-bronze font-semibold text-sm tracking-widest uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-navy-900 mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            Whether you need a single machine or a complete production line solution,
            our team is ready to help you find the perfect folding equipment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-lg border border-border-light p-8 shadow-sm">
            <h3 className="font-heading text-2xl text-navy-900 mb-6">Send us a Message</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-md border border-border-light bg-warm-bg text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-bronze-light focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-md border border-border-light bg-warm-bg text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-bronze-light focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1.5">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-md border border-border-light bg-warm-bg text-navy-900 focus:outline-none focus:ring-2 focus:ring-bronze-light focus:border-transparent transition-all"
                >
                  <option value="">Select a product</option>
                  <option>Double Folding Machine</option>
                  <option>Double Folder</option>
                  <option>Sheet Metal Folder</option>
                  <option>Sheet Metal Folding Machine</option>
                  <option>Metal Folder</option>
                  <option>Metal Folding Machine</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-md border border-border-light bg-warm-bg text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-bronze-light focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-md bg-navy-900 text-white font-semibold hover:bg-navy-800 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-lg bg-white border border-border-light shadow-sm"
              >
                <div className="w-11 h-11 rounded-lg bg-bronze-light/10 flex items-center justify-center text-bronze shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-navy-500 font-medium">{item.label}</p>
                  <p className="text-navy-900 font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-lg bg-navy-900 border border-navy-700">
              <h4 className="text-white font-heading text-lg mb-3">Need Technical Support?</h4>
              <p className="text-navy-300 text-sm mb-4">
                Our technical team is available for installation support, maintenance,
                and troubleshooting.
              </p>
              <a
                href="tel:+492281234567"
                className="inline-flex items-center gap-2 text-bronze-light font-semibold hover:text-bronze transition-colors"
              >
                <Phone className="w-4 h-4" />
                +49 228 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}