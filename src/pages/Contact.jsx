import { useState, useEffect, useRef } from 'react';
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle,
  MessageSquare, HelpCircle, FileText, ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@ssourcingchina.com',
    description: 'We respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+86 20 8888 6666',
    description: 'Mon-Fri, 9:00 AM - 6:00 PM (CST)',
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'Guangzhou, Guangdong, China',
    description: 'Tianhe District, near Canton Fair Complex',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'GMT+8 (China Standard Time)',
    description: 'We accommodate international time zones',
  },
];

const reasons = [
  {
    icon: MessageSquare,
    title: 'Sourcing Inquiry',
    description: 'Looking for a specific product or supplier in China',
  },
  {
    icon: HelpCircle,
    title: 'General Questions',
    description: 'Want to learn more about our services and process',
  },
  {
    icon: FileText,
    title: 'Partnership',
    description: 'Interested in becoming a long-term sourcing partner',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '',
    targetPrice: '',
    message: '',
    reason: 'sourcing',
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.product.trim()) errs.product = 'Please tell us what product you need';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitted');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef}>
      <section className="bg-navy-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tell us about your product and we'll get back to you within 24 hours with a customized sourcing plan
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-2">
              {status === 'submitted' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-navy-600 mb-2">Thank You for Your Inquiry!</h2>
                  <p className="text-gray-600 mb-6">
                    We've received your sourcing request and will get back to you within 24 hours.
                    Our team will review your requirements and prepare a tailored proposal.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setForm({
                        name: '', email: '', phone: '', company: '',
                        product: '', quantity: '', targetPrice: '', message: '',
                        reason: 'sourcing',
                      });
                    }}
                    className="text-navy-600 font-semibold hover:text-gold-500 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I'm contacting you about *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {reasons.map((r) => (
                        <button
                          key={r.title}
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, reason: r.title.toLowerCase().includes('sourcing') ? 'sourcing' : r.title.toLowerCase().includes('question') ? 'question' : 'partnership' }))}
                          className={`flex items-center space-x-3 p-4 rounded-lg border text-left transition-colors ${
                            (r.title === 'Sourcing Inquiry' && form.reason === 'sourcing') ||
                            (r.title === 'General Questions' && form.reason === 'question') ||
                            (r.title === 'Partnership' && form.reason === 'partnership')
                              ? 'border-navy-600 bg-navy-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <r.icon className="w-5 h-5 text-navy-600 flex-shrink-0" />
                          <div>
                            <div className="text-sm font-medium text-navy-600">{r.title}</div>
                            <div className="text-xs text-gray-500">{r.description}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        id="contact-name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="John Smith"
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        id="contact-email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                      <input
                        id="contact-phone" name="phone" type="tel"
                        value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
                        placeholder="+1 555 123 4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                      <input
                        id="contact-company" name="company" type="text"
                        value={form.company} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="contact-product" className="block text-sm font-medium text-gray-700 mb-1">Product You Need *</label>
                      <input
                        id="contact-product" name="product" type="text" required
                        value={form.product} onChange={handleChange}
                        className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none ${errors.product ? 'border-red-400' : 'border-gray-300'}`}
                        placeholder="e.g., LED light fixtures"
                      />
                      {errors.product && <p className="text-xs text-red-500 mt-1">{errors.product}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-quantity" className="block text-sm font-medium text-gray-700 mb-1">Order Quantity</label>
                      <input
                        id="contact-quantity" name="quantity" type="text"
                        value={form.quantity} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
                        placeholder="e.g., 1,000 units/month"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-targetPrice" className="block text-sm font-medium text-gray-700 mb-1">Target Unit Price</label>
                      <input
                        id="contact-targetPrice" name="targetPrice" type="text"
                        value={form.targetPrice} onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none"
                        placeholder="e.g., $5-8 per unit"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                      Product Details & Requirements
                    </label>
                    <textarea
                      id="contact-message" name="message" rows={5}
                      value={form.message} onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 outline-none resize-none"
                      placeholder="Describe your product in detail: specifications, materials, dimensions, certifications required, target market, timeline, and any other relevant information..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors shadow-sm flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Sourcing Inquiry
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-navy-600 mb-4">Contact Information</h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-navy-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-navy-600">{info.title}</div>
                        <div className="text-sm text-gray-700">{info.value}</div>
                        <div className="text-xs text-gray-400">{info.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-gold-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <span>We review your requirements within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-gold-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <span>We schedule a call to discuss your project in detail</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-gold-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <span>We provide a tailored sourcing proposal and quote</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-gold-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <span>We begin the sourcing process upon your approval</span>
                  </li>
                </ol>
              </div>

              <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                <img
                  alt="China sourcing office"
                  data-strk-img-id="contact-office-a1b2c3"
                  data-strk-img="professional China sourcing agent office"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}