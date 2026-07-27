import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_interest: '',
    quantity: '',
    target_price: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // 1. Insert Sourcing Inquiry
      const { error: inquiryError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData
          }
        });

      if (inquiryError) throw inquiryError;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_interest: '',
        quantity: '',
        target_price: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  const faqs = [
    {
      q: 'What are your sourcing agent fees?',
      a: 'We generally work on a commission basis ranging from 3% to 10% depending on the total order value and complexity of the project. We also offer fixed-fee services for individual factory audits and inspections.'
    },
    {
      q: 'Can you handle small orders?',
      a: 'Yes, we help small businesses and startups. While most factories have an MOQ (Minimum Order Quantity), we help you negotiate or find wholesale suppliers that can accommodate smaller volumes.'
    },
    {
      q: 'Do you provide shipping consolidation?',
      a: 'Absolutely. We can store your goods from multiple suppliers in our warehouse and ship them as a single container or shipment to save you significant logistics costs.'
    },
    {
      q: 'How do you ensure factory quality?',
      a: 'We perform on-site audits before you place orders and multi-stage inspections (during production and pre-shipment) ensuring products meet your approved samples.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Contact Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Contact Us</h1>
              <p className="text-xl text-slate-600 mb-12">
                Have a sourcing project in mind? Fill out the form below or reach out directly. Our team responds to all inquiries within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Headquarters</h3>
                    <p className="text-slate-600">Room 1205, Modern Tower, Futian District,<br />Shenzhen, Guangdong, China 518000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>
                    <p className="text-slate-600">info@ssourcingchina.com</p>
                    <p className="text-slate-600">support@ssourcingchina.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Phone & WhatsApp</h3>
                    <p className="text-slate-600">+86 123 4567 8901</p>
                    <p className="text-slate-600">Mon-Fri: 9:00 AM - 6:00 PM (GMT+8)</p>
                  </div>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {faqs.slice(0, 2).map((faq, i) => (
                    <div key={i}>
                      <h4 className="font-bold text-sm text-slate-800 mb-2">{faq.q}</h4>
                      <p className="text-sm text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Get Your Free Sourcing Quote</h2>
              
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Inquiry Received!</h3>
                  <p className="text-slate-600 mb-8 max-w-sm">
                    Thank you for reaching out. One of our sourcing experts will review your requirements and contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Work Email *</label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="EcoWare Inc."
                      />
                    </div>
                    <div>
                      <label htmlFor="product_interest" className="block text-sm font-bold text-slate-700 mb-2">Product Interest *</label>
                      <input
                        required
                        type="text"
                        id="product_interest"
                        name="product_interest"
                        value={formData.product_interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="e.g. Bamboo Plates"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-bold text-slate-700 mb-2">Est. Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="e.g. 5,000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_price" className="block text-sm font-bold text-slate-700 mb-2">Target Price Per Unit</label>
                      <input
                        type="text"
                        id="target_price"
                        name="target_price"
                        value={formData.target_price}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="e.g. $1.50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Sourcing Requirements *</label>
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Please describe your product specifications, quality requirements, and target timeline..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      {errorMessage}
                    </div>
                  )}

                  <button
                    disabled={status === 'loading'}
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? 'Sending Inquiry...' : 'Submit Inquiry'}
                    <Send className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-slate-400">
                    By submitting this form, you agree to our privacy policy and terms.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20 lg:py-32 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Quick answers to common questions about our sourcing services.</p>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
