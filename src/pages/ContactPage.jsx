import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Globe, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product: '',
    quantity: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.product.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', company: '', country: '', phone: '', product: '', quantity: '', budget: '', timeline: '', message: '' });
    } catch (err) {
      setError('Failed to submit inquiry. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-24 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Inquiry Received!</h2>
          <p className="text-lg text-slate-600 mb-8">
            Thank you for your inquiry. Our team will review your requirements and respond within 24 hours.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</span>
            <h1 id="contact-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch with Our Sourcing Team
            </h1>
            <p id="contact-hero-subtitle" className="text-lg text-slate-300 leading-relaxed mb-8">
              Tell us about your sourcing needs, and we will provide a free consultation and sourcing plan within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-blue-700 hover:text-blue-800 transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Phone / WhatsApp</h3>
                    <p className="text-slate-600">+86 755 8888 6666</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Office</h3>
                    <p className="text-slate-600">Shenzhen, Guangdong, China</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
                    <p className="text-sm text-slate-500 mt-1">We respond to all inquiries within 24 hours.</p>
                  </div>
                </div>
              </div>

              {/* Why contact us */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    'Free sourcing consultation',
                    'Response within 24 hours',
                    'No obligation quote',
                    'Experienced bilingual team',
                    'Transparent pricing',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Request a Free Sourcing Quote</h2>
                <p className="text-slate-600 mb-6">Fill out the form below and we will get back to you with a detailed sourcing plan.</p>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-country" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Country
                      </label>
                      <input
                        id="contact-country"
                        name="country"
                        type="text"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-product" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Product <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-product"
                        name="product"
                        type="text"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        placeholder="What product do you need?"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-5 mb-5">
                    <div>
                      <label htmlFor="contact-quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        id="contact-quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 1000 units"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-budget" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Budget Range
                      </label>
                      <input
                        id="contact-budget"
                        name="budget"
                        type="text"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="e.g., $10,000 - $50,000"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-timeline" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Timeline
                      </label>
                      <input
                        id="contact-timeline"
                        name="timeline"
                        type="text"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="e.g., 2 months"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your requirements, quality standards, target price, specifications, or any questions you have."
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-slate-500 mt-4">
                    We will respond within 24 hours. Your information is kept confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication channels */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-lg text-slate-600">
              Choose the communication channel that works best for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Mail, title: 'Email', desc: 'info@ssourcingchina.com', sub: 'Best for detailed inquiries' },
              { icon: Phone, title: 'Phone / WhatsApp', desc: '+86 755 8888 6666', sub: 'Quick questions and calls' },
              { icon: MessageSquare, title: 'WeChat', desc: 'ssourcingchina', sub: 'Popular for China business' },
              { icon: Globe, title: 'Online Form', desc: 'This page', sub: 'Submit anytime, 24/7' },
            ].map((channel, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-6 h-6 text-blue-700" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{channel.title}</h3>
                <p className="text-sm text-blue-700 font-medium mb-1">{channel.desc}</p>
                <p className="text-xs text-slate-500">{channel.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
