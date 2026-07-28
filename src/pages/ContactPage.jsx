import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Globe, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    service: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(false);
  };

  if (submitted) {
    return (
      <div className="bg-white">
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-custom max-w-2xl">
            <div className="card text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
              <p className="text-slate-600 mb-6">
                Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
              </p>
              <Link to="/" className="btn-primary">
                Back to Homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-slate-300">
              Have a sourcing question or ready to start a project? Get in touch and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-orange-600 transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone / WhatsApp</h3>
                    <a href="tel:+8675512345678" className="text-slate-600 hover:text-orange-600 transition-colors">
                      +86 755 1234 5678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
                    <p className="text-slate-600">
                      Room 1201, Building A<br />
                      Nanshan District<br />
                      Shenzhen, Guangdong, China
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)<br />
                      Saturday: 9:00 AM - 1:00 PM (CST)
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-3">Quick Contact Options</h3>
                <div className="space-y-3">
                  <a href="https://wa.me/8675512345678" className="flex items-center gap-3 text-slate-700 hover:text-green-600 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                  <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-700 text-sm">Please fill in all required fields.</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-country" className="block text-sm font-medium text-slate-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        id="contact-country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="text"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-sm font-medium text-slate-700 mb-1">
                        Service Needed
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900 bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="sourcing">Supplier Sourcing</option>
                        <option value="verification">Factory Verification</option>
                        <option value="inspection">Quality Inspection</option>
                        <option value="monitoring">Production Monitoring</option>
                        <option value="shipping">Shipping Coordination</option>
                        <option value="full">Full Sourcing Service</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-product" className="block text-sm font-medium text-slate-700 mb-1">
                        Product You Need
                      </label>
                      <input
                        type="text"
                        id="contact-product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                        placeholder="e.g., Custom Bluetooth Speakers"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-quantity" className="block text-sm font-medium text-slate-700 mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="contact-quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900"
                        placeholder="e.g., 5,000 units"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors text-slate-900 resize-none"
                      placeholder="Tell us about your requirements, timeline, and any specific questions..."
                      required
                    />
                  </div>
                  
                  <button type="submit" className="btn-primary">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                  
                  <p className="text-xs text-slate-500">
                    We respect your privacy. Your information will only be used to respond to your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
