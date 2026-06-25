import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="bg-brand-light py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-navy/10 border border-brand-navy/20 rounded-full px-5 py-2 mb-6">
            <span className="text-brand-navy text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Get In Touch
            </span>
          </div>
          <h2
            className="text-brand-navy font-bold mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Request a Quote
          </h2>
          <p className="text-brand-steel text-lg max-w-xl mx-auto leading-relaxed">
            Tell us about your production requirements and our team will provide a tailored solution and competitive quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-brand-navy rounded-2xl p-8">
              <h3
                className="text-white font-bold text-xl mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-silver text-xs uppercase tracking-wide mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Phone</div>
                    <div className="text-white font-medium">+1 (800) 278-4832</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-silver text-xs uppercase tracking-wide mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Email</div>
                    <div className="text-white font-medium">info@artitectmachinery.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-silver text-xs uppercase tracking-wide mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Address</div>
                    <div className="text-white font-medium">Industrial Park, Manufacturing District, USA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time card */}
            <div className="bg-brand-gold rounded-2xl p-6">
              <div
                className="text-brand-navy font-bold text-lg mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Fast Response Guaranteed
              </div>
              <p className="text-brand-navy/80 text-sm leading-relaxed">
                Our sales engineers respond to all inquiries within 24 business hours with a detailed proposal tailored to your requirements.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-navy/10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3
                    className="text-brand-navy font-bold text-2xl mb-3"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-brand-steel text-base max-w-sm">
                    Thank you for your inquiry. Our team will get back to you within 24 hours with a tailored proposal.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', phone: '', product: '', message: '' }); }}
                    className="mt-8 text-brand-blue text-sm font-semibold hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-navy text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 text-brand-navy placeholder-brand-silver/60 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-navy text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 text-brand-navy placeholder-brand-silver/60 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-brand-navy text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 text-brand-navy placeholder-brand-silver/60 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-navy text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 text-brand-navy placeholder-brand-silver/60 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-navy text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Product of Interest
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 text-brand-navy text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all bg-white"
                    >
                      <option value="">Select a machine...</option>
                      <option>Double Folding Machine</option>
                      <option>Double Folder</option>
                      <option>Sheet Metal Folder</option>
                      <option>Sheet Metal Folding Machine</option>
                      <option>Metal Folder</option>
                      <option>Metal Folder Machine</option>
                      <option>Metal Folding Machine</option>
                      <option>Custom / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-brand-navy text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Message / Requirements *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your production requirements, material types, folding lengths, quantities, or any specific questions..."
                      className="w-full px-4 py-3 rounded-lg border border-brand-navy/20 text-brand-navy placeholder-brand-silver/60 text-sm focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-brand-navy text-white py-4 rounded-lg font-bold text-sm tracking-wide uppercase hover:bg-brand-steel transition-all duration-200 disabled:opacity-70 cursor-pointer"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
