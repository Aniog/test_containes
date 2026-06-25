import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle,
  ArrowRight, MessageSquare, Globe, Users
} from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Office Address', value: 'Guangzhou, Guangdong, China' },
  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
  { icon: Phone, label: 'Phone', value: '+86 123 4567 8900', href: 'tel:+8612345678900' },
  { icon: Clock, label: 'Business Hours', value: 'Mon - Fri: 9:00 - 18:00 (CST)' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus('success');
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      company: '',
      country: '',
      product: '',
      quantity: '',
      budget: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Ready to start sourcing from China? Fill out the form below and our team will get back to you within 24 hours with a free, no-obligation sourcing proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex gap-12 lg:gap-16">
            {/* Form */}
            <div className="flex-1 mb-10 lg:mb-0">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 md:p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h2>
                  <p className="text-slate-600 mb-6 max-w-md mx-auto">
                    Your inquiry has been received. Our team will review your requirements and get back to you within 24 hours with a free sourcing proposal.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setStatus('idle'); }}
                    className="text-brand-800 font-semibold hover:text-brand-700"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">Country / Region *</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="e.g. USA, UK, Germany"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">Product Description *</label>
                    <input
                      type="text"
                      id="product"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      placeholder="What product(s) are you looking to source?"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">Target Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="e.g. 1,000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">Target Budget</label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                        placeholder="e.g. $10,000 - $20,000"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Additional Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-y"
                      placeholder="Share any specific requirements, certifications needed, quality standards, timeline, or other details..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 disabled:bg-accent-300 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors"
                  >
                    {status === 'submitting' ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Get a Free Sourcing Quote
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-slate-400">* Required fields. We will never share your information.</p>
                </form>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:w-96 shrink-0">
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-8 sticky top-24 space-y-6">
                <h3 className="font-semibold text-slate-900 text-lg">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-brand-700 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-slate-900 hover:text-brand-800 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-900">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Why Work With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      Free initial consultation
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      Transparent pricing with no hidden fees
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      Response within 24 hours
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      Dedicated account manager
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      Bilingual support (English & Chinese)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}