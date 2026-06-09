import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (800) 278-4832',
    sub: 'Mon–Fri, 8am–6pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sales@artitectmachinery.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Industrial Park, Unit 12',
    sub: 'Frankfurt, Germany',
  },
];

export default function Contact() {
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
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <>
      {/* CTA Banner */}
      <section className="py-16 bg-[#1E6FA5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-4">
            Ready to Elevate Your Production?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a personalised quote, technical consultation, or arrange a live demonstration of our folding machines at your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-white text-[#1E6FA5] hover:bg-[#F4F6F9] px-8 py-4 rounded font-heading font-bold text-sm tracking-wide transition-all duration-200"
            >
              Request a Quote
            </a>
            <a
              href="tel:+18002784832"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1E6FA5] px-8 py-4 rounded font-heading font-bold text-sm tracking-wide transition-all duration-200"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#C8922A]" />
                <span className="text-[#C8922A] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
                  Get in Touch
                </span>
              </div>
              <h2 className="font-heading font-bold text-[#0D1B2A] text-3xl md:text-4xl mb-6 leading-tight">
                Let's Talk About Your Project
              </h2>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-10">
                Whether you need a standard machine or a fully customised folding solution, our engineering team is ready to help you find the right fit.
              </p>

              <div className="flex flex-col gap-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#F4F6F9] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#1E6FA5]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#C8922A] font-heading font-semibold uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[#0D1B2A] font-semibold text-sm">{item.value}</p>
                        <p className="text-[#4A5568] text-xs">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-[#F4F6F9] rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                  <CheckCircle className="w-14 h-14 text-[#1E6FA5]" />
                  <h3 className="font-heading font-bold text-[#0D1B2A] text-xl">
                    Message Received!
                  </h3>
                  <p className="text-[#4A5568] max-w-xs">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-[#1E6FA5] font-semibold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="font-heading font-bold text-[#0D1B2A] text-lg mb-2">
                    Request a Quote
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0D1B2A] font-heading uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0D1B2A] placeholder-gray-400 focus:outline-none focus:border-[#1E6FA5] focus:ring-1 focus:ring-[#1E6FA5] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0D1B2A] font-heading uppercase tracking-wide">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0D1B2A] placeholder-gray-400 focus:outline-none focus:border-[#1E6FA5] focus:ring-1 focus:ring-[#1E6FA5] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0D1B2A] font-heading uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0D1B2A] placeholder-gray-400 focus:outline-none focus:border-[#1E6FA5] focus:ring-1 focus:ring-[#1E6FA5] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0D1B2A] font-heading uppercase tracking-wide">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0D1B2A] placeholder-gray-400 focus:outline-none focus:border-[#1E6FA5] focus:ring-1 focus:ring-[#1E6FA5] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0D1B2A] font-heading uppercase tracking-wide">
                      Product of Interest
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#1E6FA5] focus:ring-1 focus:ring-[#1E6FA5] transition-colors"
                    >
                      <option value="">Select a product...</option>
                      <option value="double-folding-machine">Double Folding Machine</option>
                      <option value="double-folder">Double Folder</option>
                      <option value="sheet-metal-folder">Sheet Metal Folder</option>
                      <option value="metal-folding-machine">Metal Folding Machine</option>
                      <option value="custom">Custom / Not Sure</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#0D1B2A] font-heading uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, material thickness, production volume, or any specific requirements..."
                      className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#0D1B2A] placeholder-gray-400 focus:outline-none focus:border-[#1E6FA5] focus:ring-1 focus:ring-[#1E6FA5] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-[#1E6FA5] hover:bg-[#3A9BD5] text-white px-6 py-4 rounded-lg font-heading font-semibold text-sm tracking-wide transition-all duration-200 group mt-2"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
