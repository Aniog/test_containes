import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ssourcing.cn',
    href: 'mailto:info@ssourcing.cn',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+86 755 1234 5678',
    href: 'tel:+8675512345678',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Shenzhen, Guangdong, China',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Fri, 9:00–18:00 CST',
    href: null,
  },
];

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Machinery',
  'Packaging & Printing',
  'Toys & Sporting Goods',
  'Health & Beauty',
  'Automotive Parts',
  'Construction Materials',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Full Sourcing Management',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '',
    service: '', category: '', quantity: '', budget: '', description: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="section-container text-center">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Contact SSourcing China
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Tell us what you need to source and we'll get back to you within 1 business day with a tailored plan and cost estimate.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14">
            {/* Contact Info */}
            <div>
              <h2 className="text-brand-navy font-bold text-2xl mb-2">Get in Touch</h2>
              <p className="text-brand-muted text-sm leading-relaxed mb-8">
                We're based in Shenzhen, China, and work with buyers across North America, Europe, Australia, and beyond. Reach out via email, phone, or the form.
              </p>

              <div className="flex flex-col gap-5 mb-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-brand-muted text-xs font-medium mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-brand-navy font-semibold text-sm hover:text-brand-blue transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-brand-navy font-semibold text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-brand-blue-light rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-brand-blue" />
                  <h4 className="text-brand-navy font-semibold text-sm">Response Time</h4>
                </div>
                <p className="text-brand-muted text-sm leading-relaxed">
                  We respond to all sourcing inquiries within 1 business day. For urgent requests, please mention it in your message.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-brand-border p-10 text-center shadow-sm">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-brand-navy font-bold text-2xl mb-3">Message Received</h3>
                  <p className="text-brand-muted leading-relaxed">
                    Thank you for contacting SSourcing China. Our team will review your inquiry and respond within 1 business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-brand-border p-8 shadow-sm">
                  <h3 className="text-brand-navy font-bold text-xl mb-6">Sourcing Inquiry Form</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-brand-text text-sm font-semibold mb-1.5">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-text text-sm font-semibold mb-1.5">Company Name</label>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-text text-sm font-semibold mb-1.5">Email Address *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-text text-sm font-semibold mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-text text-sm font-semibold mb-1.5">Country *</label>
                      <input
                        type="text" name="country" required value={form.country} onChange={handleChange}
                        placeholder="United States"
                        className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-text text-sm font-semibold mb-1.5">Service Needed *</label>
                      <select
                        name="service" required value={form.service} onChange={handleChange}
                        className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-brand-text text-sm font-semibold mb-1.5">Product Category *</label>
                      <select
                        name="category" required value={form.category} onChange={handleChange}
                        className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition bg-white"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-brand-text text-sm font-semibold mb-1.5">Estimated Quantity</label>
                      <input
                        type="text" name="quantity" value={form.quantity} onChange={handleChange}
                        placeholder="e.g. 500 units / month"
                        className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-brand-text text-sm font-semibold mb-1.5">Product Description & Requirements *</label>
                    <textarea
                      name="description" required value={form.description} onChange={handleChange}
                      rows={5}
                      placeholder="Describe your product, specifications, target price, certifications required, and any other relevant details..."
                      className="w-full border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                    <Send className="w-4 h-4" />
                    Send Sourcing Inquiry
                  </button>

                  <p className="text-brand-muted text-xs text-center mt-4">
                    We respond within 1 business day. Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
