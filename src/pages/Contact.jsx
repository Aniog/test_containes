import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', product: '', quantity: '', timeline: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your inquiry! We will respond within 24 hours.');
    setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', timeline: '', message: '' });
  };

  return (
    <div>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Tell us what you need and our team will respond with a sourcing plan within 24 hours. No commitment required.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Submit Your Sourcing Inquiry</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Product / Category *</label>
                  <input
                    type="text"
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                    placeholder="e.g. LED panels, office chairs"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                    placeholder="e.g. 1,000 units"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Timeline</label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                    placeholder="e.g. Need delivery by October 2026"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Project Details *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none"
                    placeholder="Describe your product requirements, specifications, certifications needed, target price, and any other relevant details."
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-orange text-white px-6 py-3.5 rounded-lg font-semibold text-base hover:bg-orange-dark transition-colors border-none cursor-pointer"
                  >
                    Submit Inquiry — Get Free Quote
                  </button>
                  <p className="text-xs text-slate-500 text-center mt-3">
                    We respond to all inquiries within 24 hours. Your information is kept confidential.
                  </p>
                </div>
              </form>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8 sticky top-24">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Email</p>
                      <p className="text-sm text-slate-600">info@ssourcingchina.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Phone / WhatsApp</p>
                      <p className="text-sm text-slate-600">+86 136 0000 8888</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Office</p>
                      <p className="text-sm text-slate-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Working Hours</p>
                      <p className="text-sm text-slate-600">Mon–Fri, 9:00–18:00 (GMT+8)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Response Time</p>
                      <p className="text-sm text-slate-600">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">What happens next?</h4>
                  <ol className="space-y-2 list-none p-0 m-0">
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-navy text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      We review your requirements
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-navy text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      We send you a sourcing plan and quote
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full bg-navy text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      We begin supplier research upon approval
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
