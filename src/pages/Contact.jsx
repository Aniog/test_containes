import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2, MessageCircle, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.product.trim()) {
      setErrorMsg('Please fill in your name, email, and product description.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({
      name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '',
    });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-800 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Get in Touch
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Have a product to source? Questions about our services? We are here to help. Reach out and we will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Office Address</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Room 1205, Block A, Fortune Plaza<br />
                        Futian District, Shenzhen 518000<br />
                        Guangdong Province, China
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                      <a href="mailto:info@ssourcingchina.com" className="text-slate-600 text-sm hover:text-primary-500 transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Phone / WhatsApp</h4>
                      <a href="tel:+8613812345678" className="text-slate-600 text-sm hover:text-primary-500 transition-colors">
                        +86 138 1234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Business Hours</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Monday — Friday: 9:00 AM — 6:00 PM (GMT+8)<br />
                        Saturday: 10:00 AM — 2:00 PM (GMT+8)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Connect With Us</h4>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white text-slate-600 transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white text-slate-600 transition-colors" aria-label="WeChat">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Send Us a Message</h2>
                <p className="text-slate-500 text-sm mb-6">
                  Fill out the form below and we will get back to you within 24 hours with a free sourcing assessment.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for reaching out. Our team will review your request and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Product Description <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="product"
                          name="product"
                          type="text"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                          placeholder="e.g. Stainless steel water bottle, 500ml"
                        />
                      </div>
                      <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Estimated Quantity
                        </label>
                        <input
                          id="quantity"
                          name="quantity"
                          type="text"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                          placeholder="e.g. 5,000 units"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Additional Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white resize-none"
                        placeholder="Tell us about your target price, specifications, packaging requirements, delivery timeline, etc."
                      />
                    </div>

                    {errorMsg && (
                      <p className="text-red-600 text-sm">{errorMsg}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
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

      {/* Map placeholder section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="bg-slate-200 rounded-2xl h-80 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-500 font-medium">Shenzhen, China</p>
              <p className="text-slate-400 text-sm mt-1">Futian District, Fortune Plaza</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;