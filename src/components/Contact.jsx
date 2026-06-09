import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent-500 mb-3 block">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mb-4">
            Request a Quote
          </h2>
          <p className="text-brand-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Interested in our sheet metal folding machines? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-bold text-brand-900 mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: Mail, label: 'Email', value: 'sales@artitectmachinery.com' },
                  { icon: MapPin, label: 'Address', value: '123 Industrial Way, Chicago, IL 60601' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-brand-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-medium text-brand-800">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 bg-brand-50 rounded-xl border border-brand-100">
              <h4 className="font-semibold text-brand-900 text-sm mb-2">Business Hours</h4>
              <div className="space-y-1.5 text-sm text-brand-500">
                <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                <p>Saturday: 9:00 AM – 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center bg-brand-50 rounded-xl border border-brand-100">
                <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-accent-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-900 mb-2">Thank You!</h3>
                <p className="text-brand-400 max-w-sm">
                  Your inquiry has been received. Our team will review your request and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-5 py-2.5 text-sm font-medium text-accent-500 hover:text-accent-600 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-brand-50 rounded-xl border border-brand-100 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-brand-200 rounded-md text-sm text-brand-900 placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-brand-200 rounded-md text-sm text-brand-900 placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-colors"
                      placeholder="john@workshop.com"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="phone" className="block text-sm font-medium text-brand-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-brand-200 rounded-md text-sm text-brand-900 placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-brand-700 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-white border border-brand-200 rounded-md text-sm text-brand-900 placeholder:text-brand-300 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-colors resize-none"
                    placeholder="Tell us about your requirements, material types, thickness, and volume..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
