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
    value: 'sales@artitectmachinery.com',
    sub: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: 'Industrial Park, Unit 12',
    sub: 'Sheffield, UK S1 2AB',
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
    <section id="contact" className="bg-[#0F1C33] py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A84C] text-xs font-bold tracking-[0.3em] uppercase mb-3 block">
            Get In Touch
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Request a Quote
          </h2>
          <p className="text-[#8A9BB0] text-lg max-w-2xl mx-auto leading-relaxed">
            Tell us about your requirements and our engineering team will provide a tailored solution and competitive quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="text-[#8A9BB0] text-xs font-semibold tracking-widest uppercase mb-1">
                      {item.label}
                    </div>
                    <div className="text-white font-semibold text-sm">{item.value}</div>
                    <div className="text-[#5A6A82] text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              );
            })}

            {/* Divider */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-[#8A9BB0] text-sm leading-relaxed">
                Our team of specialists is ready to help you find the right folding machine for your production needs. We offer demos, site visits, and full installation support.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-[#1B2A4A] rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <CheckCircle size={56} className="text-[#C9A84C] mb-6" />
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Thank You!
                </h3>
                <p className="text-[#8A9BB0] text-base max-w-sm">
                  Your enquiry has been received. One of our engineers will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1B2A4A] rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#8A9BB0] text-xs font-semibold tracking-widest uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="bg-[#0F1C33] border border-white/10 text-white placeholder-[#3A4A5E] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#8A9BB0] text-xs font-semibold tracking-widest uppercase">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd"
                    className="bg-[#0F1C33] border border-white/10 text-white placeholder-[#3A4A5E] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#8A9BB0] text-xs font-semibold tracking-widest uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="bg-[#0F1C33] border border-white/10 text-white placeholder-[#3A4A5E] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#8A9BB0] text-xs font-semibold tracking-widest uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="bg-[#0F1C33] border border-white/10 text-white placeholder-[#3A4A5E] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>

                {/* Product Interest */}
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-[#8A9BB0] text-xs font-semibold tracking-widest uppercase">
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="bg-[#0F1C33] border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none"
                  >
                    <option value="" className="text-[#3A4A5E]">Select a product...</option>
                    <option value="double-folding-machine">Double Folding Machine</option>
                    <option value="double-folder">Double Folder</option>
                    <option value="sheet-metal-folder">Sheet Metal Folder</option>
                    <option value="metal-folding-machine">Metal Folding Machine</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-[#8A9BB0] text-xs font-semibold tracking-widest uppercase">
                    Your Requirements *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your application, material thickness, folding length requirements..."
                    className="bg-[#0F1C33] border border-white/10 text-white placeholder-[#3A4A5E] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#1B2A4A] px-10 py-4 rounded-lg font-bold text-base hover:bg-[#b8943e] transition-colors duration-200"
                  >
                    <Send size={18} />
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
