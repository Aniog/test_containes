import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+1 (800) 278-4832',
    sub: 'Mon–Fri, 8am–6pm',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'sales@artitect-machinery.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: '1200 Industrial Blvd, Suite 400',
    sub: 'Detroit, MI 48201, USA',
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
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mt-3 mb-4">
            Request a Quote or Consultation
          </h2>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and our engineering team will recommend the ideal folding machine solution for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4 p-5 bg-white border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-[#1B2A4A] font-semibold text-sm">{item.value}</div>
                    <div className="text-slate-500 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );
            })}

            {/* CTA Banner */}
            <div className="bg-[#1B2A4A] p-6 border-l-4 border-[#C9A84C]">
              <h3 className="text-white font-bold text-lg mb-2">Need a Demo?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Schedule a live demonstration of our folding machines at your facility or our showroom.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors duration-200"
              >
                Book a Demo →
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white border border-slate-100 shadow-md p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle className="w-16 h-16 text-[#C9A84C] mb-4" />
                <h3 className="text-2xl font-bold text-[#1B2A4A] mb-2">Thank You!</h3>
                <p className="text-slate-600 max-w-sm">
                  Your inquiry has been received. Our team will contact you within 24 hours with a tailored recommendation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#C9A84C] text-sm font-semibold uppercase tracking-widest hover:text-[#1B2A4A] transition-colors duration-200"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1B2A4A] uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 bg-[#F7F8FA]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1B2A4A] uppercase tracking-widest mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 bg-[#F7F8FA]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#1B2A4A] uppercase tracking-widest mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 bg-[#F7F8FA]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1B2A4A] uppercase tracking-widest mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 bg-[#F7F8FA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B2A4A] uppercase tracking-widest mb-2">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 bg-[#F7F8FA]"
                  >
                    <option value="">Select a product...</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="metal-folder-machine">Metal Folder Machine</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="sheet-metal-folding-machine">Sheet Metal Folding Machine</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1B2A4A] uppercase tracking-widest mb-2">
                    Message / Requirements
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your application, material thickness, production volume, or any specific requirements..."
                    className="w-full border border-slate-200 px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#C9A84C] transition-colors duration-200 bg-[#F7F8FA] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-[#C9A84C] hover:bg-[#b8963e] text-white font-semibold py-4 text-sm tracking-widest uppercase transition-all duration-200"
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
};

export default Contact;
