import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Globe,
  MessageSquare
} from 'lucide-react';
import { createInquiry } from '../api/inquiries';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    product: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim() || undefined,
        phone: formData.phone.trim() || undefined,
        product_interest: formData.product.trim() || undefined,
        message: formData.message.trim(),
        source_page: 'contact',
      };

      if (formData.country.trim()) {
        payload.message = `${payload.message}\n\nCountry: ${formData.country.trim()}`
      }

      await createInquiry(payload)
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        phone: '',
        product: '',
        message: '',
      })
    } catch (err) {
      setError(err.message || 'Failed to submit inquiry')
      setStatus('error')
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'info@ssourcingchina.com',
      subDetail: 'We respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+86 755 8123 4567',
      subDetail: 'Mon-Fri, 9am-6pm CST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: 'Room 1208, Tower A',
      subDetail: 'Futian District, Shenzhen, China',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      detail: 'Monday - Friday',
      subDetail: '9:00 AM - 6:00 PM (China Standard Time)',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to start your China sourcing project? Get in touch with our team for a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white p-6 rounded-xl shadow-sm border border-slate-200"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600">{item.detail}</p>
                      <p className="text-slate-500 text-sm">{item.subDetail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-600" />
                  Global Reach
                </h3>
                <p className="text-slate-600 text-sm">
                  We work with clients from over 15 countries across North America, Europe, Australia, and Asia. Our team speaks English, Mandarin, and Cantonese.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-4">
                      Your inquiry has been received. Our team will get back to you within 24 hours.
                    </p>
                    <p className="text-sm text-slate-500">
                      For urgent inquiries, please call us at +86 755 8123 4567
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Get a Free Sourcing Quote</h2>
                    <p className="text-slate-600 mb-8">
                      Tell us about your sourcing needs and we'll get back to you with a customized solution.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="Your Company Ltd."
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">
                            Country *
                          </label>
                          <input
                            type="text"
                            id="country"
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            placeholder="United States"
                          />
                        </div>
                        <div>
                          <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                            Product Category *
                          </label>
                          <select
                            id="product"
                            name="product"
                            required
                            value={formData.product}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          >
                            <option value="">Select a category</option>
                            <option value="electronics">Electronics & Components</option>
                            <option value="home-garden">Home & Garden</option>
                            <option value="apparel">Apparel & Textiles</option>
                            <option value="industrial">Industrial Equipment</option>
                            <option value="consumer-goods">Consumer Goods</option>
                            <option value="auto-parts">Auto Parts</option>
                            <option value="health-beauty">Health & Beauty</option>
                            <option value="toys-gifts">Toys & Gifts</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                          Tell Us About Your Needs *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                          placeholder="Describe the products you're looking for, estimated quantities, budget range, and any specific requirements..."
                        />
                      </div>
                      {error && (
                        <p className="text-sm text-red-600" role="alert">{error}</p>
                      )}
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-70"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Location</h2>
            <p className="text-slate-600">
              Based in Shenzhen, China's manufacturing hub, with easy access to major ports and industrial zones.
            </p>
          </div>
          <div className="bg-slate-100 rounded-2xl overflow-hidden border border-slate-200" style={{ height: '400px' }}>
            <div className="w-full h-full flex items-center justify-center bg-slate-200">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 font-medium">Shenzhen, China</p>
                <p className="text-slate-500 text-sm">Room 1208, Tower A, Futian District</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
