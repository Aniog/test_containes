import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (800) 555-1234', href: 'tel:+18005551234' },
  { icon: Mail, label: 'Email', value: 'info@artitectmachinery.com', href: 'mailto:info@artitectmachinery.com' },
  { icon: MapPin, label: 'Address', value: '123 Industrial Parkway, Chicago, IL 60601' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 7:00 AM – 6:00 PM CST' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '', machine: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', form);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-navy-800 section-padding">
        <div className="container-wide">
          <div className="w-12 h-0.5 bg-brass-500 mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-warm-200 text-lg max-w-2xl leading-relaxed">
            Ready to discuss your sheet metal folding needs? Fill out the form
            and our team will respond within one business day.
          </p>
        </div>
      </section>

      <section className="section-padding bg-warm-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white border border-warm-200 rounded-sm p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-brass-500 mx-auto mb-4" />
                  <h2 className="font-display text-2xl font-bold text-navy-800">
                    Thank You!
                  </h2>
                  <p className="mt-3 text-navy-500 leading-relaxed max-w-md mx-auto">
                    Your inquiry has been received. A member of our engineering
                    team will review your requirements and get back to you
                    within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-warm-200 rounded-sm p-8">
                  <h2 className="font-display text-2xl font-bold text-navy-800 mb-6">
                    Request a Quote
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        className="w-full border border-warm-300 rounded-sm px-4 py-2.5 text-navy-800 bg-warm-50 focus:outline-none focus:border-brass-400 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        className="w-full border border-warm-300 rounded-sm px-4 py-2.5 text-navy-800 bg-warm-50 focus:outline-none focus:border-brass-400 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="phone" name="phone" type="tel"
                        value={form.phone} onChange={handleChange}
                        className="w-full border border-warm-300 rounded-sm px-4 py-2.5 text-navy-800 bg-warm-50 focus:outline-none focus:border-brass-400 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Company
                      </label>
                      <input
                        id="company" name="company" type="text"
                        value={form.company} onChange={handleChange}
                        className="w-full border border-warm-300 rounded-sm px-4 py-2.5 text-navy-800 bg-warm-50 focus:outline-none focus:border-brass-400 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="machine" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Machine of Interest
                      </label>
                      <select
                        id="machine" name="machine"
                        value={form.machine} onChange={handleChange}
                        className="w-full border border-warm-300 rounded-sm px-4 py-2.5 text-navy-800 bg-warm-50 focus:outline-none focus:border-brass-400 transition-colors"
                      >
                        <option value="">Select a machine...</option>
                        <option value="Double Folding Machine">Double Folding Machine</option>
                        <option value="Sheet Metal Folder">Sheet Metal Folder</option>
                        <option value="Metal Folding Machine">Metal Folding Machine</option>
                        <option value="Metal Folder Machine">Metal Folder Machine</option>
                        <option value="Custom / Not Sure">Custom / Not Sure</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">
                        Tell Us About Your Requirements *
                      </label>
                      <textarea
                        id="message" name="message" rows={5} required
                        value={form.message} onChange={handleChange}
                        className="w-full border border-warm-300 rounded-sm px-4 py-2.5 text-navy-800 bg-warm-50 focus:outline-none focus:border-brass-400 transition-colors resize-none"
                        placeholder="Material type, thickness, production volume, and any special requirements..."
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-brass mt-6 w-full sm:w-auto justify-center">
                    <Send className="w-4 h-4" /> Send Inquiry
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-navy-800 rounded-sm p-8 text-warm-200 sticky top-28">
                <h3 className="font-display text-xl font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <item.icon className="w-5 h-5 text-brass-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-warm-300 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a href={item.href} className="text-white hover:text-brass-400 transition-colors font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-navy-700 mt-8 pt-6">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                    After-Hours Support
                  </h4>
                  <p className="text-warm-300 text-sm leading-relaxed">
                    Emergency technical support is available 24/7 for existing
                    customers. Call our main line and follow the emergency
                    prompt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
