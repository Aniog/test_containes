import { useState } from 'react';
import { MapPin, Mail, Clock, Globe, Send, CheckCircle, MessageSquare } from 'lucide-react';

const services = [
  'Supplier Sourcing',
  'Factory Verification / Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Sourcing Service',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '',
    service: '', product: '', quantity: '', budget: '', message: '',
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
      <section className="bg-brand-dark py-20">
        <div className="section-container text-center">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start sourcing from China? Send us your requirements and we'll
            respond within 24 business hours with a clear plan and transparent pricing.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-brand-dark mb-6">Contact Information</h2>

              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-light-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-dark">Office Location</p>
                    <p className="text-brand-body text-sm">Shenzhen, Guangdong, China</p>
                    <p className="text-brand-muted text-xs mt-0.5">Also operating in Guangzhou & Yiwu</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-light-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-dark">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-brand-navy text-sm hover:underline">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-light-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-dark">Response Time</p>
                    <p className="text-brand-body text-sm">Within 24 business hours</p>
                    <p className="text-brand-muted text-xs mt-0.5">Mon–Fri, 9am–6pm CST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-light-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-brand-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-dark">Languages</p>
                    <p className="text-brand-body text-sm">English · Français · Español · Deutsch</p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-brand-light-blue rounded-xl p-5 border border-brand-border">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-4 h-4 text-brand-navy" />
                  <h3 className="text-sm font-semibold text-brand-dark">What Happens Next</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {[
                    'We review your inquiry within 24h',
                    'We schedule a brief consultation call',
                    'We send you a tailored sourcing plan',
                    'You decide whether to proceed — no pressure',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-brand-body">
                      <span className="w-4 h-4 bg-brand-navy text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-brand-light-blue rounded-2xl p-8 border border-brand-border">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Message Sent!</h3>
                    <p className="text-brand-body text-sm mb-6 max-w-sm mx-auto">
                      Thank you for contacting SSourcing China. We'll review your inquiry
                      and get back to you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-brand-navy text-sm font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="text-xl font-bold text-brand-dark">Send Your Sourcing Inquiry</h2>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Full Name *</label>
                        <input
                          type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Company Name</label>
                        <input
                          type="text" name="company" value={form.company} onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Email Address *</label>
                        <input
                          type="email" name="email" required value={form.email} onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Country *</label>
                        <input
                          type="text" name="country" required value={form.country} onChange={handleChange}
                          placeholder="Germany"
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1">Service Required *</label>
                      <select
                        name="service" required value={form.service} onChange={handleChange}
                        className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Product Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Product / Category *</label>
                        <input
                          type="text" name="product" required value={form.product} onChange={handleChange}
                          placeholder="e.g. LED lights, office chairs"
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Estimated Quantity</label>
                        <input
                          type="text" name="quantity" value={form.quantity} onChange={handleChange}
                          placeholder="e.g. 500 units / month"
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1">Project Details *</label>
                      <textarea
                        name="message" required value={form.message} onChange={handleChange}
                        rows={5}
                        placeholder="Describe your product requirements, target price, certifications needed, timeline, and any other relevant details..."
                        className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30 focus:border-brand-navy resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary flex items-center justify-center gap-2 w-full py-3.5">
                      <Send className="w-4 h-4" />
                      Send Sourcing Inquiry
                    </button>

                    <p className="text-xs text-brand-muted text-center">
                      Your information is kept confidential. We never share your details with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
