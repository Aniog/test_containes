import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-brand-navy py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs tracking-widest uppercase font-sans font-semibold mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-white mb-4">
            Request a Quote
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6" />
          <p className="text-brand-silver text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Tell us about your project and our engineering team will provide a tailored solution and competitive quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-brand-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
                  { icon: Mail, label: 'Email', value: 'info@artitect.com', href: 'mailto:info@artitect.com' },
                  { icon: MapPin, label: 'Address', value: 'Industrial Zone, Manufacturing District, Global HQ', href: null },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-brand-gold" />
                      </div>
                      <div>
                        <div className="text-brand-silver/60 text-xs tracking-widest uppercase font-sans mb-1">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-brand-white text-sm hover:text-brand-gold transition-colors font-sans">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-brand-white text-sm font-sans">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="border-t border-brand-steel/50 pt-8">
              <h4 className="text-brand-white text-xs tracking-widest uppercase font-semibold mb-4 font-sans">Business Hours</h4>
              <div className="space-y-2 text-sm font-sans">
                <div className="flex justify-between">
                  <span className="text-brand-silver">Monday – Friday</span>
                  <span className="text-brand-white">8:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-silver">Saturday</span>
                  <span className="text-brand-white">9:00 – 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-silver">Sunday</span>
                  <span className="text-brand-silver/50">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle size={56} className="text-brand-gold mb-6" />
                <h3 className="font-serif text-2xl font-bold text-brand-white mb-3">Thank You!</h3>
                <p className="text-brand-silver font-sans leading-relaxed max-w-md">
                  Your enquiry has been received. Our engineering team will review your requirements and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', product: '', message: '' }); }}
                  className="mt-8 border-2 border-brand-gold text-brand-gold text-xs tracking-widest uppercase font-semibold px-8 py-3 hover:bg-brand-gold hover:text-brand-navy transition-colors font-sans"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-brand-silver text-xs tracking-widest uppercase font-sans font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full bg-brand-steel/20 border border-brand-steel/50 text-brand-white placeholder-brand-silver/40 px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-silver text-xs tracking-widest uppercase font-sans font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-brand-steel/20 border border-brand-steel/50 text-brand-white placeholder-brand-silver/40 px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-brand-silver text-xs tracking-widest uppercase font-sans font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                      className="w-full bg-brand-steel/20 border border-brand-steel/50 text-brand-white placeholder-brand-silver/40 px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-silver text-xs tracking-widest uppercase font-sans font-medium mb-2">
                      Product of Interest
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full bg-brand-steel/20 border border-brand-steel/50 text-brand-white px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-gold transition-colors appearance-none"
                    >
                      <option value="" className="bg-brand-navy">Select a product…</option>
                      <option value="double-folding-machine" className="bg-brand-navy">Double Folding Machine</option>
                      <option value="double-folder" className="bg-brand-navy">Double Folder</option>
                      <option value="sheet-metal-folder" className="bg-brand-navy">Sheet Metal Folder</option>
                      <option value="sheet-metal-folding-machine" className="bg-brand-navy">Sheet Metal Folding Machine</option>
                      <option value="metal-folder" className="bg-brand-navy">Metal Folder</option>
                      <option value="metal-folder-machine" className="bg-brand-navy">Metal Folder Machine</option>
                      <option value="metal-folding-machine" className="bg-brand-navy">Metal Folding Machine</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-brand-silver text-xs tracking-widest uppercase font-sans font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project requirements, material thickness, production volume, etc."
                    className="w-full bg-brand-steel/20 border border-brand-steel/50 text-brand-white placeholder-brand-silver/40 px-4 py-3 text-sm font-sans focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-3 bg-brand-gold text-brand-navy text-xs tracking-widest uppercase font-semibold px-10 py-4 hover:bg-brand-gold-light transition-colors duration-200 disabled:opacity-70 font-sans"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-brand-navy/30 border-t-brand-navy rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Enquiry
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

export default Contact;
