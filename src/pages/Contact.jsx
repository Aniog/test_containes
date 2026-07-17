import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+1 (234) 567-890', '+1 (234) 567-891'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@artitectmachinery.com', 'sales@artitectmachinery.com'],
  },
  {
    icon: MapPin,
    title: 'Address',
    lines: ['Industrial Zone, Manufacturing District', 'Global Operations Headquarters'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday – Friday: 8:00 AM – 6:00 PM', 'Saturday: 9:00 AM – 1:00 PM'],
  },
];

const inquiryTypes = [
  'Product Inquiry',
  'Request a Quote',
  'Technical Support',
  'Spare Parts',
  'Partnership',
  'Other',
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiry: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission delay
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="font-inter">
      {/* Page Header */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Contact Us
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl">
            Let's Build Something Exceptional Together
          </h1>
          <p className="text-brand-silver text-lg leading-relaxed max-w-2xl">
            Whether you need a quote, technical support, or want to explore a custom solution — our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-brand-white rounded-2xl p-6 shadow-md border border-brand-silver/20 flex gap-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-brand-navy mb-2">{item.title}</h4>
                      {item.lines.map((line) => (
                        <p key={line} className="text-brand-silver text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Map placeholder */}
              <div className="bg-brand-steel rounded-2xl overflow-hidden h-48 flex items-center justify-center border border-brand-silver/10">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                  <p className="text-brand-silver text-sm">Global Headquarters</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-brand-white rounded-2xl shadow-lg border border-brand-silver/20 p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-brand-gold" />
                    </div>
                    <h3 className="font-playfair text-3xl font-bold text-brand-navy mb-3">
                      Message Received!
                    </h3>
                    <p className="text-brand-silver text-base max-w-md mb-8">
                      Thank you for reaching out. Our team will review your inquiry and get back to you within 1 business day.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', inquiry: '', message: '' }); }}
                      className="bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-full hover:bg-brand-gold-light transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-playfair text-2xl font-bold text-brand-navy mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-brand-silver text-sm mb-8">
                      Fill in the form below and we'll respond within 1 business day.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-brand-navy text-sm font-medium mb-2" htmlFor="name">
                            Full Name <span className="text-brand-gold">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className="w-full border border-brand-silver/30 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all bg-brand-light placeholder-brand-silver/60"
                          />
                        </div>
                        <div>
                          <label className="block text-brand-navy text-sm font-medium mb-2" htmlFor="email">
                            Email Address <span className="text-brand-gold">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="w-full border border-brand-silver/30 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all bg-brand-light placeholder-brand-silver/60"
                          />
                        </div>
                        <div>
                          <label className="block text-brand-navy text-sm font-medium mb-2" htmlFor="company">
                            Company
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your Company Ltd."
                            className="w-full border border-brand-silver/30 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all bg-brand-light placeholder-brand-silver/60"
                          />
                        </div>
                        <div>
                          <label className="block text-brand-navy text-sm font-medium mb-2" htmlFor="phone">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+1 (234) 567-890"
                            className="w-full border border-brand-silver/30 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all bg-brand-light placeholder-brand-silver/60"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-brand-navy text-sm font-medium mb-2" htmlFor="inquiry">
                          Inquiry Type <span className="text-brand-gold">*</span>
                        </label>
                        <select
                          id="inquiry"
                          name="inquiry"
                          required
                          value={form.inquiry}
                          onChange={handleChange}
                          className="w-full border border-brand-silver/30 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all bg-brand-light"
                        >
                          <option value="" disabled>Select inquiry type...</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-brand-navy text-sm font-medium mb-2" htmlFor="message">
                          Message <span className="text-brand-gold">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, production requirements, or any questions you have..."
                          className="w-full border border-brand-silver/30 rounded-xl px-4 py-3 text-brand-navy text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all bg-brand-light placeholder-brand-silver/60 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-navy font-semibold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-brand-navy/30 border-t-brand-navy rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
