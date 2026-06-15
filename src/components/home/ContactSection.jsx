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
    value: 'Industrial Park, Machinery District',
    href: null,
  },
];

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folding Machine',
  'Other / Not Sure',
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="bg-[#F4F6F9] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Get In Touch
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-[#0D1B2A] mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Request a Quote
            <br />
            <span className="text-[#1A3A5C]">or Ask a Question</span>
          </h2>
          <p
            className="text-[#2C3E50] text-base max-w-xl leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our engineering team is ready to help you find the right folding machine solution.
            Fill in the form and we will respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D1B2A] flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div
                      className="text-xs text-[#8A9BB0] tracking-widest uppercase mb-1"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[#0D1B2A] font-semibold hover:text-[#C9A84C] transition-colors text-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        className="text-[#0D1B2A] font-semibold text-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Trust badges */}
            <div className="mt-4 bg-[#0D1B2A] p-6">
              <div
                className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Why Choose ARTITECT
              </div>
              {[
                'ISO 9001 Certified Manufacturing',
                'CE Marked Machines',
                '2-Year Machine Warranty',
                'Worldwide Shipping & Installation',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 mb-3">
                  <CheckCircle size={14} className="text-[#C9A84C] flex-shrink-0" />
                  <span
                    className="text-[#8A9BB0] text-xs"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white shadow-xl p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle size={56} className="text-[#C9A84C] mb-6" />
                <h3
                  className="text-2xl font-bold text-[#0D1B2A] mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Message Received!
                </h3>
                <p
                  className="text-[#2C3E50] text-sm max-w-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Thank you for reaching out. Our team will get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#0D1B2A] tracking-widest uppercase mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="John Smith"
                      className="w-full border border-[#8A9BB0]/40 px-4 py-3 text-sm text-[#0D1B2A] placeholder-[#8A9BB0] focus:outline-none focus:border-[#C9A84C] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#0D1B2A] tracking-widest uppercase mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="john@company.com"
                      className="w-full border border-[#8A9BB0]/40 px-4 py-3 text-sm text-[#0D1B2A] placeholder-[#8A9BB0] focus:outline-none focus:border-[#C9A84C] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-[#0D1B2A] tracking-widest uppercase mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Your Company Ltd."
                    className="w-full border border-[#8A9BB0]/40 px-4 py-3 text-sm text-[#0D1B2A] placeholder-[#8A9BB0] focus:outline-none focus:border-[#C9A84C] transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-[#0D1B2A] tracking-widest uppercase mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Product of Interest
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={onChange}
                    className="w-full border border-[#8A9BB0]/40 px-4 py-3 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#C9A84C] transition-colors bg-white"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="">Select a product...</option>
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-[#0D1B2A] tracking-widest uppercase mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="Tell us about your requirements — material type, thickness, production volume, etc."
                    className="w-full border border-[#8A9BB0]/40 px-4 py-3 text-sm text-[#0D1B2A] placeholder-[#8A9BB0] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-3 bg-[#C9A84C] text-[#0D1B2A] font-bold px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#E8C97A] transition-colors duration-200 disabled:opacity-60"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {submitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={16} />
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

export default ContactSection;
