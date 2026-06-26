import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageSquare, Globe, Send, CheckCircle2, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '', email: '', company: '', phone: '', country: '',
    product: '', quantity: '', budget: '', timeline: '', message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white/10 text-white/90 text-sm font-semibold rounded-full mb-4">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Ready to source from China? Fill out the form below and our team will respond within 24 business hours with a tailored sourcing plan.</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text mb-6">Contact Information</h2>
              <div className="space-y-5 mb-10">
                {[
                  { icon: MapPin, label: 'Office Address', value: 'Tianhe District, Guangzhou, Guangdong, China 510620' },
                  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
                  { icon: Phone, label: 'Phone / WhatsApp', value: '+86 138-0000-0000' },
                  { icon: Clock, label: 'Business Hours', value: 'Mon–Fri: 9:00 AM – 6:00 PM (GMT+8)' },
                  { icon: Globe, label: 'Time Zone', value: 'China Standard Time (CST, UTC+8)' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-text font-medium hover:text-primary no-underline transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm text-text font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Response */}
              <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-5 h-5 text-success" />
                  <h3 className="text-sm font-bold text-text">Quick Response Guarantee</h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">We respond to all sourcing inquiries within 24 business hours. For urgent requests, contact us via WhatsApp for same-day response.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-surface-alt border border-border rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-text mb-3">Thank You, {formData.name}!</h2>
                  <p className="text-text-secondary mb-2">Your sourcing inquiry has been submitted successfully.</p>
                  <p className="text-sm text-text-muted mb-6">Our team will review your requirements and respond within 24 business hours at <strong className="text-text">{formData.email}</strong>.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', phone: '', country: '', product: '', quantity: '', budget: '', timeline: '', message: '' }); }}
                    className="px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-lg border-none cursor-pointer transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-surface-alt border border-border rounded-2xl p-7 md:p-9">
                  <h2 className="text-xl font-bold text-text mb-6">Sourcing Inquiry Form</h2>

                  {/* Personal Info */}
                  <div className="mb-6">
                    <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4">Your Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text mb-1.5">Full Name *</label>
                        <input name="name" value={formData.name} onChange={handleChange} required placeholder="John Smith"
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-1.5">Email *</label>
                        <input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com"
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-1.5">Company Name</label>
                        <input name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd."
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-1.5">Phone / WhatsApp</label>
                        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8900"
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-text mb-1.5">Country</label>
                        <input name="country" value={formData.country} onChange={handleChange} placeholder="e.g. United States, United Kingdom, Australia"
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mb-6">
                    <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4">Product Requirements</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-text mb-1.5">Product Description *</label>
                        <input name="product" value={formData.product} onChange={handleChange} required placeholder="e.g. Bluetooth speakers, LED light bulbs, cotton t-shirts"
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-1.5">Estimated Quantity</label>
                        <input name="quantity" value={formData.quantity} onChange={handleChange} placeholder="e.g. 5,000 units"
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text mb-1.5">Target Budget (USD)</label>
                        <input name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g. $10,000 – $50,000"
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-text mb-1.5">Preferred Timeline</label>
                        <input name="timeline" value={formData.timeline} onChange={handleChange} placeholder="e.g. Need samples within 2 weeks, bulk order in 6 weeks"
                          className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-text mb-1.5">Additional Details</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                      placeholder="Include any specific requirements such as materials, certifications, packaging preferences, target price per unit, etc."
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg text-sm text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-y" />
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-colors text-base cursor-pointer border-none shadow-lg">
                    <Send className="w-5 h-5" />
                    Submit Sourcing Inquiry
                  </button>

                  <p className="text-xs text-text-muted text-center mt-4">We'll respond within 24 business hours. Your information is kept confidential.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
